import type { Metadata } from "next";
import { Amiri, Inter } from "next/font/google";
import "./globals.css";

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["latin", "arabic"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saffron | Middle Eastern Restaurant, Sampaloc Manila",
  description:
    "Saffron Middle Eastern Restaurant in Sampaloc, Manila — authentic shawarma, kabsa, and mezze near UST. View the menu, hours, and reserve a table.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${amiri.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col font-sans bg-cream text-plum antialiased">
        {children}
      </body>
    </html>
  );
}
