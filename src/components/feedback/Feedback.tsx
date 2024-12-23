import Image from "next/image";
import React from "react";
const img1 = "/images/feedback/img1.png";
const Feedback = () => {
  return (
    <div>
      <div>
        <Image src={img1} alt="Images" width={1920} height={844}></Image>
      </div>

      <div className="container mx-auto ">
        <div className="flex flex-col gap-40">
          <div className="flex flex-col gap-10 py-10">
            <div className="text-7xl font-normal text-text text-center">We Value Your Feedback </div>
            <div className="text-2xl font-normal text-textSecondary text-center">Your Insights Help Us Improve and Grow</div>

            <div className="text-base font-normal text-textSecondary">At My Kitchen, your feedback is invaluable to us. It helps us understand what we’re doing well and where we can improve. We are committed to continually enhancing our products and services to meet your needs and exceed your expectations. Please take a moment to share your thoughts and experiences with us—your insights drive our growth and innovation.</div>

          </div>
          <div>
            <div className="text-3xl font-normal text-text">Share Your Thoughts</div>
            <div className="text-sm font-normal text-textOptional">We Appreciate Your Feedback and Look Forward to Improving Together</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
