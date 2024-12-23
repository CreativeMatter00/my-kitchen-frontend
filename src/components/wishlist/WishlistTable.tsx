import Image from "next/image";
import Link from "next/link";
import React from "react";
import Wishlist from "./Wishlist";
const logo = "/images/wishlist/logo.png";
const creative = "/images/wishlist/creativelogo.png";
const tilottomalogo = "/images/wishlist/tilottomalogo.png";
const nextblocklogo = "/images/wishlist/nextblocklogo.png";

interface WishListTableProps {
	data: {
		id: number;
		imageSrc: string;
		name: string;
		content: string;
	}[];
}

const WishlistTable: React.FC<WishListTableProps> = ({ data }) => {
	return (
		<div className="container mx-auto mt-4 hidden print:block">
			<div className="flex flex-col gap-6">
				<div className="flex justify-center items-center cursor-pointer">
					{/* <Link href={"/"}> */}
					<Image src={logo} alt="" height={58} width={290}></Image>
					{/* </Link> */}
				</div>

				<div className="flex justify-between items-end">
					<div className="text-4xl font-bold text-text">Wishlist Products</div>
					<div className="flex flex-col gap-2">
						<div className="text-textSecondary text-lg font-normal">
							House 8, Road 138, Gulshan 1, Dhaka,
							<br /> Bangladesh, 1212
						</div>
						<div className="text-textOptional text-lg font-normal">
							Mobile:
							<span className="ml-2 text-lg font-normal text-text hover:text-brandColor hover:underline underline-brandColor">
								01642-912612
							</span>
						</div>
						<div className="text-textOptional text-lg font-normal">
							Email:
							<span className="ml-2 text-lg font-normal text-text hover:text-brandColor hover:underline underline-brandColor">
								info@mykitchen-bd.com
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-4 text-grayQuaternary">
				<hr />
			</div>

			{/* TABLE */}
			<div className="mt-8">
				<table className="w-full border-collapse">
					<thead>
						<tr className="py-3 px-2 bg-[#F2F2F2]">
							<th className="text-sm text-bold text-text py-3 px-2">SL</th>
							<th className="text-sm text-bold text-text whitespace-nowrap py-3 px-2 ">
								Product Image
							</th>
							<th className="text-sm text-bold text-text py-3 px-2">
								Product Name
							</th>
							<th className="text-sm text-bold text-text py-3 px-2">
								Description
							</th>
							<th className="text-sm text-bold text-text py-3 px-2">Remark</th>
						</tr>
					</thead>
					<tbody>
						{data.map((data, index) => (
							<tr key={index} className="border-[2px] border-graySecondary">
								<td className="text-base font-normal text-text border-[2px] border-graySecondary p-1 md:p-6 print:p-4">
									{data.id}
								</td>
								<td className="border-[2px] border-graySecondary py-1 md:py-6 px-2 md:px-6 print:p-4">
									<Image
										src={data.imageSrc}
										alt="Images"
										height={104}
										width={97}
									/>
								</td>
								<td className="text-xl text-text font-normal md:whitespace-nowrap px-2 md:px-10 py-1 md:py-6 print:p-4 print:text-base">
									{data.name}
								</td>
								<td className="text-textSecondary text-base font-normal border-[2px] border-graySecondary py-1 md:py-6 px-2 md:px-10 print:p-4">
									{data.content}
								</td>
								<td className="border-[2px] border-graySecondary p-2 print:p-4">
									{/* {data.remark} */}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className="mt-40 text-grayQuaternary">
				<hr />
			</div>

			<div className="flex justify-between mt-4">
				<div className="flex flex-col gap-2">
					<div>Our Concerns</div>
					<div>
						<div className="flex gap-6">
							<div>
								<Image
									src={tilottomalogo}
									alt="Tilottoma logo"
									height={31}
									width={124}
								></Image>
							</div>

							<div>
								<Image
									src={nextblocklogo}
									alt="nextblock logo"
									height={31}
									width={124}
								></Image>
							</div>
						</div>
					</div>
				</div>

				<div className="flex gap-2">
					<div>Designed by</div>
					<div>
						<Image
							src={creative}
							alt="Creative Matter"
							width={70}
							height={37}
						></Image>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WishlistTable;

// import Image from "next/image";
// import React from "react";

// // Data interface for the table
// interface DataTableItem {
//   id: number;
//   imageSrc: string;
//   name: string;
//   content: string;
//   remark: string;
// }

// const WishlistTable = () => {
//   const dataTable: DataTableItem[] = [
//     {
//       id: 1,
//       imageSrc: "/images/wishlist/img1.png",
//       name: "Soft-Close Cabinet Door",
//       content:
//         "Experience the luxury of a quiet kitchen with our Soft-Close Cabinet Doors. Designed to close smoothly and silently.",
//       remark: "",
//     },
//     {
//       id: 2,
//       imageSrc: "/images/wishlist/img2.png",
//       name: "Glass Cabinet Door",
//       content:
//         "Add a touch of elegance to your kitchen with our Glass Cabinet Doors.",
//       remark: "",
//     },
//     {
//       id: 3,
//       imageSrc: "/images/wishlist/img3.png",
//       name: "Concealed Hinge",
//       content:
//         "Our Concealed Hinges are the perfect solution for a sleek and seamless look.",
//       remark: "",
//     },
//   ];

//   return (
//     <div className="container mx-auto">
//       <div className="flex flex-col gap-6">
//         <div className="flex justify-center items-center cursor-pointer">
//           <Image src="/images/wishlist/logo.png" alt="logo" height={58} width={290} />
//         </div>
//         <div className="mt-4 text-grayQuaternary">
//           <hr />
//         </div>
//         <div className="mt-8">
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="py-3 px-2 bg-[#F2F2F2]">
//                 <th>SL</th>
//                 <th>Product Image</th>
//                 <th>Product Name</th>
//                 <th>Description</th>
//                 <th>Remark</th>
//               </tr>
//             </thead>
//             <tbody>
//               {dataTable.map((item, index) => (
//                 <tr key={item.id} className="border-[2px] border-graySecondary">
//                   <td className="text-base px-2">{item.id}</td>
//                   <td className="border-[2px] py-3 px-2">
//                     <Image src={item.imageSrc} alt={item.name} height={104} width={97} />
//                   </td>
//                   <td className="text-xl px-2">{item.name}</td>
//                   <td className="text-sm px-2">{item.content}</td>
//                   <td className="text-sm px-2">{item.remark}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WishlistTable;
