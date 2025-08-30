import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Priyanshu Prajapati",
  description: "Portfolio of Priyanshu Prajapati, a Software Developer.",
  icons: {
    icon: [
      {
        url: "/Favicon.ico",
        type: "image/png",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon.png"
          className="w-8 h-8" // CSS classes for resizing
        />
        <link
          rel="icon" 
          type="image/png"
          sizes="16x16"
          href="/favicon.png"
          className="w-4 h-4" // CSS classes for smaller size
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon.png"
          className="w-12 h-12" // CSS classes for Apple touch icon
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
