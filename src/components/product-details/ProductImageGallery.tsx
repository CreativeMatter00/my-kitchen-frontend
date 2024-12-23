// "use client";
// import React, { useState } from "react";
// //import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./CarouselComponent";
// import Image from "next/image";
// import {
//   Carousel2,
//   CarouselContent,
//   CarouselContent2,
//   CarouselItem,
//   CarouselNext,
//   CarouselNext2,
//   CarouselPrevious,
//   CarouselPrevious2,
// } from "../ui/carousel";

// const ProductImageGallery = () => {
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);

//   const images = [
//     "/images/product-details/img1.png",
//     "/images/product-details/img2.png",
//     "/images/product-details/img3.png",
//   ];

//   return (
//     <div className="flex  md:flex-row md:gap-4">
//       {/* Thumbnails */}
//       <div className="flex flex-col">
//         {images.map((image, index) => (
//           <div key={index} onClick={() => setSelectedImageIndex(index)}>
//             <Image
//               src={image}
//               alt={`Thumbnail ${index + 1}`}
//               width={50}
//               height={50}
//               className={`w-full h-auto object-cover cursor-pointer mt-2 ${
//                 selectedImageIndex === index ? "border-2 border-black" : ""
//               }`}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Carousel */}
//       <Carousel2
//         selectedImageIndex={selectedImageIndex}
//         onSelectImage={setSelectedImageIndex}
//         className="relative w-full h-auto"
//       >
//         <CarouselContent2>
//           {images.map((image, index) => (
//             <CarouselItem key={index}>
//               <Image
//                 src={image}
//                 alt={`Product Image ${index + 1}`}
//                 width={600}
//                 height={645}
//               />
//             </CarouselItem>
//           ))}
//         </CarouselContent2>
//         <CarouselPrevious2 />
//         <CarouselNext2 />
//       </Carousel2>
//     </div>
//   );
// };

// export default ProductImageGallery;

"use client";
import React, { useState } from "react";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductImageGallery = () => {
  //const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = [
    "/images/product-details/img1.png",
    "/images/product-details/img2.png",
    "/images/product-details/img3.png",
  ];

  return (
    <div>
      <div className="flex md:flex-row flex-col-reverse  gap-4">
        <div className="flex md:flex-col md:justify-start justify-center flex-row gap-1 cursor-pointer">
          {images.map((image: string, index: number): any => {
            return (
              <>
                <div key={index}>
                  <Image
                    src={image}
                    alt="Image"
                    width={200}
                    height={200}
                    className="md:w-[200px] w-[200px] md:h-[70px] h-[100px] border border-text p-[2px]"
                  ></Image>
                </div>
              </>
            );
          })}
        </div>

        <div className="flex justify-center items-center">
          <Carousel >
            <CarouselContent>
              {images.map((image: string, index: number) => {
                return (
                  <>
                    <CarouselItem key={index}>
                      <div className="">
                        <Card>
                          <CardContent>
                            <Image
                              src={image}
                              alt="Image"
                              width={600}
                              height={644}
                              className="md:w-[600px] md:h-[644px] w-[475px]"
                            ></Image>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  </>
                );
              })}

            </CarouselContent>

           <div className="flex md:justify-center justify-end  md:items-center items-end">
           <div><CarouselPrevious className="bg-text text-backgroundColor hover:text-white hover:bg-text rounded-none 
           md:left-2 left-4 top-1/2 h-[30px] md:h-[60px] h:[30px] md:w-[60px]" /></div>
           <CarouselNext className="bg-text text-backgroundColor hover:text-white hover:bg-text rounded-none 
           md:right-2 right-4 top-1/2 h-[30px] md:h-[60px] h:[30px] md:w-[60px]" />
           </div>

           {/* <div className="flex md:justify-center justify-end  md:items-center items-end">
           <div><CarouselPrevious className="bg-text text-backgroundColor hover:text-white hover:bg-text rounded-none 
            h-[60px] w-[60px]" /></div>
           <CarouselNext className="bg-text text-backgroundColor hover:text-white hover:bg-text rounded-none 
           h-[60px] w-[60px]" />
           </div> */}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ProductImageGallery;
