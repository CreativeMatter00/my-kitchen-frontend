"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Ratings from "../ratings/Ratings";

const ProductInfo = () => {
  const tags = [
    "Quiet",
    "Close",
    "Modern",
    "Design",
    "Smooth",
    "Operation",
    "Durable",
    "Hardware",
    "Home Improvement",
  ];

  const colors = [
    { color: "#F9F9F9", bgClass: "bg-[#F9F9F9]" },
    { color: "#1A1A1A", bgClass: "bg-[#1A1A1A]" },
    { color: "#96A112", bgClass: "bg-[#96A112]" },
    { color: "#6CA7FF", bgClass: "bg-[#6CA7FF]" },
  ];

  type ColorName = "#F9F9F9" | "#1A1A1A" | "#96A112" | "#6CA7FF";

  // State to track the currently active color
  const [activeColor, setActiveColor] = useState<ColorName | null>(null);

  const handleClick = (color: ColorName) => {
    setActiveColor(color);
    console.log(color);
  };

  const materials = [
    { value: "wood", label: "Wood", disabled: false },
    { value: "granite", label: "Granite", disabled: false },
    { value: "acrylic", label: "Acrylic", disabled: true }, // This will be disabled
    { value: "hpl", label: "HPL", disabled: false },
    { value: "steel", label: "Steel", disabled: false },
  ];

  const finishParts = [
    { value: "matte", label: "Matte" },
    { value: "glossy", label: "Glossy" },
    { value: "textured", label: "Textured" },
  ];

  return (
    <div>
      <div>
        <p className="text-5xl font-bold text-text">Soft-Close Cabinet Door</p>
      </div>

      <div className="flex justify-start items-center gap-3 mt-6">
        <Ratings></Ratings>
        <div>
          <p className="text-base font-normal">10 Reviews</p>
        </div>
      </div>

      <div className="flex justify-start items-center gap-2 mt-6">
        <div>
          <p className=" text-base font-normal text-textOptional">
            Availability:
          </p>
        </div>
        <div>
          <p className="text-base font-normal text-successColor">In Stock</p>
        </div>
      </div>

      <div className="flex justify-start items-center gap-2 mt-2">
        <div>
          <p className=" text-base font-normal text-textOptional">
            Product Code:
          </p>
        </div>
        <div>
          <p className="text-base font-normal text-text">MK-SCCD TN133</p>
        </div>
      </div>

      {/* TAGS */}

      <div className="flex justify-start items-center gap-2 mt-2">
        <div>
          <p className=" text-base font-normal text-textOptional">Tags:</p>
        </div>
        <div className="flex">
          {tags.map((tag, index) => {
            return (
              <div key={index}>
                <p className="text-base font-normal hover:text-linkPrimary cursor-pointer">
                  {tag}
                  {index < tags.length - 1 && ", "}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <hr className="w-full border-b-2 mt-4" />
      </div>

      <div className="flex justify-start items-center gap-4 mt-6">
        <div>
          <p className="text-base font-normal text-text">Color:</p>
        </div>

        <div className="flex justify-center items-center gap-2">
          {colors.map((item, index) => (
            <div key={index}>
              <button
                className={`w-8 h-8 rounded-full shadow-xl ${
                  activeColor === item.color
                    ? `ring-offset-2 ring-2 ring-blue-700 ${item.bgClass}`
                    : `${item.bgClass}`
                }`}
                onClick={() => handleClick(item.color as ColorName)}
              ></button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <hr className="w-full border-b-2 mt-4" />
      </div>
      {/* MATERIAL */}
      <div className="flex justify-start items-center gap-4 mt-2">
        <div>
          <p className="text-base font-normal">Material:</p>
        </div>
        {/* Material Radio Button */}

        <RadioGroup defaultValue="wood">
          <div className="flex gap-2">
            {materials.map((material, index) => {
              return (
                <div key={index}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={material.value}
                      id={material.value}
                      disabled={material.disabled} // Disable if `disabled` is false
                    />
                    <Label
                      htmlFor={material.value}
                      className="text-sm font-normal"
                    >
                      {material.label}
                    </Label>
                  </div>
                </div>
              );
            })}
          </div>
        </RadioGroup>
      </div>

      <div>
        <hr className="w-full border-b-2 mt-4" />
      </div>

      <div className="mt-4">
        <div className="flex gap-2">
          <div>
            <p className="text-base font-normal">Finish:</p>
          </div>
          <RadioGroup defaultValue="matte">
            <div className="flex justify-start items-center gap-2">
              {finishParts.map((finishPart, value) => {
                return (
                  <div key={value}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={finishPart.value}
                        id={finishPart.value}
                      ></RadioGroupItem>
                      <Label htmlFor={finishPart.value}>
                        {finishPart.label}
                      </Label>
                    </div>
                  </div>
                );
              })}
            </div>
          </RadioGroup>
        </div>
      </div>

      <div>
        <hr className="w-full border-b-2 mt-4" />
      </div>

      {/* QUANTITY */}

      <div className="flex w-1/6 max-w-sm items-center space-x-2 mt-4">
        <Label htmlFor="quantity" className="text-base font-normal">
          Qty:
        </Label>
        <Input type="number" id="quantity" defaultValue="1" min="1" />
      </div>

      {/* INPUT */}
      <div className="flex w-full max-w-5xl items-center space-x-2 mt-4">
        <Input type="email" placeholder="Enter your coupon code here" />
        <Button
          type="submit"
          className="bg-successColor text-base font-medium transition duration-300 hover:scale-95 "
        >
          Apply Coupon
        </Button>
      </div>

      {/* BUTTON */}
      <div className="flex justify-center items-center gap-4 mt-4">
        <Button className="px-40 py-6 bg-brandColorSecondary text-backgroundColor text-xl font-medium transition duration-300 hover:scale-95 hover:bg-brandColorHover ">
          Add to Cart
        </Button>
        <Button className="px-40 py-6 bg-grayPrimary text-brandColorSecondary text-xl font-medium transition duration-300 hover:scale-95 hover:bg-grayLightPrimary">
          Add to Wishlist
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
