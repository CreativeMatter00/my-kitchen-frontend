"use client";

import Wishlist from "@/components/wishlist/Wishlist";
import WishlistTable from "@/components/wishlist/WishlistTable";
import React, { useState } from "react";

interface WishlistProps {
	id: number;
	imageSrc: string;
	name: string;
	content: string;
}

const Page = () => {
	const [wishlists, setWishlists] = useState([
		{
			id: 1,
			imageSrc: "/images/wishlist/img1.png",
			name: "Soft-Close Cabinet Door",
			//availability: "In Stock",
			content:
				"Experience the luxury of a quiet kitchen with our Soft-Close Cabinet Doors. Designed to close smoothly and silently, these doors prevent slamming, extending the life of your cabinetry. Perfect for modern homes, they blend convenience with durability, ensuring a peaceful and elegant kitchen environment.",
		},
		{
			id: 2,
			imageSrc: "/images/wishlist/img2.png",
			name: "Glass Cabinet Door",
			//availability: "In Stock",
			content:
				"Add a touch of elegance to your kitchen with our Glass Cabinet Doors. Featuring clear or frosted glass panels, these doors showcase your dishware while protecting it from dust. Ideal for creating an open, airy feel, they bring both style and function to any kitchen space.",
		},
		{
			id: 3,
			imageSrc: "/images/wishlist/img3.png",
			name: "Concealed Hinge",
			//availability: "Out of Stock",
			content:
				"Our Concealed Hinges are the perfect solution for a sleek and seamless look. Hidden from view when the cabinet is closed, these hinges provide a clean, uninterrupted appearance. Engineered for durability and smooth operation, they are a top choice for modern and minimalist cabinetry designs.",
		},
	]);

	const handleDelete = (id: number) => {
		setWishlists(wishlists.filter((item) => item.id !== id));
	};

	const handleDeleteAll = () => {
		setWishlists([]);
	};
	return (
		<>
			{/* <div className='block lg:hidden print:hidden'>
     <ResponsiveWishList/>
    </div> */}

			<div className="py-14">
				<div className="print:hidden ">
					<Wishlist
						data={wishlists}
						onDelete={handleDelete}
						onDeleteAll={handleDeleteAll}
					/>
				</div>
				<div>
					<WishlistTable data={wishlists} />
				</div>
			</div>
		</>
	);
};

export default Page;
