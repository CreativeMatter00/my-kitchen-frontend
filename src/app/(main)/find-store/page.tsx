import FindStore from "@/components/findStore/FindStore";
import Banner from "@/components/ui/Banner/Banner";
import React from "react";

const page = () => {
  const image = "/images/contact/kitchen.gif";
  return (
    <div className="flex flex-col gap-20 max-lg:gap-10">
      <Banner
        className="text-black"
        className2="pl-2 text-brandColor"
        title="Find a "
        subTitle="Store"
        subSubTitle="Share your information below, and let us know how we can assist you."
        image={image}
        currentPage="Find a Store"
        homePage="Home"
      ></Banner>
      <FindStore />
    </div>
  );
};

export default page;
