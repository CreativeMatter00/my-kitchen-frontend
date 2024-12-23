import BreadcrumbOfHome from "@/components/breadcrumbs/BreadcrumbOfHome";
import SeeWhatInside from "@/components/shared/button/SeeWhatInside";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const img = "/images/kitchen-area/parallel-kitchen/img1.jpg";
const ParallelKitchen = () => {
	return (
		<div>
			<div className="container mx-auto  flex flex-col gap-4 mt-4 md:mt-8 lg:mt-16 pb-8">
				<BreadcrumbOfHome />
				<div className="flex justify-center item-center">
					<Image
						src={img}
						alt="Images"
						width={1368}
						height={696}
						className="w-full h-auto"
					></Image>
				</div>

				<div className="text-2xl md:text-5xl lg:text-7xl font-normal text-center text-text md:mt-2 lg:mt-4 xL:mt-6 2xl:mt-8">
					Parallel Kitchen
				</div>

				<div>
					<p className="text-textSecondary text-sm md:text-base lg:text-lg mt-2 md:mt-4 flex justify-center items-center">
						The Parallel-shaped kitchen is perhaps the most efficient of all
						kitchens in terms of designing as per the necessity. It is ideally
						suited for small spaces and serves as a perfect one-cook kitchen. It
						comprises two parallel walls opposite each other with a walkway in
						between, which is why it’s called as a walkthrough kitchen. The
						Parallel - shaped kitchen layout resembles a two wall galley kitchen
						layout minus a wall. The Parallel-shaped modular kitchen layout
						consists of a work space on one wall with a second, free standing
						workspace running parallel to it. Also known as the corridor style,
						this compact layout locates the appliances, sink and cabinets on two
						parallel walls to create a small pass-through kitchen.
					</p>
				</div>

				<div>
					<p className="text-textSecondary text-sm md:text-base lg:text-lg flex justify-center items-center">
						These cooking spaces allow you to engage your creativity to pare
						your cooking lifestyle to the basics. In doing so, you simplify your
						kitchen and save money in the process. The key to install tall
						kitchen cabinets that extend to the celling.
					</p>
				</div>

				<div className="flex justify-center items-center py-4 md:py-6 lg:py-10">
					<Link href={"/products"}>
						<SeeWhatInside />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ParallelKitchen;
