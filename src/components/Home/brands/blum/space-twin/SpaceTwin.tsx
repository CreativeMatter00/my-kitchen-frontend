'use client'

import Image from "next/image";

import BreadcrumbOfHome from "@/components/breadcrumbs/BreadcrumbOfHome";
import SeeWhatInside from "@/components/shared/button/SeeWhatInside";


const aventosData = [
  {
    imgSrc: "/images/aventos/aventos1.png",
    imgAlt: "aventos",
    imgWidth: 889,
    imgHeight: 540,
    textPosition: "right",
    title: "Full access",
    description:
      "AVENTOS gives users full freedom of movement, keeping fronts well out of their way. Wall cabinets can be left open without hampering kitchen use.",
  },
  {
    imgSrc: "/images/aventos/aventos2.png",
    imgAlt: "aventos",
    imgWidth: 889,
    imgHeight: 540,
    textPosition: "left",
    title: "Supreme opening and closing ease",
    description:
      "AVENTOS gives users full freedom of movement, keeping fronts well out of their way. Wall cabinets can be left open without hampering kitchen use.",
  },
  {
    imgSrc: "/images/aventos/aventos3.png",
    imgAlt: "aventos",
    imgWidth: 889,
    imgHeight: 540,
    textPosition: "right",
    title: "Holds in any position",
    description:
      "Adjust the lift mechanism precisely to the weight of the front and it will stay exactly where you want it to (thanks to the variable stop). And it will always be within easy reach for closing.",
  },
  {
    imgSrc: "/images/aventos/aventos4.png",
    imgAlt: "aventos",
    imgWidth: 889,
    imgHeight: 540,
    textPosition: "left",
    title: "Harmonious design",
    description:
      "Large, wide fronts and thin gaps for an uninterrupted, smooth look. AVENTOS allows you to carry through the design - from wall cabinets to base units.",
  },
  {
    imgSrc: "/images/aventos/aventos5.png",
    imgAlt: "aventos",
    imgWidth: 889,
    imgHeight: 540,
    textPosition: "right",
    title: "Compact range",
    description:
      "3 lift mechanism types and 4 telescopic arms are sufficient to cover all applications. The lift mechanisms and front fixing brackets have been designed for symmetrical use.",
  },
];

const SpaceTwin = () => {
//  const [selectedText, setSelectedText] = useState("Aventos");
  return (
    <div className="container mx-auto mt-10 pb-8">
<BreadcrumbOfHome/>
      <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
      <div>
        <p className="text-2xl md:text-5xl lg:text-7xl text-center font-normal text-text">Space Twin</p>
      </div>
      <div>
        <p className="text-base md:text-xl lg:text-2xl text-center text-textSecondary">
          An inspiring range of lift systems
        </p>
      </div>
      <div>
        <p className="text-sm md:text-base lg:text-lg  flex justify-center mx-auto">
          AVENTOS lift systems bring top quality motion to wall cabinets. Even
          large and heavy fronts open with ultimate ease. What makes AVENTOS
          especially practical is that it gives users easy access to contents
          and full freedom of movement.
        </p>
      </div>
      </div>

      <div>
        {aventosData.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-6 md:gap-10 md:mt-20"
          >
            {item.textPosition === "left" && (
              <div className="lg:col-span-2 order-2 lg:order-1">
                <div
                  className={`font-normal text-2xl md:text-5xl  lg:mt-20 ${
                    item.textPosition === "left"
                      ? "text-center lg:text-end  text-text"
                      : ""
                  }`}
                >
                  <p>{item.title}</p>
                </div>
                <div
                  className={`mt-4 md:mt-10 font-normal text-sm md:text-base ${
                    item.textPosition === "left"
                      ? "text-center lg:text-end  text-text"
                      : ""
                  }`}
                >
                  <p className=" text-text">{item.description}</p>
                </div>
              </div>
            )}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <Image
                src={item.imgSrc}
                className="w-full h-auto"
                alt={item.imgAlt}
                width={item.imgWidth}
                height={item.imgHeight}
              />
            </div>
            {item.textPosition === "right" && (
              <div className="lg:col-span-2 order-2">
                <div className="font-normal text-2xl md:text-5xl lg:mt-20 text-center lg:text-start">
                  <p className="text-text">{item.title}</p>
                </div>
                <div className="mt-4 md:mt-10 font-normal text-sm md:text-base text-center lg:text-start">
                  <p className="text-text">{item.description}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center item-center  py-4 md:py-6 lg:py-10">
        <SeeWhatInside />
      </div>
    </div>
  );
};

export default SpaceTwin;
