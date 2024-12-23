import BreadcrumbOfHome from "@/components/breadcrumbs/BreadcrumbOfHome";
import SeeWhatInside from "@/components/shared/button/SeeWhatInside";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const img = "/images/counter-top/acrylic-solid-surface/img.jpg";

const AcrylicSolidSurface = () => {
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
					Acrylic Solid Surface
				</div>

				<div>
					<p className="text-textSecondary text-sm md:text-base lg:text-lg mt-2 md:mt-4 flex justify-center items-center">
						Solid-Surface is man-made material usually composed of a combination
						of alumina (ATH), acrylic, epoxy or polyester resins and pigments.
						It was first introduced by Dupont in 1967 under the name of Corian.
						Solid Surface can also be moulded using dedicated moulds. Many
						finishes are available including-gel coated, matte, gloss, metallic
						and textured. Solid-Surface countertops are seamless on the surface,
						heat and stain resistant and available in a variety of colors,
						patterns and styles. Scratches can be easily softened with a
						nonabrasive scrubbing pad.
					</p>
				</div>

				<div>
					<p className="text-textSecondary text-sm md:text-base lg:text-lg">
						<span className="text-sm md:text-base font-bold text-text">
							Environmental Impact -
						</span>{" "}
						&nbsp; Solid-Surface is durable and won’t need to be replaced for a
						long time; it doesn’t react readily with other chemicals or
						elements, which means it has low impact on both indoor and outdoor
						environments; and it’s nontoxic, with virtually no off-gassing of
						VOCs.
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

export default AcrylicSolidSurface;
