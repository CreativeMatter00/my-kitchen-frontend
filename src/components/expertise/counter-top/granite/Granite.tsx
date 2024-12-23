import BreadcrumbOfHome from "@/components/breadcrumbs/BreadcrumbOfHome";
import SeeWhatInside from "@/components/shared/button/SeeWhatInside";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const img = "/images/counter-top/granite/img.jpg";
const Granite = () => {
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
					Granite
				</div>

				<div>
					<p className="text-textSecondary text-sm md:text-base lg:text-lg mt-2 md:mt-4 flex justify-center items-center">
						Granite is a igneous rock that contains at least 20% quartz by
						volume, but also some mica and feldspar. It’s mined from around the
						world, including quarries in India, Brazil, Norway, Italy and China.
					</p>
				</div>

				<div className="flex flex-col gap-2">
					<div>
						<p className="text-textSecondary text-sm md:text-base lg:text-lg">
							<span className="text-sm md:text-base font-bold text-text">
								Environmental Impact -
							</span>{" "}
							&nbsp; Granite is durable and recyclable, but it requires large
							amounts of energy for transport, and mining is very resource
							intensive.
						</p>
					</div>
					<div>
						<p className="text-textSecondary text-sm md:text-base lg:text-lg">
							<span className="text-sm md:text-base font-bold text-text">
								Pros -
							</span>{" "}
							&nbsp; Each slab is unique, hard, durable, scratch-resistant,
							impervious to stains, heat and water when sealed, relatively easy
							to clean. Comes in all colors, still highly covetable with an even
							higher resale value.
						</p>
					</div>
					<div>
						<p className="text-textSecondary text-sm md:text-base lg:text-lg">
							<span className="text-sm md:text-base font-bold text-text">
								Cons -
							</span>{" "}
							&nbsp; Expensive, heavy, needs annual resealing, ubiquitous,
							“granite fatigue”.Expensive, heavy, needs annual resealing,
							ubiquitous, “granite fatigue”.
						</p>
					</div>
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

export default Granite;
