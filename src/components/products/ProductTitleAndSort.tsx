"use client";

import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { MdOutlineStars } from "react-icons/md";
import { FaArrowDownAZ, FaArrowDownZA } from "react-icons/fa6";
import { IoAlertCircleSharp } from "react-icons/io5";
import { Icon11, Icon12 } from "../ui/all-svg/SVGFile";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const ProductTitleAndSort = () => {
	const [selectedSort, setSelectedSort] = useState("");

	const renderIconAndText = () => {
		switch (selectedSort) {
			case "price low to high":
				return {
					//icon: <PiCurrencyDollarBold />,
					text: "Price Low to High",
				};
			case "price high to low":
				return {
					//icon: <PiCurrencyDollarBold />,
					text: "Price High to Low",
				};
			case "new arrivals":
				return {
					icon: null,
					text: "Newest Arrivals",
				};
			case "top rated":
				return {
					icon: null,
					text: "Top Rated",
				};
			case "featured":
				return {
					//icon: <MdOutlineStars />,
					text: "Featured",
				};
			case "a to z":
				return {
					// icon: <FaArrowDownAZ className="w-4 h-4" />,
					text: "A to Z",
				};
			case "z to a":
				return {
					//icon: <FaArrowDownZA className="w-4 h-4" />,
					text: "Z to A",
				};
			default:
				return {
					icon: <CiFilter className="h-5 w-5" />,
					text: "Sort by",
				};
		}
	};

	const { icon, text } = renderIconAndText();

	return (
		<div>
			<div className="flex justify-end items-center ">
				<div>
					<Select onValueChange={(value) => setSelectedSort(value)}>
						<SelectTrigger className="w-[200px] rounded-none">
							<div className="flex justify-center items-center gap-2">
								{icon}
								<SelectValue
									className="text-base font-normal text-textOptional "
									placeholder={text}
								/>
							</div>
						</SelectTrigger>
						<SelectContent>
							<SelectItem
								value="price low to high"
								className="hover:bg-graySecondary group "
							>
								<div className="flex justify-center items-center gap-2 cursor-pointer rounded-sm py-1 group-hover:text-brandColor">
									<PiCurrencyDollarBold className="w-4 h-4  " />
									<div className=" font-bold text-sm text-textSecondary group-hover:text-brandColor">
										Price Low to High
									</div>
								</div>
							</SelectItem>

							<SelectItem
								value="price high to low"
								className="hover:bg-graySecondary group"
							>
								<div className="flex justify-center items-center gap-2 cursor-pointer  rounded-sm py-1 group-hover:text-brandColor">
									<PiCurrencyDollarBold className="w-4 h-4 " />
									<p className="font-bold text-sm text-textSecondary group-hover:text-brandColor">
										Price High to Low
									</p>
								</div>{" "}
							</SelectItem>

							<SelectItem
								value="new arrivals"
								className="hover:bg-graySecondary group "
							>
								<div className="flex justify-center items-center gap-2 cursor-pointer rounded-sm py-1 group-hover:text-brandColor">
									<div className="w-4 h-4 ">
										<Icon11 />
									</div>

									<p className="font-bold text-sm text-textSecondary group-hover:text-brandColor">
										Newest Arrivals
									</p>
								</div>{" "}
							</SelectItem>

							<SelectItem
								value="top rated"
								className="hover:bg-graySecondary group"
							>
								<div className="flex justify-center items-center gap-2 rounded-sm py-1 cursor-pointer">
									<div className="w-4 h-4 group-hover:text-brandColor">
										<Icon12 />
									</div>
									<p className="font-bold text-sm text-textSecondary group-hover:text-brandColor">
										Top Rated
									</p>
								</div>{" "}
							</SelectItem>

							<SelectItem
								value="featured"
								className="hover:bg-graySecondary group"
							>
								<div className="flex justify-center items-center gap-2 cursor-pointer rounded-sm py-1">
									<MdOutlineStars className="w-4 h-4 group-hover:text-brandColor" />
									<p className="font-bold text-sm text-textSecondary group-hover:text-brandColor">
										Featured
									</p>
								</div>{" "}
							</SelectItem>

							<SelectItem
								value="a to z"
								className="hover:bg-graySecondary group"
							>
								<div className="flex justify-center items-center gap-2 cursor-pointer rounded-sm py-1">
									<FaArrowDownAZ className="w-4 h-4 group-hover:text-brandColor" />
									<p className="font-bold text-sm text-textSecondary group-hover:text-brandColor">
										A to Z
									</p>
								</div>{" "}
							</SelectItem>

							<SelectItem
								value="z to a"
								className="hover:bg-graySecondary group"
							>
								<div className="flex justify-center items-center gap-2 cursor-pointer rounded-sm py-1">
									<FaArrowDownZA className="w-4 h-4 group-hover:text-brandColor " />
									<p className="font-bold text-sm text-textSecondary group-hover:text-brandColor">
										Z to A
									</p>
								</div>{" "}
							</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>
			
			{/* <div className="hidden lg:block">
				<div className="flex justify-start items-center gap-2">
				<div className="font-normal text-3xl ">New arrival</div>
				<div>
					<IoAlertCircleSharp className="w-5 h-5" />
				</div>
				</div>
			</div> */}

        <div className="text-3xl font-normal text-text mb-6">Explore My Kitchen</div>
		</div>
	);
};

export default ProductTitleAndSort;
