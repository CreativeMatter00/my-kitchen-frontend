/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import RedButtonComp from "../shared/button/RedButtonComp";
import Image from "next/image";

const ResponsiveGallery = () => {
  const galleryImg1 = "/images/kitchen/galleryImg1.png";
  const galleryImg2 = "/images/kitchen/galleryImg2.png";
  const galleryImg3 = "/images/kitchen/galleryImg3.png";
  const galleryImg4 = "/images/kitchen/galleryImg4.png";
  const galleryImg5 = "/images/kitchen/galleryImg5.png";
  const galleryImg6 = "/images/kitchen/galleryImg6.png";
  const galleryImg7 = "/images/kitchen/galleryImg7.png";
  const galleryImg8 = "/images/kitchen/galleryImg8.png";
  const galleryImg9 = "/images/kitchen/galleryImg9.png";
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-6">
        <div className="text-4xl font-normal text-text">
          Inspiration <span className="text-brandColor">G</span>allery
        </div>

        <div className="text-textSecondary text-base font-normal ">
          Discover the future of kitchen design with our state-of-the-art VR
          feature. 'My Kitchen Studio' lets you immerse yourself in a virtual
          environment where you can explore our customized modular kitchen
          solutions in stunning detail. Walk through different layouts, interact
          with features, and visualize how our designs will look in your home.
          This innovative tool allows you to get a realistic feel for your dream
          kitchen without ever leaving your house.
        </div>

        <div>
          <Link href={"style-in-focus"}>
            <button className="flex justify-center md:justify-start items-center">
              <RedButtonComp name="View Our Gallery" />
            </button>
          </Link>
        </div>
      </div>
      
      <div className="mt-6">
        <div className="flex flex-col gap-2 justify-center items-center">

        <Image
        src={galleryImg7}
        alt="Gallery Image"
        width={343}
        height={361}
        className="w-full h-auto"/>

        <Image
        src={galleryImg5}
        alt="Gallery Image"
        width={343}
        height={240}
        className="w-full h-auto"/>

        <Image
        src={galleryImg6}
        alt="Gallery Image"
        width={343}
        height={240}
        className="w-full h-auto"/>

        <Image
        src={galleryImg1}
        alt="Gallery Image"
        width={343}
        height={496}
        className="w-full h-auto"/>

       <Image
        src={galleryImg2}
        alt="Gallery Image"
        width={343}
        height={240}
        className="w-full h-auto"/>

        <Image
        src={galleryImg3}
        alt="Gallery Image"
        width={343}
        height={240}
        className="w-full h-auto"/>

        <Image
        src={galleryImg4}
        alt="Gallery Image"
        width={343}
        height={149}
        className="w-full h-auto"/>

        <Image
        src={galleryImg8}
        alt="Gallery Image"
        width={343}
        height={227}
        className="w-full h-auto"/>

        <Image
        src={galleryImg9}
        alt="Gallery Image"
        width={343}
        height={111}
        className="w-full h-auto"/>
        
        </div>
      </div>

    </div>
  );
};

export default ResponsiveGallery;
