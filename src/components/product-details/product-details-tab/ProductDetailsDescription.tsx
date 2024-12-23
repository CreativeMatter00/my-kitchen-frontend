// /* eslint-disable react/no-unescaped-entities */
// import Image from "next/image";
// import React from "react";

// const ProductDetailsDescription = () => {
//   return (
//     <div className="flex flex-col gap-10">
//       <div className=" text-3xl font-normal mt-10">
//           Transform your kitchen <br />
//           with our modular kitchen set, designed for both style and
//           functionality.
//       </div>

//       <div className="">
//       {/* grid grid-cols-5 gap-8 */}

//           <div>
//             <div>
//               <p className="text-lg font-bold text-red-500 ">Main Features</p>
//             </div>

//             <div className="flex flex-col gap-4">
// {/* MODERN DESIGN */}

//           <div>
//             <div className="flex flex-col gap-2">
//             <div>
//               <p className="text-2xl font-normal mt-6">Modern Design</p>
//             </div>

//             <div>
//               <p className=" text-base font-normal ">
//                 Our modular kitchen set is the epitome of modern elegance,
//                 designed to transform your kitchen into a stylish and functional
//                 space. The design features sleek lines, minimalist aesthetics,
//                 and thoughtfully crafted components that blend seamlessly into
//                 any contemporary home. Whether you're aiming for a high-end,
//                 sophisticated ambiance or a cozy, inviting atmosphere, this
//                 kitchen set is versatile enough to meet your design preferences.
//                 The attention to detail in every element ensures that your
//                 kitchen not only looks beautiful but also functions efficiently,
//                 making it a joy to cook and entertain in. With this modular set,
//                 you can elevate your kitchen’s look, creating a space that is
//                 both visually stunning and highly practical.
//               </p>
//             </div>
//             </div>
//             </div>

//             {/* HIGH DURABILITY */}
//             <div>

//            <div className="flex flex-col gap-2">
//            <div>
//               <p className="text-2xl font-normal ">High Durability</p>
//             </div>

//             <div>
//               <p className=" text-base font-normal ">
//                 Durability is at the core of our modular kitchen set, ensuring
//                 that your investment stands the test of time. Each component is
//                 meticulously crafted from premium materials, selected for their
//                 strength and resilience. The cabinets, countertops, and finishes
//                 are engineered to resist daily wear and tear, including
//                 scratches, stains, and heat, making them ideal for the demands
//                 of a busy kitchen. The robust construction provides stability
//                 and longevity, so you can enjoy your kitchen for years without
//                 the worry of frequent repairs or replacements. This durability
//                 extends to the smallest details, from the hinges on the cabinets
//                 to the handles on the drawers, all designed to perform
//                 flawlessly over time.
//               </p>
//             </div>
//            </div>

//             </div>

//             {/* CUSTOMIZABLE */}
//             <div>

//            <div className="flex flex-col gap-2">
//            <div>
//               <p className="text-2xl font-normal">Customizable</p>
//             </div>

//             <div>
//               <p className=" text-base font-normal">
//                 One of the standout features of our modular kitchen set is its
//                 exceptional level of customization. We understand that every
//                 homeowner has a unique vision for their kitchen, which is why we
//                 offer a wide range of options to tailor the design to your
//                 specific needs and preferences. Choose from a variety of colors,
//                 materials, and finishes to create a kitchen that reflects your
//                 personal style. Whether you prefer a bold, vibrant palette or a
//                 more subdued, neutral tone, we have the options to match your
//                 aesthetic. Additionally, you can select from different textures
//                 and finishes—such as matte for a sophisticated look or glossy
//                 for a sleek, polished appearance—allowing you to create a truly
//                 bespoke kitchen that complements the overall design of your
//                 home.
//               </p>
//             </div>
//            </div>

//             </div>
//             </div>
//           </div>

//           {/* IMAGE */}
//           {/* <div className="col-span-2">
//             <div className="relative">
//             <Image
//               src={"/images/product-details/img4.png"}
//               alt="Image"
//               width={700}
//               height={700}
//               className="h-auto w-full mt-8"
//             ></Image>
//             <Image
//              src={"/images/product-details/img5.png"}
//              alt="Image"
//              width={100}
//              height={100}
//              className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//             ></Image>
//             </div>
//           </div> */}

//       </div>

//       {/* USE CASES */}

//       <div className="flex flex-col gap-6">
//         <div>
//           <p className="text-lg font-bold text-red-500">Use Cases</p>
//         </div>

//        <div className="flex flex-col gap-2">
//           <div className=" text-base font-normal">
//             Our modular kitchen set is the perfect solution for homeowners
//             looking to upgrade their kitchen space with style and functionality.
//             Whether you're designing a kitchen for a brand-new home or
//             renovating an existing one, this set offers the flexibility and
//             adaptability needed to fit any space. It’s an ideal choice for urban
//             apartments where space is at a premium, as the modular nature allows
//             for efficient use of every inch. For larger homes, the customizable
//             options ensure that the kitchen can be tailored to suit expansive
//             layouts while maintaining a cohesive design.
//           </div>

//           <div className=" text-base font-normal">
//             This kitchen set is particularly suited for culinary enthusiasts who
//             require a well-organized, efficient space to prepare meals. The
//             modern design not only enhances the aesthetic appeal but also
//             improves workflow, making it easier to move between cooking tasks.
//             Busy families will also appreciate the durability and practicality
//             of the kitchen set, as it can withstand the rigors of daily use,
//             including spills, high temperatures, and frequent cleaning.
//             Additionally, interior designers and contractors will find this
//             modular kitchen set to be a valuable addition to their projects,
//             offering clients a high-quality, stylish, and functional kitchen
//             solution that can be customized to meet specific needs.
//           </div>
//        </div>

//       </div>
//     </div>
//   );
// };

// export default ProductDetailsDescription;
/* eslint-disable react/no-unescaped-entities */

import Card from "@/components/shared/Card";
import Image from "next/image";
import React from "react";

const ProductDetailsDescription = () => {
	return (
		<div>
			<div>
				<p className="lg:mt-10 text-3xl font-normal text-text flex lg:justify-start justify-center items-center ">
					Transform your kitchen <br />
					with our modular kitchen set, designed for both style and
					functionality.
				</p>
			</div>

			<div className="mt-6 lg:mt-10">
				<div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-10">
					<div className="col-span-3 lg:order-1 order-2">
						<div>
							<p className="text-lg font-bold text-brandColor">Main Features</p>
						</div>

						<div className="flex flex-col gap-4">
							{/* MODERN DESIGN */}

							<div className="flex flex-col gap-2">
								<div>
									<p className="text-2xl font-normal text-text mt-4 lg:mt-6">
										Modern Design
									</p>
								</div>

								<div className="text-base font-normal text-textSecondary">
									Our modular kitchen set is the epitome of modern elegance,
									designed to transform your kitchen into a stylish and
									functional space. The design features sleek lines, minimalist
									aesthetics, and thoughtfully crafted components that blend
									seamlessly into any contemporary home. Whether you're aiming
									for a high-end, sophisticated ambiance or a cozy, inviting
									atmosphere, this kitchen set is versatile enough to meet your
									design preferences. The attention to detail in every element
									ensures that your kitchen not only looks beautiful but also
									functions efficiently, making it a joy to cook and entertain
									in. With this modular set, you can elevate your kitchen’s
									look, creating a space that is both visually stunning and
									highly practical.
								</div>
							</div>

							{/* HIGH DURABILITY */}
							<div className="flex flex-col gap-2">
								<div className="text-2xl font-normal text-text ">
									High Durability
								</div>

								<div className=" text-base font-normal text-textSecondary ">
									Durability is at the core of our modular kitchen set, ensuring
									that your investment stands the test of time. Each component
									is meticulously crafted from premium materials, selected for
									their strength and resilience. The cabinets, countertops, and
									finishes are engineered to resist daily wear and tear,
									including scratches, stains, and heat, making them ideal for
									the demands of a busy kitchen. The robust construction
									provides stability and longevity, so you can enjoy your
									kitchen for years without the worry of frequent repairs or
									replacements. This durability extends to the smallest details,
									from the hinges on the cabinets to the handles on the drawers,
									all designed to perform flawlessly over time.
								</div>
							</div>

							{/* CUSTOMIZABLE */}
							<div className="flex flex-col gap-2">
								<div>
									<p className="text-2xl font-normal text-text">Customizable</p>
								</div>

								<div className=" text-base font-normal text-textSecondary ">
									One of the standout features of our modular kitchen set is its
									exceptional level of customization. We understand that every
									homeowner has a unique vision for their kitchen, which is why
									we offer a wide range of options to tailor the design to your
									specific needs and preferences. Choose from a variety of
									colors, materials, and finishes to create a kitchen that
									reflects your personal style. Whether you prefer a bold,
									vibrant palette or a more subdued, neutral tone, we have the
									options to match your aesthetic. Additionally, you can select
									from different textures and finishes—such as matte for a
									sophisticated look or glossy for a sleek, polished
									appearance—allowing you to create a truly bespoke kitchen that
									complements the overall design of your home.
								</div>
							</div>
						</div>
					</div>

					{/* IMAGE */}
					<div className="col-span-2 lg:order-2 order-1">
						<div className="relative">
							<Image
								src={"/images/product-details/img4.png"}
								alt="Image"
								width={700}
								height={700}
								className="h-auto w-full mt-8"
							></Image>
						</div>
					</div>
				</div>
			</div>

			{/* USE CASES */}

			<div className="flex flex-col gap-2">
				<div>
					<p className="text-lg font-bold text-red-500 mt-8">Use Cases</p>
				</div>

				<div className=" text-base font-normal text-textSecondary ">
					Our modular kitchen set is the perfect solution for homeowners looking
					to upgrade their kitchen space with style and functionality. Whether
					you're designing a kitchen for a brand-new home or renovating an
					existing one, this set offers the flexibility and adaptability needed
					to fit any space. It’s an ideal choice for urban apartments where
					space is at a premium, as the modular nature allows for efficient use
					of every inch. For larger homes, the customizable options ensure that
					the kitchen can be tailored to suit expansive layouts while
					maintaining a cohesive design.
				</div>

				<div className=" text-base font-normal text-textSecondary ">
					This kitchen set is particularly suited for culinary enthusiasts who
					require a well-organized, efficient space to prepare meals. The modern
					design not only enhances the aesthetic appeal but also improves
					workflow, making it easier to move between cooking tasks. Busy
					families will also appreciate the durability and practicality of the
					kitchen set, as it can withstand the rigors of daily use, including
					spills, high temperatures, and frequent cleaning. Additionally,
					interior designers and contractors will find this modular kitchen set
					to be a valuable addition to their projects, offering clients a
					high-quality, stylish, and functional kitchen solution that can be
					customized to meet specific needs.
				</div>
			</div>

			<div className="lg:mt-20 mt-10">
				<div className="text-3xl font-normal text-text">Similar Picks</div>
				<div className="mt-6">
					<Card />
				</div>
			</div>
		</div>
	);
};

export default ProductDetailsDescription;
