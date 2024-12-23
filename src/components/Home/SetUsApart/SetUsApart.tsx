import TitleComp from "../../TitleComp/TitleComp";
import Image from "next/image";

const cartImg1 = "/images/homepage/set-us-apart/1.svg";
const cartImg2 = "/images/homepage/set-us-apart/2.svg";
const cartImg3 = "/images/homepage/set-us-apart/3.svg";
const cartImg4 = "/images/homepage/set-us-apart/4.svg";
const cartImg5 = "/images/homepage/set-us-apart/5.svg";

const setUsApartData = [
  {
    image: cartImg1,
    title: "Consummate  Design",
    subtitle:
      "Experience flawless design crafted to perfection, combining aesthetics and functionality for your ideal kitchen.",
  },
  {
    image: cartImg2,
    title: "Customized Color Options",
    subtitle:
      "Choose from a diverse palette of colors to personalize your cabinets and create a space that reflects your unique style.",
  },
  {
    image: cartImg3,
    title: "Sustainable  Quality",
    subtitle:
      "Our products are built to last, using eco-friendly materials and sustainable practices for enduring quality.    ",
  },
  {
    image: cartImg4,
    title: "Excellent  Service",
    subtitle:
      "Enjoy exceptional customer service from consultation to installation, ensuring a seamless and satisfying experience.",
  },
  {
    image: cartImg5,
    title: "One Stop  Solution",
    subtitle:
      "Find everything you need for your kitchen in one place, from design to installation, for a complete and hassle-free solution.",
  },
];

const SetUsApart = () => {
  return (
    <div className="container text-backgroundColor">
      <TitleComp subtitle={"what"} title={"Sets Us Apart"} colorPosition={8} />
      <div className=" grid grid-cols-1 hidden:divide-x md:grid-cols-2 lg:grid-cols-5 lg:divide-x-2 divide-textSecondary gap-2 mt-10">
        {setUsApartData.map((cartItem, index) => (
          <div
            key={index}
            className={
              "flex flex-col basis-1/5 lg:gap-24  max-lg:gap-4  lg:hover:gap-20 transition-all duration-500 px-2 pb-4 group cursor-pointer lg:h-[520px] xl:h-[450px]"
            }
          >
            <div>
              <Image
                src={cartItem.image}
                width={30}
                height={30}
                alt="icon"
                className="h-12 w-12 mt-4"
              />
            </div>

            <div className="flex flex-col max-lg:gap-2">
              <div className=" text-lg md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:h-24
               lg:group-hover:text-brandColor
               
               text-text">
                {cartItem.title}
              </div>

              <div className="text-xs md:text-sm lg:text-base lg:mt-10 text-text">
                {cartItem.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SetUsApart;
