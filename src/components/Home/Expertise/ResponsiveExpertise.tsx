import Image from "next/image";
import Link from "next/link";
import React from "react";

// export interface ProductDetails {
//     name: string;
//     imageUrl: string;
//     link:string;
//   }

const products = [
	{
		name: "KITCHEN AREA",
		imageUrl: "/images/kitchen/kitchen.png",
		link: "/expertise/kitchen-area",
	},
	{
		name: "COUNTER TOP",
		imageUrl: "/images/kitchen/counter-top.png",
		link: "/expertise/counter-top",
	},
	{
		name: "WARDROBES",
		imageUrl: "/images/kitchen/wardrobe.png",
		link: "/expertise/wardrobes",
	},
	{
		name: "WALK-IN CLOSETS",
		imageUrl: "/images/kitchen/walkInClosets.png",
		link: "/expertise/walk-in-closets",
	},
	{
		name: "VANITIES",
		imageUrl: "/images/kitchen/Vanities.png",
		link: "/expertise/vanities",
	},
	{
		name: "ACCESSORIES",
		imageUrl: "/images/kitchen/Accessories.png",
		link: "/expertise/accessories",
	},
];

const ResponsiveExpertise = () => {
	return (
		<div className="container mx-auto">
			<div className="text-4xl font-normal text-text pb-8">
				Our <span className="text-brandColor">E</span>xpertise
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{products.map((product, index) => {
					return (
						<>
							<Link href={product.link}>
								<div key={index} className="relative cursor-pointer">
									<Image
										src={product.imageUrl}
										alt="Kitchen"
										width={343}
										height={200}
										className="w-full h-auto"
									></Image>
									<div className="absolute inset-0 z-10 bg-brandColorSecondary opacity-40" />
									<div className="absolute inset-0 z-20 text-backgroundColor font-bold text-3xl flex justify-center items-center">
										{product.name}
									</div>
								</div>
							</Link>
						</>
					);
				})}
			</div>
		</div>
	);
};

export default ResponsiveExpertise;
