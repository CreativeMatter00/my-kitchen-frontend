
import ContactUsComponent from "@/components/contact/ContactUsComponent";
import Banner from "@/components/ui/Banner/Banner";
import React from "react";

const page = () => {
   //const image = "/images/contact/kitchen.gif";
   const image = "/images/products/slide.gif";
  return (
    <div>
      <Banner
        className="text-[#E84538] "
        className2="pl-2"
        title="We're Here"
        subTitle="to Help"
        subSubTitle="Share your information below, and let us know how we can assist you."
        image={image}
        currentPage="Contact"
        homePage="Home"
        
      ></Banner>
      <ContactUsComponent/>
      {/* <FooterComponent/> */}
    </div>
  );
};

export default page;
