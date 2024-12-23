/* eslint-disable react/no-unescaped-entities */

'use client'
import { Card, CardContent } from "@/components/ui/finishCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselNextAbout,
  CarouselPrevious,
} from "@/components/ui/finishCarousel";
import Image from "next/image";
import React, { useState } from "react";
// import Breadcrumbs from "../breadcrumbs/Breadcrumbs";

const Page = () => {
  const [selectedText, setSelectedText] = useState("Pet");
  const pets = [
    "/images/about/pet/img1.png",
    "/images/about/pet/img2.png",
    "/images/about/pet/img3.png",
  ];
  return (
    <div className="container mx-auto ">
      <div className="flex justify-start items-center mt-4 lg:mt-10">
     {/* <Breadcrumbs parentItem="Finish" currentItem={selectedText}/> */}
     </div>
      <div className="grid grid-cols-2 gap-20 lg:py-12 py-6">
        <div className="flex flex-col gap-6">
          <div className="text-5xl text-text font-normal">PET</div>

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
        <div className="w-full h-auto">
          <Carousel>
            <CarouselContent>
              {pets.map((pet, index) => {
                return (
                  <CarouselItem key={index}>
                    <div className=" ">
                      <Card>
                        <CardContent className="w-[760px] ">
                          <Image
                            className="h-auto "
                            src={pet}
                            alt={`${index + 1}`}
                            width={760}
                            height={600}
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <div className="absolute z-20 bottom-[28px] -left-[27px]">
                <CarouselPrevious className="w-[3.8rem] h-[3.5rem] -left-[33px]" />
                <CarouselNextAbout className="w-[3.8rem] h-[3.5rem] right-[15px]" />
              </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Page;
