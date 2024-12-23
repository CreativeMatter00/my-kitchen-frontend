import React from "react";
import VideoPlaybackAbout from "../../shared/video/VideoPlaybackAbout";
import SeeWhatInside from "../../shared/button/SeeWhatInside";
import Link from "next/link";

const Accessories = () => {
	return (
		<>
			<VideoPlaybackAbout
				title="Accessories"
				commonFirstDescription={"Where Your"}
				commonSecondDescription={"Dream Kitchen"}
				commonThirdDescription={"Comes to Life"}
			/>

			<div className="container mx-auto flex flex-col gap-10 pb-8">
				<div className=" text-2xl md:text-5xl lg:text-7xl text-center font-normal mt-4 md:mt-6 lg:mt-10 text-text">
					Accessories
				</div>
				<div className="flex flex-col gap-4">
					<p className="font-normal text-lg md:text-xl lg:text-3xl text-text">
						Kitchen Organization Made Easy
					</p>
					<p className="font-normal text-sm md:text-base lg:text-lg text-textSecondary">
						Adding storage accessories to your new kitchen cabinets can increase
						the functionality and efficiency of your kitchen. In essence, what
						cabinet organizers and accessories do is to provide functional space
						to store items within your cabinets that otherwise can not be
						efficiently stored.
					</p>
					<p className="font-normal text-sm md:text-base lg:text-lg text-textSecondary">
						Cabinet organizers come in a wide variety of forms, but there are
						some standard functions that they perform. Whether it is recycling &
						wastebasket stations, to spice drawer inserts, pull-down knife racks
						that are installed under upper cabinets, multi-level pot/pan
						pullouts, and tall cabinet and pantry organization systems, adding
						this functionality to your kitchen can improve your cooking
						experience.
					</p>
				</div>

				<div className="flex flex-col gap-4">
					<p className="font-normal text-lg md:text-xl lg:text-3xl text-text">
						Popular Kitchen Organization Accessories
					</p>

					<p className="font-normal text-sm md:text-base lg:text-lg text-textSecondary">
						We work closely with our clients to provide them with the perfect
						accessories to make their time in the kitchen more efficient. Our
						designers look at lifestyle and how clients use their kitchen, and
						then work with them to create a functional design to meet the needs
						their unique daily needs.
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

export default Accessories;
