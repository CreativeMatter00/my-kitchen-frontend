import React from "react";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbOfHome from "@/components/breadcrumbs/BreadcrumbOfHome";
import SeeWhatInside from "@/components/shared/button/SeeWhatInside";
const img1 = "/images/kitchen-area/standard-kitchen/img1.jpg";
const StandardKitchen = () => {
	return (
		<div>
			<div className="container mx-auto  flex flex-col gap-4 mt-4 md:mt-8 lg:mt-16 pb-8">
				<BreadcrumbOfHome />
				<div className="flex justify-center item-center">
					<Image
						src={img1}
						alt="Standard Kitchen Image"
						width={1368}
						height={696}
						className="w-full h-auto"
					></Image>
				</div>

				<div className="text-2xl md:text-5xl lg:text-7xl font-normal text-center text-text md:mt-2 lg:mt-4 xL:mt-6 2xl:mt-8">
					Standard Kitchen
				</div>

				<div>
					<p className="text-textSecondary text-sm md:text-base lg:text-lg mt-2 md:mt-4 flex justify-center items-center">
						This kitchens mainly contain a connected with 3 working zone (Wash
						zone, Cook zone & Freeze/Food Storage zone). It provides a
						free-standing workspace that can serve as a countertop, storage or
						eating area. Unlike an island, the freestanding space is accessible
						from three sides. While styles like farmhouse and mid-century modern
						are still popular, homeowners are getting more streamlined in their
						overall aesthetic, designs and alternative materials for kitchens.
					</p>
				</div>

				<div>
					<p className="text-textSecondary text-sm md:text-base lg:text-lg flex justify-center items-center">
						The layout utilizes two walls in an L-shape for cabinets,
						countertops, and appliances, which provide an efficient design for
						the integration of the three workstations. Functional but
						thoughtfully considered utility, pantry, larder and boot rooms
						provide the perfect space in which to house everyday essentials away
						from the main kitchen.
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

export default StandardKitchen;
