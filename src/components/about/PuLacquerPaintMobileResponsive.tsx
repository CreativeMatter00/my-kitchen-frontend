/* eslint-disable react/no-unescaped-entities */

// import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/finishComponentCarousel";
import Image from "next/image";

const PuLacquerPaintMobileResponsive = () => {
  const images = [
    {
      text: `PU\nLacquer`,
      image: "/images/about/puLacquerPaint/img1.png",
      URL: "/about/finish/puLacquerPaint",
    },
    {
      text: "PET",
      image: "/images/about/puLacquerPaint/img2.png",
      URL: "/about/finish/pet",
    },
    {
      text: "Glass",
      image: "/images/about/puLacquerPaint/img3.png",
      URL: "/about/finish/glass",
    },
    {
      text: "Glass",
      image: "/images/about/puLacquerPaint/img4.png",
      URL: "/about/finish/glass",
    },
  ];
  return (
    <div>
      <div className="container mx-auto lg:py-12 py-6">
        <div className="grid grid-cols-1 gap-6">
          <div className="text-text text-3xl md:text-5xl font-normal text-center">
            PuLacquerPaint
          </div>
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
              <div className="text-text text-xl md:text-3xl font-normal">
                PU Lacquer Paint
              </div>
            </div>

            <div>
              <p className="text-base font-normal text-textSecondary">
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
              <br /> <br />
              <p className="text-base font-normal text-textSecondary">
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
        </div>
      </div>
    </div>
  );
};

export default PuLacquerPaintMobileResponsive;
