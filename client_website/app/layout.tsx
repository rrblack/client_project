import type { Metadata } from "next";
import { Geist, Geist_Mono, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import AOSProvider from "./components/Aos";
import HamburgerMenu from "./components/hamburger";
import Script from 'next/script'
import { Suspense } from 'react'
import NavigationEvents from './components/NavigationEvents'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const zenKaku = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"]
});

export const metadata: Metadata = {
  title: "モアプロ",
  description: "新しい挑戦を",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MM6X2DKL');`,
          }}
        />
      </head>
      <body
        className={`striped-background min-h-screen flex flex-col overflow-x-hidden ${geistSans.variable} ${geistMono.variable} ${zenKaku.variable} antialiased`}
      >
        <div className="object-center max-w-md mx-auto">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MM6X2DKL"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      
        <header className="fixed backdrop-blur bg-white/70 z-99 shadow-sm md:w-md w-full">
        <nav className="mx-auto p-8 flex items-center justify-center gap-8 ">
          <Link href="/" className="absolute left-0 h-20">
          <img src="/final_logo.png" className="h-20 w-40 rounded-lg object-contain"/>
          </Link>
          <div className=" absolute right-6 ">
          <HamburgerMenu/>
          </div>
        </nav>
      </header>
        <AOSProvider>
        <main className="flex-1 ">
        {children}
        </main>
        <Suspense fallback={null}>
          <NavigationEvents/>
        </Suspense>
        </AOSProvider>
        {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto grid gap-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
            <img src="/logo2.png" className="h-20 w-50 mb-10"/>
            </div>
            <p className="text-sm text-gray-400">BIGO LIVE 公式パートナー事務所</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/recruit">Recruit</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full">
                <Link href={"https://instagram.com/moasobi_project"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 48 48">
                  <path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"
                    d="M30,11H18c-3.9,0-7,3.1-7,7v12c0,3.9,3.1,7,7,7h12c3.9,0,7-3.1,7-7V18C37,14.1,33.9,11,30,11z"/>
                  <circle cx="31" cy="16" r="1" fill="#fff"/>
                  <circle cx="24" cy="24" r="6" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
                </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-3 pt-3 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} 株式会社モアソビ. All rights reserved. </p>
        </div>
      </footer>
      </div>
      </body>
    </html>
  );
}
