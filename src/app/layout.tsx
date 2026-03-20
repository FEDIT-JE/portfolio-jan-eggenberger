import type { Metadata } from "next";
import { Inter, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import { ScrollReveal } from "@/components/portfolio/ScrollReveal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jan-eggenberger.com"),
  title: "Jan Eggenberger",
  description:
    "Software engineer from Switzerland crafting clean .NET systems by day and full-stack products with Next.js and Supabase by night.",
  openGraph: {
    title: "Jan Eggenberger",
    description:
      "Software engineer from Switzerland crafting clean .NET systems by day and full-stack products with Next.js and Supabase by night.",
    url: "https://jan-eggenberger.com",
    siteName: "Jan Eggenberger",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceCodePro.variable}`} style={{ background: "#0B0F1A", colorScheme: "dark" }}>
      <body className="bg-[#0B0F1A] text-white antialiased">
        <LanguageProvider>
          <ScrollReveal />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
