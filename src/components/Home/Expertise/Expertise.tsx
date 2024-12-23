// import ProductCart from "./ProductCart";
// export interface ProductDetails {
//   name: string;
//   price: number;
//   description: string;
//   imageUrl: string;
// }

// const products: ProductDetails[] = [
//   {
//     name: "KITCHEN AREA",
//     price: 100,
//     description: "This is a product",
//     imageUrl: "/images/kitchen/kitchen.png",
//   },
//   {
//     name: "COUNTER TOP",
//     price: 100,
//     description: "This is a product",
//     imageUrl: "/images/kitchen/counter-top.png",
//   },
//   {
//     name: "WARDROBE",
//     price: 100,
//     description: "This is a product",
//     imageUrl: "/images/kitchen/wardrobe.png",
//   },
//   {
//     name: "Walk-in Closets",
//     price: 100,
//     description: "This is a product",
//     imageUrl: "/images/kitchen/walkInClosets.png",
//   },
//   {
//     name: "Vanities",
//     price: 100,
//     description: "This is a product",
//     imageUrl: "/images/kitchen/Vanities.png",
//   },
//   {
//     name: "Accessories",
//     price: 100,
//     description: "This is a product",
//     imageUrl: "/images/kitchen/Accessories.png",
//   },
// ];

// const Expertise = () => {
//   return (
//     <div className="container">
//       <div className="flex justify-center lg:justify-start items-center mb-10">
//         <div className="text-xl md:text-3xl lg:text-5xl font-normal text-text">
//           Our <span className="text-brandColor">E</span>xperties
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {/* <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-2 gap-y-24"> */}
//         {products.map((product) => (
//           <ProductCart key={product.name} details={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Expertise;

import ProductCard from "./ProductCard";

export interface ProductDetails {
	name: string;
	imageUrl: string;
	link: string;
}

const products = [
	{
		name: "KITCHEN AREA",
		imageUrl: "/images/kitchen/kitchen.png",
		link: "/expertise/kitchen-area",
	},
	{
		name: "COUNTER TOP",
		imageUrl: "/images/kitchen/counter-top.png",
		link: "/expertise/counter-top",
	},
	{
		name: "WARDROBES",
		imageUrl: "/images/kitchen/wardrobe.png",
		link: "/expertise/wardrobes",
	},
	{
		name: "WALK-IN CLOSETS",
		imageUrl: "/images/kitchen/walkInClosets.png",
		link: "/expertise/walk-in-closets",
	},
	{
		name: "VANITIES",
		imageUrl: "/images/kitchen/Vanities.png",
		link: "/expertise/vanities",
	},
	{
		name: "ACCESSORIES",
		imageUrl: "/images/kitchen/Accessories.png",
		link: "/expertise/accessories",
	},
];

const Expertise = () => {
	return (
		<div className="container max-auto">
			<div className="flex justify-center lg:justify-start items-center mb-10">
				<div className="text-xl md:text-3xl lg:text-5xl font-normal text-text">
					Our <span className="text-brandColor">E</span>xpertise
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
				{/* <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-2 gap-y-24"> */}
				{products.map((product: ProductDetails, index: number) => {
					return (
						<>
							<ProductCard
								key={index}
								name={product.name}
								link={product.link}
								imageUrl={product.imageUrl}
							/>
						</>
					);
				})}
			</div>
		</div>
	);
};

export default Expertise;
