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
  title: "Loofi Dev | Desarrollo Web",
  description: "Transformamos ideas complejas en soluciones tecnológicas escalables, eficientes y a medida.",
  icons: {
    icon: "/logo_oficial.jpeg",
  }
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
