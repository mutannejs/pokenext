import { Inter } from "next/font/google";

import "@/styles/globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "PokeNext",
    template: "%s | PokeNext"
  },
  description: "Pokedex feito utilizando Next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="main-container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
