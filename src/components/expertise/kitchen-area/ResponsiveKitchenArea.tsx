import Image from "next/image";
import React from "react";

const img = "/images/kitchen-area/img1.png";

const imgAfter = "/images/kitchen-area/img1_after.png";

const information = [
  {
    id: 1,
    imgSrc: "/images/kitchen-area/img1.png",
    imgAlt: "Trending Now Image",
    title: "Trending Now",
    description:
      "This section is the main attraction of the company - always fresh, always the stunning newness. To give the customer a feel/sense of elegance every time.",
    linkHref: "/trending-now",
    imgBefore: "/images/kitchen-area/img1_before.png",
    imgAfter: "/images/kitchen-area/img1_after.png",
  },
  {
    id: 2,
    imgSrc: "/images/kitchen-area/img2.png",
    imgAlt: "Standard Kitchen",
    title: "Standard Kitchen",
    description:
      "This kitchens mainly contain a connected with 3 working zone (Wash zone, Cook zone & Freeze/Food Storage zone). It provides a free-standing workspace that can serve as a countertop, storage or eating area.",
    linkHref: "/trending-now",
    imgBefore: "/images/kitchen-area/img1_before.png",
    imgAfter: "/images/kitchen-area/img1_after.png",
  },
  {
    id: 3,
    imgSrc: "/images/kitchen-area/img3.png",
    imgAlt: "Luxury Kitchen",
    title: "Luxury Kitchen",
    description:
      "Technology has entered the kitchen in full force and not just in the form of fancy gadgets and appliances. Today, you can have a kitchen with technology integrated into every function and appliance–from the faucets to the fridge to the lighting.",
    linkHref: "/trending-now",
    imgBefore: "/images/kitchen-area/img1_before.png",
    imgAfter: "/images/kitchen-area/img1_after.png",
  },
  {
    id: 4,
    imgSrc: "/images/kitchen-area/img4.png",
    imgAlt: "Economy Kitchen",
    title: "Economy Kitchen",
    description:
      "Designing kitchens on a budget does take some skill. After all, when it comes to planning a new kitchen, there is often a huge gulf between budget and expectation.",
    linkHref: "/trending-now",
    imgBefore: "/images/kitchen-area/img1_before.png",
    imgAfter: "/images/kitchen-area/img1_after.png",
  },
  {
    id: 5,
    imgSrc: "/images/kitchen-area/img5.png",
    imgAlt: "Couple Kitchen",
    title: "Couple Kitchen",
    description:
      "It’s a wonderful feeling to have a better half who loves to cook and feed others as much as you do. The stronger and more detailed your criteria for the kitchen layout, the more likely you are to end up with a finished kitchen design that works for you.",
    linkHref: "/trending-now",
    imgBefore: "/images/kitchen-area/img1_before.png",
    imgAfter: "/images/kitchen-area/img1_after.png",
  },
  {
    id: 6,
    imgSrc: "/images/kitchen-area/img6.png",
    imgAlt: "Parallel Kitchen",
    title: "Parallel Kitchen",
    description:
      "The Parallel-shaped kitchen is perhaps the most efficient of all kitchens in terms of designing as per the necessity.",
    linkHref: "/trending-now",
    imgBefore: "/images/kitchen-area/img1_before.png",
    imgAfter: "/images/kitchen-area/img1_after.png",
  },
];
const ResponsiveKitchenArea = () => {
  return (
    <div>
      <div className="container max-auto py-20">
        <div className="flex flex-col gap-20">
          {information.map((info, index) => {
            return (
              <div key={index}>
                <div className="flex flex-col gap-4">
                <Image
                  src={info.imgSrc}
                  alt="Images"
                  width={343}
                  height={314}
                  className="w-full h-full mt-2"
                ></Image>

                <div className="text-3xl font-normal text-text mt-2">
                  {info.title}
                </div>
                <div className="text-base font-normal text-textSecondary">
                  {info.description}
                </div>
                <div className=" relative cursor-pointer mt-2 mb-8">
                  <Image
                    src={info.imgAfter}
                    alt="Button"
                    width={202}
                    height={60}
                    className="absolute inset-0  opacity-100 transition-opacity duration-200"
                  />
                </div>
                </div>
              </div>
            );
          })}
          
        </div>
      </div>
    </div>
  );
};

export default ResponsiveKitchenArea;
