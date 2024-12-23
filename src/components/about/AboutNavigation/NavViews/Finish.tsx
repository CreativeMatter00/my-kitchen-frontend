import React from "react";
import { Carousel } from "../../../../components/ui/carousel";
import { DoubleCarousel } from "./DoubleCarousel";
import { VerticalCarousel } from "./VerticalCarousel";
import { CombinedCarousel } from "./CombinedCarousel";
import FinishMobileCarousel from "./FinishMobileCarousel";

const Finish = () => {
  return (
    <div className="mx-auto w-4/5">
      <div
        className="text-text text-[30px] underline  underline-offset-8 decoration-brandColor mb-12 "
        //style={{ textDecorationColor: "redBrandColor1" }}
      >
        Finish
      </div>
      <div className="flex gap-8 bg-grayLightSecondary p-4 ">
       <div className="hidden md:block">
       <CombinedCarousel />
       </div>
      </div>
      <div className="block md:hidden ">
        <FinishMobileCarousel/>
      </div>
      <div className="lg:py-12 py-6" />
    </div>
  );
};

export default Finish;
