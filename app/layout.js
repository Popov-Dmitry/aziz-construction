import { Open_Sans, Inter, Roboto, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import { joinClassNames } from "@/utils/join-class-names";
import Footer from "@/components/footer/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap"
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap"
});

const popins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
  variable: "--font-popins",
  display: "swap"
});

export const metadata = {
  title: "General Contractor in San Francisco Bay Area, CA | Aziz Construction",
  description: "Looking for the best general contracting services in San Francisco bay area? Look no further than Aziz Construction. Contact us today for a free quote!",
  generator: "Next.js",
  viewport: {
    width: "device-width",
    initialScale: 1
  },
  verification: {
    google: "zOKY0pg-U3kuXV6RL2XaSKxAanNv4lg1RhkaMsTwe9k"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    title: "General Contractor in San Francisco Bay Area, CA | Aziz Construction",
    description: "Looking for the best general contracting services in San Francisco bay area? Look no further than Aziz Construction. Contact us today for a free quote!",
    url: "https://azizconstruction.com/",
    siteName: "Aziz Construction",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "General Contractor in San Francisco Bay Area, CA | Aziz Construction",
    description: "Looking for the best general contracting services in San Francisco bay area? Look no further than Aziz Construction. Contact us today for a free quote!"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" href="/image/lOGO-01-80x80.png" sizes="32x32" />
      <link rel="icon" href="/image/lOGO-01.png" sizes="192x192" />
      <link rel="apple-touch-icon" href="/image/lOGO-01.png" />
    </head>
    <body className={joinClassNames(inter.variable, openSans.variable, roboto.variable, popins.variable)}>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
    </body>
    <GoogleAnalytics gaId={process.env.GA_ID} />
    </html>
  );
}
