/* eslint-disable react/no-unescaped-entities */
import React from 'react'
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
const PetMobileResponsive = () => {
    const images = [
        {
          text: `PU\nLacquer`,
          image: "/images/about/pet/img1.png",
          URL: "/about/finish/puLacquerPaint",
        },
        {
          text: "PET",
          image: "/images/about/pet/img2.png",
          URL: "/about/finish/pet",
        },
        {
          text: "Glass",
          image: "/images/about/pet/img3.png",
          URL: "/about/finish/glass",
        },
      ];
  return (
    <div>
       <div className="container mx-auto lg:py-12 py-6">
        <div className="grid grid-cols-1 gap-6">
           <div className="text-text text-3xl md:text-5xl font-normal text-center">Pet</div>
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
              <div className="text-text text-xl md:text-3xl  font-normal">Pet</div>
  
              {/* <div>
                <p className="textSecondary text-sm md:text-base font-normal">
                thermoplastic polymer, which is laminated to an MDF core with
            proprietary glue under high heat and pressure, creating an ideal
            surface for building cabinetry.
                </p>
              </div> */}
            </div>
  
            <div>
            <p className="text-base font-normal text-textSecondary">PET stands for “Poly Ethylene Terephthalate”. PET film is a
            thermoplastic polymer, which is laminated to an MDF core with
            proprietary glue under high heat and pressure, creating an ideal
            surface for building cabinetry.</p>
          </div>

          <div>
            <p className="text-base font-normal text-textSecondary">PET in its natural state is a colorless, semi-crystalline resin.
            Based on how it is processed, PET can be semi-rigid to rigid, and it
            is very lightweight. It makes a good gas and fair moisture barrier,
            as well as a good barrier to alcohol (requires additional "barrier"
            treatment) and solvents. It is strong and impact-resistant. PET
            becomes white when exposed to chloroform and also certain other
            chemicals such as toluene.</p>
          </div>

          <div>
            <p className="text-base font-normal text-textSecondary">PET materials are extremely heat and moisture resistant, especially
            when combined with zero- joint, no adhesive edge banding applied
            with our hot air edge bender. Applying the material to an MDF
            substrate with proprietary glue provides a stable, consistent and
            smooth finish. This virtually eliminates warping and rippling. There
            is no painting involved when using PET, saving time and money. Our
            PET materials are exact matches in super-matte or high-gloss,
            allowing for design consistency and flexibility throughout your home
            or office.</p>
          </div>

          <div>
            <p className="text-base font-normal text-textSecondary">PET doors and drawer fronts are available in a variety of timeless
            finishes that are perfect for today’s modern residential kitchens
            and baths, as well as, commercial offices. PET Super matte materials
            virtually eliminate finger prints and provide a soft touch and
            ambiance to the room. The same perfectly-matched finishes are
            available in high-gloss which can be combined for dramatic effect or
            carried into other rooms for visual interest, yet keeping the color
            palette consistent.</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PetMobileResponsive
