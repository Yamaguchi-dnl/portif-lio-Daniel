import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Daniel Yamaguchi — Designer Gráfico & Estrategista Digital",
  description:
    "Transformo negócios em marcas que as pessoas não conseguem ignorar. Identidade visual, web design e estratégia digital com foco em resultado.",
  keywords: [
    "designer gráfico",
    "identidade visual",
    "web design",
    "branding",
    "estratégia digital",
    "ui/ux",
    "Daniel Yamaguchi",
  ],
  authors: [{ name: "Daniel Yamaguchi" }],
  openGraph: {
    title: "Daniel Yamaguchi — Designer Gráfico & Estrategista Digital",
    description:
      "Transformo negócios em marcas que as pessoas não conseguem ignorar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
