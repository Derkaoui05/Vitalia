import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Centre Dentaire VITALIA Tanger | Cabinet Dentaire Premium",
    template: "%s | Centre Dentaire VITALIA"
  },
  description: "Centre Dentaire VITALIA à Tanger. Espace moderne dédié à la santé et à l'esthétique de votre sourire. Équipe de dentistes qualifiés, soins complets, implants, orthodontie, esthétique et urgences 24h/24 et 7j/7.",
  keywords: ["centre dentaire tanger", "dentiste tanger", "implants dentaires tanger", "orthodontie tanger", "urgences dentaires tanger", "blanchiment dentaire tanger", "vitalia tanger", "dentiste maroc"],
  authors: [{ name: "Centre Dentaire VITALIA" }],
  creator: "Centre Dentaire VITALIA",
  publisher: "Centre Dentaire VITALIA",
  formatDetection: {
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.dentairevitalia.ma",
    title: "Centre Dentaire VITALIA Tanger | Soins & Esthétique Dentaire",
    description: "Espace moderne dédié à la santé et à l'esthétique de votre sourire à Tanger. Soins haut de gamme, implants, orthodontie, esthétique et urgences dentaires 24h/24.",
    siteName: "Centre Dentaire VITALIA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Centre Dentaire VITALIA Tanger",
    description: "Cabinet dentaire premium à Tanger. Soins complets et urgences 24h/24.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${jakarta.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased bg-cream text-charcoal">
        {children}
      </body>
    </html>
  );
}
