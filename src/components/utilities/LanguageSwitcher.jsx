"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";

const languages = [
  { code: "en", name: "En", title: "English", flag: "/images/eng.svg" },
  { code: "es", name: "Es", title: "Spanish", flag: "/images/spain.svg" },
  { code: "de", name: "De", title: "German", flag: "/images/german.svg" },
  { code: "fr", name: "Fr", title: "French", flag: "/images/france.svg" },
];

const LanguageSwitcher = () => {
  const [selected, setSelected] = useState(languages[0]);
  const [open, setOpen] = useState(false);

  const handleSelect = (lang) => {
    setSelected(lang);
    setOpen(false);
    // Normally you would update the app locale here
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-2 py-1 border rounded-sm overflow-hidden border-gray-500 bg-[#023b4d] hover:shadow-md transition"
        title={selected.title}
      >
        <Image src={selected.flag} alt={selected.name} width={20} height={15} />
        <span className="text-[12px]">{selected.name}</span>
        <FaChevronDown className="text-[10px] mt-[1px]" />
      </button>

      {open && (
        <ul className="absolute z-50 mt-2 w-full bg-black border border-gray-500 rounded shadow-md overflow-hidden">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => handleSelect(lang)}
              title={lang.title}
              className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-hover_color text-[12px]"
            >
              <Image src={lang.flag} alt={lang.name} width={20} height={15} />
              {lang.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
