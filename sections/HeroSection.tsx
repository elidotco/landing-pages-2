import React from "react";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import ReviewCard from "../components/ReviewCard";

const pacifico = Pacifico({
  subsets: ["cyrillic-ext"],
  weight: "400",
});
const HeroSection = () => {
  return (
    <div className="text-black flex  gap-10 items-center w-full  flex-col px-5 md:px-10 lg:px-15">
      <div>
        <h1 className={`text-6xl text-center md:text-6xl font-bold `}>
          Master the Art of Cooking with{" "}
          <span className={`${pacifico.className} text-primary`}>Experts</span>{" "}
          Worldwide
        </h1>
      </div>

      {/* Image part of the hero section */}
      <div className="flex items-center flex-col justify-center w-full">
        <Image
          src="/Hero img.png"
          width={800}
          height={500}
          alt="Hero image"
          className="w-4/5 rounded-4xl"
        />
        <ReviewCard />
      </div>
      {/* Image part of the hero section */}
    </div>
  );
};

export default HeroSection;
