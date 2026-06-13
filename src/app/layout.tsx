import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brij Singla | Senior Full-Stack Developer | Web Development Services",
  description:
    "Senior Full-Stack Developer with 6+ years of experience building scalable, high-performance web applications. Specializing in React, Next.js, Angular, and Node.js. Let's build your next project together.",
  keywords: [
    "web developer",
    "full-stack developer",
    "React developer",
    "Next.js developer",
    "freelance developer",
    "website development",
    "frontend developer",
    "Brij Singla",
  ],
  openGraph: {
    title: "Brij Singla | Senior Full-Stack Developer",
    description:
      "6+ years of experience building scalable web applications. Let's bring your vision to life.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brij Singla | Senior Full-Stack Developer",
    description:
      "6+ years of experience building scalable web applications. Let's bring your vision to life.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-dark-900 text-slate-200 antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
