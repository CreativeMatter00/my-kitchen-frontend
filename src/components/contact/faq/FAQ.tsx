import TitleComp from "../../TitleComp/TitleComp";
import { AccordionFaq } from "../../contact/faq/AccordionFaq";

const FAQ = () => {
  return (
    <div className=" text-backgroundColor">
      <TitleComp
        subtitle={""}
        title={"Frequently Asked Question"}
        colorPosition={17}
      />
      <div className="mt-6">
        <AccordionFaq />
      </div>
    </div>
  );
};

export default FAQ;
