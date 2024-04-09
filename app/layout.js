import { Open_Sans, Inter, Roboto, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import { joinClassNames } from "@/utils/join-class-names";
import Footer from "@/components/footer/Footer";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans"
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto"
});

const popins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
  variable: "--font-popins"
});

export const metadata = {
  title: "Aziz Construction"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={joinClassNames(inter.variable, openSans.variable, roboto.variable, popins.variable)}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
      <Script src="https://kit.fontawesome.com/a076d05399.js" crossOrigin="anonymous" />
    </html>
  );
}
