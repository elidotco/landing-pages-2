"use client";
import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

import { Rubik } from "next/font/google";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { CiCircleAlert } from "react-icons/ci";
import { FaArrowRightToBracket } from "react-icons/fa6";
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
    <header className="w-full  flex justify-between lg:justify-normal items-center py-5 px-10 md:px-15 lg:px-20 lg:border-b lg:border-primary-lighten">
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

      {/* Menu */}
      <div className="lg:flex hidden flex-1 justify-between items-center text-black">
        <ul className="flex items-center  ml-10 pl-6 border-primary-lighten border-l-2 gap-x-5 text-lg capitalize ">
          <li>
            <a className="flex items-center" href="#">
              {" "}
              <Image
                src="/cooking.png"
                alt="icon"
                width={20}
                height={20}
              />{" "}
              Cooking Classes
            </a>
          </li>
          <li>
            <a className="flex items-center" href="#">
              {" "}
              <Image src="/chef.png" alt="icon" width={20} height={20} />
              Become a chef
            </a>
          </li>
          <li>
            <a className="flex items-center" href="#">
              {" "}
              <Image
                src="/groupcooking.png"
                alt="icon"
                width={20}
                height={20}
              />{" "}
              Group Cooking
            </a>
          </li>
        </ul>
        <div className="flex items-center">
          <ul className="flex uppercase border-r border-primary-lighten pr-3 gap-3">
            <li>Eng</li>
            <li>USD</li>
          </ul>
          <div className="border-r border-primary-lighten">
            <CiCircleAlert size={24} className="text-primary mx-2" />
          </div>
          {/* Login Button */}
          <button className=" ml-5 flex w-32 justify-center items-center bg-primary text-white h-12 text-lg">
            Log In <FaArrowRightToBracket size={20} className="pl-1" />
          </button>
          {/* Login Button */}
        </div>
      </div>
      {/* Menu */}

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
