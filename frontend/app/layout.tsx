import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Voting System using Blockchain",
  description:
    "The Blockchain-Based E-Voting System is a secure, transparent, and decentralized digital voting platform designed to modernize the election process",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col antialiased">
        <Providers>
          <NavBar />
          <div className="max-w-4xl mx-auto px-6 py-10 flex-1 w-full">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}