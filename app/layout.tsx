import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://priyanshuprajapati.me'),
  title: {
    default: "Priyanshu Prajapati | Software Developer | Portfolio",
    template: "%s | Priyanshu Prajapati"
  },
  description: "Portfolio of Priyanshu Prajapati, a skilled Software Developer specializing in web development, full-stack applications, and modern technologies. View projects and contact information.",
  keywords: [
    "Priyanshu Prajapati",
    "Software Developer",
    "Web Developer",
    "Full Stack Developer",
    "Portfolio",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer"
  ],
  authors: [{ name: "Priyanshu Prajapati" }],
  creator: "Priyanshu Prajapati",
  publisher: "Priyanshu Prajapati",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/Favicon.ico",
        type: "image/x-icon",
        sizes: "32x32",
      },
      {
        url: "/Favicon.png",
        type: "image/png",
        sizes: "16x16"
      }
    ],
    apple: "/Favicon.png",
    shortcut: "/Favicon.png"
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://priyanshuprajapati.me',
    siteName: 'Priyanshu Prajapati Portfolio',
    title: 'Priyanshu Prajapati | Software Developer | Portfolio',
    description: 'Portfolio of Priyanshu Prajapati, a skilled Software Developer specializing in web development, full-stack applications, and modern technologies.',
    images: [
      {
        url: '/og-image.png', // You'll need to create this image (1200x630px)
        width: 1200,
        height: 630,
        alt: 'Priyanshu Prajapati - Software Developer',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Priyanshu Prajapati | Software Developer | Portfolio',
    description: 'Portfolio of Priyanshu Prajapati, a skilled Software Developer specializing in web development, full-stack applications, and modern technologies.',
    images: ['/og-image.png'], // Same image as OG
    creator: '@priyanshu', // Replace with actual Twitter handle
  },
  alternates: {
    canonical: 'https://priyanshuprajapati.me',
  },
  verification: {
    google: 'your-google-verification-code', // Add after creating Google Search Console property
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data for SEO
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Priyanshu Prajapati",
    "url": "https://priyanshuprajapati.me",
    "image": "https://priyanshuprajapati.me/profile.jpg", // Add your profile image
    "jobTitle": "Software Developer",
    "description": "Skilled Software Developer specializing in web development, full-stack applications, and modern technologies.",
    "sameAs": [
      // Add your actual social media profiles
      "https://github.com/priyanshu",
      "https://linkedin.com/in/priyanshu-prajapati",
      "https://twitter.com/priyanshu",
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "Your University" // Add your university
    },
    "knowsAbout": [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Web Development",
      "Full Stack Development"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Priyanshu Prajapati Portfolio",
    "url": "https://priyanshuprajapati.me",
    "description": "Portfolio website of Priyanshu Prajapati, Software Developer",
    "author": {
      "@type": "Person",
      "name": "Priyanshu Prajapati"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://priyanshuprajapati.me/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for faster external resource loading */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Favicon links (removing className as it's not valid HTML) */}
        <link rel="icon" type="image/x-icon" sizes="32x32" href="/Favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/Favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Favicon.png" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
