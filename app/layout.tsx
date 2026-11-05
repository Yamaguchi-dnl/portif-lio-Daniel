import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

const SITE_URL = "https://www.danielyamaguchi.com.br";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Daniel Yamaguchi",
      jobTitle: "Designer Gráfico & Estrategista Digital",
      url: SITE_URL,
      image: `${SITE_URL}/logo-daniel.webp`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Curitiba",
        addressRegion: "PR",
        addressCountry: "BR",
      },
      sameAs: ["https://www.instagram.com/yamaguchi.dnl/"],
      knowsAbout: [
        "Identidade visual",
        "Web design",
        "UI/UX",
        "Social media design",
        "Estratégia digital",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Daniel Yamaguchi",
      inLanguage: "pt-BR",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Daniel Yamaguchi — Design & Estratégia Digital",
      url: SITE_URL,
      provider: { "@id": `${SITE_URL}/#person` },
      areaServed: "BR",
      availableLanguage: "pt-BR",
      serviceType: [
        "Identidade Visual & UI Design",
        "Estratégia Digital",
        "Social Media Design",
        "Web Design",
      ],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
    types: { "text/markdown": "/llms.txt" },
  },
  robots: { index: true, follow: true },
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
    url: SITE_URL,
    locale: "pt_BR",
    siteName: "Daniel Yamaguchi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body suppressHydrationWarning={true}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
