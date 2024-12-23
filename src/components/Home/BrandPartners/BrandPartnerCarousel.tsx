// "use client";

// import * as React from "react";
// import Autoplay from "embla-carousel-autoplay";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardTitle,
// } from "@/components/ui/card";
// import { FaArrowRight } from "react-icons/fa6";

// import Image from "next/image";
// import {
//   CarouselB,
//   CarouselContent,
//   CarouselItem,
//   CarouselPrevious,
//   CarouselNext,
// } from "../../ui/CarouselB";
// import { Button } from "../../ui/button";

// const brCaroImg1 = "/images/homepage/brandpartners/1.png";
// const brCaroImg2 = "/images/homepage/brandpartners/2.png";
// const brCaroImg3 = "/images/homepage/brandpartners/3.png";
// const brCaroImg4 = "/images/homepage/brandpartners/4.png";
// const brCaroImg5 = "/images/homepage/brandpartners/5.png";
// const brCaroImg6 = "/images/homepage/brandpartners/6.png";

// const CarouselData = [
//   {
//     title: "Blum",
//     image: brCaroImg1,
//     details:
//       "The name Blum stands for innovation, dedicated employees and international market presence. Julius Blum founded the company on 1 March 1952. His first product was a horseshoe stud. Today BLUM are one of the world’s leading manufacturers of furniture fittings. Discover innovative fittings for kitchens and living areas throughout the home. Scroll left or right or click a room. The orange dots will tell you more about Blum products.",
//   },
//   {
//     title: "Grass",
//     image: brCaroImg2,
//     details:
//       "A globally successful group of companies, a fresh brand with tradition and an extraordinary diversity of perspectives – that’s GRASS in a nutshell. As development partner and systems supplier to the furniture industry, GRASS has been creating products which inspire its customers for more than 65 years. The history of the Mepla factory goes further back still, the company having manufactured furniture fittings in Germany. The GRASS brand stands for visionary development, top quality, technical pr",
//   },
//   {
//     title: "Kessebohmer",
//     image: brCaroImg3,
//     details:
//       "The name Kesseböhmer stands for innovative solutions and a powerful blend of design, function and quality. Kesseböhmer has a high level of vertical integration, with all production processes in-house. Kesseböhmer is a family-run business founded in 1954. Our core competence is in metal processing. We work with wire, flat band and tubing and our products are finished in our in-house electroplating and powder-coating facilities.",
//   },
//   {
//     title: "Hafele",
//     image: brCaroImg4,
//     details:
//       "Hafele, an international company providing hardware and fitting systems and electronic locking systems, has a long and rich history that began in 1923. Today customers from 150 countries rely on Häfele's expertise and performance.",
//   },
//   {
//     title: "Blanco",
//     image: brCaroImg5,
//     details:
//       "Choosing a kitchen sink and mixer tap is one of the most important decisions when planning your new kitchen. Some people overlook this and get their kitchen plan wrong. And rue it every day thereafter. Thousands of times. Every day, for many years. We spend around 60% of our time in the kitchen at or near the sink. The sink is the top of the magic triangle of oven, sink and refrigerator. It’s not difficult. Simply plan the right sink and mixer tap to go in the right place. We know something abou",
//   },
//   {
//     title: "Teka",
//     image: brCaroImg6,
//     details:
//       'The Teka Group is a multinational company founded in Germany in 1924 and engag ed in the manufacture and commercialization of kitchen products. One of Teka\'s most important business areas is in the "White Goods Line", which refers to kitchen-related electrical appliances such as oven, washing machines, refrigerators, freezers and dishwashers, among others. Since the outset, Teka has committed to integrating electrical appliances into kitchen furniture, a practice known as built-in or fitted kitch',
//   },
// ];

// export function BrandPartnerCarousel() {
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

//   const [clickedIndex, setClickedIndex] = React.useState(null);

//   const CarouselButtonClicked = (index) => {
//     setClickedIndex(index);
//     if (emblaApi2) {
//       emblaApi2.scrollTo(index);
//     }
//   };

//   return (

//     <div className="flex gap-8 justify-between items-center">
//       <div className="w-full">
//         {CarouselData.map((item, index) => (
//           <div key={index} className={`flex flex-col  `}>
//             <div className="flex justify-between items-center">
//               <div className="text-4xl">{item.title}</div>
//               <button
//                 className={`${
//                   clickedIndex === index ? "rotate-0" : "-rotate-45"
//                 } transition-transform duration-300 bg-brandColor text-backgroundColor rounded-full h-16 w-16 flex items-center justify-center`}
//                 onClick={() => CarouselButtonClicked(index)}
//               >
//                 <FaArrowRight size={24} />
//               </button>
//             </div>
//             <div
//               className={` w-full border-b-2 border-textOptional my-4 ${
//                 index == 5 ? "border-b-transparent" : ""
//               } `}
//             />
//           </div>
//         ))}
//       </div>

//       <div className="w-2/5 h-full relative">
//         <div className="flex">
//           {/* Main Image Carousel */}
//           <CarouselB
//             plugins={[autoplay.current]}
//             className="relative w-full h-full "
//             opts={{ align: "start" }}
//             onMouseEnter={autoplay.current.stop}
//             onMouseLeave={autoplay.current.reset}
//             setApi={setEmblaApi2}
//           >
//             <CarouselContent>
//               {CarouselData.map((item, index) => (
//                 <CarouselItem key={index} className="">
//                   <Card className="flex flex-col justify-between">
//                     <CardContent>
//                       <Image
//                         src={item.image}
//                         alt={item.title}
//                         height={800}
//                         width={800}
//                         className="h-[340px] w-full object-cover"
//                       />
//                     </CardContent>
//                     <CardDescription className="my-6 min-h-max">
//                       {item.details}
//                     </CardDescription>
//                     <div className="relative flex items-center my-8 group  rounded-full">
//                       <Button className="bg-brandColorHover rounded-full group-hover:pr-12 ">
//                         Learn More
//                       </Button>
//                       <div className="absolute left-[100px] -rotate-45 group-hover:rotate-0 transition-all group-hover:bg-brandColor  text-backgroundColor rounded-full h-10 w-10 p-3 flex items-center justify-center bg-brandColorHover  ">
//                         <FaArrowRight />
//                       </div>
//                     </div>
//                   </Card>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//           </CarouselB>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import * as React from "react";
// import Autoplay from "embla-carousel-autoplay";
// import { Card, CardContent, CardDescription } from "@/components/ui/card";
// import { FaArrowRight } from "react-icons/fa6";
// import Image from "next/image";
// import { CarouselB, CarouselContent, CarouselItem } from "../../ui/CarouselB";
// import { Button } from "../../ui/button";
// import { Icon10, Icon5, Icon6, Icon7, Icon8, Icon9 } from "@/components/ui/all-svg/SVGFile";

// const brCaroImg1 = "/images/homepage/brandpartners/1.png";
// const brCaroImg2 = "/images/homepage/brandpartners/2.png";
// const brCaroImg3 = "/images/homepage/brandpartners/3.png";
// const brCaroImg4 = "/images/homepage/brandpartners/4.png";
// const brCaroImg5 = "/images/homepage/brandpartners/5.png";
// const brCaroImg6 = "/images/homepage/brandpartners/6.png";

// const CarouselData = [
//   {
//     titleImage: Icon5,
//     image: brCaroImg1,
//     details:
//       "The name Blum stands for innovation, dedicated employees and international market presence...",
//   },
//   {
//     titleImage: Icon6,
//     image: brCaroImg2,
//     details:
//       "A globally successful group of companies, a fresh brand with tradition and an extraordinary diversity...",
//   },
//   {
//     titleImage: Icon7,
//     image: brCaroImg3,
//     details:
//       "The name Kesseböhmer stands for innovative solutions and a powerful blend of design, function and quality...",
//   },
//   {
//     titleImage: Icon8,
//     image: brCaroImg4,
//     details:
//       "Hafele, an international company providing hardware and fitting systems and electronic locking systems...",
//   },
//   {
//     titleImage: Icon9,
//     image: brCaroImg5,
//     details:
//       "Choosing a kitchen sink and mixer tap is one of the most important decisions when planning your new kitchen...",
//   },
//   {
//     titleImage: Icon10,
//     image: brCaroImg6,
//     details:
//       "The Teka Group is a multinational company founded in Germany in 1924 and engaged in the manufacture...",
//   },
// ];

// export function BrandPartnerCarousel() {
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

//       syncScroll();

//       return () => {
//         emblaApi.off("select", syncScroll);
//         emblaApi2.off("select", () => {
//           emblaApi.scrollTo(emblaApi2.selectedScrollSnap(), false);
//         });
//       };
//     }
//   }, [emblaApi, emblaApi2]);

//   const [clickedIndex, setClickedIndex] = React.useState<number | null>(null);

//   const CarouselButtonClicked = (index: number) => {
//     setClickedIndex(index);
//     if (emblaApi2) {
//       emblaApi2.scrollTo(index);
//     }
//   };

//   return (
//     <div className="flex flex-col lg:flex-row gap-8 justify-between items-center ">
//       <div className="w-full lg:w-2/5">
//         {CarouselData.map((item:any, index:number) => (
//           <div key={index} className="flex flex-col">
//             <div className="flex justify-between items-center">
//               <div className="text-2xl md:text-3xl lg:text-4xl">
//                  <item.titleImage  />
//               </div>
//               <button
//                 className={`${
//                   clickedIndex === index ? "rotate-0" : "-rotate-45"
//                 } transition-transform duration-300 bg-brandColor text-backgroundColor rounded-full h-10 w-10 lg:h-12 lg:w-12 flex items-center justify-center`}
//                 onClick={() => CarouselButtonClicked(index)}
//               >
//                 <FaArrowRight size={20} />
//               </button>
//             </div>
//             <div
//               className={`w-full border-b-2 border-textOptional my-2 md:my-4 ${
//                 index === 5 ? "border-b-transparent" : ""
//               }`}
//             />
//           </div>
//         ))}
//       </div>

//       <div className="w-full lg:w-3/5 h-full relative">
//         <div className="flex">
//           <CarouselB
//             plugins={[autoplay.current]}
//             className="relative w-full h-full"
//             opts={{ align: "start" }}
//             onMouseEnter={autoplay.current.stop}
//             onMouseLeave={autoplay.current.reset}
//             setApi={setEmblaApi2}
//           >
//             <CarouselContent>
//               {CarouselData.map((item, index) => (
//                 <CarouselItem key={index} className="">
//                   <Card className="flex flex-col justify-between">
//                     <CardContent>
//                       <Image
//                         src={item.image}
//                         alt="SVG"
//                         height={340}
//                         width={631}
//                         className="h-[200px] md:h-[340px] w-full object-cover"
//                       />
//                     </CardContent>
//                     <CardDescription className="my-6">
//                       {item.details}
//                     </CardDescription>

//                     <div className="flex lg:justify-start justify-center items-center">
//                       <div className="relative flex justify-start items-center my-4 md:my-8 group rounded-full">
//                         <Button className="bg-brandColorHover rounded-full lg:group-hover:pr-12 text-sm md:text-base lg:text-lg ">
//                           Learn More
//                         </Button>

//                         <div
//                           className="absolute left-[100px] md:left-[110px] lg:left-[120px] -rotate-45 lg:group-hover:rotate-0 transition-all
//                         lg:group-hover:bg-brandColor bg-brandColor
//                          text-backgroundColor
//                         rounded-full h-8 w-8 md:h-10 md:w-10 p-2 md:p-3 flex items-center justify-center "
//                         >
//                           <FaArrowRight className="cursor-pointer" />
//                         </div>
//                       </div>
//                     </div>
//                   </Card>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//           </CarouselB>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { CarouselB, CarouselContent, CarouselItem } from "../../ui/CarouselB";
import { Button } from "../../ui/button";
import {
  Icon10,
  Icon5,
  Icon6,
  Icon7,
  Icon8,
  Icon9,
} from "@/components/ui/all-svg/SVGFile";
import Link from "next/link";

const brCaroImg1 = "/images/homepage/brandpartners/1.png";
const brCaroImg2 = "/images/homepage/brandpartners/2.png";
const brCaroImg3 = "/images/homepage/brandpartners/3.png";
const brCaroImg4 = "/images/homepage/brandpartners/4.png";
const brCaroImg5 = "/images/homepage/brandpartners/5.png";
const brCaroImg6 = "/images/homepage/brandpartners/6.png";

const CarouselData = [
  {
    titleImage: Icon5,
    image: brCaroImg1,
    details:
      "The name Blum stands for innovation, dedicated employees and international market presence. Julius Blum founded the company on 1 March 1952. His first product was a horseshoe stud. Today BLUM are one of the world’s leading manufacturers of furniture fittings. Discover innovative fittings for kitchens and living areas throughout the home. Scroll left or right or click a room. The orange dots will tell you more about Blum products",
    link: "/blum",
  },
  {
    titleImage: Icon6,
    image: brCaroImg2,
    details:
      "A globally successful group of companies, a fresh brand with tradition and an extraordinary diversity of perspectives – that’s GRASS in a nutshell. As development partner and systems supplier to the furniture industry, GRASS has been creating products which inspire its customers for more than 65 years. The history of the Mepla factory goes further back still, the company having manufactured furniture fittings in Germany. The GRASS brand stands for visionary development, top quality, technical product.",
    link: "/grass",
  },
  {
    titleImage: Icon7,
    image: brCaroImg3,
    details:
      "The name Kesseböhmer stands for innovative solutions and a powerful blend of design, function and quality. Kesseböhmer has a high level of vertical integration, with all production processes in-house. Kesseböhmer is a family-run business founded in 1954. Our core competence is in metal processing. We work with wire, flat band and tubing and our products are finished in our in-house electroplating and powder-coating facilities.",
    link: "/kessebohmer",
  },
  {
    titleImage: Icon8,
    image: brCaroImg4,
    details:
      "Hafele, an international company providing hardware and fitting systems and electronic locking systems, has a long and rich history that began in 1923. Today customers from 150 countries rely on Häfele's expertise and performance.",
    link: "/hafele",
  },
  {
    titleImage: Icon9,
    image: brCaroImg5,
    details:
      "Choosing a kitchen sink and mixer tap is one of the most important decisions when planning your new kitchen. Some people overlook this and get their kitchen plan wrong. And rue it every day thereafter. Thousands of times. Every day, for many years. We spend around 60% of our time in the kitchen at or near the sink. The sink is the top of the magic triangle of oven, sink and refrigerator. It’s not difficult. Simply plan the right sink and mixer tap to go in the right place. We know something about",
    link: "/blanco",
  },
  {
    titleImage: Icon10,
    image: brCaroImg6,
    details:
      "The Teka Group is a multinational company founded in Germany in 1924 and engaged in the manufacture and commercialization of kitchen products. One of Teka's most important business areas is in the 'White Goods Line', which refers to kitchen-related electrical appliances such as oven, washing machines, refrigerators, freezers and dishwashers, among others. Since the outset, Teka has committed to integrating electrical appliances into kitchen furniture, a practice known as built-in or fitted kitchen",
    link: "/teka",
  },
];

export function BrandPartnerCarousel() {
  const [emblaApi, setEmblaApi] = React.useState<any>(null);
  const [emblaApi2, setEmblaApi2] = React.useState<any>(null);

  // const autoplay = React.useRef<any>(
  //   Autoplay({ delay: 2000, stopOnInteraction: true }) as any
  // );

  React.useEffect(() => {
    if (emblaApi && emblaApi2) {
      const syncScroll = () => {
        emblaApi2.scrollTo(emblaApi.selectedScrollSnap(), false);
      };

      emblaApi.on("select", syncScroll);
      emblaApi2.on("select", () => {
        emblaApi.scrollTo(emblaApi2.selectedScrollSnap(), false);
      });

      syncScroll();

      return () => {
        emblaApi.off("select", syncScroll);
        emblaApi2.off("select", () => {
          emblaApi.scrollTo(emblaApi2.selectedScrollSnap(), false);
        });
      };
    }
  }, [emblaApi, emblaApi2]);

  //const [clickedIndex, setClickedIndex] = React.useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = React.useState<number>(0);
  const CarouselButtonClicked = (index: number) => {
    setClickedIndex(index);
    if (emblaApi2) {
      emblaApi2.scrollTo(index);
    }
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-10 mb-28 justify-between items-start">
      <div className="w-full lg:w-2/5 py-4 ">
        {CarouselData.map((item: any, index: number) => (
          <div key={index} className="flex flex-col">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => CarouselButtonClicked(index)} // Moved the onClick to the parent div
            >
              <div className="text-2xl md:text-3xl lg:text-4xl">
                <item.titleImage />
              </div>
              <button
                className={`${
                  clickedIndex === index
                    ? "rotate-0 bg-brandColor"
                    : "-rotate-45 bg-brandColorHover"
                } transition-transform duration-300 text-backgroundColor rounded-full h-10 w-10 lg:h-12 lg:w-12 flex items-center justify-center`}
              >
                <FaArrowRight size={20} />
              </button>
            </div>
            <div
              className={`w-full border-b-2 border-textOptional my-2 md:my-4 ${
                index === 5 ? "border-b-transparent" : ""
              }`}
            />
          </div>
        ))}
      </div>

      <div className="w-full lg:w-3/5 h-full relative ">
        <div className="flex">
          <CarouselB
            // plugins={[autoplay.current]}
            className="relative w-full h-full"
            opts={{ align: "start" }}
            // onMouseEnter={autoplay.current.stop}
            // onMouseLeave={autoplay.current.reset}
            setApi={setEmblaApi2}
          >
            <CarouselContent>
              {CarouselData.map((item, index) => (
                <CarouselItem key={index} className="">
                  <Card className="flex flex-col gap-6">
                    <div>
                      <CardContent>
                        <Image
                          src={item.image}
                          alt="SVG"
                          height={340}
                          width={631}
                          className="h-[200px] md:h-[340px] w-full object-cover"
                        />
                      </CardContent>
                    </div>

                    <div>
                      <CardDescription>
                        <div className="text-text text-base font-normal text-justify">
                          {" "}
                          {item.details}
                        </div>
                      </CardDescription>
                    </div>

                    <Link href={item.link}>
                      <div className="flex justify-start  items-center cursor-pointer">
                        <div className="relative flex lg:justify-start items-center group rounded-full">
                          <Button className="bg-brandColorHover font-medium rounded-full lg:group-hover:pr-12 py-6 text-sm md:text-base lg:text-lg hover:bg-brandColorHover">
                            Learn More
                          </Button>

                          <div
                            className="absolute left-[100px] md:left-[110px] lg:left-[120px] -rotate-45 lg:group-hover:rotate-0 transition-all duration-300
                        lg:group-hover:bg-brandColor bg-brandColorHover
                         text-backgroundColor 
                        rounded-full h-12 w-12 
                        p-2 md:p-3 
                        flex items-center justify-center "
                          >
                            <FaArrowRight className="cursor-pointer" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </CarouselB>
        </div>
      </div>
    </div>
  );
}
