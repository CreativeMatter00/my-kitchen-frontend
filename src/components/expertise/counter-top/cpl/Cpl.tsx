import BreadcrumbOfHome from "@/components/breadcrumbs/BreadcrumbOfHome";
import SeeWhatInside from "@/components/shared/button/SeeWhatInside";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const img = "/images/counter-top/cpl/img.jpg";

const Cpl = () => {
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
					CPL
				</div>

				<div>
					<p className="text-textSecondary text-sm md:text-base lg:text-lg mt-2 md:mt-4 flex justify-center items-center">
						Continuous/Compact Pressure Laminate is constructed with layers of
						Kraft paper, dipped in resin and dried. These layers are then
						sandwiched between laminated top and bottom sheets, compressed and
						baked. A process called polymerization melds them all together
						creating a solid-core panel that is an extra tough durable laminate.
					</p>
				</div>

				<div className="flex flex-col gap-2">
					<div>
						<p className="text-textSecondary text-sm md:text-base lg:text-lg">
							<span className="text-sm md:text-base font-bold text-text">
								Environmental Impact -
							</span>{" "}
							&nbsp; CPL’s products are compliant with the international health
							and safety foundation sanitary standard, ensuring that our working
							surfaces are safe for use in all food environments.
						</p>
					</div>
					<div>
						<p className="text-textSecondary text-sm md:text-base lg:text-lg">
							<span className="text-sm md:text-base font-bold text-text">
								Pros -
							</span>{" "}
							&nbsp; This creates a prefinished panel that is strong,
							self-supporting, water resistant and highly durable, requiring
							very low maintenance perfect for a multitude of uses in commercial
							and public spaces.
						</p>
					</div>
					<div>
						<p className="text-textSecondary text-sm md:text-base lg:text-lg">
							<span className="text-sm md:text-base font-bold text-text">
								Cons -
							</span>{" "}
							&nbsp; Thin CPL are not self-supporting and require bonding to a
							substrate. Typically they are glued to wood-based subtracts to
							from a CPL composite panel.
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

export default Cpl;
