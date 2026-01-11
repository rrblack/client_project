"use client";

import { useEffect } from "react";
import AOS from "aos";
import { ReactNode } from "react";
import "aos/dist/aos.css";

export default function AOSProvider({ children } :{children: ReactNode }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return children;
}