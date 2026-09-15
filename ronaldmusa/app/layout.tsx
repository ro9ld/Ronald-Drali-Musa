import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ronaldmusa.com"),
  title: "Ronald Musa — Videography & Photography",
  description:
    "Videography and photography by Ronald Musa. Melbourne-based visual content creator.",
  alternates: {
    canonical: "https://ronaldmusa.com",
  },
  icons: {
    icon: "/r-mark-white.png",
    apple: "/r-mark-white.png",
  },
  openGraph: {
    title: "Ronald Musa — Videography & Photography",
    description:
      "Videography and photography by Ronald Musa. Melbourne-based visual content creator.",
    url: "https://ronaldmusa.com",
    siteName: "Ronald Musa",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ronald Musa — Videography & Photography",
    description:
      "Videography and photography by Ronald Musa. Melbourne-based visual content creator.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-black text-offwhite">
        {children}
      </body>
    </html>
  );
}
