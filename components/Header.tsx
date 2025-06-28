"use client";
import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

import { Rubik } from "next/font/google";
import { XMarkIcon } from "@heroicons/react/24/outline";
const rubik = Rubik({
  subsets: ["latin"],
});

// the menu work funtion

const Header = () => {
  const [isOPen, setIsOPen] = useState(false);

  const openMenu = () => {
    isOPen ? setIsOPen(!isOPen) : setIsOPen(true);
  };
  return (
    <header className="w-full  flex justify-between items-center py-5 px-10 md:px-15 lg:px-20">
      {/* Logo */}
      <div
        className={`font-extrabold text-4xl text-primary uppercase logo ${rubik.className} `}
      >
        CooK
      </div>

      {/* Logo */}
      {/* Menuburger */}
      <div
        className="w-10 h-10 flex sm:hidden rounded-lg justify-center items-center bg-primary"
        onClick={openMenu}
      >
        <Bars3Icon className="w-6 h-6 text-white" />
      </div>
      {/* Menuburger */}

      {/* Mobile menu  */}
      <div
        className={`${
          isOPen
            ? "w-full right-0 bottom-0 absolute h-screen bg-white"
            : "hidden"
        }`}
      >
        <div className="h-full w-4/5 bg-primary py-6 px-10 ml-auto">
          <XMarkIcon className="text-white w-7 h-7" onClick={openMenu} />

          <ul className="flex flex-col gap-5 text-lg capitalize pt-10">
            <li>Cooking Classes</li>
            <li> Become a chef</li>
            <li> Group Cooking </li>
            <li>English </li>
            <li> Currency </li>
          </ul>
        </div>
      </div>
      {/* Mobile menu  */}
    </header>
  );
};

export default Header;
