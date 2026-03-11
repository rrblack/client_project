"use client";

import Link from "next/link";

export default function Thanks() {


  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-200 flex flex-col items-center justify-center overflow-hidden px-4">
      {/* decorative blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-72 h-72 rounded-full bg-orange-300 opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-60px] right-[-60px] w-96 h-96 rounded-full bg-pink-300 opacity-30 blur-3xl pointer-events-none" />

      <div data-aos="fade-up" className="relative z-10 flex flex-col items-center gap-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
          ご応募<span className="text-orange-500">ありがとうございます</span>
        </h1>

        <div className="max-w-md bg-white/70 backdrop-blur-sm rounded-2xl border border-orange-200 shadow-lg px-8 py-6">
          <p className="text-gray-700 text-lg leading-relaxed">
            お申し込みありがとうございます。<br />
            担当者よりご連絡させていただきます。
          </p>
        </div>

        <Link
          href="/"
          className="mt-4 px-8 py-3 rounded-2xl bg-gradient-to-br from-orange-400 via-orange-500 to-orange-400 text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform ring ring-orange-300"
        >
          トップページへ戻る
        </Link>
      </div>
    </section>
  );
}