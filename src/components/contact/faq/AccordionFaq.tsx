// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// const faqList = [
//   {
//     question: "What types of customized modular cabinets do you offer?",
//     answer:
//       " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, nam? A fugiat exercitationem magnam cupiditate? Nobis hic fuga magnam doloribus accusamus reiciendis quidem commodi quasi. Voluptatibus esse suscipit temporibus minus? Deserunt vero magnam odit modi corrupti est eius! Reprehenderit, ipsum. Mollitia magnam odio reprehenderit atque eos, sequi dignissimos consectetur voluptatem.",
//   },
//   {
//     question: "How can I schedule a consultation for my kitchen design?",
//     answer:
//       " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, nam? A fugiat exercitationem magnam cupiditate? Nobis hic fuga magnam doloribus accusamus reiciendis quidem commodi quasi. Voluptatibus esse suscipit temporibus minus? Deserunt vero magnam odit modi corrupti est eius! Reprehenderit, ipsum. Mollitia magnam odio reprehenderit atque eos, sequi dignissimos consectetur voluptatem.",
//   },
//   {
//     question: "Do you provide installation services for your products?",
//     answer:
//       " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, nam? A fugiat exercitationem magnam cupiditate? Nobis hic fuga magnam doloribus accusamus reiciendis quidem commodi quasi. Voluptatibus esse suscipit temporibus minus? Deserunt vero magnam odit modi corrupti est eius! Reprehenderit, ipsum. Mollitia magnam odio reprehenderit atque eos, sequi dignissimos consectetur voluptatem.",
//   },
//   {
//     question:
//       "Can I experience your products virtually before making a decision?",
//     answer:
//       " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, nam? A fugiat exercitationem magnam cupiditate? Nobis hic fuga magnam doloribus accusamus reiciendis quidem commodi quasi. Voluptatibus esse suscipit temporibus minus? Deserunt vero magnam odit modi corrupti est eius! Reprehenderit, ipsum. Mollitia magnam odio reprehenderit atque eos, sequi dignissimos consectetur voluptatem.",
//   },
//   {
//     question: "What is the warranty on your products?",
//     answer:
//       " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, nam? A fugiat exercitationem magnam cupiditate? Nobis hic fuga magnam doloribus accusamus reiciendis quidem commodi quasi. Voluptatibus esse suscipit temporibus minus? Deserunt vero magnam odit modi corrupti est eius! Reprehenderit, ipsum. Mollitia magnam odio reprehenderit atque eos, sequi dignissimos consectetur voluptatem.",
//   },
// ];

// export function AccordionFaq() {
//   return (
//     <Accordion type="single" collapsible className="w-full pb-24   ">
//       {faqList.map((item, index) => (
//         <AccordionItem key={index} value={String(index)}>
//           <AccordionTrigger className="font-light text-xl">{item.question}</AccordionTrigger>
//           <AccordionContent className="ml-[50%] font-extralight">{item.answer}</AccordionContent>
//         </AccordionItem>
//       ))}
//     </Accordion>
//   );
// }

// "use client"
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import React from "react";
// import { LuPlus } from "react-icons/lu";
// import { AiOutlineMinus } from "react-icons/ai";

// const faqList = [
//   {
//     question: "What types of customized modular cabinets do you offer?",
//     answer:
//       "Whether you're seeking inspiration or finalizing your design, 'My Kitchen Studio' offers a unique and engaging experience that showcases the quality and innovation of My Kitchen like never before. Dive in and bring your vision to life, all from the comfort We offer a wide range of customized modular cabinets, including kitchen cabinets, wardrobes, walk-in closets, toilet and basin cabinets, and various storage solutions. Each product is designed to meet your specific needs and preferences. your own space. Experience the cutting-edge technology and exceptional craftsmanship that set My Kitchen apart, and start your journey to creating the perfect kitchen today.",
//   },
//   {
//     question: "How can I schedule a consultation for my kitchen design?",
//     answer:
//       "Scheduling a consultation is easy! You can contact us via our website's contact form, call us at +88 01642-912612, or visit one of our store locations. Our team will be happy to assist you in setting up an appointment.",
//   },
//   {
//     question: "Do you provide installation services for your products?",
//     answer:
//       "Yes, we provide professional installation services for all our products. Our experienced team ensures that your modular cabinets and other solutions are installed perfectly to match your design and functional requirements.",
//   },
//   {
//     question:
//       "Can I experience your products virtually before making a decision?",
//     answer:
//       "Absolutely! With our 'My Kitchen Studio' VR feature, you can explore and interact with our modular kitchen solutions in a virtual environment. This allows you to visualize how our designs will look in your home without leaving your house.",
//   },
//   {
//     question: "What is the warranty on your products?",
//     answer:
//       "We offer a comprehensive warranty on all our products, ensuring they meet the highest quality standards. The specific warranty period may vary depending on the product category, so please refer to the product details or contact our customer support for more information.",
//   },
// ];

// export function AccordionFaq() {
//   const [openIndex, setOpenIndex] = React.useState<string>();
//   return (
//     <Accordion
//       type="single"
//       collapsible
//       value={openIndex}
//       onValueChange={(value) => setOpenIndex(value)}
//       className="w-full"
//     >
//       {faqList.map((item, index) => (
//         <AccordionItem key={index} value={String(index)}>
//           <AccordionTrigger
//             //index={index}
//             className="flex justify-between items-center font-light text-sm lg:text-xl md:text-base text-text"
//           >
//             {item.question}
//             {openIndex === String(index) ? (
//               <AiOutlineMinus className="text-brandColor" />
//             ) : (
//               <LuPlus className="text-text" />
//             )}
//           </AccordionTrigger>
//           <div className="grid grid-cols-1 lg:grid-cols-2">
//             <div></div>
//             <div>
//               <AccordionContent className=" font-normal text-base text-textSecondary duration-300 ease-in-out">
//                 {item.answer}
//               </AccordionContent>
//             </div>
//           </div>
//         </AccordionItem>
//       ))}
//     </Accordion>
//   );
// }



"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import { LuPlus } from "react-icons/lu";
import { AiOutlineMinus } from "react-icons/ai";

const faqList = [
  {
    question: "What types of customized modular cabinets do you offer?",
    answer:
      "Whether you're seeking inspiration or finalizing your design, 'My Kitchen Studio' offers a unique and engaging experience that showcases the quality and innovation of My Kitchen like never before. Dive in and bring your vision to life, all from the comfort We offer a wide range of customized modular cabinets, including kitchen cabinets, wardrobes, walk-in closets, toilet and basin cabinets, and various storage solutions. Each product is designed to meet your specific needs and preferences. your own space. Experience the cutting-edge technology and exceptional craftsmanship that set My Kitchen apart, and start your journey to creating the perfect kitchen today.",
  },
  {
    question: "How can I schedule a consultation for my kitchen design?",
    answer:
      "Scheduling a consultation is easy! You can contact us via our website's contact form, call us at +88 01642-912612, or visit one of our store locations. Our team will be happy to assist you in setting up an appointment.",
  },
  {
    question: "Do you provide installation services for your products?",
    answer:
      "Yes, we provide professional installation services for all our products. Our experienced team ensures that your modular cabinets and other solutions are installed perfectly to match your design and functional requirements.",
  },
  {
    question:
      "Can I experience your products virtually before making a decision?",
    answer:
      "Absolutely! With our 'My Kitchen Studio' VR feature, you can explore and interact with our modular kitchen solutions in a virtual environment. This allows you to visualize how our designs will look in your home without leaving your house.",
  },
  {
    question: "What is the warranty on your products?",
    answer:
      "We offer a comprehensive warranty on all our products, ensuring they meet the highest quality standards. The specific warranty period may vary depending on the product category, so please refer to the product details or contact our customer support for more information.",
  },
];

export function AccordionFaq() {
  const [openIndex, setOpenIndex] = React.useState<string | "">();

  return (
    <Accordion
      type="single"
      collapsible
      value={openIndex}
      onValueChange={(value) => setOpenIndex(value)}
      className="w-full"
    >
      {faqList.map((item, index) => (
        <AccordionItem key={index} value={String(index)}>
          <AccordionTrigger
            className="flex justify-between items-center font-light text-sm lg:text-xl md:text-base text-text"
          >
            {item.question}
            {openIndex === String(index) ? (
              <AiOutlineMinus className="text-brandColor" />
            ) : (
              <LuPlus className="text-text" />
            )}
          </AccordionTrigger>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div></div>
            <div>
              <AccordionContent className="font-normal text-base text-textSecondary ">
                {item.answer}
              </AccordionContent>
            </div>
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

