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
      <body className="antialiased bg-slate-900 min-h-screen text-white">
        {children}
      </body>
    </html>
  );
}
