// // import { Card, CardContent } from "@/components/ui/card";
// import { Card, CardContent } from "@/components/ui/finishMobileCarousel";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselNextAbout,
//   CarouselPrevious,
// } from "@/components/ui/finishCarousel";
// import Image from "next/image";

// const page = () => {
//   const glass = [
//     "/images/about/glass/img1.png",
//     "/images/about/glass/img2.png",
//     "/images/about/glass/img3.png",
//   ];
//   return (
//     <div className="container mx-auto lg:py-12 py-6">
//       <div className="grid grid-cols-1 gap-20">
//         {/* <div className="flex flex-col gap-10">
//           <div className="flex flex-col gap-6">
//             <div className="text-text text-5xl font-normal">Glass</div>

//             <div>
//               <p className="textSecondary text-base font-normal">
//               Glass Kitchens offer a luxurious design with durability of fronts
//               that will last for a century. This is the most beautiful solution
//               to a modern kitchen design. We offer five styles of doors. Some
//               offer a frame that can be exposed on the front and others can be
//               fully concealed while exposing a beautifully beveled edge of
//               glass. We use 3-4mm thick glass imported from Belgium that is
//               painted from the back side and has safety foil that protects door
//               surfaces from scratches. These kitchens and closets blend
//               beautifully with stainless steel appliances and metal decorative
//               elements.
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-col gap-6 ">
//             <div>
//               <p className="text-3xl text-textSecondary font-normal ">Technical information</p>
//             </div>

//             <div>
//               <p className="text-base text-textSecondary font-normal">
//               Glass Kitchens are made of laminate boxes, Blum hardware, aluminum
//               frame glass doors and side panels. The doors are made with painted
//               glass, as well as clear, frosted or decorative glass elements.
//               They are available in aluminum, stainless steel, chrome, bronze,
//               and black finishes. Each cabinet door contains individually
//               painted glass, which is inserted into an aluminum frame. Painted
//               glass inserts are available in a high gloss or satin (fingerprint
//               free) look finish. Production time 5 weeks, shipping 3-5 business
//               days. Our custom aluminum frame cabinet doors are a contemporary
//               addition to residential and commercial interiors. Whether kitchen
//               cabinet doors, office furniture doors or closet storage or
//               furniture accents, aluminum frame doors are made to our customers’
//               specifications and include all functional and decorative hardware
//               borings. The aluminum frames which come in a variety of finishes
//               provide endless design possibilities when combined with our
//               numerous glass, and custom insert options. We will drill the doors
//               for Left, Right, or Opening Up applications. Drawer front
//               applications will be drilled by the customer. As the European
//               market has embraced aluminum doors over the last decade, their
//               popularity in the Bangladesh is quickly growing.
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-col gap-6 ">
//             <div>
//              <p className="text-3xl text-textSecondary font-normal "> Craftsmanship</p>
//             </div>

//             <div>
//               <p className="text-base text-textSecondary font-normal ">Our aluminum doors are assembled with pride as well as the
//               discriminating eye. The doors are inspected prior to shipment to
//               you, that they meet all of our finished door criteria.</p>
//             </div>
//           </div>

//           <div className="flex flex-col gap-6 ">
//             <div>
//              <p className="text-3xl text-textSecondary font-normal"> Custom Door Sizes</p>
//             </div>

//             <div>
//               <p className="text-base text-textSecondary font-normal ">Our doors are made to your size requirements in both height and
//               width from a minimum door / drawer size of 6” up large doors to
//               86”.</p>
//             </div>
//           </div>

//           <div className="flex flex-col gap-6 ">
//             <div>
//               <p className="text-3xl text-textSecondary font-normal">Natural Aluminum Finish</p>
//             </div>

//             <div className="text-base text-textSecondary font-normal">
//               <p>Our doors have a high quality clear coat satin anodized finish.
//               The Annodizweation process adds a protective coat to help prevent
//               scratches. As a result, our aluminum doors maintain their du</p>
//             </div>
//           </div>
//         </div>

//         <div className="w-full h-auto">
//           <Carousel>
//             <CarouselContent>
//               {glass.map((glass, index) => {
//                 return (
//                   <CarouselItem key={index}>
//                     <div className="  ">
//                       <Card>
//                         <CardContent>
//                           <Image
//                             className="h-auto w-full"
//                             src={glass}
//                             alt={`${index + 1}`}
//                             width={760}
//                             height={600}
//                           />
//                         </CardContent>
//                       </Card>
//                     </div>
//                   </CarouselItem>
//                 );
//               })}
//             </CarouselContent>
           
//             <div className="absolute z-20 bottom-[28px] -left-[27px]">
//                 <CarouselPrevious className="w-[3.8rem] h-[3.5rem] -left-[33px]" />
//                 <CarouselNextAbout className="w-[3.8rem] h-[3.5rem] right-[15px]" />
//               </div>
//           </Carousel>
//         </div> */}
//          <div className="text-text text-5xl font-normal text-center">Glass</div>
//          <div className="w-full h-auto">
//           <Carousel>
//             <CarouselContent>
//               {glass.map((glass, index) => {
//                 return (
//                   <CarouselItem key={index}>
//                     <div className="  ">
//                       <Card>
//                         <CardContent>
//                           <Image
//                             className="h-auto w-full"
//                             src={glass}
//                             alt={`${index + 1}`}
//                             width={760}
//                             height={600}
//                           />
//                         </CardContent>
//                       </Card>
//                     </div>
//                   </CarouselItem>
//                 );
//               })}
//             </CarouselContent>
           
//             {/* <div className="absolute z-20 bottom-[28px] -left-[27px]">
//                 <CarouselPrevious className="w-[3.8rem] h-[3.5rem] -left-[33px]" />
//                 <CarouselNextAbout className="w-[3.8rem] h-[3.5rem] right-[15px]" />
//               </div> */}
//           </Carousel>
//         </div> 
//         <div className="flex flex-col gap-10">
//           <div className="flex flex-col gap-6">
//             <div className="text-text text-5xl font-normal">Glass</div>

//             <div>
//               <p className="textSecondary text-base font-normal">
//               Glass Kitchens offer a luxurious design with durability of fronts
//               that will last for a century. This is the most beautiful solution
//               to a modern kitchen design. We offer five styles of doors. Some
//               offer a frame that can be exposed on the front and others can be
//               fully concealed while exposing a beautifully beveled edge of
//               glass. We use 3-4mm thick glass imported from Belgium that is
//               painted from the back side and has safety foil that protects door
//               surfaces from scratches. These kitchens and closets blend
//               beautifully with stainless steel appliances and metal decorative
//               elements.
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-col gap-6 ">
//             <div>
//               <p className="text-3xl text-textSecondary font-normal ">Technical information</p>
//             </div>

//             <div>
//               <p className="text-base text-textSecondary font-normal">
//               Glass Kitchens are made of laminate boxes, Blum hardware, aluminum
//               frame glass doors and side panels. The doors are made with painted
//               glass, as well as clear, frosted or decorative glass elements.
//               They are available in aluminum, stainless steel, chrome, bronze,
//               and black finishes. Each cabinet door contains individually
//               painted glass, which is inserted into an aluminum frame. Painted
//               glass inserts are available in a high gloss or satin (fingerprint
//               free) look finish. Production time 5 weeks, shipping 3-5 business
//               days. Our custom aluminum frame cabinet doors are a contemporary
//               addition to residential and commercial interiors. Whether kitchen
//               cabinet doors, office furniture doors or closet storage or
//               furniture accents, aluminum frame doors are made to our customers’
//               specifications and include all functional and decorative hardware
//               borings. The aluminum frames which come in a variety of finishes
//               provide endless design possibilities when combined with our
//               numerous glass, and custom insert options. We will drill the doors
//               for Left, Right, or Opening Up applications. Drawer front
//               applications will be drilled by the customer. As the European
//               market has embraced aluminum doors over the last decade, their
//               popularity in the Bangladesh is quickly growing.
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-col gap-6 ">
//             <div>
//              <p className="text-3xl text-textSecondary font-normal "> Craftsmanship</p>
//             </div>

//             <div>
//               <p className="text-base text-textSecondary font-normal ">Our aluminum doors are assembled with pride as well as the
//               discriminating eye. The doors are inspected prior to shipment to
//               you, that they meet all of our finished door criteria.</p>
//             </div>
//           </div>

//           <div className="flex flex-col gap-6 ">
//             <div>
//              <p className="text-3xl text-textSecondary font-normal"> Custom Door Sizes</p>
//             </div>

//             <div>
//               <p className="text-base text-textSecondary font-normal ">Our doors are made to your size requirements in both height and
//               width from a minimum door / drawer size of 6” up large doors to
//               86”.</p>
//             </div>
//           </div>

//           <div className="flex flex-col gap-6 ">
//             <div>
//               <p className="text-3xl text-textSecondary font-normal">Natural Aluminum Finish</p>
//             </div>

//             <div className="text-base text-textSecondary font-normal">
//               <p>Our doors have a high quality clear coat satin anodized finish.
//               The Annodizweation process adds a protective coat to help prevent
//               scratches. As a result, our aluminum doors maintain their du</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/finishComponentCarousel"
  import Image from "next/image";
  import Link from "next/link";
  import { BsArrowRight } from "react-icons/bs";
 
  const GlassMobileResponsive = () => {
    const images = [
      {
        text: `PU\nLacquer`,
        image: "/images/about/glass/img1.png",
        URL: "/about/finish/puLacquerPaint",
      },
      {
        text: "PET",
        image: "/images/about/glass/img2.png",
        URL: "/about/finish/pet",
      },
      {
        text: "Glass",
        image: "/images/about/glass/img3.png",
        URL: "/about/finish/glass",
      },
    ];
    return (
      <div className="container mx-auto lg:py-12 py-6">
        <div className="grid grid-cols-1 gap-6">
           <div className="text-text text-3xl md:text-5xl font-normal text-center">Glass</div>
           <div className="w-full h-auto">
           <Carousel className="w-full ">
            <CarouselContent>
              {images.map((product, index) => (
                <CarouselItem key={index}>
                  <div>
                    <div className=" rounded-lg overflow-hidden">
                      <div className="flex flex-col items-center justify-center ">
                        <Image
                          src={product.image}
                          alt={`Image - ${product.text}`}
                          width={800}
                          height={800}
                          className="object-cover rounded-lg w-auto h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious className="absolute -top-[-140px] md:top-[60%] -left-[30px] md:-left-[0px] transform -translate-y-1/2 z-10 text-white bg-gray-800 rounded-full  -mt-12" />
            <CarouselNext className="absolute -top-[-140px]  md:top-[60%] -right-[30px] md:-right-[0px] transform -translate-y-1/2 z-10 text-white bg-gray-800 rounded-full  -mt-12" /> */}
             <CarouselPrevious className="absolute -top-[-140px] md:top-[60%] -left-[30px] md:-left-[35px] transform -translate-y-1/2 z-10 text-white bg-gray-800 rounded-full  -mt-12" />
             <CarouselNext className="absolute -top-[-140px]  md:top-[60%] -right-[30px] md:-right-[35px] transform -translate-y-1/2 z-10 text-white bg-gray-800 rounded-full  -mt-12" />
          </Carousel>
          </div> 
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-6">
              <div className="text-text text-xl md:text-3xl  font-normal">Glass</div>
  
              <div>
                <p className="textSecondary text-sm md:text-base font-normal">
                Glass Kitchens offer a luxurious design with durability of fronts
                that will last for a century. This is the most beautiful solution
                to a modern kitchen design. We offer five styles of doors. Some
                offer a frame that can be exposed on the front and others can be
                fully concealed while exposing a beautifully beveled edge of
                glass. We use 3-4mm thick glass imported from Belgium that is
                painted from the back side and has safety foil that protects door
                surfaces from scratches. These kitchens and closets blend
                beautifully with stainless steel appliances and metal decorative
                elements.
                </p>
              </div>
            </div>
  
            <div className="flex flex-col gap-6 ">
              <div>
                <p className="text-xl md:text-3xl text-textSecondary font-normal ">Technical information</p>
              </div>
  
              <div>
                <p className="text-sm md:text-base text-textSecondary font-normal">
                Glass Kitchens are made of laminate boxes, Blum hardware, aluminum
                frame glass doors and side panels. The doors are made with painted
                glass, as well as clear, frosted or decorative glass elements.
                They are available in aluminum, stainless steel, chrome, bronze,
                and black finishes. Each cabinet door contains individually
                painted glass, which is inserted into an aluminum frame. Painted
                glass inserts are available in a high gloss or satin (fingerprint
                free) look finish. Production time 5 weeks, shipping 3-5 business
                days. Our custom aluminum frame cabinet doors are a contemporary
                addition to residential and commercial interiors. Whether kitchen
                cabinet doors, office furniture doors or closet storage or
                furniture accents, aluminum frame doors are made to our customers’
                specifications and include all functional and decorative hardware
                borings. The aluminum frames which come in a variety of finishes
                provide endless design possibilities when combined with our
                numerous glass, and custom insert options. We will drill the doors
                for Left, Right, or Opening Up applications. Drawer front
                applications will be drilled by the customer. As the European
                market has embraced aluminum doors over the last decade, their
                popularity in the Bangladesh is quickly growing.
                </p>
              </div>
            </div>
  
            <div className="flex flex-col gap-6 ">
              <div>
               <p className="text-xl md:text-3xl text-textSecondary font-normal"> Craftsmanship</p>
              </div>
  
              <div>
                <p className="text-sm md:text-base text-textSecondary font-normal">Our aluminum doors are assembled with pride as well as the
                discriminating eye. The doors are inspected prior to shipment to
                you, that they meet all of our finished door criteria.</p>
              </div>
            </div>
  
            <div className="flex flex-col gap-6 ">
              <div>
               <p className="text-xl md:text-3xl text-textSecondary font-normal"> Custom Door Sizes</p>
              </div>
  
              <div>
                <p className="text-sm md:text-base text-textSecondary font-normal ">Our doors are made to your size requirements in both height and
                width from a minimum door / drawer size of 6” up large doors to
                86”.</p>
              </div>
            </div>
  
            <div className="flex flex-col gap-6 ">
              <div>
                <p className="text-xl md:text-3xl text-textSecondary font-normal">Natural Aluminum Finish</p>
              </div>
  
              <div className="text-sm md:text-base text-textSecondary font-normal">
                <p>Our doors have a high quality clear coat satin anodized finish.
                The Annodizweation process adds a protective coat to help prevent
                scratches. As a result, our aluminum doors maintain their du</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default GlassMobileResponsive;
  