import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Georama, Plus_Jakarta_Sans } from "next/font/google";

const georama = Georama({
  variable: "--font-georama",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EkoTeck Entreprise",
  description: "Marketplace for Trading Recycle Plastic Products",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${georama.variable} ${plusJakartaSans.variable} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
