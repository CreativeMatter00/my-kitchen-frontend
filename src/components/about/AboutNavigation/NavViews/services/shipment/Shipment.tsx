/* eslint-disable react/no-unescaped-entities */

"use client"
import BreadcrumbOfHome from "@/components/breadcrumbs/BreadcrumbOfHome";
import BreadcrumbOfService from "@/components/breadcrumbs/BreadcrumbOfService";

import Image from "next/image";

import { useState } from "react";
const measureImage = "/images/measure/measure.png";

const Shipment = () => {

    const [selectedText, setSelectedText] = useState("Shipment");
  return (
    <div className="container mx-auto">
      <div className="mt-10 flex lg:justify-start justify-center items-center">
      {/* <Breadcrumbs parentItem="Services" currentItem={selectedText} /> */}
      {/* <BreadcrumbOfHome/> */}
      <BreadcrumbOfService/>
      </div>
      <div className="flex flex-col gap-10">
      
        <div className="font-normal text-lg md:text-3xl lg:text-5xl text-center lg:text-start mt-6 md:mt-8 lg:mt-10">
        Shipment
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
          <span className="text-sm md:text-base font-bold text-text">Step 1</span>&nbsp;
          As per our required drawing, the client's site needs to be completed totally such as; floor tiles, wall tiles and ceiling have to be finish.
         </p>
      </div>

      <div>
          <p className="text-sm md:text-base font-normal text-textSecondary">
          <span className="text-sm md:text-base font-bold text-text">Step 2</span>&nbsp;
          As per our required drawing, gas line, water line & electric line have to be fixed earlier.
          Give me topic to become a a frontend developer
         </p>
      </div>

      <div>
          <p className="text-sm md:text-base font-normal text-textSecondary">
          <span className="text-sm md:text-base font-bold text-text">Step 3</span>&nbsp;
          Certainly, clients have to make clearance of all kinds of financial payment.
         </p>
      </div>

      <div className="mb-10">
          <p className="text-sm md:text-base font-normal text-textSecondary">
          {/* <span className="text-sm md:text-base font-bold text-text">Step 4</span>&nbsp; */}
          MY KITCHEN is always careful while delivering the products so that the products may not get damaged.
         </p>
      </div>
      </div>

    </div>
  )
}

export default Shipment
