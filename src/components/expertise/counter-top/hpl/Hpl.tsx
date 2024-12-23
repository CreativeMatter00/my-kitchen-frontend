import BreadcrumbOfHome from "@/components/breadcrumbs/BreadcrumbOfHome";
import SeeWhatInside from "@/components/shared/button/SeeWhatInside";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const img = "/images/counter-top/hpl/img.jpg";

const Hpl = () => {
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
					HPL
				</div>

				<div>
					<p className="text-textSecondary text-sm md:text-base lg:text-lg mt-2 md:mt-4 flex justify-center items-center">
						HPL is the direct descendent of the original plastic and melamine
						laminate…….Because, phenolic and melamine resins are thermoset
						plastics, the curing process transforms the resin into plastic by a
						cross linking process that converts the paper sheets into a single
						regid laminated sheet.
					</p>
				</div>

				<div className="flex flex-col gap-2">
					<div>
						<p className="text-textSecondary text-sm md:text-base lg:text-lg">
							<span className="text-sm md:text-base font-bold text-text">
								Environmental Impact -
							</span>{" "}
							&nbsp; HPL’s products are compliant with the international health
							and safety foundation sanitary standard, ensuring that our working
							surfaces are safe for use in all food environments.
						</p>
					</div>
					<div>
						<p className="text-textSecondary text-sm md:text-base lg:text-lg">
							<span className="text-sm md:text-base font-bold text-text">
								Pros -
							</span>{" "}
							&nbsp; HPL sheets are available in a wide variety of colors,
							patterns and surface finishes. They are resistant to water,
							impact, scratching, moisture, heat, staining and light and possess
							good hygienic and antistatic properties. HPL are easy to clean and
							maintain.
						</p>
					</div>
					<div>
						<p className="text-textSecondary text-sm md:text-base lg:text-lg">
							<span className="text-sm md:text-base font-bold text-text">
								Cons -
							</span>{" "}
							&nbsp; Thin HPL are not self-supporting and require bonding to a
							substrate. Typically they are glued to wood-based substrates to
							from a HPL composite panel.
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

export default Hpl;
