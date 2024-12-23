import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaRegCircle } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
const ProductDetailsShippingAndReturn = () => {
  const shippingOptions = [
    {
      id: 1,
      title: "Standard Shipping:",
      duration: "3-5 business days",
    },
    {
      id: 2,
      title: "Express Shipping:",
      duration: "1-2 business days",
    },
  ];

  const accordionData = [
    {
      id: 1,
      title: "Processing Time",
      content: `Durability is at the core of our modular kitchen set, ensuring that your investment stands the test of time. Each component is meticulously crafted from premium materials, selected for their strength and resilience. The cabinets, counter tops, and finishes are engineered to resist daily wear and tear, including scratches, stains, and heat, making them ideal for the demands of a busy kitchen. The robust construction provides stability and longevity, so you can enjoy your kitchen for years without the worry of frequent repairs or replacements. This durability extends to the smallest details, from the hinges on the cabinets to the handles on the drawers, all designed to perform flawlessly over time.`,
    },
    {
      id: 2,
      title: "Shipping Rates & Delivery Estimates",
      content: (
        <>
          Shipping charges for your order will be calculated and displayed at
          checkout.
          <div>
            {shippingOptions.map((option) => (
              <div key={option.id} className="flex gap-2 mt-2">
                <div className="flex justify-center items-center">
                  <FaRegCircle className="text-grayLightSecondary" />
                  <GoArrowRight className="ml-[-0.5rem] text-textOptional" />
                </div>
                <div className="text-sm font-bold">{option.title}</div>
                <div className="text-sm font-normal">{option.duration}</div>
              </div>
            ))}
          </div>
        </>
      ),
    },
    {
      id: 3,
      title: "Order Tracking",
      content: `Once your order is shipped, you will receive a shipment confirmation email with a tracking number. You can track your order status in real-time.`,
    },
    {
      id: 4,
      title: "International Shipping",
      content: `We currently ship to select countries outside the U.S. Please note that international shipping rates and delivery times may vary based on the destination country.`,
    },
  ];

  return (
    <div>
      <div className="font-normal text-3xl mt-10">Shipping Information</div>

      <div>
        <div className="bg-white shadow-sm py-4">
          {accordionData.slice(0, 2).map((item) => (
            <Accordion
              key={item.id}
              type="single"
              collapsible
              className={item.id !== 1 ? "mt-4" : ""}
            >
              <AccordionItem value={`item-${item.id}`}>
                <AccordionTrigger className="text-black font-normal text-xl">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-base text-textSecondary mt-4">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>

        <div className="bg-white shadow-sm py-4 mt-4">
          {accordionData.slice(2).map((item) => (
            <Accordion
              key={item.id}
              type="single"
              collapsible
              className={item.id !== 3 ? "mt-4" : ""}
            >
              <AccordionItem value={`item-${item.id}`}>
                <AccordionTrigger className="text-black font-normal text-xl">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-base text-textSecondary mt-4">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsShippingAndReturn;
