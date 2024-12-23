import Category from "@/components/products/Category";
import Filter from "@/components/products/Filter";
import FilterTitle from "@/components/products/FilterTitle";
import ProductBanner from "@/components/products/ProductBanner";
import ProductTitleAndSort from "@/components/products/ProductTitleAndSort";
import ResponsiveNavbar from "@/components/products/ResponsiveNavbar";
import Card from "@/components/shared/Card";
import VideoPlaybackProduct from "@/components/shared/video/VideoPlaybackProduct";
import React from "react";

const page = () => {
	return (
		<>
			{/* <VideoPlaybackProduct
        title="Discover Your Perfect Space"
        firstDescription="Browse our curated collections and find the perfect products"
        secondDescription="to elevate your kitchen and home"
      />
      <div className="container mx-auto p-4 mb-2">
        <div className="grid grid-cols-4 gap-4 ">
          <div className="col-span-1 ">
            <div className="flex gap-4">
            <div>
            <Category />
            <Filter />
            </div>
            <div className="border-r text-grayLightPrimary"></div>
            </div>
          </div>

          <div className="col-span-3 ">
            <ProductTitleAndSort />
            <Card />
            <ProductBanner />
          </div>
        </div>
      </div> */}

			<VideoPlaybackProduct
				title="Discover Your Perfect Space"
				firstDescription="Browse our curated collections and find the perfect products"
				secondDescription="to elevate your kitchen and home"
			/>

			<div className="">
				<ResponsiveNavbar />
			</div>

			<div className="">
				<div className="container mx-auto p-4 mb-2">
					<div className="grid  grid-cols-1 lg:grid-cols-4 gap-4 ">
						<div className="col-span-1 ">
							<div className="flex gap-4">
								<div className="hidden lg:block">
									<Category />
									<Filter />
								</div>
								<div className="border-r text-grayLightPrimary"></div>
							</div>
						</div>

						<div className="col-span-3 ">
							<div className="sticky top-24 z-30 bg-backgroundColor lg:pt-0 pt-8 lg:pb-0 pb-4">
								<div className="flex justify-between items-center lg:hidden">
									<FilterTitle />
									<ProductTitleAndSort />
								</div>
							</div>

							<div className="hidden lg:block">
								<ProductTitleAndSort />
							</div>
							<Card />
							{/* <ProductBanner /> */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default page;
