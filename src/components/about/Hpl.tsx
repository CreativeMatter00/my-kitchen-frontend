// import { Card, CardContent } from "@/components/ui/card";
"use client";
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
// import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import { useState } from "react";

const Page = () => {
  const [selectedText, setSelectedText] = useState("HPL");
  const images = [
    "/images/about/hpl/img1.jpg",
    "/images/about/hpl/img2.jpg",
    "/images/about/hpl/img3.jpg",
    "/images/about/hpl/img4.jpg",
    "/images/about/hpl/img5.jpg",
    "/images/about/hpl/img6.jpg",
    "/images/about/hpl/img7.jpg"
  ];
  return (
    <div className="container mx-auto ">
      <div className="flex justify-start items-center mt-4 lg:mt-10">
        {/* <Breadcrumbs parentItem="Finish" currentItem={selectedText} /> */}
      </div>
      <div className="grid grid-cols-2 gap-20 lg:py-12 py-6">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <div className="text-text text-5xl font-normal">HPL</div>

            <div>
              <p className="text-textSecondary text-base font-normal">
              High Pressure Laminates (HPL) is the direct descendent of the original plastic laminate. It is considered to be one of the most durable decorative surface materials and is available with special performance properties including chemical, fire, and wear resistance. Special grades of high pressure laminates can be post formed around curved edges by application of heat and restraint.
              </p>
            </div>

            <div>
              <p className="text-textSecondary text-base font-normal">
              HPL is produced by saturating multiple layers of Kraft paper with phenolic resin. A layer of printed decor paper is placed on top of the Kraft paper before pressing. The resulting sandwich is fused together under heat and pressure (more than 1,000 PSI). Because phenolic and melamine resins are thermoset plastics, the curing process transforms the resin into plastic by a cross linking process that converts the paper sheets into a single, rigid laminated sheet. Thermosetting creates strong, irreversible bonds that contribute to its durability.
              </p>
            </div>

            <div>
              <p className="text-textSecondary text-base font-normal">
              High pressure laminate is laminated to a composite panel utilizing a variety of adhesives. Particleboard or MDF are the preferred substrate because they provide a stable, durable, consistent and economical foundation. Due to its durability, high pressure laminates are a common choice for horizontal surfaces including flooring, countertops and desktops.
              </p>
            </div>

            <div>
              <p className="text-textSecondary text-base font-normal">
              High Pressure Laminate is considered one of the most durable decorative surface materials and performs very well for horizontal applications such as countertops and furniture.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-auto">
          <Carousel>
            <CarouselContent>
              {images.map((img, index) => {
                return (
                  <CarouselItem key={index}>
                    <div className="  ">
                      <Card>
                        <CardContent>
                          <Image
                            className="h-auto w-full"
                            src={img}
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
            {/* <div className="absolute bottom-[6.6%] -left-[3.6%] ">
              <CarouselPrevious className="w-[3.8rem] h-[3.5rem]" />
              <CarouselNext className="w-[3.8rem] h-[3.5rem]" />
            </div> */}
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
