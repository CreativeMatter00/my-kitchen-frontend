import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    id: "item-1",
    question: "Do I need special equipment to use the VR feature?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, nam? A fugiat exercitationem magnam cupiditate? Nobis hic fuga magnam doloribus accusamus reiciendis quidem commodi quasi. Voluptatibus esse suscipit temporibus minus? Deserunt vero magnam odit modi corrupti est eius! Reprehenderit, ipsum. Mollitia magnam odio reprehenderit atque eos, sequi dignissimos consectetur voluptatem.",
  },
  {
    id: "item-2",
    question: "Can I customize the kitchen design while using the VR feature?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, nam? A fugiat exercitationem magnam cupiditate? Nobis hic fuga magnam doloribus accusamus reiciendis quidem commodi quasi. Voluptatibus esse suscipit temporibus minus? Deserunt vero magnam odit modi corrupti est eius! Reprehenderit, ipsum. Mollitia magnam odio reprehenderit atque eos, sequi dignissimos consectetur voluptatem.",
  },
  
  {
    id: "item-4",
    question: "Is the VR experience available for all types of kitchens?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, nam? A fugiat exercitationem magnam cupiditate? Nobis hic fuga magnam doloribus accusamus reiciendis quidem commodi quasi. Voluptatibus esse suscipit temporibus minus? Deserunt vero magnam odit modi corrupti est eius! Reprehenderit, ipsum. Mollitia magnam odio reprehenderit atque eos, sequi dignissimos consectetur voluptatem.",
  },
  {
    id: "item-5",
    question: "Can I save my customized kitchen design?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, nam? A fugiat exercitationem magnam cupiditate? Nobis hic fuga magnam doloribus accusamus reiciendis quidem commodi quasi. Voluptatibus esse suscipit temporibus minus? Deserunt vero magnam odit modi corrupti est eius! Reprehenderit, ipsum. Mollitia magnam odio reprehenderit atque eos, sequi dignissimos consectetur voluptatem.",
  },
];

const FAQ = () => {
  return (
    <div>
      <div className="text-backgroundColor text-5xl font-normal mt-48">
        Frequently Asked <span className="text-red-500">Q</span>uestions
      </div>

      <Accordion type="single" collapsible className="mt-20">
        {faqData.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger className="text-backgroundColor font-normal text-xl">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2">
                <div></div>
                <div className="text-backgroundColor font-normal text-base">
                  {item.answer}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
