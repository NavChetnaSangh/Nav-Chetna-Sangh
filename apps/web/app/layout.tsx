import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://navchetnasangh.org";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Nav Chetna Sangh Charitable Trust — Empowering Lives in Ranchi",
    template: "%s | Nav Chetna Sangh Charitable Trust",
  },
  description:
    "Nav Chetna Sangh Charitable Trust is an NGO in Ranchi, Jharkhand working for women's empowerment, child nutrition, transgender inclusion, elderly care, and community welfare. Donate to make a difference.",
  keywords: [
    "NGO Ranchi",
    "charity Jharkhand",
    "women empowerment NGO India",
    "child nutrition NGO",
    "Nav Chetna Sangh",
    "donate NGO India",
    "social welfare Ranchi",
    "transgender support NGO",
    "elderly care NGO",
    "80G tax exemption donation India",
  ],
  authors: [{ name: "Nav Chetna Sangh Charitable Trust" }],
  creator: "Nav Chetna Sangh Charitable Trust",
  publisher: "Nav Chetna Sangh Charitable Trust",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Nav Chetna Sangh Charitable Trust — Empowering Lives",
    description:
      "An NGO in Ranchi, Jharkhand empowering women, nourishing children, supporting transgender communities & elderly. Donate today — 80G tax benefit available.",
    url: BASE_URL,
    siteName: "Nav Chetna Sangh Charitable Trust",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Nav Chetna Sangh Charitable Trust — Empowering Lives in Ranchi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nav Chetna Sangh Charitable Trust",
    description:
      "NGO in Ranchi working for women, children, transgender communities & elderly. Donate today.",
    images: ["/images/og-image.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Nav Chetna Sangh Charitable Trust",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.jpeg`,
  description:
    "An NGO in Ranchi, Jharkhand working for women's empowerment, child nutrition, transgender inclusion, and community welfare.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Leela Kutir, Shukla Colony, Near Anand Lok, Hinoo",
    addressLocality: "Ranchi",
    addressRegion: "Jharkhand",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-96938-13190",
    contactType: "customer support",
    email: "navchetnasanghcharitabletrust@gmail.com",
  },
  sameAs: [
    "https://www.facebook.com/share/18zfcCar39/",
    "https://www.instagram.com/nav_chetna_sangh_trust",
    "https://youtube.com/@navchetnasanghcharitabletrust",
  ],
  foundingDate: "2025",
  areaServed: "Jharkhand, India",
  nonprofitStatus: "Nonprofit501c3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
