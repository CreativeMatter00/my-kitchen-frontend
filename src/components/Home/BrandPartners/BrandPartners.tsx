import TitleComp from "../../TitleComp/TitleComp";
import { BrandPartnerCarousel } from "./BrandPartnerCarousel";

const BrandPartners = () => {
  return (
    <div className="container mx-auto text-backgroundColor">
      <TitleComp
        subtitle={"Our Valued"}
        title={"Brand Partners"}
        colorPosition={6}
      />
      <div className="mt-10">
        <BrandPartnerCarousel />
      </div>
    </div>
  );
};

export default BrandPartners;
