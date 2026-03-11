import type { Metadata, Viewport } from "next";

import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { siteMetadata } from "@/lib/site";

export const metadata: Metadata = siteMetadata;
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070816"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
