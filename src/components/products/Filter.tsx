"use client";
import React, { useEffect, useState } from "react";
import { FaSliders } from "react-icons/fa6";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { FaStar } from "react-icons/fa";
import { Button } from "../ui/button";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import FilterTitle from "./FilterTitle";

const Filter = () => {
	// console.log("one rendering")
	// METERIAL
	const materials = [
		{ id: "Wood", label: "Wood" },
		{ id: "Granite", label: "Granite" },
		{ id: "Acrylic", label: "Acrylic" },
		{ id: "HPL", label: "HPL" },
		{ id: "Steel", label: "Steel" },
	];

	const [selectedMeterial, setSelectedMeterial] = useState<string[]>([]);

	const handleChangeMeterial = (checked: boolean, value: string) => {
		if (checked) {
			setSelectedMeterial((prev) => [...prev, value]);
		} else {
			setSelectedMeterial((prev) => prev.filter((item) => item !== value));
		}
	};

	//console.log(selectedMeterial);

	//useEffect  executed after every render, but only when SelectedMeterial changes.
	useEffect(() => {
		console.log(selectedMeterial);
	}, [selectedMeterial]); //Dependency Array tells React to run the effect only when selectedMeterial

	// STYLE
	const styles = [
		{ id: "Modern", label: "Modern" },
		{ id: "Contemporary", label: "Contemporary" },
		{ id: "Luxury", label: "Luxury" },
		{ id: "Economy", label: "Economy" },
		{ id: "Minimalist", label: "Minimalist" },
	];

	const [selectedStyle, setSelectedStyle] = useState<string[]>([]);

	const handleChangeStyle = (checked: boolean, value: string) => {
		if (checked) {
			setSelectedStyle((prev) => [...prev, value]);
		} else {
			setSelectedStyle((prev) => prev.filter((item) => item !== value));
		}
	};

	useEffect(() => {
		console.log(selectedStyle);
	}, [selectedStyle]);

	// FINISH
	const finishes = [
		{ id: "Matte", label: "Matte" },
		{ id: "Glossy", label: "Glossy" },
		{ id: "Textured", label: "Textured" },
	];
	const [selectedFinishItems, setSelectedFinishItems] = useState<string[]>([]);

	const handleChangeFinish = (checked: boolean, value: string) => {
		if (checked) {
			setSelectedFinishItems((prev) => [...prev, value]);
		} else {
			setSelectedFinishItems((prev) => prev.filter((item) => item !== value)); //Matte !== Glossy
		}
	};

	useEffect(() => {
		console.log(selectedFinishItems);
	}, [selectedFinishItems]); //Dependency Array tells React to run the effect only when selectedFinishItems

	// INSTALLATION

	const installationTypes = [
		{ id: "Built-in", label: "Built-in" },
		{ id: "Free-standing", label: "Free-standing" },
		{ id: "Wall-mounted", label: "Wall-mounted" },
	];

	const [selectedInstallationItems, setSelectedInstallationItems] = useState<
		string[]
	>([]);

	const handleChangeInstallation = (checked: boolean, value: string) => {
		if (checked) {
			setSelectedInstallationItems((prev) => [...prev, value]);
		} else {
			setSelectedInstallationItems((prev) =>
				prev.filter((item) => item !== value)
			);
		}
	};

	useEffect(() => {
		console.log(selectedInstallationItems);
	}, [selectedInstallationItems]);

	// BRAND

	const brands = [
		{ id: "BLUM", label: "BLUM" },
		{ id: "GRASS", label: "GRASS" },
		{ id: "KESSEBOHMER", label: "KESSEBOHMER" },
		{ id: "HAFELE", label: "HAFELE" },
		{ id: "BLANCO", label: "BLANCO" },
		{ id: "TEKA", label: "TEKA" },
	];

	const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

	const handleChangeBrand = (checked: boolean, value: string) => {
		if (checked) {
			setSelectedBrands((prev) => [...prev, value]);
		} else {
			setSelectedBrands((prev) => prev.filter((item) => item !== value));
		}
	};

	useEffect(() => {
		console.log(selectedBrands);
	}, [selectedBrands]);

	// RATING
	const ratings = [
		{ key: 5, value: "Five star", stars: [true, true, true, true, true] },
		{ key: 4, value: "Four star", stars: [true, true, true, true, false] },
		{ key: 3, value: "Three star", stars: [true, true, true, false, false] },
		{ key: 2, value: "Two star", stars: [true, true, false, false, false] },
		{ key: 1, value: "One star", stars: [true, false, false, false, false] },
	];

	const [selectedRating, setSelectedRating] = useState<number[]>([]);

	const handleChangeRating = (checked: boolean, key: number, value: string) => {
		if (checked) {
			setSelectedRating((prev) => [...prev, key]);
			console.log({ key, value });
		} else {
			setSelectedRating((prev) => prev.filter((item) => item !== key));
			// console.log({ key, value });
		}
	};

	useEffect(() => {
		console.log("Selected Ratings:", selectedRating);
	}, [selectedRating]);

	// COLOR

	const colors = [
		{ color: "#FFFFFF", bgClass: "bg-whitePrimary" },
		{ color: "#010202", bgClass: "bg-brandColorSecondary" },
		{ color: "#FF0000", bgClass: "bg-redDangerColor1" },
		{ color: "#FFB800", bgClass: "bg-[#FFB800]" },
		{ color: "#47D355", bgClass: "bg-[#47D355]" },
		{ color: "#6CA7FF", bgClass: "bg-[#6CA7FF]" },
		{ color: "#6A32B1", bgClass: "bg-[#6A32B1]" },
		{ color: "#A10E78", bgClass: "bg-[#A10E78]" },
		{ color: "#D433A7", bgClass: "bg-[#D433A7]" },
		{ color: "#4A163C", bgClass: "bg-[#4A163C]" },
		{ color: "#3C0D9F", bgClass: "bg-[#3C0D9F]" },
		{ color: "#96A112", bgClass: "bg-[#96A112]" },
	];

	type ColorName =
		| "#FFFFFF"
		| "#010202"
		| "#FF0000"
		| "#FFB800"
		| "#47D355"
		| "#6CA7FF"
		| "#6A32B1"
		| "#A10E78"
		| "#D433A7"
		| "#4A163C"
		| "#3C0D9F"
		| "#96A112";

	// const [activeColor, setActiveColor] = useState<ColorName | null>(null);

	// const handleClick = (color: ColorName) => {
	//   setActiveColor(color);
	//   console.log(color);
	// };

	const [activeColors, setActiveColors] = useState<ColorName[]>([]);

	const handleClick = (color: ColorName) => {
		setActiveColors(
			(prevColors) =>
				prevColors.includes(color)
					? prevColors.filter((c) => c !== color) // Remove the color if already selected
					: [...prevColors, color] // Add the color if not selected
		);
		console.log(activeColors);
	};

	const [width, setWidth] = useState<number | "">("");
	const [height, setHeight] = useState<number | "">("");
	const [isWidthSelected, setIsWidthSelected] = useState(false);
	const [isHeightSelected, setIsHeightSelected] = useState(false);

	const handleChangeWidth = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseFloat(event.target.value);
		setWidth(isNaN(value) ? "" : value);
		console.log("Width:", value);
	};

	const handleChangeHeight = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseFloat(event.target.value);
		setHeight(isNaN(value) ? "" : value);
		console.log("Height", value);
	};

	const handleWidthClick = () => {
		setIsWidthSelected((prev) => !prev);
	};
	const handleHeightClick = () => {
		setIsHeightSelected((prev) => !prev);
	};

	return (
		<div>
			<div className="flex  flex-col justify-center gap-6 ">
				{/* <div className="flex justify-start items-center gap-2 lg:mt-4 mt-0 lg:border-0 border border-black py-1 px-2 rounded-md">
          <div>
            <FaSliders className="w-4 h-4 text-textOptional" />
          </div>
          <div className="text-base font-normal text-text">Filter</div>
        </div> */}

				<div className="hidden lg:block"><FilterTitle /></div>

				<hr className=" text-grayLightPrimary " />

				<div className="">
					<div className="flex flex-col gap-8">
						<div className="flex flex-col gap-2">
							<div className="font-bold text-sm text-start text-text">
								Price
							</div>
							<div className="font-bold text-sm text-start text-textOptional ">
								Starting from: BDT 10,000
							</div>

							{/* Slider */}
							<div>
								<Slider
									defaultValue={[33]}
									max={100}
									step={1}
									aria-label="Price range"
									className="mt-6 cursor-pointer"
								/>
							</div>
						</div>

						{/* Material & Style */}
						<div className="flex flex-row justify-between items-center gap-2">
							<div>
								<p className="text-sm font-bold  text-textSecondary">
									Material
								</p>
								{materials.map(({ id, label }) => {
									return (
										<>
											<div key={id} className="items-top flex space-x-2 mt-2">
												<Checkbox
													id={id}
													className="items-top flex space-x-2"
													onCheckedChange={(checked) =>
														handleChangeMeterial(Boolean(checked), label)
													}
												></Checkbox>
												<div className=" text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
													<label
														htmlFor={id}
														className="text-sm font-normal text-textOptional"
													>
														{label}
													</label>
												</div>
											</div>
										</>
									);
								})}
							</div>

							<div className="flex flex-col gap-2">
								<div className="text-sm font-bold  text-textSecondary">
									Style
								</div>
								{styles.map(({ id, label }) => (
									<div key={id} className="items-top flex space-x-2">
										<Checkbox
											id={id}
											onCheckedChange={(checked) =>
												handleChangeStyle(Boolean(checked), label)
											}
										/>
										<div className="grid gap-1.5 leading-none">
											<label
												htmlFor={id}
												className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 
                    text-textOptional"
											>
												{label}
											</label>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* COLOR */}

						<div className="flex flex-col gap-2">
							<div>Color</div>
							<div className="grid grid-cols-6 gap-2 ">
								{/* {colors.map((item, index) => {
            return (
              <div key={index}>
                <button
                className={`w-8 h-8 rounded-full shadow-xl ${
                  activeColor === item.color
                    ? `ring-offset-2 ring-2 ring-linkPrimary ${item.bgClass}`
                    : `${item.bgClass}`
                }`}
                onClick={() => handleClick(item.color as ColorName)}
              ></button>
              </div>
            );
          })} */}
								{colors.map((item, index) => {
									return (
										<div key={index}>
											<button
												className={`w-8 h-8 rounded-full shadow-xl ${
													activeColors.includes(item.color as ColorName)
														? `ring-offset-2 ring-2 ring-linkPrimary ${item.bgClass}`
														: `${item.bgClass}`
												}`}
												onClick={() => handleClick(item.color as ColorName)}
											></button>
										</div>
									);
								})}
							</div>
						</div>

						{/* Dimensions */}
						<div className="flex flex-col gap-2">
							<div className="text-sm font-bold  text-textSecondary">
								Dimensions
							</div>

							<div className="flex justify-between items-center px-1 ">
								<div className="flex justify-center items-center">
									<div className="font-normal text-sm text-textOptional">
										{" "}
										Width:
									</div>
									<div>
										<input
											className={`w-1/2 h-auto bg-grayPrimary ml-2 text-lg font-medium text-text outline-none placeholder-graySecondary border-b-2 ${
												isWidthSelected
													? "border-brandColor"
													: "border-graySecondary"
											}`}
											type="number"
											value={width}
											min="1"
											onChange={handleChangeWidth}
											onClick={handleWidthClick}
										/>
										<span className="ml-1 text-sm font-normal text-textOptional">
											ft
										</span>
									</div>
								</div>

								<div className="flex justify-center items-center">
									<div className="font-normal text-sm text-textOptional ">
										{" "}
										Height:
									</div>
									<div>
										<input
											className={`w-1/2 h-auto bg-grayPrimary ml-2 text-lg font-medium text-black outline-none placeholder-graySecondary border-b-2 ${
												isHeightSelected
													? "border-brandColor"
													: "border-graySecondary"
											}`}
											type="number"
											value={height}
											min="1"
											onChange={handleChangeHeight}
											onClick={handleHeightClick}
										/>
										<span className="ml-1 text-sm font-normal text-textOptional">
											ft
										</span>
									</div>
								</div>
							</div>
						</div>

						{/* FINISH & Installation Type*/}

						<div className="flex justify-between items-center gap-2">
							<div className="flex flex-col gap-2">
								<div className="font-bold text-sm text-textSecondary ">
									Finish
								</div>
								{finishes.map(({ id, label }) => {
									return (
										<>
											<div key={id} className="flex  items-center space-x-2  ">
												<Checkbox
													id={id}
													onCheckedChange={(checked) =>
														handleChangeFinish(Boolean(checked), label)
													}
												></Checkbox>
												<div className=" text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
													<label
														htmlFor={id}
														className="text-sm font-normal text-textOptional"
													>
														{label}
													</label>
												</div>
											</div>
										</>
									);
								})}
							</div>

							<div className="flex flex-col gap-2">
								<div className="font-bold text-sm text-textSecondary ">
									Installation Type
								</div>
								{installationTypes.map(({ id, label }) => {
									return (
										<>
											<div key={id} className="flex items-center space-x-2 ">
												<Checkbox
													id={id}
													onCheckedChange={(checked) =>
														handleChangeInstallation(Boolean(checked), label)
													}
												></Checkbox>
												<div className=" text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
													<label
														htmlFor={id}
														className="text-sm font-normal text-textOptional"
													>
														{label}
													</label>
												</div>
											</div>
										</>
									);
								})}
							</div>
						</div>

						{/* Brand & Customer Ratings */}

						<div className="flex justify-between items-center gap-10">
							<div>
								<p className="font-bold text-sm text-textSecondary ">Brand</p>

								{brands.map(({ id, label }) => (
									<div key={id} className="flex items-center space-x-2 mt-2">
										<Checkbox
											id={id}
											onCheckedChange={(checked) =>
												handleChangeBrand(Boolean(checked), label)
											}
										/>
										<div className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
											<label
												htmlFor={id}
												className="text-sm font-normal text-textOptional"
											>
												{label}
											</label>
										</div>
									</div>
								))}
							</div>

							{/* <div>
            <div>
              <p className="font-bold text-sm text-textSecondary ">
                Customer Ratings
              </p>
            </div>

            {ratings.map(({ key, value, stars }) => (
              <div key={key} className="flex items-center space-x-2 mt-2">
                <Checkbox
                  id={`rating-${key}`}
                  onCheckedChange={(checked) =>
                    handleChangeRating(Boolean(checked), key, value)
                  }
                />
                <div className="flex items-center">
                  <label
                    htmlFor={`rating-${key}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {key}
                  </label>
                  <div className="flex items-center gap-1 ml-2">
                    {stars.map((isFilled, index) => (
                      <FaStar
                        key={`${key}-${index}`}
                        className={`w-4 h-4 ${
                          isFilled ? "text-orange-400" : "text-grayLightPrimary"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div> */}
						</div>

						<div>
							<Button className="text-base font-medium  w-full transition duration-300 hover:scale-95 bg-brandColorSecondary hover:bg-brandColorHover text-backgroundColor hover:text-white">
								Apply
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Filter;
