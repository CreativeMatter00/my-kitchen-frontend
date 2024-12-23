import RedButtonComp from "@/components/shared/button/RedButtonComp";
import Image from "next/image";
import React from "react";

const Virtual = () => {
  const vrBox = "/images/kitchen/virtual1.png";
  return (
    <div className="w-full py-10">
      <div className="container mx-auto flex items-center">
        <div className="w-1/2 ">
          <h1 className="text-3xl leading-9 font-normal text-backgroundColor">
            Experience Our
          </h1>
          <h1 className="text-5xl font-normal text-white mb-10 mt-2">
            <span className="text-red-700">K</span>itchens Virtually
          </h1>
          <p className="text-xl text-backgroundColor leading-7 opacity-85">
            Step into {"My Kitchen Studio"} and Explore Our Innovative Designs
            from Anywhere
          </p>
          <p className="text-base text-backgroundColor leading-6 mt-32 opacity-85">
            Discover the future of kitchen design with our state-of-the-art VR
            feature. {"My Kitchen Studio"} lets you immerse yourself in a
            virtual environment where you can explore our customized modular
            kitchen solutions in stunning detail. Walk through different
            layouts, interact with features, and visualize how our designs will
            look in your home. This innovative tool allows you to get a
            realistic feel for your dream kitchen without ever leaving your
            house.
          </p>
          <p className="text-base text-backgroundColor leading-6 mt-2 opacity-85">
            Whether {"you're"} seeking inspiration or finalizing your design,{" "}
            {"My Kitchen Studio"} offers a unique and engaging experience that
            showcases the quality and innovation of My Kitchen like never
            before. Dive in and bring your vision to life, all from the comfort
            of your own space. Experience the cutting-edge technology and
            exceptional craftsmanship that set My Kitchen apart, and start your
            journey to creating the perfect kitchen today.
          </p>
          <div className="flex mt-10">
            <RedButtonComp name="Explore My Kitchen Studio" />
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center relative z-20">
          <Image src={vrBox} alt="vr box" width={517} height={476} />
          <div className="absolute bottom-[-476px] z-10">
            <Image
              src={vrBox}
              alt="vr box"
              width={517}
              height={476}
              className="transform scale-y-[-1] z-[-100]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Virtual;
