import BreadcrumbOfHome from "@/components/breadcrumbs/BreadcrumbOfHome";
import SeeWhatInside from "@/components/shared/button/SeeWhatInside";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const img1 = "/images/kitchen-area/economy/img1.jpg";

const EconomyKitchen = () => {
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
					Economy Kitchen
				</div>

				<div>
					<p className="text-textSecondary text-sm md:text-base lg:text-lg mt-2 md:mt-4 flex justify-center items-center">
						Designing kitchens on a budget does take some skill. After all, when
						it comes to planning a new kitchen, there is often a huge gulf
						between budget and expectation. You can start designing your dream
						kitchen with a limited budget in mind but then when you start adding
						on the price for labor, appliances, worktops, tiles and other
						extras, costs quickly escalate and that original number you started
						with just seems impossible to stick to. The biggest expense that
						every homeowner has to bear while designing the kitchen is cabinets.
					</p>
				</div>

				<div>
					<p className="text-textSecondary text-sm md:text-base lg:text-lg flex justify-center items-center">
						In current market of modular kitchens carpenters and designers
						search for innovative kitchen cabinets ideas that enable maximum
						utilization of space and materials at minimal cost. Though wood is
						the obvious choice of everyone it is expensive and now designers are
						offering other alternatives like plywood, Medium Density Fiberboard
						(MDF), particle board and other artificial options to homeowners.
						Here are some kitchen cabinets designs that are durable and are the
						pride and joy of their owners as they have been able to save costs
						without compromising on looks.
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

export default EconomyKitchen;
