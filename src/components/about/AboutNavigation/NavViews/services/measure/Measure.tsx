// 'use client'

// import Image from "next/image";
// import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
// import { useState } from "react";
// const measureImage = "/images/measure/measure.png";

// const Measure = () => {
//   const [selectedText, setSelectedText] =useState("Measuement")
//   return (
//     <div className="container mx-auto ">
//       <Breadcrumbs currentItem={selectedText}/>
//      <div className="flex flex-col gap-10">
//      <div className="font-normal text-lg md:text-3xl lg:text-5xl text-center lg:text-start mt-6 md:mt-8 lg:mt-20">
//         HOW TO MEASURE YOUR SPACE?
//       </div>
//       <div>
//         <Image
//           src={measureImage}
//           alt="Image"
//           width={700}
//           height={700}
//           className="w-full h-auto"
//         ></Image>
//       </div>
//      </div>

//       <div className="flex flex-col gap-6">
//       <div className="mt-4 md:mt-8 lg:mt-16 font-normal text-textSecondary text-sm md:text-base lg:text-lg">
//         Accurate measurements as indicated in the measuring procedure are the
//         key elements we will need to plan your new house. With this information,
//         our specialists will be able to help design your dream new house!
//       </div>

//       <div className=" text-textSecondary text-sm md:text-base font-bold">
//         Use kitchen space for example to explain measure steps below:
//       </div>

//       <div className="text-sm md:text-base font-bold ">
//         STEP 1 <span>&nbsp;</span> Make the kitchen plan drawing
//       </div>

//       <div className="mb-10 text-sm md:text-base font-normal text-textSecondary">
//         Draw a rough outline of your kitchen, record the overall length of each
//         wall, label walls, pillars, windows and doors. Remember to measure
//         clockwise.
//       </div>
//       </div>  
//     </div>
//   );
// };

// export default Measure;


"use client";

import BreadcrumbOfHome from "@/components/breadcrumbs/BreadcrumbOfHome";
import BreadcrumbOfService from "@/components/breadcrumbs/BreadcrumbOfService";

import Image from "next/image";

import { useState } from "react";
const measureImage = "/images/measure/measure.png";

const Measure = () => {
  const [selectedText, setSelectedText] = useState("Measurement");

  return (
    <div className="container mx-auto">
      <div className="mt-10 flex lg:justify-start justify-center items-center">
      {/* <Breadcrumbs parentItem="Services" currentItem={selectedText} /> */}
      {/* <BreadcrumbOfHome/> */}
      <BreadcrumbOfService/>
      </div>
      <div className="flex flex-col gap-10">
      
        <div className="font-normal text-lg md:text-3xl lg:text-5xl text-center lg:text-start mt-6 md:mt-8 lg:mt-10">
          HOW TO MEASURE YOUR SPACE?
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

      <div className="flex flex-col gap-6">
        <div className="mt-4 md:mt-8 lg:mt-16 font-normal text-textSecondary text-sm md:text-base lg:text-lg">
          Accurate measurements as indicated in the measuring procedure are the
          key elements we will need to plan your new house. With this
          information, our specialists will be able to help design your dream
          new house!
        </div>

        <div className="text-textSecondary text-sm md:text-base font-bold">
          Use kitchen space for example to explain measure steps below:
        </div>

        <div className="text-sm md:text-base font-bold">
          STEP 1 <span>&nbsp;</span> Make the kitchen plan drawing
        </div>

        <div className="mb-10 text-sm md:text-base font-normal text-textSecondary">
          Draw a rough outline of your kitchen, record the overall length of
          each wall, label walls, pillars, windows and doors. Remember to
          measure clockwise.
        </div>
      </div>
    </div>
  );
};

export default Measure;
