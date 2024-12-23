import BreadcrumbOfHome from "@/components/breadcrumbs/BreadcrumbOfHome";
import SeeWhatInside from "@/components/shared/button/SeeWhatInside";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const img1 = "/images/kitchen-area/couple-kitchen/img.jpg";
const CoupleKitchen = () => {
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
					Couple Kitchen
				</div>

				<div>
					<p className="text-textSecondary text-sm md:text-base lg:text-lg mt-2 md:mt-4 flex justify-center items-center">
						It’s a wonderful feeling to have a better half who loves to cook and
						feed others as much as you do. The stronger and more detailed your
						criteria for the kitchen layout, the more likely you are to end up
						with a finished kitchen design that works for you. It’s important
						that you have a good relationship with your kitchen designer. This
						is a very personal project and a pretty large investment. So you
						have to get along well, so things run as smooth as possible. Budget
						is always a strict consideration, so weigh your options to get as
						many quotes as possible before deciding. Ask a few searching
						questions to ensure that your initial criteria are met with a
						reassuring understanding rather than a vacant nod of the head.
					</p>
				</div>

				<div>
					<p className="text-textSecondary text-sm md:text-base lg:text-lg flex justify-center items-center">
						Take your time when planning the perfect couple’s kitchen and enjoy
						the process. Taking a considered approach will reap long term
						benefits. While the floor plan of your home will most likely
						determine the layout that your kitchen will have, you can always
						optimize the area to work better. Here are the most commonly found
						kitchen layouts, with tips to help you do just that.
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

export default CoupleKitchen;
