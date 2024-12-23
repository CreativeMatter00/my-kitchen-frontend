"use client";
import React, { useEffect, useState, useRef } from "react";
import ProductTitleAndSort from "./ProductTitleAndSort";
import Filter from "./Filter";

const ResponsiveNavbar = () => {
	const [isSticky, setIsSticky] = useState(true);
	//const filterSortRef = useRef<HTMLDivElement | null>(null);;

	// useEffect(() => {
	//   const handleScroll = () => {
	//     if (filterSortRef.current) {
	//       const offsetTop = filterSortRef.current.getBoundingClientRect().top;
	//       setIsSticky(offsetTop <= 0); // Check if the div has reached the top of the viewport
	//     }
	//   };

	//   window.addEventListener("scroll", handleScroll);
	//   return () => {
	//     window.removeEventListener("scroll", handleScroll);
	//   };
	// }, []);

	return (
		<div>
			{/* <div className="flex justify-between">
          <Filter/>
          <ProductTitleAndSort/>
           hello
        </div> */}
			{/* <ProductTitleAndSort/> */}
		</div>
	);
};

export default ResponsiveNavbar;
