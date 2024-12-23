import BreadcrumbOfHome from "@/components/breadcrumbs/BreadcrumbOfHome";
import SeeWhatInside from "@/components/shared/button/SeeWhatInside";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const img = "/images/counter-top/sintered/img.jpg";
const Sintered = () => {
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
					Sintered
				</div>

				<div>
					<p className="text-textSecondary text-sm md:text-base lg:text-lg mt-2 md:mt-4 flex justify-center items-center">
						Engineered stone manufactured by imitating the metamorphic change
						rocks suffer across thousands of years in an industrial environment.
						It results in a new and revolutionary range of products with zero
						porosity. Not only they look great but you can also avail these in
						10mm, 12mm,20mm and 30mm thicknesses.
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
							&nbsp; While Engineered stone are expensive than many countertop
							materials, it is quite a bit more expensive than laminate and
							concrete.
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
					<div>
						<p className="text-text font-bold text-sm md:text-base lg:text-lg">
							Brand Partner: &nbsp; 1. Caesarstone &nbsp; 2. Silestone &nbsp; 3.
							Cambria Quartz &nbsp; 4. Santa Margherita Quartz &nbsp; 5. Viatera
							&nbsp; 6. Okite &nbsp; 7. Corian Quartz &nbsp; 8. Hanstone &nbsp;
							9. Ice Stone
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

export default Sintered;
