"use client";

import { useState } from "react";
import Link from "next/link";

export default function HamburgerMenu(){
    const [open, openSetter] = useState(false)
    return (
    <div className="">
        <button className="cursor-pointer z-50 grid grid-cols-1 gap-1.5 " onClick={() => openSetter(!open)}> 
        <span className={`block h-0.5 w-7 bg-black transition-all duration-300 ${open ? "rotate-45 translate-y-2" :" "}`}></span>
        <span className={`block h-0.5 w-7 bg-black transition-all duration-300 ${open ? "opacity-0" :" "}`}></span>
        <span className={`block h-0.5 w-7 bg-black transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" :" "}`}></span>
        
        </button>
        
        {open &&(
            <section className="fixed backdrop-blur-xl md:mt-7 mt-[23] bg-white/80 p-2 left-0 w-full  transition-all duration-300">
                <nav className=" container w-100 mx-auto px-6 py-4 flex items-center justify-between ">
                    <ul className="flex flex-col gap-10 mx-auto px-10 py-6 text-2xl text-black ">
                        <li><Link href="/about" onClick={()=> openSetter(false) } className="inline-block shadow-md hover:shadow-lg shadow-fuchsia-800 hover:scale-110 transition-transform hover:text-black bg-orange-500 rounded-full px-4 py-2" >会社概要</Link></li>
                        <li><Link href="/recruit" onClick={()=> openSetter(false) } className="inline-block shadow-md hover:shadow-lg shadow-fuchsia-800 hover:scale-110 transition-transform hover:text-black bg-orange-500 rounded-full px-4 py-2">ライバー応募フォーム</Link></li>
                        <li><Link href="/contact" onClick={()=> openSetter(false) } className="inline-block shadow-md hover:shadow-lg shadow-fuchsia-800 hover:scale-110 transition-transform hover:text-black bg-orange-500 rounded-full px-4 py-2">問い合わせ</Link></li>
                        <li><Link href="/privacy-policy" onClick={()=> openSetter(false) } className="inline-block shadow-md hover:shadow-lg shadow-fuchsia-800 hover:scale-110 transition-transform hover:text-black bg-orange-500 rounded-full px-4 py-2">プライバシーポリシー</Link></li>
                    </ul>
                </nav>
            </section>
        )}
    </div>
);
}

