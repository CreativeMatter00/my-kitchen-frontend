
'use client'

// import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import Hpl from "@/components/about/Hpl"
import { useState } from "react";
const Page = () => {
  const [selectedText, setSelectedText] =useState("HPL")
  return (
   
    <div className="">
    <div className="hidden lg:block ">
       
        <Hpl></Hpl>
      </div>
      <div className="lg:hidden block">
        <div className="mt-6">
        {/* <Breadcrumbs parentItem="Finish" currentItem={selectedText}/> */}
        </div>
        
      </div>
    </div>
  );
};

export default Page;