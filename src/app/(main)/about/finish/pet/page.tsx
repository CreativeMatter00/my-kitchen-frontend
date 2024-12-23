'use client'

import React, { useState } from "react";
import Pet from "@/components/about/Pet";
import PetMobileResponsive from "@/components/about/PetMobileResponsive";
// import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
const Page = () => {
  const [selectedText, setSelectedText] = useState("Pet");
  return (
    <div>
      <div className="hidden lg:block">
        <Pet />
      </div>
      <div className="lg:hidden block">
        <div className="mt-6">
        {/* <Breadcrumbs parentItem="Finish" currentItem={selectedText}/> */}
        </div>
        <PetMobileResponsive />
      </div>
    </div>
  );
};

export default Page;
