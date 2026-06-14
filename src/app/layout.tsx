import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import ThemeProvider from "@/components/ThemeProvider";
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
    "hire React developer",
    "freelance web developer India",
    "Next.js freelancer",
    "web app development services",
  ],
  metadataBase: new URL("https://brijsingla.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Brij Singla | Senior Full-Stack Developer",
    description:
      "6+ years of experience building scalable web applications. Let's bring your vision to life.",
    type: "website",
    locale: "en_US",
    siteName: "Brij Singla - Web Developer",
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
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Brij Singla - Web Development Services",
  description:
    "Senior Full-Stack Developer offering web application development, e-commerce solutions, performance optimization, and technical consulting.",
  url: "https://brijsingla.dev",
  telephone: "+917018289620",
  email: "brijnandan9711@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gurugram",
    addressCountry: "IN",
  },
  founder: {
    "@type": "Person",
    name: "Brij Singla",
    jobTitle: "Senior Full-Stack Developer",
    knowsAbout: [
      "React",
      "Next.js",
      "Angular",
      "TypeScript",
      "Node.js",
      "Web Performance Optimization",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Majid Al Futtaim",
    },
  },
  serviceType: [
    "Web Application Development",
    "E-Commerce Development",
    "Performance Optimization",
    "UI/UX Development",
    "API Development",
    "Technical Consulting",
  ],
  areaServed: "Worldwide",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme) {
                    document.documentElement.setAttribute('data-theme', theme);
                  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
