/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselNextAbout,
  CarouselPrevious,
} from "@/components/ui/finishCarousel";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/finishCard";
// import Breadcrumbs from "../breadcrumbs/Breadcrumbs";

const Page = () => {
  const [selectedText, setSelectedText] =useState("PuLacquerPaint")
  const puLacquerPaint = [
    "/images/about/puLacquerPaint/img1.png",
    "/images/about/puLacquerPaint/img2.png",
    "/images/about/puLacquerPaint/img3.png",
    "/images/about/puLacquerPaint/img4.png"
  ];
  return (
    <div>
      <div className="container mx-auto ">
     <div className="flex justify-start items-center mt-4 lg:mt-10">
     {/* <Breadcrumbs parentItem="Finish" currentItem={selectedText}/> */}
     </div>
        <div className="grid grid-cols-2 gap-20 lg:py-12 py-6">
        

          <div className="flex flex-col gap-6">
            <div>
              <p className="text-text text-5xl font-normal">PU Lacquer Paint</p>
            </div>
            <div>
              <p className="text-textSecondary text-base font-normal">
                A polyurethane coating is a layer of polyurethane (a type of
                polymer) that is applied to a material's surface in order to
                protect it. A polyurethane coating can protect the base material
                from corrosion, weathering, abrasion and other processes that
                would degrade the material over time. A polyurethane coating can
                be glossy or matt, and can be opaque or transparent. They can
                also be more soft and ductile, so that the base material is
                allowed to stretch without destroying the coating. Polyurethane
                coatings are not flammable, so they can be used for some
                situations where combustion is occurring in the same
                environment. Care must be taken to limit the exposure of a
                polyurethane coating to ultraviolet light because it can cause
                the coating to degrade.
              </p>
            </div>
            <div>
              <p className="text-textSecondary text-base font-normal">
                Polyurethane coatings are used for many different applications.
                Since polyurethane coatings can be waterproof and have high
                abrasion resistance, they are an excellent choice for this
                application. Polyurethane coatings are also used on metals and
                on top of other coatings. It is also known as photo-paint. Green
                core MDF with PU lacquer are green, healthy and
                environmental-friendly.
              </p>
            </div>
          </div>

          <div className="w-full h-auto">
            <Carousel>
              <CarouselContent>
                {puLacquerPaint.map((paint, index) => {
                  return (
                    <CarouselItem key={index}>
                      <div className=" ">
                        <Card>
                          <CardContent className="w-[760px] ">
                            <Image
                              className="h-auto "
                              src={paint}
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
    </div>
  );
};

export default Page;
