import React from "react";
import Image from "next/image";
import SeeWhatInside from "../../../../shared/button/SeeWhatInside";

import { useState } from "react";
import Link from "next/link";
import BreadcrumbOfHome from "@/components/breadcrumbs/BreadcrumbOfHome";

const hingeData = [
	{
		imgSrc: "/images/hinge/img1.jpg",
		imgAlt: "image",
		imgWidth: 889,
		imgHeight: 540,
		textPosition: "right",
		title: "TIMOS",
		description:
			"Hinges were known in ancient times. With Tiomos, GRASS is opening a new chapter that will inspire the furniture-making of tomorrow. The development of Tiomos has benefited from several decades of know-how and experience. All details and functions have been reconsidered and developed from basic principles over years of research. The result is a highly elegant movement system that already today fulfils all the technical and functional requirements of tomorrow.",
	},
	{
		imgSrc: "/images/hinge/img2.jpg",
		imgAlt: "image",
		imgWidth: 889,
		imgHeight: 540,
		textPosition: "left",
		title: "NEXIS",
		description:
			"Fits doors perfectly.The hinge cup of Nexis Impresso sits tightly and solidly in door materials such as chipboard. Fast and reliable installation without tools. In the Nexis Impresso series no tools are required for quickly fitting the cup to the door front and removing it. Hinges are fitted quickly and reliably on site.",
	},
	{
		imgSrc: "/images/hinge/img3.jpg",
		imgAlt: "image",
		imgWidth: 889,
		imgHeight: 540,
		textPosition: "right",
		title: "SPECIAL HINGE",
		description:
			"From flap hinges and mini-hinges to glass door hinges for direct mounting on the cabinet side wall.",
	},
	{
		imgSrc: "/images/hinge/img4.jpg",
		imgAlt: "image",
		imgWidth: 889,
		imgHeight: 540,
		textPosition: "left",
		title: "SINGLE-JOINT HINGE",
		description:
			"For us, that means focusing on quality, design and function. Our range of hinges for furniture in offices and public buildings is the best example of that. We offer the ideal single-joint hinge for all applications. Its high-quality materials, excellent workmanship and top quality are just as important to us as its aesthetic design and reliable operation. Try it for yourself.",
	},
];

const DrawerSystem = () => {
	return (
		<div>
			<div className="container mx-auto mt-10 pb-8">
				<BreadcrumbOfHome />
				<div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
					<div>
						<p className="text-2xl md:text-5xl lg:text-7xl text-center font-normal text-text">
							Drawer System
						</p>
					</div>
					<div>
						<p className="text-base md:text-xl lg:text-2xl text-center text-textSecondary">
							Enjoy the beauty of movement
						</p>
					</div>
					{/* <div>
  <p className="text-sm md:text-base lg:text-lg  flex justify-center mx-auto">
    AVENTOS lift systems bring top quality motion to wall cabinets. Even
    large and heavy fronts open with ultimate ease. What makes AVENTOS
    especially practical is that it gives users easy access to contents
    and full freedom of movement.
  </p>
</div> */}
				</div>

				<div>
					{hingeData.map((item, index) => (
						<div
							key={index}
							className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-6 md:gap-10 md:mt-20"
						>
							{item.textPosition === "left" && (
								<div className="lg:col-span-2 order-2 lg:order-1">
									<div
										className={`font-normal text-2xl md:text-5xl  lg:mt-20 ${
											item.textPosition === "left"
												? "text-center lg:text-end  text-text"
												: ""
										}`}
									>
										<p>{item.title}</p>
									</div>
									<div
										className={`mt-4 md:mt-10 font-normal text-sm md:text-base ${
											item.textPosition === "left"
												? "text-center lg:text-end  text-text"
												: ""
										}`}
									>
										<p className=" text-text">{item.description}</p>
									</div>
								</div>
							)}
							<div className="lg:col-span-3 order-1 lg:order-2">
								<Image
									src={item.imgSrc}
									className="w-full h-auto"
									alt={item.imgAlt}
									width={item.imgWidth}
									height={item.imgHeight}
								/>
							</div>
							{item.textPosition === "right" && (
								<div className="lg:col-span-2 order-2">
									<div className="font-normal text-2xl md:text-5xl lg:mt-20 text-center lg:text-start">
										<p className="text-text">{item.title}</p>
									</div>
									<div className="mt-4 md:mt-10 font-normal text-sm md:text-base text-center lg:text-start">
										<p className="text-text">{item.description}</p>
									</div>
								</div>
							)}
						</div>
					))}
				</div>

				<div className="flex justify-center item-center  py-4 md:py-6 lg:py-10">
					<Link href={"/products"}>
						<SeeWhatInside />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default DrawerSystem;
