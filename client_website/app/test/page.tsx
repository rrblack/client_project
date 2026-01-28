"use client";

import { useState } from "react";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("選択してください");

  const options = ["営業", "事務", "エンジニア", "アルバイト"];

  return (
    <div className="relative inline-block text-left mt-20">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-orange-400 text-white rounded-lg shadow-md hover:bg-orange-500 transition"
      >
        {selected}
      </button>

      {open && (
        <div className="absolute mt-2 w-40 bg-white shadow-lg rounded-lg border border-gray-200">
          {options.map((dong) => (
            <button
              key={dong}
              onClick={() => {
                setSelected(dong);
                setOpen(false);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-orange-100"
            >
              {dong}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}