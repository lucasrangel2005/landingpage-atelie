import "./globals.css";
import type { Metadata } from "next";
import { Quicksand, Libre_Baskerville, Poppins } from "next/font/google";

const body = Quicksand({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "600", "700"] });
const display = Libre_Baskerville({ subsets: ["latin"], variable: "--font-display", weight: ["400", "700"] });
const heading = Poppins({ subsets: ["latin"], variable: "--font-heading", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Ateliê Infantil | Landing Page",
  description: "Base de landing page clean e moderna para ateliê infantil com CTA para WhatsApp.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${body.variable} ${display.variable} ${heading.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
