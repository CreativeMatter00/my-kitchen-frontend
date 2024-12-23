
'use client'
import PuLacquerPaint from "@/components/about/PuLacquerPaint";
import PuLacquerPaintMobileResponsive from "@/components/about/PuLacquerPaintMobileResponsive";

import { useState } from "react";
const Page = () => {
  const [selectedText, setSelectedText] =useState("PuLacquerPaint")
  return (
   
    <div className="">
    <div className="hidden lg:block ">
       
        <PuLacquerPaint />
      </div>
      <div className="lg:hidden block">
        <div className="mt-6">
        {/* <Breadcrumbs parentItem="Finish" currentItem={selectedText}/> */}
        </div>
        <PuLacquerPaintMobileResponsive />
      </div>
    </div>
  );
};

export default Page;
