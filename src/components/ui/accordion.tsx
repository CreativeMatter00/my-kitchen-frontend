// "use client"

// import * as React from "react"
// import * as AccordionPrimitive from "@radix-ui/react-accordion"
// import { ChevronDown } from "lucide-react"

// import { cn } from "@/lib/utils"

// const Accordion = AccordionPrimitive.Root

// const AccordionItem = React.forwardRef<
//   React.ElementRef<typeof AccordionPrimitive.Item>,
//   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
// >(({ className, ...props }, ref) => (
//   <AccordionPrimitive.Item
//     ref={ref}
//     className={cn("", className)}
//     {...props}
//   />
// ))
// AccordionItem.displayName = "AccordionItem"

// // const AccordionTrigger = React.forwardRef<
// //   React.ElementRef<typeof AccordionPrimitive.Trigger>,
// //   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
// // >(({ className, children, ...props }, ref) => (
// //   <AccordionPrimitive.Header className="flex">
// //     <AccordionPrimitive.Trigger
// //       ref={ref}
// //       className={cn(
// //         "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:text-[redBrandColor1] [&[data-state=open]>svg]:rotate-180",

// //         className
// //       )}
// //       {...props}
// //     >
// //       {children}
// //       <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />

// //     </AccordionPrimitive.Trigger>
// //   </AccordionPrimitive.Header>
// // ))
// // AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

// const AccordionTrigger = React.forwardRef<
//   React.ElementRef<typeof AccordionPrimitive.Trigger>,
//   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
// >(({ className, children, ...props }, ref) => (
//   <AccordionPrimitive.Header className="flex">
//     <AccordionPrimitive.Trigger
//       ref={ref}
//       className={cn(
//         "flex flex-1 items-center justify-between py-4 font-medium transition-all  [&[data-state=open]>svg]:rotate-180",

//         className
//       )}
//       {...props}
//     >
//       {children}
//       <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />

//     </AccordionPrimitive.Trigger>
//   </AccordionPrimitive.Header>
// ))
// AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

// const AccordionContent = React.forwardRef<
//   React.ElementRef<typeof AccordionPrimitive.Content>,
//   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
// >(({ className, children, ...props }, ref) => (
//   <AccordionPrimitive.Content
//     ref={ref}
//     className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
//     {...props}
//   >
//     <div className={cn("pb-4 pt-0", className)}>{children}</div>
//   </AccordionPrimitive.Content>
// ))

// AccordionContent.displayName = AccordionPrimitive.Content.displayName

// export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

// "use client";

// import * as React from "react";
// import * as AccordionPrimitive from "@radix-ui/react-accordion";
// import { cn } from "@/lib/utils";
// import { LuPlus } from "react-icons/lu";
// import { AiOutlineMinus } from "react-icons/ai";

// const Accordion = AccordionPrimitive.Root;

// const AccordionItem = React.forwardRef<
//   React.ElementRef<typeof AccordionPrimitive.Item>,
//   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
// >(({ className, ...props }, ref) => (
//   <AccordionPrimitive.Item
//     ref={ref}
//     className={cn("border-b border-gray-200", className)}
//     {...props}
//   />
// ));
// AccordionItem.displayName = "AccordionItem";

// const AccordionTrigger = React.forwardRef<
//   React.ElementRef<typeof AccordionPrimitive.Trigger>,
//   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> 
// >(({ className, children, ...props }, ref) => {
//   // Move the useState hook inside the functional component
//   const [isPlusVisible, setIsPlusVisible] = React.useState(false);

//   return (
//     <AccordionPrimitive.Header className="flex">
//       <AccordionPrimitive.Trigger
//         onClick={() => {
//           setIsPlusVisible(!isPlusVisible);
//         }}
//         ref={ref}
//         className={cn(
//           "flex flex-1 items-center justify-between py-4 font-medium transition-all",
//           className
//         )}
//         {...props}
//       >
//         {children}
//         {/* Toggle Sign Based on UI */}
//         {!isPlusVisible ? (
//           <LuPlus className="text-text" />
//         ) : (
//           <AiOutlineMinus className="text-brandColor" />
//         )}
//       </AccordionPrimitive.Trigger>
//     </AccordionPrimitive.Header>
//   );
// });
// AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

// const AccordionContent = React.forwardRef<
//   React.ElementRef<typeof AccordionPrimitive.Content>,
//   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
// >(({ className, children, ...props }, ref) => (
//   <AccordionPrimitive.Content
//     ref={ref}
//     className={cn(
//       "overflow-hidden text-sm transition-all data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up",
//       className
//     )}
//     {...props}
//   >
//     <div className="pb-4">{children}</div>
//   </AccordionPrimitive.Content>
// ));
// AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };


import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-gray-200", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all",
          className
        )}
        {...props}
      >
        {children}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up",
      className
    )}
    {...props}
  >
    <div className="pb-4">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
