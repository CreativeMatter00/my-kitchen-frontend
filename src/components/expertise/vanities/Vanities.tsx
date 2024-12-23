/* eslint-disable react/no-unescaped-entities */
import React from "react";
import VideoPlaybackAbout from "../../shared/video/VideoPlaybackAbout";
import SeeWhatInside from "../../shared/button/SeeWhatInside";
import Link from "next/link";

const Vanities = () => {
	return (
		<div>
			{/* This is vanities */}
			<div className="pb-8">
				<div className="flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 ">
					<VideoPlaybackAbout
						title="Vanities"
						commonFirstDescription={"Where Your"}
						commonSecondDescription={"Dream Kitchen"}
						commonThirdDescription={"Comes to Life"}
					/>

					<div className="text-2xl md:text-5xl lg:text-7xl text-center font-normal ">
						Vanities
					</div>
				</div>

				<div className="container mx-auto flex flex-col gap-4 md:gap-6 lg:gap-8 mt-2 md:mt-6 lg:mt-8">
					<div className="flex justify-center items-center font-normal text-sm md:text-base lg:text-lg text-textSecondary">
						Wood Polymer composite popularly known as WPC globally - has one
						strongest property as 'water proof nature'. Being a polymer (PVC in
						case of boards and doors) it resists water while absorbing within
						and it is the biggest advantage for the bathroom cabinets made out
						of it.
					</div>

					<div className="flex justify-center items-center font-normal text-sm md:text-base lg:text-lg text-textSecondary">
						Today's bathrooms are becoming more users friendly. People add
						furniture to their bathroom even they are bigger or smaller. For
						bigger bathrooms 'WALK IN WARDROBE/CLOSET' is becoming popular
						nowadays all around the world and WPC boards are the best fit
						product for making them. We take project for such wardrobes/closets
						for design, develop, delivery and installation.
					</div>

					<div className="flex justify-center items-center font-normal text-sm md:text-base lg:text-lg text-textSecondary">
						Smaller bathrooms have certain necessities and 'BATHROOM VANITY' is
						one of that. We design, develop, deliver and install bathroom vanity
						in custom designs. Classic nature of WPC material gives this product
						the best fit amongst all other similar panel formats.
					</div>

					<div className="flex justify-center items-center font-normal text-sm md:text-base lg:text-lg text-textSecondary">
						Any furniture needs protection from moisture and termite, in normal
						case. When it comes to bathroom the case become totally sensitive.
						Floor, walls and entire atmosphere inside a bathroom remains with
						moisture, almost the time. No plywood, MDF or Particle can be used
						normally in such an atmosphere.
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

export default Vanities;
