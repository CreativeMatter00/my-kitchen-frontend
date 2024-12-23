import Image from "next/image";
import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const ProductBanner = () => {
  return (
    <div className="container mx-auto p-10">
     
      <div className="relative">
        <Image
          src={"/images/products/product-banner/main.png"}
          alt="Image"
          width={1200}
          height={400}
          className="w-[1200px] h-[400px]"
        ></Image>

        <div className="absolute inset-0 z-10">
          <Image
            src={"/images/products/product-banner/smallTriangle.png"}
            alt="Image"
            width={400}
            height={400}
            className="w-[400px] h-[400px]"
          ></Image>
        </div>

        <div className="absolute inset-0 z-20">
          <Image
            src={"/images/products/product-banner/bigTriangle.png"}
            alt="Image"
            width={400}
            height={400}
            className="w-[400px] h-[400px]"
          ></Image>
        </div>

        <div className="absolute inset-0 z-30 top-[82%]">
          <Image
            src={"/images/products/product-banner/bottom.png"}
            alt="Image"
            width={1148}
            height={72}
            className="w-[1148px] h-[72px]"
          ></Image>
        </div>
      

        <div className="absolute inset-0 z-40 left-[45%] top-[15%]">
          <Image
            src={"/images/products/product-banner/innerSquare.png"}
            alt="Image"
            width={480}
            height={305}
            className="w-[480px] h-[305px]"
          ></Image>
          <div className="absolute inset-0 z-40 flex justify-center mr-10 mt-6">
          <p className="text-6xl font-bold"> Kitchen Deals</p>
        </div>
        </div>

      
        <div className="absolute inset-0 z-50 left-[49%] top-[60%]">
          <Image
            src={"/images/products/product-banner/innerRedSquare.png"}
            alt="Image"
            width={407}
            height={100}
            className="w-[407px] h-[100px]"
          ></Image>
          <div className="absolute inset-0 z-50 left-[2%] top-[13%]">
            <p className="text-xl text-backgroundColor">
              Upgrade your cooking with <br /> amazing discounts.
            </p>
          </div>

          <div className="absolute inset-0 z-50 left-[67%] top-[15%]">
          <button className="bg-black p-2 rounded-md text-white">
            <RiArrowRightSLine  className="w-10 h-10" />
          </button>
        </div>
        </div>

        


      </div>
    </div>
  );
};

export default ProductBanner;
