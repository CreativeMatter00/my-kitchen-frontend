import React from "react";
import kitchenImage from "../../../../public/images/about/kitchen.gif";

const HeroVideo = () => {
  return (
    <div>
      <div
        className="relative w-full bg-cover bg-center  h-[calc(100vh-160px)]"
        style={{
          backgroundImage: `url(${kitchenImage.src})`,
          backgroundBlendMode: "overlay",
        }}
      >
        <div className=" flex justify-center items-center h-full">
          <div
            className="text-backgroundColor text-5xl font-bold
          "
          >
            ELEVATE YOUR COOKING EXPERIENCE
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
