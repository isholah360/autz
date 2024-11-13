import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";


import Header from "../components/Layout/Header";
import { LanguageProvider } from "@/components/context/language-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
        <Navbar />
        <Header />
        {children}
        <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
