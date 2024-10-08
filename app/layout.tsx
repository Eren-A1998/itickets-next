import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NetworkStatusProvider from "@/components/NetworkStatusProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex min-h-screen flex-col items-center justify-between`}
      >
        <Header />
        <NetworkStatusProvider>
          <main className="min-h-32 max-w-screen-2xl grow w-full">
            {children}
          </main>
        </NetworkStatusProvider>
        <Footer />
      </body>
    </html>
  );
}
