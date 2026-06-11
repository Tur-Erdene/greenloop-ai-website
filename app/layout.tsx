import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GreenLoop AI — Дахин боловсруулалтын ирээдүй",
  description: "Монголын анхны AI-driven дахин боловсруулалтын систем",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn">
      <body className="antialiased bg-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
