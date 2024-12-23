
"use client"
import BreadcrumbOfHome from "@/components/breadcrumbs/BreadcrumbOfHome";
import BreadcrumbOfService from "@/components/breadcrumbs/BreadcrumbOfService";

import Image from "next/image";

import { useState } from "react";
const measureImage = "/images/measure/measure.png";

const Package = () => {
    const [selectedText, setSelectedText] = useState("Packaging");
  return (
    <div className="container mx-auto">
      <div className="mt-10 flex lg:justify-start justify-center items-center">
      {/* <Breadcrumbs parentItem="Services" currentItem={selectedText} /> */}
      {/* <BreadcrumbOfHome/> */}
      <BreadcrumbOfService/>
      </div>
      <div className="flex flex-col gap-10">
      
        <div className="font-normal text-lg md:text-3xl lg:text-5xl text-center lg:text-start mt-6 md:mt-8 lg:mt-10">
        Package
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
          After production and inspection of kitchen cabinets, they will be packed in cartons next. First of all, foamed plastics are placed at the bottom of the carton ready for panels packing.
         </p>
      </div>

      <div>
          <p className="text-sm md:text-base font-normal text-textSecondary">
          <span className="text-sm md:text-base font-bold text-text">Step 2</span>&nbsp;
          And then, every panel in cartons is separately lined with EPE foam sheets and air bubble films.
         </p>
      </div>

      <div>
          <p className="text-sm md:text-base font-normal text-textSecondary">
          <span className="text-sm md:text-base font-bold text-text">Step 3</span>&nbsp;
          After finishing that, foamed plastics are placed at the top of the carton to ensure that panels are wrapped very well.
         </p>
      </div>

      <div className="mb-10">
          <p className="text-sm md:text-base font-normal text-textSecondary">
          <span className="text-sm md:text-base font-bold text-text">Step 4</span>&nbsp;
          Concerning the packing of the glass and countertops, MY KITCHEN packs them to a carton that is covered with wooden frames. This is particularly important for preventing countertop and glass from breakage during shipment.
         </p>
      </div>
      </div>

    </div>
  )
}

export default Package
