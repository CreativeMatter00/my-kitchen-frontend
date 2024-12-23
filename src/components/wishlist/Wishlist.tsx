// "use client";

// import React, { useState } from "react";
// import { FaRegHeart } from "react-icons/fa";
// import { Checkbox } from "@/components/ui/checkboxWishlist";
// import { RiDeleteBin5Line } from "react-icons/ri";
// import Image from "next/image";
// import { IoEye } from "react-icons/io5";
// import PrintPge from "./PrintPge";
// import WishlistTable from "./WishlistTable";

// const Wishlist = () => {
//   // Define the type for checked items including possible wishlist item IDs
//   type CheckedItems = {
//     all: boolean;
//     [key: number]: boolean; // This line allows any number to be used as a key with a boolean value
//   };

//   //An array of objects representing wishlist items with properties

//   type wishlists={
//     data:{
//       id:number,
//       imageSrc:string,
//       name:string,
//       convert:string
//     }
//   }

//   const [wishlists,setWishlists]=useState([
//     {
//       id: 1,
//       imageSrc: "/images/wishlist/img1.png",
//       name: "Soft-Close Cabinet Door",
//       availability: "In Stock",
//       content:
//         "Experience the luxury of a quiet kitchen with our Soft-Close Cabinet Doors. Designed to close smoothly and silently, these doors prevent slamming, extending the life of your cabinetry. Perfect for modern homes, they blend convenience with durability, ensuring a peaceful and elegant kitchen environment.",
//     },
//     {
//       id: 2,
//       imageSrc: "/images/wishlist/img2.png",
//       name: "Glass Cabinet Door",
//       availability: "In Stock",
//       content:
//         "Add a touch of elegance to your kitchen with our Glass Cabinet Doors. Featuring clear or frosted glass panels, these doors showcase your dishware while protecting it from dust. Ideal for creating an open, airy feel, they bring both style and function to any kitchen space.",
//     },
//     {
//       id: 3,
//       imageSrc: "/images/wishlist/img3.png",
//       name: "Concealed Hinge",
//       availability: "Out of Stock",
//       content:
//         "Our Concealed Hinges are the perfect solution for a sleek and seamless look. Hidden from view when the cabinet is closed, these hinges provide a clean, uninterrupted appearance. Engineered for durability and smooth operation, they are a top choice for modern and minimalist cabinetry designs.",
//     },
//   ])

//   // Initialize state with type `CheckedItems` to include all wishlist item IDs and `all`
//   const [checkedItems, setCheckedItems] = useState<CheckedItems>(
//     //Initialize state with an object where each wishlist item's ID is a key with a false value, and all is false
//     wishlists.reduce((acc, item) => ({ ...acc, [item.id]: false }), {
//       all: false,
//     })
//   );

//   // Handle select all checkboxes
//   const handleAllChange = () => {
//     //Toggle the state of all
//     const newChecked = !checkedItems.all;

//     //Update each wishlist item's checked state based on newChecked.
//     const updatedItems = wishlists.reduce(
//       (acc, item) => ({ ...acc, [item.id]: newChecked }),
//       {}
//     );
//     setCheckedItems({ ...updatedItems, all: newChecked });
//   };

//   // Handle individual checkbox selection
//   const handleItemChange = (id: number) => {
//     //Toggle the checked state for the item with the given id, and set all to false.
//     const updatedItems = {
//       ...checkedItems,
//       [id]: !checkedItems[id],
//       all: false,
//     };
//     setCheckedItems(updatedItems);
//   };

//   // Determine if the "Remove all" button should be active based on whether all items are selected.
//   //const isRemoveActive = Object.values(checkedItems).some((checked) => checked);
//   const isRemoveActive = checkedItems.all;

//   const handleDelete =(id:number)=>{
//     setWishlists(wishlists.filter((item)=>item.id!=id))
//     console.log('deleted')
//   }

//   return (
//     <div className="container mx-auto mb-20 ">

//       <div className="flex flex-col gap-20">
//       <div className="flex flex-col justify-center items-center gap-5 mt-16">
//         <div className="flex justify-center items-center gap-5">
//           <FaRegHeart size={40} />
//           <div className="text-4xl text-text font-normal ">Wishlist</div>
//         </div>
//         <div>
//           <PrintPge/>
//         </div>
//       </div>

//       <div className="flex justify-between items-center ">
//         <div className="flex items-center space-x-2">
//           <Checkbox
//             id="select-all"
//             checked={checkedItems.all}
//             onCheckedChange={handleAllChange}
//           />
//           <label
//             htmlFor="select-all"
//             className="text-base text-green- font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//           >
//             {checkedItems.all ? "Deselect All" : "Select All"}
//           </label>
//         </div>

//         <div
//           className={`flex justify-center items-center gap-2 ${
//             isRemoveActive
//               ? "text-black hover:underline hover:text-brandColor "
//               : "text-grayQuaternary"
//           }`}
//         >
//           <div className="flex gap-2">
//           <RiDeleteBin5Line size={20} />
//           <div className="text-base font-normal"

//           >Remove all</div>
//           </div>
//         </div>
//       </div>
//       </div>

//       <div>
//         {wishlists.map((wishlist) => (
//           <div key={wishlist.id}>

//             <div className="text-grayLightPrimary">
//             <hr className="mt-4" />
//             </div>

//             <div className="grid grid-cols-6 mt-4">
//               <div className="col-span-5">
//                 <div className="grid grid-cols-5 gap-8">
//                   <div className="col-span-1">
//                     <div className="flex gap-4">
//                       <div className="flex items-center ">
//                         <Checkbox
//                           id={`wishlist-${wishlist.id}`}
//                           checked={checkedItems[wishlist.id]}
//                           onCheckedChange={() => handleItemChange(wishlist.id)}
//                         />
//                       </div>
//                       <Image
//                         src={wishlist.imageSrc}
//                         alt={wishlist.name}
//                         width={200}
//                         height={200}
//                         className="w-[200px] h-[200px]"
//                       />
//                     </div>
//                   </div>
//                   <div className="col-span-4 ">
//                     <div className="flex flex-col justify-between items-start h-full p-1">
//                       <div className="text-lg font-bold">{wishlist.name}</div>
//                       {/* <div className="mt-3">
//                         <span className="text-sm font-normal text-textSecondary">
//                           Availability:
//                         </span>{" "}
//                         <span
//                           className={`text-base font-normal ${
//                             wishlist.availability === "In Stock"
//                               ? "text-successColor"
//                               : "text-red-500"
//                           }`}
//                         >
//                           {wishlist.availability}
//                         </span>{" "}
//                       </div> */}
//                       <div className="text-base font-normal text-textSecondary ">
//                         {wishlist.content}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-span-1">
//                 {/* <div className="font-bold text-sm text-end text-grayDarkPrimary">
//                   Action
//                 </div> */}
//                 <div className="flex justify-end items-center gap-2 mt-2">
//                   <div className="border border-brandColorSecondary p-3 text-xl hover:border-linkPrimary hover:text-linkPrimary transition duration-300 hover:scale-95 cursor-pointer">
//                     <IoEye />
//                   </div>
//                   <div className="border border-black p-3 text-xl hover:border-brandColor hover:text-brandColor transition duration-300 hover:scale-95 cursor-pointer">
//                     <RiDeleteBin5Line
//                     onClick={()=>handleDelete(wishlist.id)}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         ))}
//       </div>

//     </div>
//   );
// };

// export default Wishlist;

"use client";

import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkboxWishlist";
import { RiDeleteBin5Line } from "react-icons/ri";
import Image from "next/image";
import { IoEye } from "react-icons/io5";
import PrintPge from "./PrintPge";
import WishListTitle from "./WishListTitle";

interface WishlistProps {
	data: {
		id: number;
		imageSrc: string;
		name: string;
		content: string;
	}[];

	onDelete: (id: number) => void;
	onDeleteAll: () => void;
}

const Wishlist: React.FC<WishlistProps> = ({ data, onDelete, onDeleteAll }) => {
	// type CheckedItems = {
	//   all: boolean;
	//   [key: number]: boolean; // This line allows any number to be used as a key with a boolean value
	// };

	// const [checkedItems, setCheckedItems] = useState<CheckedItems>(
	//   wishlists.reduce((acc, item) => ({ ...acc, [item.id]: false }), {
	//     all: false,
	//   })
	// );

	// const handleAllChange = () => {
	//   const newChecked = !checkedItems.all;
	//   const updatedItems = wishlists.reduce(
	//     (acc, item) => ({ ...acc, [item.id]: newChecked }),
	//     {}
	//   );
	//   setCheckedItems({ ...updatedItems, all: newChecked });
	// };

	// const handleItemChange = (id: number) => {
	//   const updatedItems = {
	//     ...checkedItems,
	//     [id]: !checkedItems[id],
	//     all: false,
	//   };
	//   setCheckedItems(updatedItems);
	// };

	// const isRemoveActive = checkedItems.all;

	// const handleDeleteAll=(id:number):any=>{
	//   setWishlists(wishlists.filter(item=>item.index!==1))
	// }

	return (
		<div className="container mx-auto mb-20 ">
			<div className="flex flex-col gap-20">
				<div className="flex flex-col justify-center items-center gap-5 ">
					<WishListTitle />
					<div>
						<PrintPge />
					</div>
				</div>

				<div className="flex justify-end items-center ">
					<div>
						<div
							className="flex gap-2 cursor-pointer hover:text-brandColor hover:underline duration-300"
							onClick={onDeleteAll}
						>
							<RiDeleteBin5Line size={20} />
							<div className="text-base font-normal">Remove all</div>
						</div>
					</div>
				</div>
			</div>

			<div>
				{data.map((wishlist, index: number): any => (
					<div key={index}>
						<div className="text-grayLightPrimary">
							<hr className="mt-4" />
						</div>

						<div className="grid grid-cols-1 lg:grid-cols-6 gap-4 mt-4">
							<div className="col-span-5">
								<div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
									<div className="col-span-1">
										<div className="flex gap-4">
											<Image
												src={wishlist.imageSrc}
												alt={wishlist.name}
												width={200}
												height={200}
												className="w-[200px] h-[200px]"
											/>
										</div>
									</div>
									<div className="col-span-4 ">
										<div className="flex flex-col justify-between items-start gap-2 lg:gap-0 h-full ">
											<div className="text-lg font-bold">{wishlist.name}</div>

											<div className="text-base font-normal text-textSecondary ">
												{wishlist.content}
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-span-1">
								<div className="flex justify-start lg:justify-end items-center gap-2 ">
									<div
										className=" p-3 text-xl
                    border
                   *: lg:border-brandColorSecondary
                   lg:hover:border-linkPrimary 
                    border-linkPrimary
                    text-linkPrimary
                    lg:text-brandColorSecondary
                    lg:hover:text-linkPrimary
                    transition duration-300 hover:scale-95 cursor-pointer"
									>
										<IoEye />
									</div>
									<div
										className="p-3 text-xl
                  border lg:border-black lg:hover:border-brandColor
                   border-brandColor
                   lg:text-brandColorSecondary
                   lg:hover:text-brandColor
                   text-brandColor
                    transition duration-300 hover:scale-95 cursor-pointer"
									>
										<RiDeleteBin5Line onClick={() => onDelete(wishlist.id)} />
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Wishlist;
