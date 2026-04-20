import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll";
import SmokeEffect from "@/components/SmokeEffect";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "LOOFIDEV | Potenciando el Futuro Digital",
  description: "Transformamos ideas complejas en soluciones tecnológicas escalables, eficientes y a medida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">
        <SmokeEffect />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
