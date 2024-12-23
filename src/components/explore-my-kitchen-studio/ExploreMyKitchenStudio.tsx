import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Icon1, Icon2, Icon3, Icon4 } from "../ui/all-svg/SVGFile";
import StartYourVirtualTourButton from "./StartYourVirtualTourButton";
import FAQ from "./FAQ";

const ExploreMyKitchenStudio = () => {
  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="font-normal text-7xl text-center mt-10">
          Explore My Kitchen Studio
        </div>

        <div className="relative">
          <Image
            src={"/images/explore-my-kitchen-studio/img1.png"}
            alt="Image"
            width={700}
            height={700}
            className="w-full h-auto mt-20"
          ></Image>

          <div className="absolute inset-0 z-10 flex flex-col justify-center items-center">
            <div>
              <p className="text-backgroundColor font-bold text-4xl">
                Step into Our Virtual World and <br />
                <span className="ml-4">Discover Your Dream Kitchen</span>
              </p>
            </div>
            <StartYourVirtualTourButton />
          </div>
        </div>

        <div className="flex justify-center items-center text-2xl font-normal mt-20">
          Immerse yourself in our state-of-the-art VR experience and visualize
        </div>

        <div className="flex  justify-center items-center text-2xl font-normal">
          your dream kitchen in stunning detail. Explore layouts, interact with
        </div>

        <div className="flex justify-center item-center text-2xl font-normal">
          features, and get a true feel for our modular kitchen solutions.
        </div>

        <div className="mt-10 font-normal text-4xl">Features and Benefits</div>

        <div className="grid grid-cols-4 divide-x mt-10">
          <div className="group hover:text-red-600">
            <div>
              <div className="flex justify-start items-center ml-4">
                <Icon1 />
              </div>

              <div className="text-4xl font-normal mt-40">
                Interactive <br />
                Design
              </div>
            </div>

            <div className="font-normal text-base text-textSecondary mt-10">
              Explore every corner of your kitchen.
            </div>
          </div>

          <div>
            <div className="flex justify-start items-center ml-10">
              <div className="group hover:text-red-600">
                <div>
                  <div className="flex justify-start items-center ml-4 mt-2">
                    <div>
                      <Icon2 />
                    </div>
                  </div>

                  <div className="text-4xl font-normal mt-44">
                    Realistic <br />
                    Visuals
                  </div>
                </div>

                <div className="font-normal text-base text-textSecondary mt-10">
                  Experience lifelike textures and finishes.
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-start items-center ml-10">
              <div className="group hover:text-red-600">
                <div>
                  <div className=" ml-4 ">
                    <div className="flex justify-start items-center">
                      <Icon3 />
                    </div>
                  </div>

                  <div className="text-4xl font-normal mt-44">
                    Easy Customization
                  </div>
                </div>

                <div className="font-normal text-base text-textSecondary mt-10">
                  Make changes and see instant results.
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-start items-center ml-10">
              <div className="group hover:text-red-600">
                <div>
                  <div>
                    <Icon4 />
                  </div>

                  <div className="text-4xl font-normal mt-40">
                    Convenient Access
                  </div>
                </div>

                <div className="font-normal text-base text-textSecondary mt-10">
                  Tour your kitchen from the comfort of your home.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-text p-4 mt-20 ">
        <div className="container mx-auto">
          <div className="font-normal text-7xl text-backgroundColor mt-48 text-center">
            Ready to Explore?
          </div>

          <div className="text-center mt-10">
            <StartYourVirtualTourButton />
          </div>
          <FAQ />
          <div className="mt-40 text-center text-backgroundColor text-7xl font-normal">
            Need assistance?
          </div>

          <div className="mt-10 p-8 text-center text-backgroundColor text-xl font-normal">
            Contact our support team at +88 01642-912612 or email us at
            support@mykitchen.com.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreMyKitchenStudio;
