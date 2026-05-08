import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs"
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import './globals.css'
import { TRPCProvider } from "@/trpc/client";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "NewTube",
  description: "A web-app designed with features to imitate Youtube",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en">
        <body
          className={`${inter.className} antialiased`}
        > <TRPCProvider>
          <Toaster />
            {children}
          </TRPCProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
