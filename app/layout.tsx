import type { Metadata } from "next";
import Head from 'next/head';

import { Geist, Geist_Mono, Poiret_One, Didact_Gothic } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/header";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poiretOne = Poiret_One({
  variable: "--font-poiret-one",
  weight: "400",
  subsets: ["latin"],
})

const didactGothic = Didact_Gothic({
  variable: "--font-didact-gothic",
  weight: "400",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Sip Society",
  description: "Expert Mobile Bartending in the Rochester New York Area ",
  applicationName: "Sip Society",
  keywords: ['mobile bartending service', 'rochester, ny', 'wedding', 'private party', 'corporate events', 'cocktails', 'drinks', 'drink menu', 'mixologist']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poiretOne.variable} ${didactGothic.variable} antialiased`}
      >
        <Header />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >

          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
