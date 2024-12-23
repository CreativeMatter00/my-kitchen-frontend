"use client";

import Image from "next/image";
import Link from "next/link";
import BreadcrumbOfHome from "@/components/breadcrumbs/BreadcrumbOfHome";
import SeeWhatInside from "@/components/shared/button/SeeWhatInside";

const products = [
	{
		id: 1,
		src: "/images/blum/blum1.png",
		alt: "Blum1",
		title: "Aventos",
		link: "/blum/aventos",
	},
	{
		id: 2,
		src: "/images/blum/blum2.png",
		alt: "Blum2",
		title: "Legrabox",
		link: "/blum/legrabox",
	},
	{
		id: 3,
		src: "/images/blum/blum3.png",
		alt: "Blum3",
		title: "Movento",
		link: "/blum/movento",
	},
	{
		id: 4,
		src: "/images/blum/blum4.png",
		alt: "Blum4",
		title: "Standard",
		link: "/blum/standard",
	},
	{
		id: 5,
		src: "/images/blum/blum5.png",
		alt: "Blum5",
		title: "Orga-Line",
		link: "/blum/orga-line",
	},
	{
		id: 6,
		src: "/images/blum/blum6.png",
		alt: "Blum6",
		title: "Blumotion",
		link: "/blum/blumotion",
	},
	{
		id: 7,
		src: "/images/blum/blum7.png",
		alt: "Blum6",
		title: "Servo-Drive",
		link: "/blum/servo-drive",
	},
	{
		id: 8,
		src: "/images/blum/blum8.png",
		alt: "Blum6",
		title: "Space Tower",
		link: "/blum/space-tower",
	},

	{
		id: 9,
		src: "/images/blum/blum9.png",
		alt: "Blum7",
		title: "Space Twin",
		link: "/blum/space-twin",
	},
];
const titleImage = "/images/blum/titleImage.png";

const Blum = () => {
	return (
		<>
			<div className="container mx-auto flex flex-col gap-4 md:gap-6 lg:gap-10 mt-10 pb-8">
				<BreadcrumbOfHome />
				<div className="flex justify-center items-center ">
					<Image
						src={titleImage}
						alt="Title Image"
						width={293}
						height={80}
						className="h-auto w-[120px] md:w-[200px] lg:w-[300px]"
					/>
				</div>

				<div>
					<p className="font-normal text-base flex justify-center text-textSecondary">
						The name Blum stands for innovation, dedicated employees and
						international market presence. Julius Blum founded the company on 1
						March 1952. His first product was a horseshoe stud. Today BLUM are
						one of the world’s leading manufacturers of furniture fittings.
						Discover innovative fittings for kitchens and living areas
						throughout the home. Scroll left or right or click a room. The
						orange dots will tell you more about Blum products.
					</p>
				</div>

				<div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
					{products.map((product) => (
						<div key={product.id}>
							<Link href={product.link}>
								<Image
									className="w-[760px] h-auto"
									src={product.src}
									alt={product.alt}
									height={760}
									width={661}
								/>
							</Link>

							<div className="flex flex-col gap-1 md:gap-2 lg:gap-4">
								<div className="mt-2 md:mt-6 lg:mt-10">
									<p className="font-normal text-5xl ">{product.title}</p>
								</div>
								<div>
									<p className="font-normal text-lg  cursor-pointer text-text lg:hover:underline lg:hover:text-brandColor">
										<Link href={product.link}>See details</Link>
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* <div className="flex justify-center items-center  py-4 md:py-6 lg:py-10">
            <SeeWhatInside />
        </div> */}
			</div>
		</>
	);
};

export default Blum;
