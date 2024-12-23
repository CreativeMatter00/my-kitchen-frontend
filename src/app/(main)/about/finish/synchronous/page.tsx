'use client'

// import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import Synchronous from "@/components/about/Synchronous";
import { useState } from "react";
const Page = () => {
  const [selectedText, setSelectedText] =useState("synchronous")
  return (
   
    <div className="">
    <div className="hidden lg:block ">
       
       <Synchronous></Synchronous>
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