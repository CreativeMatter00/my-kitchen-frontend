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
  const [selectedText, setSelectedText] = useState("UV Lacquer");
  const images = [
    "/images/about/uv/img1.jpg",
    "/images/about/uv/img2.jpg",
    "/images/about/uv/img3.jpg",
    "/images/about/uv/img4.jpg",
    "/images/about/uv/img5.jpg",
    "/images/about/uv/img6.jpg",
  ];
  return (
    <div className="container mx-auto ">
      <div className="flex justify-start items-center mt-4 lg:mt-10">
        {/* <Breadcrumbs parentItem="Finish" currentItem={selectedText} /> */}
      </div>
      <div className="grid grid-cols-2 gap-20 lg:py-12 py-6">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <div className="text-text text-5xl font-normal">UV Lacquer</div>

            <div>
              <p className="text-textSecondary text-base font-normal">
                UV lacquer’s full name is Ultra Violet curing painting or UV
                cured painting. It is also known as Photo-Paint, UV curing
                coatings. Different from the way of film substance in which PU
                painting, PE painting, NC painting is named, UV painting is
                named after the curing way of painting.
              </p>
            </div>

            <div>
              <p className="text-textSecondary text-base font-normal">
                The lacquer is coated on the surface of green core MDF by the
                rolling or curtain coating of automatic roller machinery, and
                then the initiator is decomposed in the radiation of UV light,
                producing free radicals and triggering the reaction of resin.
                Then the liquid lacquer would be instantly solidified as a film
                coating within a few seconds.
              </p>
            </div>

            <div>
              <p className="text-textSecondary text-base font-normal">
                UV lacquer, different with PU coating, PE and NC lacquer, is an
                eco-friendly painting without any volatile toxic substances. HDF
                and MDF with UV lacquer are green, healthy and
                environmental-friendly. The automatic machines of UV coating
                overcome the human factors in the manual to produce products
                with little color difference, excellent quality and stability.
              </p>
            </div>

            <div>
              <p className="text-textSecondary text-base font-normal">
                We have more control over formulas and volumes because coating
                is precise. Due to its unique curing method, there is a much
                wider color palette possible with UV application. All our color
                work is undertaken with the color spectrometer using LAB.
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
