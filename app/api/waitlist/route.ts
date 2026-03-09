import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { z } from 'zod';

const WAITLIST_FILE = path.join(process.cwd(), 'waitlist.json');

// Simple Memory Rate Limiter (Note: In serverless, use Redis/Upstash)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5; // 5 requests per minute per IP

const emailSchema = z.object({
  email: z.string().email().max(255),
  honeypot: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') || 'anonymous';
    const now = Date.now();

    // 1. Rate Limiting
    const rateData = rateLimitMap.get(ip) || { count: 0, lastReset: now };
    if (now - rateData.lastReset > RATE_LIMIT_WINDOW) {
      rateData.count = 0;
      rateData.lastReset = now;
    }

    if (rateData.count >= MAX_REQUESTS) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    rateData.count++;
    rateLimitMap.set(ip, rateData);

    // 2. Body Parsing & Honeypot Check
    const body = await req.json();
    const result = emailSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }

    if (result.data.honeypot) {
      // Bot detected - silently fail with success or specialized error
      console.log('Bot submission detected via honeypot');
      return NextResponse.json({ success: true, message: 'Waitlist updated' });
    }

    const { email } = result.data;

    // 3. File Operations
    let waitlist = [];
    if (fs.existsSync(WAITLIST_FILE)) {
      const data = fs.readFileSync(WAITLIST_FILE, 'utf8');
      waitlist = JSON.parse(data);
    }

    if (waitlist.some((entry: any) => entry.email === email)) {
      return NextResponse.json({ message: 'Already on the waitlist!' });
    }

    waitlist.push({ email, timestamp: new Date().toISOString(), ip: maskIp(ip) });
    fs.writeFileSync(WAITLIST_FILE, JSON.stringify(waitlist, null, 2));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Waitlist error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

function maskIp(ip: string) {
  return ip.replace(/\.\d+$/, '.xxx'); // Basic privacy mask
}
