import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import AOSProvider from "./components/Aos";
import HamburgerMenu from "./components/hamburger";
import Script from 'next/script'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en">
      {/* Header */}
      <body
        className={`bg-amber-600 min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-QV2VBFC8GH" strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QV2VBFC8GH');
        `}
      </Script>
        <header className="fixed backdrop-blur z-99 shadow-sm w-full">
        <nav className="mx-auto md:px-6 md:py-4 p-8 flex items-center justify-center gap-8 ">
          <Link href="/" className="absolute left-6">
          <img src="/logo1.png" className="h-auto w-35 rounded-lg "/>
          </Link>
          <ul className="hidden md:flex gap-3 text-xl font-medium ">
            <li><Link href="/about" className="inline-block shadow-md hover:shadow-lg shadow-yellow-500 hover:scale-110 transition-transform bg-gradient-to-br from-orange-400 via-orange-600 to-orange-400 rounded-full px-4 py-2" >会社概要</Link></li>
            <li><Link href="/recruit" className="inline-block shadow-md hover:shadow-lg shadow-yellow-500 hover:scale-110 transition-transform  bg-gradient-to-br from-orange-400 via-orange-600 to-orange-400 rounded-full px-4 py-2">ライバー応募フォーム</Link></li>
            <li><Link href="/contact" className="inline-block shadow-md hover:shadow-lg shadow-yellow-500 hover:scale-110 transition-transform bg-gradient-to-br from-orange-400 via-orange-600 to-orange-400 rounded-full px-4 py-2">問い合わせ</Link></li>
            <li><Link href="/privacy-policy" className="inline-block shadow-md hover:shadow-lg shadow-yellow-500 hover:scale-110 transition-transform  bg-gradient-to-br from-orange-400 via-orange-600 to-orange-400 rounded-full px-4 py-2">プライバシーポリシー</Link></li>
          </ul>
          <div className=" absolute right-6 ">
          <HamburgerMenu/>
          </div>
        </nav>
      </header>
        <AOSProvider>
        {children}
        </AOSProvider>
        {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
            <img src="/logo1.png" className="h-auto w-35 rounded-lg "/>
            </div>
            <p className="text-sm text-gray-400">BIGO LIVE 公式パートナー事務所</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/recruit">Recruit</Link></li>
              <li><Link href="/contact">Contact</Link></li>
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
              {/* <div className="w-10 h-10 bg-gray-800 rounded-full"></div> */}
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-3 pt-3 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} 株式会社モアソビ. All rights reserved. </p>
        </div>
      </footer>
      </body>
    </html>
  );
}
