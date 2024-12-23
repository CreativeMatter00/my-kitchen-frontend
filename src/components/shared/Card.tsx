// "use client"

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { Button } from "../ui/button";
// import { Card as UICard } from "@/components/ui/card";
// import { FaHeart } from "react-icons/fa";
// import { IoEye } from "react-icons/io5";
// import Link from "next/link";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/productCardCarousel"
// import { BsDot } from "react-icons/bs"

// const Card = () => {

//   const [activeIndex, setActiveIndex] = useState(0)
//   const [api, setApi] = useState(null) // Store carousel API

//   const first = [
//     {
//       title: "Soft-Close Cabinet Door",
//       image: "/images/products/soft-close-cabinet-1.png",
//       dimensions: '24" W x 30" H',
//       link: "/product-details"
//     },
//     {
//       title: "Adjustable Lift System",
//       image: "/images/products/adjustable-lift-system-2.png",
//       dimensions: '24" W x 30" H',
//       link: "/product-details"
//     },
//     {
//       title: "Frameless Cabinet Door",
//       image: "/images/products/frameless-cabinet-door-3.png",
//       dimensions: '24" W x 30" H',
//       link: "/product-details"
//     },
//   ]

//   const second = [
//     {
//       title:"Glass Cabinet Door",
//       image: "/images/products/4.png",
//       dimensions: '24" W x 30" H',
//       link: "/product-details"
//     },
//     {
//       title:"Soft-Close Cabinet Door",
//       image: "/images/products/5.png",
//       dimensions: '24" W x 30" H',
//       link: "/product-details",
//     },
//     {
//       title:"Frameless Cabinet Door",
//       image: "/images/products/6.png",
//       dimensions: '24" W x 30" H',
//       link: "/product-details",
//     }
//   ]

//   const pictures = [...first, ...second]

//   const groupedPictures = []
//   for (let i = 0; i < pictures.length; i += 3) {
//     groupedPictures.push(pictures.slice(i, i + 3))
//   }

//   useEffect(() => {
//     if (api) {
//       api.scrollTo(activeIndex) // Move to the selected slide
//     }
//   }, [activeIndex, api])

//   return (
//     <div>
// <Carousel
//   opts={{
//     align: "start",
//   }}
//   className="w-full max-w-7xl" // Increase width for three items
//   setApi={setApi} // Save API reference
//  //setApi={(api) => setApi(api)} // Pass the correct API to setApi
// >
//   <CarouselContent>
//     {groupedPictures.map((group, groupIndex) => (
//       <CarouselItem key={groupIndex} className="flex space-x-6 mt-4">
//         {group.map((product, picIndex) => (
//           <div
//             key={picIndex}
//             className="overflow-hidden group relative w-[372px] h-auto cursor-pointer"
//           >
//             <UICard className="w-full bg-transparent">
//               <div className="relative overflow-hidden">
//                 <Image
//                   src={product.image}
//                   alt={product.title}
//                   width={372}
//                   height={400}
//                   className="w-[372px] h-[400px] transition-transform duration-500 transform-gpu group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 z-10 w-[372px] h-[400px] transition-opacity duration-500 bg-textOptional bg-opacity-0 group-hover:bg-opacity-50" />
//               </div>

//               <div className="absolute inset-0 flex justify-end items-start z-20 space-x-2 mt-2 mr-2">
//                 <div className="w-10 h-10 bg-graySecondary hover:bg-backgroundColor flex justify-center items-center text-grayLightPrimary hover:text-brandColor">
//                   <FaHeart />
//                 </div>
//                 <div className="w-10 h-10 bg-graySecondary hover:bg-backgroundColor flex justify-center items-center text-grayLightPrimary hover:text-brandColor">
//                   <IoEye />
//                 </div>
//               </div>

//               <div className="flex justify-start items-center">
//                 <p className="text-2xl font-bold mt-4">{product.title}</p>
//               </div>

//               <div className="flex justify-start items-center">
//                 <p className="text-sm font-normal text-textOptional">
//                   Dimensions:{" "}
//                   <span className="text-base text-textSecondary font-normal">
//                     {product.dimensions}
//                   </span>
//                 </p>
//               </div>

//               <div className="flex justify-start items-center">
//                 <Button className="z-30 mt-6 text-base font-normal bg-transparent border-2 border-text text-text hover:bg-text hover:text-backgroundColor p-6">
//                   <Link href={product.link}>View Product</Link>
//                 </Button>
//               </div>
//             </UICard>
//           </div>
//         ))}
//       </CarouselItem>
//     ))}
//   </CarouselContent>

//   {/* Indicators using BsDot */}
//   <div className=" flex justify-center items-center">
//   <div className="flex justify-center items-center gap-0 ">
//     {groupedPictures.map((_, groupIndex) => (
//       <BsDot
//         key={groupIndex}
//         onClick={() => setActiveIndex(groupIndex)}
//         className={`cursor-pointer text-3xl mx-1 w-14 h-20
//            ${
//           activeIndex === groupIndex ? "text-brandColor" : "text-graySecondary"
//         }`}
//       />
//     ))}
//   </div>

//   {/* Button  */}
//   <div className="flex justify-center items-center ">
//       <CarouselPrevious className="w-[61px] h-[56px] bg-text hover:bg-text" />
//       <CarouselNext className="w-[61px] h-[56px] bg-text hover:bg-text" />
//   </div>
//   </div>

// </Carousel>

//     </div>
//   );
// };

// export default Card;

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Card as UICard } from "@/components/ui/card";
import { FaHeart } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import Link from "next/link";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { BsDot } from "react-icons/bs";

const Card = () => {
	const products = [
		{
			title: "Soft-Close Cabinet Door",
			image: "/images/products/soft-close-cabinet-1.png",
			dimensions: '24" W x 30" H',
			link: "/product-details",
		},
		{
			title: "Adjustable Lift System",
			image: "/images/products/adjustable-lift-system-2.png",
			dimensions: '24" W x 30" H',
			link: "/product-details",
		},
		{
			title: "Frameless Cabinet Door",
			image: "/images/products/frameless-cabinet-door-3.png",
			dimensions: '24" W x 30" H',
			link: "/product-details",
		},
		{
			title: "Glass Cabinet Door",
			image: "/images/products/4.png",
			dimensions: '24" W x 30" H',
			link: "/product-details",
		},
		{
			title: "Soft-Close Cabinet Door",
			image: "/images/products/5.png",
			dimensions: '24" W x 30" H',
			link: "/product-details",
		},
		{
			title: "Frameless Cabinet Door",
			image: "/images/products/6.png",
			dimensions: '24" W x 30" H',
			link: "/product-details",
		},
	];

	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 ">
				{products.map((product, index: number) => {
					return (
						<>
							<div
								key={index}
								className="overflow-hidden group relative h-auto cursor-pointer"
							>
								<UICard className=" bg-transparent">
									<div className="relative overflow-hidden">
										<Image
											src={product.image}
											alt="image"
											width={372}
											height={400}
											className="w-full h-auto transition-transform duration-500 transform-gpu group-hover:scale-110"
										/>
										<div className="absolute inset-0 z-10 w-full h-auto transition-opacity duration-500 bg-textOptional bg-opacity-0 group-hover:bg-opacity-30" />
									</div>

									<div className="absolute inset-0 flex justify-end items-start z-20 gap-2 p-4">
										<div className="w-10 h-10 bg-graySecondary lg:hover:bg-backgroundColor flex justify-center items-center text-brandColor lg:text-grayLightPrimary lg:hover:text-brandColor">
											<FaHeart />
										</div>
										<div className="w-10 h-10 bg-graySecondary lg:hover:bg-backgroundColor flex justify-center items-center text-brandColor lg:text-grayLightPrimary lg:hover:text-brandColor">
											<IoEye />
										</div>
									</div>

									<div className="flex justify-start items-center">
										<p className="text-2xl font-bold mt-4">{product.title}</p>
									</div>

									<div className="flex justify-start items-center">
										<p className="text-sm font-normal text-textOptional">
											Dimensions:{" "}
											<span className="text-base text-textSecondary font-normal">
												{product.dimensions}
											</span>
										</p>
									</div>

									<div className="flex justify-start items-center">
										<button className="z-20 mt-6 py-3 px-8 text-base font-normal bg-text lg:bg-transparent border border-gradientColorOne lg:text-text lg:hover:bg-text lg:hover:text-backgroundColor text-backgroundColor">
											<Link href={product.link}>View Product</Link>
										</button>
									</div>
								</UICard>
							</div>
						</>
					);
				})}
			</div>
		</div>
	);
};

export default Card;
