

"use client";

import BreadcrumbOfHome from "@/components/breadcrumbs/BreadcrumbOfHome";
import BreadcrumbOfService from "@/components/breadcrumbs/BreadcrumbOfService";

import Image from "next/image";

import { useState } from "react";
const measureImage = "/images/measure/measure.png";
const Installation = () => {

    const [selectedText, setSelectedText] = useState("Installation");
  return (
    <div className="container mx-auto">
      <div className="mt-10 flex lg:justify-start justify-center items-center">
      {/* <Breadcrumbs parentItem="Services" currentItem={selectedText} /> */}
      {/* <BreadcrumbOfHome/> */}
      <BreadcrumbOfService/>
      </div>
      <div className="flex flex-col gap-10">
      
        <div className="font-normal text-lg md:text-3xl lg:text-5xl text-center lg:text-start mt-6 md:mt-8 lg:mt-10">
        Installation
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
        <div className="font-normal text-textSecondary text-sm md:text-base lg:text-lg">Proper installation is very much essential for modular cabinets. You can choose the following installation service or Self-service installation advice.</div>
      <div>
          <p className="text-sm md:text-base font-normal text-textSecondary">
          <span className="text-sm md:text-base font-bold text-text">Installation by MY KITCHEN:</span>&nbsp;
          We can also arrange an experienced Installation team from MY KITCHEN headquarters to assemble your products for your home. Our teams are totally focused on the customer and giving a great service, not only in the showroom but on site as well. We will respect your home and work in a polite, clean and respectful way. We will communicate clearly and if there is a problem, deal with it quickly and keep you informed at all times.
         </p>
      </div>

      <div>
          <p className="text-sm md:text-base font-normal text-textSecondary">
          <span className="text-sm md:text-base font-bold text-text">Installation Training:</span>&nbsp;
          We give training to the local Carpenters for assembling and installing the modular. This is the main purpose of MY KITCHEN to make them skill to the installation process. It is also important to say that, the local Carpenters are being come out from the traditional system of installation training and have been trained up to the level of international carpentry work. Thus, we help to develop the lifestyle of our country. Moreover the carpentry workshop has been arranged sometimes by the own factory of my kitchen. It is arranged so that Bangladesh does not lag behind from the international level of wood-working system.

         </p>
      </div>

      <div className="mb-10">
          <p className="text-sm md:text-base font-normal text-textSecondary">
          <span className="text-sm md:text-base font-bold text-text">Installation by Third Party:</span>&nbsp;
          As we have to work with the architects and Interior organizations/companies, these organizations/companies have their own installation team to whom we consider as third party. Architectural firm or interior firm purchases/buys our products and can do the installation of the products by their team (third party). In this respect, we give them a proper guide line for installation. We also make the team understand the method of modular cabinet installation.
         </p>
      </div>

      
      </div>

    </div>
  )
}

export default Installation
