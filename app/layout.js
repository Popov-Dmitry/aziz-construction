import { Open_Sans, Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import { joinClassNames } from "@/utils/join-class-names";

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

export const metadata = {
  title: "Aziz Construction"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={joinClassNames(inter.variable, openSans.variable)}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
