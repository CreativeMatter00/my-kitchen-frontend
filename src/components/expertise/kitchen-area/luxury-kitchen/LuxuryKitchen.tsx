import BreadcrumbOfHome from "@/components/breadcrumbs/BreadcrumbOfHome";
import SeeWhatInside from "@/components/shared/button/SeeWhatInside";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const img1 = "/images/kitchen-area/luxury/img1.jpg";
const Luxury = () => {
	return (
		<div>
			<div className="container mx-auto  flex flex-col gap-4 mt-4 md:mt-8 lg:mt-16 pb-8">
				<BreadcrumbOfHome />
				<div className="flex justify-center item-center">
					<Image
						src={img1}
						alt="Images"
						width={1368}
						height={696}
						className="w-full h-auto"
					></Image>
				</div>

				<div className="text-2xl md:text-5xl lg:text-7xl font-normal text-center text-text md:mt-2 lg:mt-4 xL:mt-6 2xl:mt-8">
					Luxury Kitchen
				</div>

				<div>
					<p className="text-textSecondary text-sm md:text-base lg:text-lg mt-2 md:mt-4 flex justify-center items-center">
						Technology has entered the kitchen in full force and not just in the
						form of fancy gadgets and appliances. Today, you can have a kitchen
						with technology integrated into every function and appliance–from
						the faucets to the fridge to the lighting. This is what we call a
						smart luxury kitchen. Smart luxury kitchens are an evolving aspect
						of design. In fact, a lot of kitchens today are built smart from the
						ground up.
					</p>
				</div>

				<div>
					<p className="text-textSecondary text-sm md:text-base lg:text-lg flex justify-center items-center">
						For older kitchens, sensors, smart gadgets and other devices can be
						added to for convenience to the homeowner. A minimalist kitchen
						design can still look high-end; it’s all in the quality of the
						materials and a well-balanced layout. The linear suspension light in
						this simplistic scheme keeps a low profile but accentuates the long
						line of the central island. We have scoured the world of luxury
						kitchens and gathered the most gorgeous and most ingenious design
						ideas to take your kitchen to the next level – whether you choose to
						invest in the real thing or emulate them with clever copycats.
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

export default Luxury;
