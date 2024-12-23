// 'use client'

// // import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
// import Uv from "@/components/about/Uv"
// import { useState } from "react";
// const Page = () => {
//   const [selectedText, setSelectedText] =useState("UV")
//   return (
   
//     <div className="">
//     <div className="hidden lg:block ">
       
//         <Uv></Uv>
//       </div>
//       <div className="lg:hidden block">
//         <div className="mt-6">
//         {/* <Breadcrumbs parentItem="Finish" currentItem={selectedText}/> */}
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default Page;


'use client'
import PuLacquerPaint from "@/components/about/PuLacquerPaint";
import PuLacquerPaintMobileResponsive from "@/components/about/PuLacquerPaintMobileResponsive";

import Uv from "@/components/about/Uv";

import { useState } from "react";
const Page = () => {
  const [selectedText, setSelectedText] =useState("PuLacquerPaint")
  return (
   
    <div className="">
    <div className="hidden lg:block ">
       
        <Uv />
      </div>
      <div className="lg:hidden block">
        <div className="mt-6">
        {/* <Breadcrumbs parentItem="Finish" currentItem={selectedText}/> */}
        </div>
        {/* <UvMobileResponsive /> */}
      </div>
    </div>
  );
};

export default Page;
