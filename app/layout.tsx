import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400","500","600","700"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chetan CreativeMind | AI-Powered Creative Agency",
  description: "We create innovative AI videos, branding, and marketing strategies. Let’s build your brand together with creativity + technology.",
  openGraph: {
    title: "Chetan CreativeMind | AI-Powered Creative Agency",
    description: "We create innovative AI videos, branding, and marketing strategies. Let’s build your brand together with creativity + technology.",
    url: "https://your-domain.com",
    siteName: "Chetan CreativeMind",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  icons: { icon: "/icon.svg" },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
