
'use client'
import React, { useState } from "react";
import Glass from "@/components/about/Glass";
import GlassMobileResponsive from "@/components/about/GlassMobileResponsive";
// import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
const Page = () => {
  const [selectedText, setSelectedText] = useState("Glass");
  return (
    <div>
     <div className="hidden lg:block ">
       
       <Glass />
     </div>
     <div className="lg:hidden block">
       <div className="mt-6">
       {/* <Breadcrumbs parentItem="Glass" currentItem={selectedText}/> */}
       </div>
       <GlassMobileResponsive />
     </div>
    </div>
  );
};

export default Page;
