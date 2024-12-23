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
  const [selectedText, setSelectedText] = useState("Synchronous MDF");
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
            <div className="text-text text-5xl font-normal">Synchronous MDF</div>

            <div>
              <p className="text-textSecondary text-base font-normal">
              Synchronous Panel is a new innovation of interior design, encapsulates the unique attributes of natural wood with impeccable details where traces of nature find their way into the design. The realistic visuals and touch of our Synchronous Panel come with the convenience of installation and maintenance as well, all the while offering endless aesthetic details within interior spaces, truly satisfying every demand in terms of both the form and function of today’s users.
              </p>
            </div>

            <div>
              <p className="text-textSecondary text-base font-normal">
              MY KITCHEN shutters/fronts are decorative, medium density fiberboard panel with a melamine surface and a synchronized finish for indoor use in dry environments. Easy to clean and maintain, and highly resistant to scratching and staining, MY KITCHRN’s MDF decorative panel combines visual beauty and the touch of wood in perfect harmony, along with technical performance and environmental sustainability. Our MDF takes its inspiration from nature, not only in the strong, striking structures seen in the Rustic finish, but also in the elegant, contemporary structures seen in the Authentic finish.
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
