/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import SeeWhatInside from "../../../shared/button/SeeWhatInside";
import Link from "next/link";
import BreadcrumbOfHome from "@/components/breadcrumbs/BreadcrumbOfHome";

const trending = "/images/kitchen-area/trending-now/trending.png";

const TrendingNow = () => {
	return (
		<>
			<div className="container mx-auto  flex flex-col gap-4 mt-4 md:mt-8 lg:mt-16 pb-8">
				<BreadcrumbOfHome />
				<div className="flex justify-center item-center">
					<Image
						src={trending}
						alt="Trending"
						width={1368}
						height={696}
						className="w-full h-auto"
					></Image>
				</div>

				<div className="text-2xl md:text-5xl lg:text-7xl font-normal text-center text-text md:mt-2 lg:mt-4 xL:mt-6 2xl:mt-8">
					Trending Now
				</div>

				<div>
					<p className="text-textSecondary text-sm md:text-base lg:text-lg mt-2 md:mt-4 flex justify-center items-center">
						Trending Now This section is the main attraction of the company –
						always fresh, always the stunning newness. To give the customer a
						feel/sense of elegance every time. Often overlooked as purely an
						‘accent’ color, black walls, cabinetry and work surfaces are having
						something of a moment. Black becomes loveable, luxe and inviting,
						with textured woods adding rustic, homely charm. Choosing color is
						such a personal experience – in fact no one knows for sure whether
						we all even see the myriad shades in the same way. ‘The color in a
						kitchen – be it on walls or fittings – should last for at least five
						years minimum so, try to look beyond immediate trends and choose a
						color that will keep you feeling good long term. ‘Handleless kitchen
						cabinets are one of the biggest trends for present for more
						pared-back, streamlined look. It’s all about simplicity and a focus
						on cabinetry into new trend. The latest contemporary designs are all
						about a multi-tasking, free-flowing design with a paired-back look.
						Technological advances in push-open and close doors means that it
						has become possible to dispense with handles in both wall and base
						cabinets. If you prefer not to have push-open cupboards, then
						recessed handles provide the same sleek look and can be lined with
						contrasting colors and materials to add interest.
					</p>
				</div>

				<div>
					<p className="text-textSecondary text-sm md:text-base lg:text-lg flex justify-center items-center">
						‘Handleless kitchen cabinets are one of the biggest trends for
						present for more pared-back, streamlined look. It’s all about
						simplicity and a focus on cabinetry into new trend. The latest
						contemporary designs are all about a multi-tasking, free-flowing
						design with a paired-back look. Technological advances in push-open
						and close doors means that it has become possible to dispense with
						handles in both wall and base cabinets. If you prefer not to have
						push-open cupboards, then recessed handles provide the same sleek
						look and can be lined with contrasting colors and materials to add
						interest.
					</p>
				</div>

				<div className="flex justify-center items-center py-4 md:py-6 lg:py-10">
					<Link href={"/products"}>
						<SeeWhatInside />
					</Link>
				</div>
			</div>
		</>
	);
};

export default TrendingNow;
