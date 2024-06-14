import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jose Rodriguez",
  description: "Portfolio of some of my personal projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="aqua">
      <head>
        <link rel="UW icon" href="/Washington_Huskies_logo.svg"></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
