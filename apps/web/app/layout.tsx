import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nav Chetna Sangh Charitable Trust — Empowering Lives",
  description:
    "Nav Chetna Sangh Charitable Trust works for women's empowerment, child nutrition, transgender inclusion, and community welfare. Founded by Sweta Singh.",
  keywords: [
    "charity",
    "NGO",
    "women empowerment",
    "child nutrition",
    "India",
    "Nav Chetna",
    "social welfare",
    "donate",
  ],
  openGraph: {
    title: "Nav Chetna Sangh Charitable Trust",
    description:
      "Empowering women, nourishing children, and uplifting communities since 2025.",
    type: "website",
  },
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
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
