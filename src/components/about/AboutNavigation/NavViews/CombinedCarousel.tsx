// "use client";

// import * as React from "react";
// import Autoplay from "embla-carousel-autoplay";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Image from "next/image";

// const CarouselData = [
//     { text: `PU\nLacquer`, image: "/images/about/eco-friendly.png" },
//     { text: "PET", image: "/images/about/eco-friendly.png" },
//     { text: `UV\nLacquer`, image: "/images/about/eco-friendly.png" },
//     { text: `Synchronous\nMDF`, image: "/images/about/eco-friendly.png" },
//     { text: "HPL", image: "/images/about/eco-friendly.png" },
//     { text: "Glass", image: "/images/about/eco-friendly.png" },
//   ]

// export function CombinedCarousel() {
//   const [emblaApi, setEmblaApi] = React.useState<any>(null);
//   const [emblaApi2, setEmblaApi2] = React.useState<any>(null);
//   const autoplay = React.useRef(
//     Autoplay({ delay: 2000, stopOnInteraction: true })
//   );

//   React.useEffect(() => {
//     if (emblaApi && emblaApi2) {
//       const syncScroll = () => {
//         emblaApi2.scrollTo(emblaApi.selectedScrollSnap(), false);
//       };

//       emblaApi.on("select", syncScroll);
//       emblaApi2.on("select", () => {
//         emblaApi.scrollTo(emblaApi2.selectedScrollSnap(), false);
//       });

//       // Initialize carousels with synced scroll position
//       syncScroll();

//       return () => {
//         emblaApi.off("select", syncScroll);
//         emblaApi2.off("select", () => {
//           emblaApi.scrollTo(emblaApi2.selectedScrollSnap(), false);
//         });
//       };
//     }
//   }, [emblaApi, emblaApi2]);

//   return (
//     <div className="relative w-full mx-auto mb-20">
//       <div className="flex">
//         {/* Vertical Carousel */}
//         <div className="flex   w-1/4 min-w-[200px]">
//           <Carousel
//             opts={{ align: "start" }}
//             orientation="vertical"
//             className="w-full   content-end"
//             setApi={setEmblaApi}
//           >
//             <CarouselContent className="  h-[100px] mb-4 flex">
//               {CarouselData.map((item, index) => (
//                 <CarouselItem key={index} className="content-end">
//                         <div className="text-3xl  " style={{whiteSpace:"pre-line"}}>
//                             {item.text}
//                         </div>

//                  </CarouselItem>
//               ))}
//             </CarouselContent>
//           </Carousel>

//           <div className="btn btn-warning grow bg-white absolute -bottom-14 py-2 px-4 ">Learn More</div>

//         </div>

//         {/* Main Image Carousel */}
//         <Carousel
//           plugins={[autoplay.current]}
//           className="w-full ml-12"
//           opts={{ align: "start" }}
//           onMouseEnter={autoplay.current.stop}
//           onMouseLeave={autoplay.current.reset}
//           setApi={setEmblaApi2}
//         >
//           <CarouselContent>
//             {CarouselData.map((item, index) => (
//               <CarouselItem key={index} className="basis-7/12">
//                 <div>
//                   <Card>
//                     <CardContent>
//                       <Image
//                         src={item.image}
//                         alt={item.text}
//                         height={400}
//                         width={600}
//                         className="h-[300px] w-[650px] object-cover"
//                       />
//                     </CardContent>
//                   </Card>
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious className="top-[375px] left-0" />
//           <CarouselNext className="top-[375px] left-12" />
//         </Carousel>
//       </div>
//     </div>
//   );
// }

// "use client";

// import * as React from "react";
// import Autoplay from "embla-carousel-autoplay";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { MdOutlineArrowRightAlt } from "react-icons/md";
// import { BsArrowRight } from "react-icons/bs";

// const CarouselData = [
//   {
//     text: `PU\nLacquer`,
//     image: "/images/about/eco-friendly.png",
//     URL: "/about/finish/puLacquerPaint",
//   },
//   {
//     text: "PET",
//     image: "/images/about/eco-friendly.png",
//     URL: "/about/finish/pet",
//   },
//   {
//     text: "Glass",
//     image: "/images/about/eco-friendly.png",
//     URL: "/about/finish/glass",
//   },
// ];

// export function CombinedCarousel() {
//   const [emblaApi, setEmblaApi] = React.useState<any>(null);
//   const [emblaApi2, setEmblaApi2] = React.useState<any>(null);
//   const autoplay = React.useRef(
//     Autoplay({ delay: 2000, stopOnInteraction: true })
//   );
//   const router = useRouter();
//   React.useEffect(() => {
//     if (emblaApi && emblaApi2) {
//       const syncScroll = () => {
//         emblaApi2.scrollTo(emblaApi.selectedScrollSnap(), false);
//       };

//       emblaApi.on("select", syncScroll);
//       emblaApi2.on("select", () => {
//         emblaApi.scrollTo(emblaApi2.selectedScrollSnap(), false);
//       });

//       // Initialize carousels with synced scroll position
//       syncScroll();

//       return () => {
//         emblaApi.off("select", syncScroll);
//         emblaApi2.off("select", () => {
//           emblaApi.scrollTo(emblaApi2.selectedScrollSnap(), false);
//         });
//       };
//     }
//   }, [emblaApi, emblaApi2]);

//   const handleUrlChange = () => {
//     if (emblaApi) {
//       const selectedIndex = emblaApi.selectedScrollSnap();
//       const selectedItem = CarouselData[selectedIndex];
//       router.push(selectedItem.URL);
//     }
//   };

//   return (
//     <div className="relative w-full mx-auto mb-20">
//       <div className="flex">
//         {/* Vertical Carousel */}
//         <div className="flex   w-1/4 min-w-[200px]">
//           <Carousel
//             opts={{ align: "start" }}
//             orientation="vertical"
//             className="w-full   content-end"
//             setApi={setEmblaApi}
//           >
//             <CarouselContent className="  h-[100px] mb-4 flex">
//               {CarouselData.map((item, index) => (
//                 <CarouselItem key={index} className="content-end">
//                   <div
//                     className="text-3xl  "
//                     style={{ whiteSpace: "pre-line" }}
//                   >
//                     {item.text}
//                   </div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//           </Carousel>

//           {/* <button
//             className="flex justify-center items-center bg-backgroundColor absolute -bottom-14 w-48  mt-8 py-3 text-xl font-medium gap-2 group transition-transform duration-700"
//             onClick={handleUrlChange}
//           >
//             <span className="">Learn More</span>
//             <BsArrowRight className="duration-300 w-0 group-hover:w-fit" />
//           </button> */}

//           <button
//             className="flex justify-center items-center bg-backgroundColor absolute -bottom-14 w-48 mt-10 py-3 text-xl font-medium gap-2 group transition-transform duration-300 text-[#646464]"
//             onClick={handleUrlChange}
//           >
//             <span className="">Learn More</span>
//             <BsArrowRight
//               fontSize={20}
//               className="duration-300 w-0 overflow-hidden group-hover:w-fit group-hover:ml-2 group-hover:scale-105 mt-0.5"
//             />
//           </button>
//           {/* <button
//             className="flex justify-center items-center bg-backgroundColor absolute -bottom-14 py-2 px-4 group w-[173px] overflow-hidden "
//             onClick={handleUrlChange}
//           >
//             <span className="transform group-hover:-translate-x-1 transition-transform duration-300">
//               Learn More
//             </span>
//             <MdOutlineArrowRightAlt className="mt-1 group-hover:opacity-100 opacity-0 transition-opacity duration-300 transform group-hover:translate-x-2" />
//           </button> */}
//         </div>

//         {/* Main Image Carousel */}
//         <Carousel
//           plugins={[autoplay.current]}
//           className="w-full ml-12"
//           opts={{ align: "start" }}
//           onMouseEnter={autoplay.current.stop}
//           onMouseLeave={autoplay.current.reset}
//           setApi={setEmblaApi2}
//         >
//           <CarouselContent>
//             {CarouselData.map((item, index) => (
//               <CarouselItem key={index} className="basis-7/12">
//                 <div>
//                   <Card>
//                     <CardContent>
//                       <Image
//                         src={item.image}
//                         alt={item.text}
//                         height={400}
//                         width={600}
//                         className="h-[300px] w-[650px] object-cover"
//                       />
//                     </CardContent>
//                   </Card>
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious className="top-[375px] left-0" />
//           <CarouselNext className="top-[375px] left-12" />
//         </Carousel>
//       </div>
//     </div>
//   );
// }




// "use client";

// import * as React from "react";
// import Autoplay from "embla-carousel-autoplay";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { BsArrowRight } from "react-icons/bs";

// const CarouselData = [
//   {
//     text: `PU\nLacquer`,
//     image: "/images/about/eco-friendly.png",
//     URL: "/about/finish/puLacquerPaint",
//   },
//   {
//     text: "PET",
//     image: "/images/about/eco-friendly.png",
//     URL: "/about/finish/pet",
//   },
//   {
//     text: "Glass",
//     image: "/images/about/eco-friendly.png",
//     URL: "/about/finish/glass",
//   },
// ];

// export function CombinedCarousel() {
//   const [emblaApi, setEmblaApi] = React.useState<any>(null);
//   const [emblaApi2, setEmblaApi2] = React.useState<any>(null);

//   const autoplay = React.useRef(
//     Autoplay({ delay: 2000, stopOnInteraction: true }) as unknown as any
//   );

//   const router = useRouter();

//   React.useEffect(() => {
//     if (emblaApi && emblaApi2) {
//       const syncScroll = () => {
//         emblaApi2.scrollTo(emblaApi.selectedScrollSnap(), false);
//       };

//       emblaApi.on("select", syncScroll);
//       emblaApi2.on("select", () => {
//         emblaApi.scrollTo(emblaApi2.selectedScrollSnap(), false);
//       });

//       // Initialize carousels with synced scroll position
//       syncScroll();

//       return () => {
//         emblaApi.off("select", syncScroll);
//         emblaApi2.off("select", () => {
//           emblaApi.scrollTo(emblaApi2.selectedScrollSnap(), false);
//         });
//       };
//     }
//   }, [emblaApi, emblaApi2]);

//   const handleUrlChange = () => {
//     if (emblaApi) {
//       const selectedIndex = emblaApi.selectedScrollSnap();
//       const selectedItem = CarouselData[selectedIndex];
//       router.push(selectedItem.URL);
//     }
//   };

//   return (
//     <div className="relative w-full mx-auto mb-20">
//       <div className="flex">
//         {/* Vertical Carousel */}
//         <div className="flex w-1/4 min-w-[200px]">
//           <Carousel
//             opts={{ align: "start" }}
//             orientation="vertical"
//             className="w-full content-end"
//             setApi={setEmblaApi}
//           >
//             <CarouselContent className="h-[100px] mb-4 flex">
//               {CarouselData.map((item, index) => (
//                 <CarouselItem key={index} className="content-end">
//                   <div
//                     className="text-3xl"
//                     style={{ whiteSpace: "pre-line" }}
//                   >
//                     {item.text}
//                   </div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//           </Carousel>

//           <button
//             className="flex justify-center items-center bg-backgroundColor absolute -bottom-14 w-48 mt-10 py-3 text-xl font-medium gap-2 group transition-transform duration-300 text-textOptional"
//             onClick={handleUrlChange}
//           >
//             <span>Learn More</span>
//             <BsArrowRight
//               fontSize={20}
//               className="duration-300 w-0 overflow-hidden group-hover:w-fit group-hover:ml-2 group-hover:scale-105 mt-0.5"
//             />
//           </button>
//         </div>

//         {/* Main Image Carousel */}
//         <Carousel
//           plugins={[autoplay.current]}
//           className="w-full ml-12"
//           opts={{ align: "start" }}
//           onMouseEnter={autoplay.current.stop}
//           onMouseLeave={autoplay.current.reset}
//           setApi={setEmblaApi2}
//         >
//           <CarouselContent>
//             {CarouselData.map((item, index) => (
//               <CarouselItem key={index} className="basis-7/12">
//                 <div>
//                   <Card>
//                     <CardContent>
//                       <Image
//                         src={item.image}
//                         alt={item.text}
//                         height={400}
//                         width={600}
//                         className="h-[300px] w-[650px] object-cover"
//                       />
//                     </CardContent>
//                   </Card>
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious className="top-[375px] left-0" />
//           <CarouselNext className="top-[375px] left-12" />
//         </Carousel>
//       </div>
//     </div>
//   );
// }


"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsArrowRight } from "react-icons/bs";

const CarouselData = [
  {
    text: `PU\nLacquer`,
    image: "/images/about/pu.png",
    URL: "/about/finish/puLacquerPaint",
  },
  {
    text: "PET",
    image: "/images/about/pet.png",
    URL: "/about/finish/pet",
  },
  {
    text: "Glass",
    image: "/images/about/eco-friendly.png",
    URL: "/about/finish/glass",
  },
  {
    text: "UV Lacquer",
    image: "/images/about/uv.jpg",
    URL: "/about/finish/uv",
  },
  {
    text: "Synchronous MDF",
    image: "/images/about/mdf.jpg",
    URL: "/about/finish/synchronous",
  },
  {
    text: "HPL",
    image: "/images/about/hpl.jpg",
    URL: "/about/finish/hpl",
  }
];

export function CombinedCarousel() {
  const [emblaApi, setEmblaApi] = React.useState<any>(null);
  const [emblaApi2, setEmblaApi2] = React.useState<any>(null);

  const autoplay = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }) as unknown as any
  );

  const router = useRouter();

  React.useEffect(() => {
    if (emblaApi && emblaApi2) {
      const syncScroll = () => {
        emblaApi2.scrollTo(emblaApi.selectedScrollSnap(), false);
      };

      emblaApi.on("select", syncScroll);
      emblaApi2.on("select", () => {
        emblaApi.scrollTo(emblaApi2.selectedScrollSnap(), false);
      });

      // Initialize carousels with synced scroll position
      syncScroll();

      return () => {
        emblaApi.off("select", syncScroll);
        emblaApi2.off("select", () => {
          emblaApi.scrollTo(emblaApi2.selectedScrollSnap(), false);
        });
      };
    }
  }, [emblaApi, emblaApi2]);

  const handleUrlChange = () => {
    if (emblaApi) {
      const selectedIndex = emblaApi.selectedScrollSnap();
      const selectedItem = CarouselData[selectedIndex];
      router.push(selectedItem.URL);
    }
  };

  return (
    <div className="relative w-full mx-auto mb-20">
      <div className="flex">
        {/* Vertical Carousel */}
        <div className="flex w-1/4 min-w-[200px] ">
          <Carousel
            opts={{ align: "start" }}
            orientation="vertical"
            className="w-full content-end"
            setApi={setEmblaApi}
          >
            <CarouselContent className="h-[100px] mb-4 flex">
              {CarouselData.map((item, index) => (
                <CarouselItem key={index} className="content-end">
                  <div
                    className="text-3xl"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {item.text}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <button
            className="flex justify-center items-center bg-backgroundColor absolute -bottom-14 w-48 mt-10 py-3 text-xl font-medium gap-2 group transition-transform duration-300 text-textOptional"
            onClick={handleUrlChange}
          >
            <span>Learn More</span>
            <BsArrowRight
              fontSize={20}
              className="duration-300 w-0 overflow-hidden group-hover:w-fit group-hover:ml-2 group-hover:scale-105 mt-0.5"
            />
          </button>
        </div>

        {/* Main Image Carousel */}
        <Carousel
          plugins={[autoplay.current]}
          className="w-full ml-12"
          opts={{ align: "start" }}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          setApi={setEmblaApi2}
        >
          <CarouselContent>
            {CarouselData.map((item, index) => (
              <CarouselItem key={index} className="basis-7/12">
                <div className=" ">
                  <Card>
                    <CardContent>
                      <Image
                        src={item.image}
                        alt={item.text}
                        height={400}
                        width={600}
                        className="h-[300px] w-[650px] object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-[40px]">
          <CarouselPrevious className="top-[375px] left-0" />
          <CarouselNext className="top-[375px] left-12" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
