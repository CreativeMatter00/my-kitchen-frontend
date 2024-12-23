
import Image from "next/image";
import React from "react";
import { BannerProps } from "../../../../types";

const Banner = ({
  title,
  subTitle,
  subSubTitle,
  image,
  currentPage,
  homePage,
  className,
  className2,
}: BannerProps) => {
  return (
    <>
      <div className="flex bg-whitePrimary relative">
        <div className="container mx-auto p-8 flex flex-col justify-start   py-10 lg:py-16 overflow-hidden">
          <h1 className="flex gap-2 py-4">
            <span className="text-xl">{homePage}</span>{" "}
            <span className="text-xl">/</span>{" "}
            <span className="text-xl">{currentPage}</span>
          </h1>
          {/* <h1 className=" flex py-5">
            <span className= {`font-bold text-5xl ${className || ""}`}>{title}</span>{" "}
            <span className= {`font-bold text-5xl ${className2 || ""}`}>
              {subTitle}
            </span>
          </h1> */}

          {/* <p className="flex  sm:justify-center lg:justify-start items-center bg-red-300">
            <span className={`font-bold text-3xl md:text-5xl  lg:text-start  ${className || ""}`}>
              {title}
            </span>
            <span className={`font-bold text-3xl md:text-5xl  lg:text-start  ${className2 || ""}`}>
              {subTitle}
            </span>
          </p> */}

          {/* <p className="bg-red-300 flex sm:justify-center lg:justify-start items-center text-xl md:text-base text-black mt-4">{subSubTitle}</p> */}

          <p className="flex  sm:justify-center lg:justify-start items-center">
            <span
              className={`font-bold text-3xl md:text-5xl  lg:text-start  ${
                className || ""
              }`}
            >
              {title}
            </span>
            <span
              className={`font-bold text-3xl md:text-5xl  lg:text-start  ${
                className2 || ""
              }`}
            >
              {subTitle}
            </span>
          </p>

          <p className=" flex sm:justify-center lg:justify-start items-center text-xl md:text-base text-black mt-4">
            {subSubTitle}
          </p>
        </div>
        <div className="overflow-hidden absolute top-0 right-0 hidden lg:flex">
          <div className="flex items-end justify-end">
            {" "}
            <div className="w-[550px] h-[360px] relative mr-[-6.7rem]">
              <Image
                height={200}
                width={200}
                src={image}
                alt="Masked"
                className="custom-mask w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;





