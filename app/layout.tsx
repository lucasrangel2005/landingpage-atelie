import "./globals.css";
import type { Metadata } from "next";
import { Quicksand, Rozha_One } from "next/font/google";

const body = Quicksand({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "600", "700"] });
const display = Rozha_One({ subsets: ["latin"], variable: "--font-display", weight: ["400"] });

export const metadata: Metadata = {
  title: "Ateliê Infantil | Landing Page",
  description: "Base de landing page clean e moderna para ateliê infantil com CTA para WhatsApp.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${body.variable} ${display.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
