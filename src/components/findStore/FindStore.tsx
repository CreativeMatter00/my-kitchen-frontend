"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { BiRefresh } from "react-icons/bi";
import styles from "@/styles/FindStore.module.css";

const FindStore = () => {
  // State to track selected Division and City
  const [division, setDivision] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);
  console.log(division);
  // Function to check if both Division and City are selected
  const isSelectionComplete = division && city;

  const handleChange = () => {
    setDivision(null);
    setCity(null);
  };

  return (
    <div>
      <div className="container flex flex-col">
        <div>
          <p className="text-xl md:text-2xl lg:text-3xl text-center lg:text-left text-text font-normal mb-2">
            Where to Buy
          </p>
          <p className="text-sm md:text-base lg:text-lg text-center lg:text-left text-textOptional font-normal">
            Please select Division and City from the dropdown
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-20 mt-10">
          <div>
            <Select
              onValueChange={(value) => setDivision(value)}
              value={division || ""}
            >
              <SelectTrigger className="w-full text-base">
                <SelectValue placeholder="---Select Division---" />
              </SelectTrigger>
              <SelectContent className="">
                <SelectItem value="dhaka" className="bg-whitePrimary">Dhaka</SelectItem>
                <SelectItem value="rajshahi" className="bg-whitePrimary">Rajshahi</SelectItem>
                <SelectItem value="sylhet" className="bg-whitePrimary">Sylhet</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select
              onValueChange={(value) => setCity(value)}
              value={city || ""}
            >
              <SelectTrigger className="w-full text-base">
                <SelectValue placeholder="---Select City---" />
              </SelectTrigger>
              <SelectContent className="">
                <SelectItem value="Dhaka" className="bg-whitePrimary">Dhaka</SelectItem>
                <SelectItem value="Mymensingh" className="bg-whitePrimary">Mymensingh</SelectItem>
                <SelectItem value="Narayanganj" className="bg-whitePrimary">Narayanganj</SelectItem>
                <SelectItem value="Dinajpur" className="bg-whitePrimary">Dinajpur</SelectItem>
                <SelectItem value="Hobiganj" className="bg-whitePrimary">Hobiganj</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {isSelectionComplete && (
          <div className="flex justify-between">
            <div>
              <div className="text-xl md:text-2xl lg:text-4xl">
                <span className="text-brandColor">{city}&nbsp;</span> City
              </div>
            </div>
            <div>
              <button
                onClick={handleChange}
                className="text-base font-medium px-4 py-2 bg-brandColorSecondary transition duration-500 hover:scale-95 text-backgroundColor flex gap-2 items-center"
              >
                <BiRefresh className="text-backgroundColor mr-1 " size={24} />
                Refresh
              </button>
            </div>
          </div>
        )}
      </div>

      <hr className="mt-6" />

      {!isSelectionComplete && (
        <div className="text-text text-lg md:text-2xl lg:text-4xl text-center lg:py-28 py-16">
          <p className="">No Data to Show Here</p>
        </div>
      )}

      {isSelectionComplete && (
        <div className="container py-6">
          <div className={`border border-grayLightPrimary p-6 ${styles.cardShadow}`}>
            {/* <div className="flex flex-col justify-center lg:justify-start py-4 px-4 shadow-xl  w-full md:w-3/4 lg:w-1/2 mx-auto lg:ml-0"> */}
            <div className="text-text text-2xl md:text-3xl lg:text-4xl font-normal">
              My Kitchen
            </div>
            <div className="text-textOptional text-sm md:text-base lg:text-lg font-normal mt-1">
              Cabinet and worktop shop
            </div>
            <div className="text-text text-base md:text-lg lg:text-xl font-normal mt-4 lg:mt-8">
              House 8, Road 138, Gulshan 1, Dhaka, Bangladesh, 1212
            </div>
            <div className="flex justify-start items-center mt-1">
              <div className="text-textOptional text-sm md:text-base lg:text-lg font-normal">
                Mobile:
              </div>
              <div className="text-text text-sm md:text-base lg:text-lg font-normal ml-1">
                01642-912612
              </div>
            </div>
            <div className="flex justify-start items-center mt-1">
              <div className="text-textOptional text-sm md:text-base lg:text-lg font-normal">
                Email:
              </div>
              <div className="text-text text-sm md:text-base lg:text-lg font-normal ml-1">
                info@mykitchen-bd.com
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindStore;
