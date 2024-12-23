

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/finishMobileCarousel";
import Image from "next/image";
import Link from "next/link"; // Import Link component for navigation
import { BsArrowRight } from "react-icons/bs";

const images = [
  {
    text: `PU\nLacquer`,
    image: "/images/rough/PU1.png",
    URL: "/about/finish/puLacquerPaint",
  },
  {
    text: "PET",
    image: "/images/rough/PET1.png",
    URL: "/about/finish/pet",
  },
  {
    text: "Glass",
    image: "/images/rough/Glass.png",
    URL: "/about/finish/glass",
  },
];

const FinishMobileCarousel = () => {
  return (
    <div className=" bg-grayLightSecondary ">
      <div className="flex justify-center items-center py-2">
        <Carousel className="w-full max-w-md ">
          <CarouselContent>
            {images.map((product, index) => (
              <CarouselItem key={index}>
                <div>
                  <Card className=" rounded-lg overflow-hidden">
                    <CardContent className="flex flex-col items-center justify-center ">
                      <Image
                        src={product.image}
                        alt={`Image - ${product.text}`}
                        width={800}
                        height={800}
                        className="object-cover rounded-lg  w-full h-auto"
                      />
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center text-lg font-semibold text-gray-700 ">
                  {product.text}
                </div>

                <div className=" flex justify-center relative mt-4">
                  <Link href={product.URL}>
                    <Link href={product.URL}>
                      <button className="flex justify-center items-center bg-gray-500 text-white rounded-lg py-2 px-4 font-medium gap-2 transition-all hover:bg-gray-600">
                        <span>Learn More</span>
                        <BsArrowRight
                          fontSize={20}
                          className="ml-2 transition-all transform group-hover:translate-x-1"
                        />
                      </button>
                    </Link>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 -left-8 transform -translate-y-1/2 z-10 text-white bg-gray-800 rounded-full  -mt-12" />
          <CarouselNext className="absolute top-1/2 -right-8 transform -translate-y-1/2 z-10 text-white bg-gray-800 rounded-full  -mt-12" />
        </Carousel>
      </div>
    </div>
  );
};

export default FinishMobileCarousel;
