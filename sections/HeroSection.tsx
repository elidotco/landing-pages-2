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
    <div className="text-black flex pt-20 gap-56 xl:gap-0 xl:px-15  w-full  flex-col-reverse xl:flex-row xl:justify-between ">
      <div className="xl:w-[45%] flex flex-col gap-5  px-5 md:px-10 lg:px-15 xl:px-0">
        <h1
          className={`text-4xl xl:text-left text-center md:text-5xl font-bold `}
        >
          Master the Art of Cooking with{" "}
          <span className={`${pacifico.className} text-primary`}>Experts</span>{" "}
          Worldwide
        </h1>
        <p>
          Experience the joy of cooking in a whole new way with our engaging
          online cooking classes. Learn from the chefs, share your unique
          culinary knowledge, and join our growing foodie community. With COOK,
          learning, and teaching becomes a shared passion.
        </p>
        <div className="flex gap-2">
          <img src="/play-circle.svg" alt="" /> Learn more in the COOK video
        </div>
        <div className="flex gap-3">
          <button className="  flex rounded-md w-fit justify-center items-center bg-primary px-3 text-white h-12 ">
            Find your tutor
          </button>
          <button className=" ml-5 flex rounded-md w-fit justify-center items-center border-primary px-3 text-primary border-2 h-12 ">
            Find your tutor
          </button>
        </div>
      </div>

      {/* Image part of the hero section */}
      <div className="flex items-center relative xl:w-2/5  flex-col justify-center w-full">
        <Image
          src="/HeroImg.png"
          width={800}
          height={500}
          alt="Hero image"
          className="md:w-4/5 xl:w-full w-full md:rounded-4xl"
        />
        <ReviewCard />
      </div>
      {/* Image part of the hero section */}
    </div>
  );
};

export default HeroSection;
