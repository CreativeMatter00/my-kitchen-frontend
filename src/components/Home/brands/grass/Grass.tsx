import BreadcrumbOfHome from "@/components/breadcrumbs/BreadcrumbOfHome";
import Image from "next/image";
import Link from "next/link";
const titleImage = "/images/grass/grass.png";

const products = [
	{
		id: 1,
		src: "/images/grass/img1.jpg",
		alt: "image",
		title: "Hinge",
		link: "/grass/hinge",
	},
	{
		id: 2,
		src: "/images/grass/img2.jpg",
		alt: "image",
		title: "Drawer System",
		link: "/grass/drawer-system",
	},
	{
		id: 3,
		src: "/images/grass/img3.jpg",
		alt: "image",
		title: "Slide System",
		link: "/grass/slide-system",
	},
	{
		id: 4,
		src: "/images/grass/img4.jpg",
		alt: "image",
		title: "Flap System",
		link: "/grass/flap-system",
	},
];

const Grass = () => {
	return (
		<div>
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
            <Link href={'/products'}>
            <SeeWhatInside/>
            </Link>
        </div> */}
			</div>
		</div>
	);
};

export default Grass;
