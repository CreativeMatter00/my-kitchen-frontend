"use client";
import React from "react";
import Ratings from "@/components/ratings/Ratings";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

const ProductDetailsReview = () => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  const ratings = [
    { star: "5 stars", progress: 100, digit: 100 },
    { star: "4 stars", progress: 80, digit: 80 },
    { star: "3 stars", progress: 60, digit: 60 },
    { star: "2 stars", progress: 40, digit: 40 },
    { star: "1 stars", progress: 20, digit: 20 },
  ];

  const reviews = [
    {
      id: 1,
      avatarSrc: "/images/product-details/img6.png",
      name: "Michael Myers",
      date: "07/08/2024",
      // rating: 5,
      title: "Absolutely Perfect!",
      content:
        "I purchased this product last week, and I could not be happier. The quality is outstanding, and it arrived exactly as described. The color and finish are exactly what I was looking for. I’ve already recommended it to friends and family!",
      likes: 12,
      dislikes: 0,
    },
    {
      id: 2,
      avatarSrc: "/images/product-details/img7.png",
      name: "John Mitchell",
      date: "07/08/2024",
      // rating: 5,
      title: "Absolutely Perfect!",
      content:
        "I purchased this product last week, and I could not be happier. The quality is outstanding, and it arrived exactly as described. The color and finish are exactly what I was looking for. I’ve already recommended it to friends and family!",
      likes: 9,
      dislikes: 3,
    },
    {
      id: 3,
      avatarSrc: "/images/product-details/img8.png",
      name: "Emily Davis",
      date: "07/08/2024",
      rating: 5,
      title: "Great Value for Money",
      content:
        "This product exceeded my expectations. It’s well-made and durable, and the price was very reasonable. The only reason I’m giving it four stars instead of five is that the delivery took a bit longer than expected. Overall, I’m very satisfied with my purchase.",
      likes: 5,
      dislikes: 0,
    },

    {
      id: 4,
      avatarSrc: "/images/product-details/img9.png",
      name: "Michael Reed",
      date: "07/08/2024",
      // rating: 5,
      title: "Exceeded Expectations",
      content:
        "This was my first time purchasing from this site, and I’m thoroughly impressed. The product is high quality, and the customer service was top-notch. The material feels premium, and the design is sleek. I’ll definitely be shopping here again.",
      likes: 13,
      dislikes: 1,
    },
    {
      id: 5,
      avatarSrc: "/images/product-details/img10.png",
      name: "Sarah Jenkins",
      date: "07/08/2024",
      //rating: 5,
      title: "Stylish and Functional",
      content:
        "I’m so glad I bought this product! It not only looks great in my home, but it’s also very practical. The dimensions were perfect for the space I had in mind. The user experience on the site was smooth, and I had no issues from ordering to delivery.",
      likes: 13,
      dislikes: 1,
    },

    // Add more reviews as needed
  ];

  return (
    <div>
      <div className="font-bold text-3xl mt-10">Customer Reviews & Ratings</div>

      <div className="grid grid-cols-4 mt-10 bg-white shadow-sm py-4">
        <div className="col-span-2">
          <div className="grid grid-cols-3 ">
            <div className="col-span-1">
              <div className=" text-5xl font-bold ml-3 mt-8">47</div>
              <Ratings></Ratings>
              <div className="font-normal text-lg mt-2">46 ratings</div>
            </div>

            <div className="col-span-2">
              <div className="">
                {ratings?.map((rating, index) => {
                  return (
                    <div
                      key={index}
                      className="flex  justify-between items-center gap-8 mt-2"
                    >
                      <div className="underline text-base font-normal whitespace-nowrap">
                        {rating.star}
                      </div>
                      <Progress value={rating.progress}></Progress>
                      <div className="text-base font-normal">
                        {rating.digit}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-col justify-center items-center mt-8">
            <div className="text-xl font-normal">
              Want to share your thoughts? Sign-In to leave a review.
            </div>
            <div>
              <Button className="bg-black text-backgroundColor font-medium text-base transition duration-300 hover:scale-95 mt-4 ">
                Sign In Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div>
        {reviews.map((review, id) => (
          <div
            key={id}
            className="flex flex-col justify-start items-start mt-10 bg-white shadow-sm py-4"
          >
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={review.avatarSrc} />
                <AvatarFallback>Image</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium leading-none">
                  {review.name}
                </p>
                <p className="text-sm text-muted-foreground">{review.date}</p>
              </div>
            </div>

            <div className="mt-4">
              <Ratings />
            </div>

            <div className="text-lg font-bold mt-4">{review.title}</div>

            <div className="text-base font-normal mt-2">{review.content}</div>

            <div className="flex flex-row justify-center items-center gap-6">
              <div className="flex gap-1 justify-start items-center mt-6">
                <AiOutlineLike className="text-grayQuaternary transform scale-x-[-1]" />
                <div className="text-grayQuaternary">{review.likes}</div>
              </div>

              <div className="flex gap-1 justify-start items-center mt-6">
                <AiOutlineDislike className="text-grayQuaternary" />
                <div className="text-grayQuaternary">{review.dislikes}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsReview;
