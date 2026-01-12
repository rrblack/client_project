"use client";

import { useState } from "react";
import Link from "next/link";

export default function HamburgerMenu(){
    const [open, openSetter] = useState(false)
    return (
    <div className="">
        <button className="cursor-pointer z-50 grid grid-cols-1 gap-1.5 " onClick={() => openSetter(!open)}> 
        <span className="block h-0.5 w-7 bg-black"></span>
        <span className="block h-0.5 w-7 bg-black"></span>
        <span className="block h-0.5 w-7 bg-black"></span>
        </button>
        
        {open &&(
            ""
        )}
    </div>
);
}

