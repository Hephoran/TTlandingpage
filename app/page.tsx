'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const HERO_IMAGES = [
  '/assets/photos/25AL3-2372.JPG',
  '/assets/photos/25AL3-4497.JPG',
  '/assets/photos/25AY-1912.JPG',
  '/assets/photos/25AY-3915.JPG',
  '/assets/photos/25AY-3935.JPG',
  '/assets/photos/25AY-3950.JPG',
];

export default function Home() {
  const [heroImage, setHeroImage] = useState(HERO_IMAGES[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * HERO_IMAGES.length);
    setHeroImage(HERO_IMAGES[randomIndex]);
  }, []);

  return (
    <div className="bg-background text-foreground selection:bg-accent/30 min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-mono text-xl flex items-center gap-2">
            Track<span className="text-accent font-bold">Tutor</span>
          </div>
          <div className="flex gap-6 items-center">
            <a href="#features" className="text-sm font-medium hover:text-accent transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-accent transition-colors">Process</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center p-8 md:p-24 overflow-hidden pt-32">
          {/* Hero Background Image */}
          <div className="absolute inset-0 z-0 opacity-10 grayscale hover:grayscale-0 transition-opacity duration-1000">
            <Image
              src={heroImage}
              alt="Motorcycle racing action on track - TrackTutor virtual race engineer"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background" />
          </div>

          <div className="relative flex flex-col items-center justify-center z-10 text-center">
            <div className="mb-6 px-4 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest animate-pulse">
              Coming Spring 2026
            </div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6">
              Your own <span className="text-accent">virtual race engineer</span>
            </h1>
            <p className="text-xl md:text-3xl text-muted max-w-3xl mb-12 font-medium">
              You ride your ride, we provide insight. Professional track data analysis for every rider.
            </p>
          </div>

          {/* Scrolling Indicator */}
          <div className="absolute bottom-10 animate-bounce">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </div>
        </section>

        {/* Features Preview (Pillars) */}
        <section id="features" className="py-32 px-6 bg-sidebar/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Master Every Apex</h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                TrackTutor combines advanced processing with professional racing logic to transform your raw telemetry into actionable insights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-custom bg-card border border-border hover:border-accent/40 transition-colors group">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Automated Analysis</h3>
                <p className="text-muted">Our algorithms automatically segment your laps, identifying every corner and straight without manual labeling. Focus on riding, not spreadsheets.</p>
              </div>

              <div className="p-8 rounded-custom bg-card border border-border hover:border-accent/40 transition-colors group">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Ghost Comparison</h3>
                <p className="text-muted">Compare your racing lines, braking points, and lean angles against your Personal Best or your fastest friends. Find exactly where you're losing time.</p>
              </div>

              <div className="p-8 rounded-custom bg-card border border-border hover:border-accent/40 transition-colors group">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Digital Garage</h3>
                <p className="text-muted">Track component wear automatically. Know exactly how many laps your tires have left and get maintenance reminders for your specific bike.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Proof Section (Data) */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Data that <span className="text-accent">speaks human</span></h2>
              <p className="text-lg text-muted mb-8">
                Raw data is overwhelming. TrackTutor simplifies it into intuitive visualizations. No need to be a data scientist to understand why you're faster in Turn 4 today than you were yesterday.
              </p>
              <ul className="space-y-4 font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center text-accent">✓</div>
                  Precise GPS line overlays
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center text-accent">✓</div>
                  Lean angle & suspension traces
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center text-accent">✓</div>
                  Sector-by-sector time delta
                </li>
              </ul>
            </div>
            <div className="flex-1 relative w-full aspect-video rounded-custom overflow-hidden border border-border shadow-2xl">
              <Image
                src="/assets/telemetry_viz.jpg"
                alt="TrackTutor telemetry visualization and data analysis charts"
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-background to-transparent" />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-32 px-6 bg-sidebar/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center">The Path to Faster Laps</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-[2px] bg-border z-0" />

              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-sidebar border-4 border-accent flex items-center justify-center text-2xl font-bold mb-6">1</div>
                <h4 className="text-xl font-bold mb-2">Upload</h4>
                <p className="text-sm text-muted">Upload your CSV from any standard logger.</p>
              </div>

              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-sidebar border-4 border-accent flex items-center justify-center text-2xl font-bold mb-6">2</div>
                <h4 className="text-xl font-bold mb-2">Processing</h4>
                <p className="text-sm text-muted">Our algorithms segment your laps and calculate metrics.</p>
              </div>

              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-sidebar border-4 border-accent flex items-center justify-center text-2xl font-bold mb-6">3</div>
                <h4 className="text-xl font-bold mb-2">Visualize</h4>
                <p className="text-sm text-muted">Explore your data on realistic track maps.</p>
              </div>

              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-sidebar border-4 border-accent flex items-center justify-center text-2xl font-bold mb-6">4</div>
                <h4 className="text-xl font-bold mb-2">Improve</h4>
                <p className="text-sm text-muted">Apply insights and crush your personal best.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Global Track Support Preview */}
        <section className="py-32 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
            <div className="flex-1 relative w-full aspect-square md:aspect-video rounded-custom overflow-hidden border border-border bg-card">
              <Image
                src="/assets/maps/map_real.png"
                alt="High-resolution realistic track map for rider line analysis"
                fill
                className="object-cover opacity-60 grayscale-[50%]"
              />
              <div className="absolute inset-0 bg-radial-to-c from-transparent to-background/80" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Every track. <span className="text-accent">Anywhere.</span></h2>
              <p className="text-lg text-muted mb-8">
                Supporting over 50,000 track layouts globally. From local short tracks to world-class Grand Prix circuits, TrackTutor has the map data to match your ride.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-sidebar border border-border rounded-lg text-xs font-mono">TT Circuit Assen</span>
                <span className="px-4 py-2 bg-sidebar border border-border rounded-lg text-xs font-mono">Laguna Seca</span>
                <span className="px-4 py-2 bg-sidebar border border-border rounded-lg text-xs font-mono">Silverstone</span>
                <span className="px-4 py-2 bg-sidebar border border-border rounded-lg text-xs font-mono">Zolder</span>
                <span className="px-4 py-2 bg-sidebar border border-border rounded-lg text-xs font-mono">...+49,996 more</span>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-40 px-6 text-center bg-linear-to-b from-sidebar to-background">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Coming Soon</h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            We're building the future of rider development. Stay tuned.
          </p>
        </section>
      </main>

      <footer className="w-full py-16 px-6 border-t border-border mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="font-mono text-xl flex items-center gap-2 mb-6">
              Track<span className="text-accent font-bold">Tutor</span>
            </div>
            <p className="text-muted max-w-xs mb-8">
              Empowering riders through data. Amateur racers and track day enthusiasts simplified tools for professional results.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li><a href="#features" className="hover:text-accent transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-accent transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Integration</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="mailto:info@tracktutor.app" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted">
          <p>&copy; 2026 TrackTutor. All rights reserved.</p>
          <div className="flex gap-8">
            <span>Built by riders, for riders.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
