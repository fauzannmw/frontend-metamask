import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Metamask Wallet & Crypto Currency App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex flex-col h-screen">
          <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
