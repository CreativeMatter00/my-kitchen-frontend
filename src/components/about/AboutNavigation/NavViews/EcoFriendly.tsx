import Image from "next/image";
import kitchenViewImage from "../../../../../public/images/about/eco-friendly.png";

const EcoFriendly = () => {
  return (
    <div>
      <div className="text-text text-2xl md:text-3xl text-left font-normal underline decoration-brandColor underline-offset-8 py-5 md:py-10">
        Eco Friendly
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-between items-center mt-2 gap-6 lg:gap-20 ">

        <div className="text-textSecondary text-sm md:text-base font-normal">
          
          <div className="mb-4">
            MY KITCHEN is devoted to giving you and your family’s healthier home
            solution. All our raw materials and manufacturing process follow the
            Euro E1 standard which is the symbol of quality life.
          </div>

          <div className="mb-4">
            We continually monitor every stage of our cabinetry process, from
            sourcing, manufacturing, to finishing and shipping, and ensure they
            are in accordance with EU, USA, Japan, Australia & New Zealand
            standards.
          </div>

          <div className="mb-4">
            Our factory area 25,000 square feet, facility was specifically
            designed for maximum production and energy efficiency. And within
            the facility, we operate under a global earth charter that protects
            the earth and conserves resources.
          </div>
        </div>

        <div>
          <Image
            src={kitchenViewImage}
            alt="Eco Friendly Kitchen View"
            height={1280}
            width={720}
            className="h-auto w-full"
          />
        </div>
      </div>

      <div className="lg:py-12 py-6"/>
    </div>
  );
};

export default EcoFriendly;
