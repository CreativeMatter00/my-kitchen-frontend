"use client";
import React, { useEffect } from "react";
import "lightbox.js-react/dist/index.css";
import { initLightboxJS, SlideshowLightbox } from "lightbox.js-react";
import Image from "next/image";

const images = [
  { src: "/images/style-in-focus/img1.png", alt: "Image 1" },
  { src: "/images/style-in-focus/img2.png", alt: "Image 2" },
  { src: "/images/style-in-focus/img3.png", alt: "Image 3" },
  { src: "/images/style-in-focus/img4.png", alt: "Image 4" },
  { src: "/images/style-in-focus/img5.png", alt: "Image 5" },
  { src: "/images/style-in-focus/img6.png", alt: "Image 6" },
  { src: "/images/style-in-focus/img7.png", alt: "Image 7" },
  { src: "/images/style-in-focus/img8.png", alt: "Image 8" },
  { src: "/images/style-in-focus/img9.png", alt: "Image 9" },
  { src: "/images/style-in-focus/img10.png", alt: "Image 10" },
  { src: "/images/style-in-focus/img11.png", alt: "Image 11" },
  { src: "/images/style-in-focus/img12.png", alt: "Image 12" },
];

const StyleInFocus = () => {
  useEffect(() => {
    initLightboxJS("Insert License key", "Insert plan type here");
  }, []);

  
    const CustomNextArrow = () => (
      <div className=" absolute  transform -translate-y-1/2 text-backgroundColor bg-text p-2 px-4">
        <span>&gt;</span> 
      </div>
    );
    
    const CustomPrevArrow = () => (
      <div className=" absolute  transform -translate-y-1/2 text-backgroundColor bg-text p-2 px-4">
        <span>&lt;</span> 
      </div>
    );

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-4 md:gap-8 lg:gap-10 pb-10 md:pb-16 lg:pb-32">
        <div className="text-2xl md:text-5xl lg:text-7xl text-center font-normal text-text mt-6 md:mt-10 lg:mt-20">
          Style in Focus
        </div>

        <div className="text-sm md:text-base lg:text-lg flex justify-center items-center textSecondary text-center px-4 md:px-8">
          Explore a curated selection of images showcasing our finest designs and products. From innovative craftsmanship to modern aesthetics, let our gallery inspire your next project. Dive into the visual journey and discover the possibilities.
        </div>

        <div className="text-center">        
          <SlideshowLightbox 
          lightboxIdentifier="lightbox1" 
          framework="next" 
          images={images} 
          backgroundColor="white"
          showThumbnails={true} 
          nextArrow={<CustomNextArrow />}
          prevArrow={<CustomPrevArrow/>}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {images.map((image, index) => (
                <div key={index} className="relative group cursor-pointer">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={372}
                    height={320}
                    data-lightboxjs="lightbox1" 
                    className="w-[372px] h-[320px] object-cover " 
                  />
                  <div className="absolute inset-0 z-10 bg-black opacity-0 transition-opacity duration-200 ease-out lg:group-hover:opacity-40 pointer-events-none"></div>
                  <div className="absolute inset-0 z-10 top-[50%] lg:opacity-0 opacity-100 text-backgroundColor group-hover:opacity-100 underline lg:group-hover:underline text-sm md:text-base lg:text-lg pointer-events-none">
                    Click to view
                  </div>
                </div>
              ))}
            </div>
          </SlideshowLightbox>
          
        </div>
      </div>
    </div>
  );
};

export default StyleInFocus;