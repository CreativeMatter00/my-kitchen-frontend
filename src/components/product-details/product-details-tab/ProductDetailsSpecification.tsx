/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

interface Specification {
	name: string;
	description: string;
}

interface WeightAndLoadCapacitySection {
	upperCabinets?: Specification[];
	baseCabinets?: Specification[];
	countertops2?: Specification[];
}

type WeightAndLoadCapacity = WeightAndLoadCapacitySection[];

const ProductDetailsSpecification = () => {
	const cabinets = [
		{
			name: "Material",
			description:
				"MDF (Medium Density Fiberboard) with an external laminate finish.",
		},
		{
			name: "Durability",
			description:
				"Highly resistant to moisture, warping, and general wear and tear.",
		},
		{
			name: "Environmental Impact",
			description:
				"MDF is manufactured using recycled wood fibers, contributing to a sustainable environment.",
		},
	];

	const countertops = [
		{ name: "Material", description: "Engineered Quartz." },
		{
			name: "Resistance",
			description: "Scratch-resistant, stain-resistant, and heat-resistant.",
		},
		{
			name: "Maintenance",
			description:
				"Non-porous surface requires minimal maintenance, just regular wiping with a damp cloth.",
		},
	];

	const hardwares = [
		{
			name: "Hinges",
			description:
				"Stainless steel, with a soft-close mechanism to prevent slamming.",
		},
		{
			name: "Drawer Slides",
			description:
				"Heavy-duty ball-bearing slides that can support up to 100 lbs.",
		},
		{
			name: "Handles",
			description:
				"Zinc alloy with a brushed nickel finish, resistant to corrosion and wear.",
		},
	];

	const weightAndLoadCapacity: WeightAndLoadCapacity = [
		{
			upperCabinets: [
				{ name: "Weight", description: "50 lbs per unit." },
				{ name: "Load Capacity", description: "Can hold up to 75 lbs" },
			],
		},
		{
			baseCabinets: [
				{ name: "Weight", description: "70 lbs per unit." },
				{ name: "Load Capacity", description: "Can hold up to 100 lbs" },
			],
		},
		{
			countertops2: [
				{ name: "Weight", description: "150 lbs (per 6-foot section)" },
				{
					name: "Load Capacity",
					description: "Designed to support heavy appliances.",
				},
			],
		},
	];

	const dimensions = [
		{
			item: "Upper Cabinets",
			height: '30", 36", 42"',
			width: '12", 18", 24", 30"',
			depth: '12"',
			useCase: "Storing lightweight kitchen items",
		},
		{
			item: "Base Cabinets",
			height: '30" to 34.5"',
			width: '15", 18", 24", 36"',
			depth: '24"',
			useCase: "Storing pots, pans, and appliances",
		},
		{
			item: "Countertops",
			height: "Customizable",
			width: "Customizable",
			depth: '25.5"',
			useCase: "Food prep, appliances",
		},
	];
	const finishOptions = [
		{
			component: "Cabinets",
			finishType: "Matte",
			visualEffect: "Modern, Understated",
			maintenance: "Low maintenance",
		},
		{
			component: "Cabinets",
			finishType: "Semi-Gloss",
			visualEffect: "Slightly Reflective",
			maintenance: "Easy to clean",
		},
		{
			component: "Cabinets",
			finishType: "High-Gloss",
			visualEffect: "Polished, Sleek",
			maintenance: "Requires regular cleaning",
		},
		{
			component: "Countertops",
			finishType: "Polished",
			visualEffect: "Reflective",
			maintenance: "Requires sealing occasionally",
		},
		{
			component: "Countertops",
			finishType: "Honed",
			visualEffect: "Non-Reflective",
			maintenance: "Easier to maintain",
		},
		{
			component: "Countertops",
			finishType: "Textured",
			visualEffect: "Tactile Feel",
			maintenance: "Low maintenance",
		},
	];

	return (
		<div>
			<div className="grid grid-cols-1 lg:grid-cols-4 mt-10 gap-4">
				<div className="col-span-2">
					<div className="text-3xl font-normal text-text">
						Material Composition
					</div>
					{/* CABINETS */}

					<div className="text-lg font-bold mt-6 lg:mt-10 text-brandColor">
						Cabinets
					</div>
					<div className="mt-4">
						{cabinets.map((cabinet, index) => {
							return (
								<div
									key={index}
									className="flex justify-start items-center gap-2 mt-2"
								>
									<div className="flex gap-2">
										<p className="text-base font-bold text-text lg:whitespace-nowrap whitespace-normal">
											{cabinet.name}:
										</p>
										<p className="text-base font-normal text-textSecondary">
											{cabinet.description}
										</p>
									</div>
								</div>
							);
						})}
					</div>

					{/* COUNTERTOPS */}
					<div className="text-lg font-bold mt-6 text-brandColor">
						Countertops
					</div>

					<div className="mt-4">
						{countertops.map((countertop, index) => {
							return (
								<div
									key={index}
									className="flex justify-start items-center gap-2 mt-2"
								>
									<div className="flex gap-2">
										<p className="text-base text-text font-bold whitespace-nowrap">
											{countertop.name}:
										</p>
										<p className="text-base font-normal text-textSecondary">
											{countertop.description}
										</p>
									</div>
								</div>
							);
						})}
					</div>

					{/* HARDWARE */}

					<div className="text-lg font-bold mt-6 text-brandColor">Hardware</div>
					<div className="mt-4">
						{hardwares.map((hardware, index) => {
							return (
								<div
									key={index}
									className="flex justify-start items-center gap-2 mt-2"
								>
									<div className="flex gap-2">
										<div className="text-base text-text font-bold whitespace-nowrap">
											{hardware.name}:
										</div>
										<div className="text-base font-normal text-textSecondary">
											{hardware.description}
										</div>
									</div>
								</div>
							);
						})}
					</div>

					{/* WEIGHT AND LOAD CAPACITY */}

					<div className="text-3xl text-text font-normal mt-10">
						Weight and Load Capacity
					</div>
					{weightAndLoadCapacity.map((section, index) => (
						<div key={index} className="mt-4">
							{/* Converts the section object into an array of key-value pairs  */}
							{Object.entries(section).map(([key, items]) => (
								<div key={key}>
									<div className="text-lg font-bold text-brandColor mt-6 lg:mt-10">
										{key
											.replace(/([a-z])([A-Z])/g, "$1 $2") // Add space between camelCase words
											.replace(/2/g, "") // Remove the '2' from 'countertops2'
											.replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize the first letter of each word
											.trim()}
									</div>
									{items?.map((item: Specification, itemIndex: number) => (
										<div
											key={itemIndex}
											className="flex justify-start items-center gap-2 mt-2"
										>
											<div className="flex gap-2">
												<p className="text-base font-bold text-text whitespace-nowrap">
													{item.name}:
												</p>
												<p className="text-base font-normal text-textSecondary">
													{item.description}
												</p>
											</div>
										</div>
									))}
								</div>
							))}
						</div>
					))}
				</div>
				<div className="col-span-2">
					<div className="flex flex-col gap-6 lg:gap-10">
						<div>
							<p className="text-3xl font-normal text-text">Dimensions</p>
						</div>

						<Table className=" border border-b border-text">
							<TableHeader>
								<TableRow>
									<TableHead className="font-bold text-lg text-text border-r border-text bg-graySecondary">
										Item
									</TableHead>
									<TableHead className="font-bold text-lg text-text border-r border-text bg-graySecondary">
										Height
									</TableHead>
									<TableHead className="font-bold text-lg text-text border-r border-text bg-graySecondary">
										Width
									</TableHead>
									<TableHead className="font-bold text-lg text-text  border-r border-text bg-graySecondary">
										Depth
									</TableHead>
									<TableHead className="font-bold text-lg text-text border-r border-text bg-graySecondary">
										Use Case
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{dimensions?.map((dimension, index) => {
									return (
										<TableRow key={index}>
											<TableCell className="text-base font-normal text-text border-r border-text">
												{dimension.item}
											</TableCell>
											<TableCell className="text-base font-normal text-text border-r border-text">
												{dimension.height}
											</TableCell>
											<TableCell className="text-base font-normal text-text border-r border-text">
												{dimension.width}
											</TableCell>
											<TableCell className="text-base font-normal text-text border-r border-text">
												{dimension.depth}
											</TableCell>
											<TableCell className="text-base font-normal text-text border-r border-text">
												{dimension.useCase}
											</TableCell>
										</TableRow>
									);
								})}
							</TableBody>
						</Table>

						<div className="text-3xl font-normal text-text whitespace-nowrap">
							Finish Options
						</div>

						<Table className=" border border-b border-text">
							<TableHeader>
								<TableRow>
									<TableHead className="font-bold text-lg bg-graySecondary text-text border-r border-text">
										Component
									</TableHead>
									<TableHead className="font-bold text-lg bg-graySecondary text-text whitespace-nowrap border-r border-text">
										Finish Type
									</TableHead>
									<TableHead className="font-bold text-lg bg-graySecondary text-text border-r border-text">
										Visual Effect
									</TableHead>
									<TableHead className="font-bold text-lg bg-graySecondary text-text border-r border-text">
										Maintenance
									</TableHead>
								</TableRow>
							</TableHeader>

							<TableBody>
								{finishOptions?.map((finishOption, index) => {
									return (
										<>
											<TableRow key={index}>
												<TableCell className="text-base font-normal text-text border-r">
													{finishOption.component}
												</TableCell>
												<TableCell className="text-base font-normal text-text border-r">
													{finishOption.finishType}
												</TableCell>
												<TableCell className="text-base font-normal text-text border-r">
													{finishOption.visualEffect}
												</TableCell>
												<TableCell className="text-base font-normal text-text border-r">
													{finishOption.maintenance}
												</TableCell>
											</TableRow>
										</>
									);
								})}
							</TableBody>
						</Table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetailsSpecification;
