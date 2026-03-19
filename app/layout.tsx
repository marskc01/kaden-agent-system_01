import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaden Condie | Cinematic Portfolio",
  description:
    "A cinematic portfolio for narrative film and commercial directing work, built with Next.js and tailored for Vercel deployment."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
