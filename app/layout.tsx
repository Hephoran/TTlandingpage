import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tracktutor.app"),
  title: "TrackTutor | Your Virtual Race Engineer",
  description: "Transform your raw telemetry into actionable insights. Professional track data analysis for every rider. Coming Spring 2026.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "TrackTutor | Your Virtual Race Engineer",
    description: "Professional track data analysis for every rider. Transform raw telemetry into actionable insights.",
    url: "https://tracktutor.app",
    siteName: "TrackTutor",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrackTutor | Your Virtual Race Engineer",
    description: "Professional track data analysis for every rider. Transform raw telemetry into actionable insights.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
