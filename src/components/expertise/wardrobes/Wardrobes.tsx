import React from "react";
import Link from "next/link";
import SeeWhatInside from "../../shared/button/SeeWhatInside";
import VideoPlaybackAbout from "@/components/shared/video/VideoPlaybackAbout";

const Wardrobes = () => {
	return (
		<div>
			{/* This is wardrobes */}
			<div className="pb-8">
				<div className="flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 ">
					<VideoPlaybackAbout
						title="Wardrobes"
						commonFirstDescription={"Where Your"}
						commonSecondDescription={"Dream Kitchen"}
						commonThirdDescription={"Comes to Life"}
					/>

					<div className="text-2xl md:text-5xl lg:text-7xl text-center font-normal ">
						Wardrobes
					</div>
				</div>

				<div className="container mx-auto flex flex-col gap-4 md:gap-6 lg:gap-8 mt-2 md:mt-6 lg:mt-8">
					<div className="flex justify-center items-center font-normal text-sm md:text-base lg:text-lg text-textSecondary">
						Our thoughtfully curated wardrobe collection works for everyone in
						the family. Our range includes a wide choice of materials and colors
						to suit every mood, and different sizes to suit every nook. From
						free-standing wardrobes with both sliding and hinged door options to
						the PAX system which can be customized from scratch for the designer
						in you. And don’t forget our clever PET & SM range, specifically
						designed for compact urban homes to maximize space and storage. To
						keep this busy client’s ever-evolving wardrobe and accessories’
						collection neatly organized yet easily accessible, we created a
						custom- wardrobe & closet solution with accent cubbies and display
						shelves, as well as closed storage.
					</div>

					<div className="flex justify-center items-center  py-4 md:py-6 lg:py-10">
						<Link href={"/products"}>
							<SeeWhatInside />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Wardrobes;
