import type { Metadata } from "next";
import { Inter, Bebas_Neue, Newsreader, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Fontes para o Design Editorial/Dados
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });
const newsreader = Newsreader({ weight: "400", style: "italic", subsets: ["latin"], variable: "--font-serif" });

// Fontes padrão do Next.js (Geist)
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "João Vitor Patheis ",
  description: "Portfólio de projetos e insights estratégicos desenvolvido em Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`
          ${inter.variable} 
          ${bebas.variable} 
          ${newsreader.variable} 
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased font-sans
        `}
      >
        {children}
      </body>
    </html>
  );
}