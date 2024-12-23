import ProductDetailsTab from "@/components/product-details/product-details-tab/ProductDetailsTab";
import ProductImageGallery from "@/components/product-details/ProductImageGallery";
import ProductInfo from "@/components/product-details/ProductInfo";
import ProductPurchaseInfo from "@/components/product-details/ProductPurchaseInfo";
import React from "react";

const page = () => {
	return (
		<div className=" bg-backgroundColor ">
			<div className="container mx-auto p-2 mb-28">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					<div className="col-span-1">
						<ProductImageGallery />
					</div>

					<div className="col-span-1 ">
						{/* <ProductInfo></ProductInfo> */}
						<ProductPurchaseInfo />
					</div>
				</div>
				<div className="mt-6 lg:mt-10">
					<ProductDetailsTab />
				</div>
			</div>
		</div>
	);
};

export default page;
