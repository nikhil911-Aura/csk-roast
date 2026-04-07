import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: "Five Trophies. Zero Knees. — A CSK Roast",
  description:
    "A premium, savagely affectionate cinematic roast of CSK. Three.js, GSAP, framer-motion, and a lot of cope.",
  openGraph: {
    title: "Five Trophies. Zero Knees.",
    description: "The most premium CSK roast on the internet.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-display antialiased overflow-x-hidden md:cursor-none">
        <SmoothScroll />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
