
"use client";

import Image from "next/image";
import { FaRegDotCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";

type Location = {
  name: string;
  address: string;
  mobile: string;
  email: string;
};
const locations:Location[] = [
  {
    name: "Gulshan 1",
    address: "House No-8/A, Road No- 138, Gulshan-1, Dhaka-1212.",
    mobile: "01642-912612",
    email: "info@mykitchen-bd.com",
  },
  {
    name: "Gulshan 2",
    address:
      "Genetic Baro Bhuiyan (4th Floor), Plot-CWN(A)-3/A, Road No-49, Gulshan-2, Dhaka- 1212.",
    mobile: "01642-912612",
    email: "info@mykitchen-bd.com",
  },
  {
    name: "Hatirpool",
    address:
      "Tilottoma, 66 & 67 Bir Uttam CR Dutta Road, Hatirpool, Dhaka-1205.",
    mobile: "01642-912612",
    email: "info@mykitchen-bd.com",
  },
  {
    name: "Banani",
    address: "House No-108, Road No-12, Block-E, Banani, Dhaka-1213.",
    mobile: "01642-912612",
    email: "info@mykitchen-bd.com",
  },
  {
    name: "Uttara",
    address:
      "18, Sonargaon Janapath Road, Sector-12, Uttara Model Town, Dhaka-1230.",
    mobile: "01642-912612",
    email: "info@mykitchen-bd.com",
  },
];

const images = [
  "/images/sales-point/img1.png",
  "/images/sales-point/img2.png",
  "/images/sales-point/img3.png",
  "/images/sales-point/img4.png",
  
];
const InsideDhaka = () => {
  return (
    <>
      <div className="mt-10 mb-4">
        
        <div className="container mx-auto text-4xl">
        Dhaka City
        </div>
        <hr className="mt-6 w-full"/>

        <div className="container mx-auto ">
          <div className="flex justify-center lg:justify-between px-4">
           <div className="space-y-6 border-l-2 border-dashed border-brandColor ">
              {
                locations.map((location:Location, index:number)=>{
                  return(
                    <div key={index}>
                      <div><FaCircle className="text-brandColor ml-[-9px] border border-brandColor p-[1px] rounded-full mt-12"/></div>
                        <div className="flex flex-col gap-10 mt-[-24px]">
                        <div className="px-6 flex flex-col gap-4 lg:gap-16">
                             <div><p className="text-3xl font-normal text-text "> {location.name}</p></div>
                             <div className="flex flex-col gap-2 lg:gap-1">
                             <div className=" text-lg font-normal">
                               {location.address}
                             </div>
                             <div className="text-lg font-normal">
                          <span className="text-textOptional">Mobile:</span>{" "}
                          {location.mobile}
                         </div>

                         <div>
                          <span className="text-textOptional">Email:</span>{" "}
                          {location.email}
                        </div>
                             </div>
                        </div>
                        </div>
                    </div>
                  )
                })
              }
            </div>
      
            <div className="flex flex-col mt-4 bg-grayLightSecondary p-4 hidden lg:block">
              {
                images.map((img:string,index:number)=>{
                  return(
                    <div key={index} className="py-2">
                    <Image
                  key={index}
                  src={img}
                  alt={"Image"}
                  width={500}
                  height={300}
                  className="w-[565px] h-[322px]"
                />
                    </div>
                  )
                })
              }
            </div>
          </div>
           
        </div>

        
      </div>
    </>
  )
}

export default InsideDhaka
