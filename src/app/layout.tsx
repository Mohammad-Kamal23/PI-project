import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohammad Kamal Abdulaziz | Interactive Developer",
  description: "The portfolio of Mohammad Kamal Abdulaziz. Contact: moh203.kamal@gmail.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {/* Cursor Removed */}
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}