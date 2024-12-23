import Image from "next/image";
import React from "react";
import Link from "next/link";
import VideoPlaybackAbout from "@/components/shared/video/VideoPlaybackAbout";
import SeeWhatInside from "@/components/shared/button/SeeWhatInside";

interface Props {
	//title: string;
}
const WalkInClosets: React.FC<Props> = () => {
	const features = [
		{
			id: 1,
			icon: "/images/walk-in-closets/icon.png",
			text: "Fluted chrome poles in a variety of hanging lengths allow hangers to slide with ease.",
		},
		{
			id: 2,
			icon: "/images/walk-in-closets/icon.png",
			text: "Adjustable shelves that evolve to meet storage needs, accommodating everything from shoes to bedding.",
		},
		{
			id: 3,
			icon: "/images/walk-in-closets/icon.png",
			text: "Wire baskets for at-a-glance visibility and a double pull-out hamper for easy laundry sorting.",
		},
	];

	return (
		<>
			<div className="pb-8">
				<div className="flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 ">
					<VideoPlaybackAbout
						title="Walk in closest"
						commonFirstDescription={"Where Your"}
						commonSecondDescription={"Dream Kitchen"}
						commonThirdDescription={"Comes to Life"}
					/>

					<div className="text-2xl md:text-5xl lg:text-7xl text-center font-normal ">
						Walk In Closets
					</div>
				</div>

				<div className="container mx-auto flex flex-col gap-4 md:gap-6 lg:gap-8 mt-2 md:mt-6 lg:mt-8">
					<div className="flex justify-center items-center font-normal text-sm md:text-base lg:text-lg text-textSecondary">
						This elevated/transitional closet solution offers a
						fashion-meets-function system to showcase your wardrobe. The modern
						closet becomes the ultimate storage solution with its refined design
						and customizable features including glass doors, pull-out,
						components, closed storage, and more. Light and airy is making it a
						smart solution for shared spaces. A variety of hanging lengths and
						an abundance of adjustable shelving adapts to our clients’ changing
						needs. To keep this busy client’s ever-evolving wardrobe and
						accessories’ collection neatly organized yet easily accessible, we
						created a custom walk-in closet solution with accent cubbies and
						display shelves, as well as closed storage. The end result is a
						stylish walk-in closet that feels like a personal boutique.
					</div>

					<div className="flex flex-col gap-1">
						{features.map((feature) => (
							<div
								key={feature.id}
								className="flex justify-start items-center gap-4"
							>
								<Image
									src={feature.icon}
									alt="Feature Icon"
									width={24}
									height={24}
									className="h-6 w-9"
								/>

								<div className=" font-normal text-sm md:text-base lg:text-lg text-textSecondary">
									{feature.text}
								</div>
							</div>
						))}
					</div>

					<div className="flex justify-center items-center  py-4 md:py-6 lg:py-10">
						<Link href={"/products"}>
							<SeeWhatInside />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default WalkInClosets;
