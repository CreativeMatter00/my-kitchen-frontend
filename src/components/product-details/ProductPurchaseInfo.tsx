import React from "react";
import { BsHeadset } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
// import { IoCallOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

const ProductPurchaseInfo = () => {
	return (
		<div className="mb-10">
			<div className="flex flex-col gap-10">
				<div className="flex flex-col gap-4">
					<div className="text-5xl font-bold text-text">
						Soft-Close Cabinet Door
					</div>
					<div className=" border border-grayLightPrimary " />
					<div className="text-2xl font-normal text-text mt-2">
						Ready to Purchase or Need More Information?
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<div className="flex justify-start items-center gap-1">
						<div>
							<BsHeadset size={24} />
						</div>
						<div className="text-lg font-normal text-text">
							Contact Us Directly
						</div>
					</div>

					<div className="text-sm font-normal text-textSecondary">
						Instant Assistance, Just a Call or Chat Away.
					</div>

					<div className="flex justify-start items-center gap-2 ">
						<div className="flex justify-start items-center gap-2 bg-whatsappColor text-backgroundColor py-3 px-6">
							<BsWhatsapp size={24} />
							<div className="text-base font-medium">WhatsApp Us</div>
						</div>

						<div className="flex justify-start items-center gap-2 bg-linkPrimary text-backgroundColor py-3 px-6">
							<IoCall size={24} />
							<div className="text-base font-medium">Call Us</div>
						</div>
					</div>

					<div className="flex items-center ">
						<hr className="flex-grow border-t border-grayLightPrimary" />
						<div className="px-4 text-textOptional text-sm font-normal">or</div>
						<hr className="flex-grow border-t border-grayLightPrimary" />
					</div>

					<div className="flex flex-col gap-2">
						<div className="text-textSecondary font-normal text-sm">
							Reach Out Anytime, We are Here to Help.
						</div>
						<div className="flex justify-start items-center gap-4">
							<FiMail className="text-red-500" size={20} />
							<div className="text-textSecondary font-normal text-base">
								info@mykitchen-bd.com
							</div>
						</div>
					</div>
				</div>

				<div className=" p-10 bg-grayPrimary border border-grayLightPrimary mt-4">
					<div className="flex flex-col gap-2">
						<div className="flex justify-center items-center gap-2">
							<FaMapMarkerAlt size={20} />
							<div className="text-lg text-text font-normal">
								Find a Store Near You
							</div>
						</div>

						<div className="flex justify-center items-center text-textSecondary text-sm">
							Prefer to see the product in person? Visit one of our stores.
						</div>

						<div className="flex justify-center items-center ">
							<Link href={"/find-store"}>
								<button className="bg-text text-backgroundColor text-base py-3 px-8">
									Find Store
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductPurchaseInfo;
