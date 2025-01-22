import type { Metadata } from "next";
import { Geist, Geist_Mono, Poiret_One, Didact_Gothic } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

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
  description: "Mobile Bartending",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poiretOne.variable} ${didactGothic.variable} antialiased`}
      >
        {/* <Header /> */}
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
