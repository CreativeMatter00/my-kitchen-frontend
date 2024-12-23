"use client"
import BreadcrumbOfHome from "@/components/breadcrumbs/BreadcrumbOfHome";
import BreadcrumbOfService from "@/components/breadcrumbs/BreadcrumbOfService";

import Image from "next/image";

import { useState } from "react";
const measureImage = "/images/measure/measure.png";

const Design = () => {
  const [selectedText, setSelectedText] = useState("Design");

  return (
    <div className="container mx-auto">
      <div className="mt-10 flex lg:justify-start justify-center items-center">
      {/* <Breadcrumbs parentItem="Services" currentItem={selectedText} /> */}
      {/* <BreadcrumbOfHome/> */}
      <BreadcrumbOfService/>
      </div>
      <div className="flex flex-col gap-10">
      
        <div className="font-normal text-lg md:text-3xl lg:text-5xl text-center lg:text-start mt-6 md:mt-8 lg:mt-10">
         Design
        </div>
        <div>
          <Image
            src={measureImage}
            alt="Image"
            width={700}
            height={700}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 mt-4 md:mt-8 lg:mt-16">
      <div>
          <p className="text-sm md:text-base font-normal text-textSecondary">
          <span className="text-sm md:text-base font-bold text-text">Intelligent Design Team-</span>&nbsp;
          MY KITCHEN has made an alliance with intelligent and robust designers. We insist on original and functional designs and keeping up with international trends.
         </p>
      </div>

      <div>
          <p className="text-sm md:text-base font-normal text-textSecondary">
          <span className="text-sm md:text-base font-bold text-text">Customized Design- </span>&nbsp;
          Regardless of the layout of the kitchen space or the original architectural, our designers will always start from taking full account of the space and customer’s preferred design theme, with a wide choice of materials, finishes and colors provided to develop an individual and unique kitchen.
         </p>
      </div>

      <div className="mb-10">
          <p className="text-sm md:text-base font-normal text-textSecondary">
          <span className="text-sm md:text-base font-bold text-text">Science of Triangle- </span>&nbsp;
          Four functional areas of storage, washing, cooking and preparing match up well with human’s body characteristics, cooking process and tableware use frequency, which forms a right angle or isosceles triangle. Science of triangle makes an efficient cooking line for your kitchen.
         </p>
      </div>
      </div>

    </div>
  );
};

export default Design;