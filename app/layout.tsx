import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kaden Condie | Cinematic Director & Filmmaker",
    template: "%s | Kaden Condie"
  },
  description:
    "Cinematic portfolio for narrative film and commercial direction, built around story, emotion, and premium client delivery.",
  metadataBase: new URL("https://example.vercel.app")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
