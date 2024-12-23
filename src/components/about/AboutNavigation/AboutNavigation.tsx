// "use client";

// import React, { useState } from "react";
// import MyKitchen from "./NavViews/MyKitchen";
// import Finish from "./NavViews/Finish";
// import Services from "./NavViews/Services";
// import EcoFriendly from "./NavViews/EcoFriendly";
// const AboutNavigation = () => {
//   const [activeComponent, setActiveComponent] = useState("MyKitchen");

//   const renderComponent = () => {
//     switch (activeComponent) {
//       case "MyKitchen":
//         return <MyKitchen />;
//       case "Finish":
//         return <Finish />;
//       case "Services":
//         return <Services />;
//       case "EcoFriendly":
//         return <EcoFriendly />;
//       default:
//         return <MyKitchen />;
//     }
//   };

//   return (
//     <div className="pt-12 pb-24   bg-white">
//       <div className="flex justify-center gap-32 mb-24">
//         <button
//           className={`font-light px-3 py-3  ${
//             activeComponent === "MyKitchen"
//               ? " bg-text text-backgroundColor"
//               : "hover:bg-slate-300"
//           }`}
//           onClick={() => setActiveComponent("MyKitchen")}
//         >
//           My Kitchen
//         </button>
//         <button
//           className={`font-light px-3 py-3  ${
//             activeComponent === "Finish"
//               ? " bg-text text-backgroundColor"
//               : "hover:bg-slate-300"
//           }`}
//           onClick={() => setActiveComponent("Finish")}
//         >
//           Finish
//         </button>
//         <button
//           className={`font-light px-3 py-3  ${
//             activeComponent === "Services"
//               ? " bg-text text-backgroundColor"
//               : "hover:bg-slate-300"
//           }`}
//           onClick={() => setActiveComponent("Services")}
//         >
//           Services
//         </button>
//         <button
//           className={`font-light px-3 py-3  ${
//             activeComponent === "EcoFriendly"
//               ? " bg-text text-backgroundColor"
//               : "hover:bg-slate-300"
//           }`}
//           onClick={() => setActiveComponent("EcoFriendly")}
//         >
//           Eco-Friendly
//         </button>
//       </div>
//       <div className="flex justify-center">{renderComponent()}</div>
//     </div>
//   );
// };

// export default AboutNavigation;


// "use client";

// import React, { useState } from "react";
// import MyKitchen from "./NavViews/MyKitchen";
// import Finish from "./NavViews/Finish";
// import Services from "./NavViews/Services";
// import EcoFriendly from "./NavViews/EcoFriendly";
// const AboutNavigation = () => {
//   const [activeComponent, setActiveComponent] = useState("MyKitchen");

//   const renderComponent = () => {
//     switch (activeComponent) {
//       case "MyKitchen":
//         return <MyKitchen />;
//       case "Finish":
//         return <Finish />;
//       case "Services":
//         return <Services />;
//       case "EcoFriendly":
//         return <EcoFriendly />;
//       default:
//         return <MyKitchen />;
//     }
//   };

//   return (
//     <div className="py-4 md:py-10">  
//       <div className="flex flex-wrap justify-center gap-6 md:gap-20">
//         <button
//           className={`font-light px-4 py-2  ${
//             activeComponent === "MyKitchen"
//               ? " bg-text text-backgroundColor"
//               : "md:hover:bg-grayLightSecondary"
//           }`}
//           onClick={() => setActiveComponent("MyKitchen")}
//         >
//           My Kitchen
//         </button>
//         <button
//           className={`font-light px-4 py-2  ${
//             activeComponent === "Finish"
//               ? " bg-text text-backgroundColor"
//               : "md:hover:bg-grayLightSecondary"
//           }`}
//           onClick={() => setActiveComponent("Finish")}
//         >
//           Finish
//         </button>
//         <button
//           className={`font-light px-4 py-2  ${
//             activeComponent === "Services"
//               ? " bg-text text-backgroundColor"
//               : "md:hover:bg-grayLightSecondary"
//           }`}
//           onClick={() => setActiveComponent("Services")}
//         >
//           Services
//         </button>
//         <button
//           className={`font-light px-4 py-2  ${
//             activeComponent === "EcoFriendly"
//               ? " bg-text text-backgroundColor"
//               : "md:hover:bg-grayLightSecondary"
//           }`}
//           onClick={() => setActiveComponent("EcoFriendly")}
//         >
//           Eco-Friendly
//         </button>
//       </div>

//       <div className="flex justify-center">{renderComponent()}</div>
//     </div>
//   );
// };

// export default AboutNavigation;


// "use client";

// import React, { useState, useEffect } from "react";
// import { useSearchParams, useRouter } from "next/navigation";

// import MyKitchen from "./NavViews/MyKitchen";
// import Finish from "./NavViews/Finish";
// import Services from "./NavViews/Services";
// import EcoFriendly from "./NavViews/EcoFriendly";

// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/components/ui/tabs";

// const AboutNavigation = () => {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   // Get default tab from query parameters or default to "kitchen"
//   const defaultTab = searchParams.get("tab") || "kitchen";
//   const [tab, setTab] = useState(defaultTab);

//   // Update query parameters when the tab value changes
//   useEffect(() => {
//     router.replace(`?tab=${tab}`);
//   }, [tab, router]);

//   return (
//     <div className="py-4 md:py-10">
//       <Tabs
//         defaultValue={defaultTab}
//         value={tab}
//         onValueChange={setTab}
//         className="w-full"
//       >
//         {/* Tabs List */}
//         <TabsList className="flex justify-center gap-4">
//           <TabsTrigger
//             value="kitchen"
//             className={`${
//               tab === "kitchen" ? "bg-text" : ""
//             } px-4 py-2`}
//           >
//             My Kitchen
//           </TabsTrigger>
//           <TabsTrigger
//             value="finish"
//             className={`${
//               tab === "finish" ? "bg-text text-backgroundColor" : ""
//             } px-4 py-2`}
//           >
//             Finish
//           </TabsTrigger>
//           <TabsTrigger
//             value="services"
//             className={`${
//               tab === "services" ? "bg-text text-backgroundColor" : ""
//             } px-4 py-2`}
//           >
//             Services
//           </TabsTrigger>
//           <TabsTrigger
//             value="eco-friendly"
//             className={`${
//               tab === "eco-friendly" ? "bg-text text-backgroundColor" : ""
//             } px-4 py-2`}
//           >
//             Eco-Friendly
//           </TabsTrigger>
//         </TabsList>

//         {/* Tabs Content */}
//         <TabsContent value="kitchen">
//           <MyKitchen />
//         </TabsContent>
//         <TabsContent value="finish">
//           <Finish />
//         </TabsContent>
//         <TabsContent value="services">
//           <Services />
//         </TabsContent>
//         <TabsContent value="eco-friendly">
//           <EcoFriendly />
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// };

// export default AboutNavigation;


"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import MyKitchen from "./NavViews/MyKitchen";
import Finish from "./NavViews/Finish";
import Services from "./NavViews/services/Services";
import EcoFriendly from "./NavViews/EcoFriendly";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const AboutNavigation = () => {
  const searchParams = useSearchParams();

  // Get default tab from query parameters or default to "kitchen"

  const defaultTab = searchParams.get("tab") || "kitchen";
  const [tab, setTab] = useState(defaultTab);

  console.log("default tab: ", defaultTab);

  // Update URL query parameters without scrolling or triggering a re-render

  useEffect(() => {
    const newUrl = new URL(window.location.href); //This creates a new URL object based on the current page's address.This allows us to modify parts of the URL, like query parameters (?tab=...)
    newUrl.searchParams.set("tab", tab);//This sets or updates the tab query parameter in the URL to the current tab value.
    window.history.replaceState(null, "", newUrl.toString());//This updates the browser's URL without reloading the page or changing the scroll position.
  }, [tab]);

  return (
    <div className="py-4 md:py-10">
      <Tabs
        defaultValue={defaultTab}
        value={tab}
        onValueChange={setTab}
        className="w-full"
      >
        {/* Tabs List */}
        <TabsList className="flex justify-center gap-20">
          <TabsTrigger
            value="kitchen"
            className={`${tab === "kitchen" ? "bg-text" : ""
              } px-4 py-2`}
          >
            My Kitchen
          </TabsTrigger>
          <TabsTrigger
            value="finish"
            className={`${tab === "finish" ? "bg-text text-backgroundColor" : ""
              } px-4 py-2`}
          >
            Finish
          </TabsTrigger>
          <TabsTrigger
            value="services"
            className={`${tab === "services" ? "bg-text text-backgroundColor" : ""
              } px-4 py-2`}
          >
            Services
          </TabsTrigger>
          <TabsTrigger
            value="eco-friendly"
            className={`${tab === "eco-friendly" ? "bg-text text-backgroundColor" : ""
              } px-4 py-2`}
          >
            Eco-Friendly
          </TabsTrigger>
        </TabsList>

        {/* Tabs Content */}
        <TabsContent value="kitchen">
          <MyKitchen />
        </TabsContent>
        <TabsContent value="finish">
          <Finish />
        </TabsContent>
        <TabsContent value="services">
          <Services />
        </TabsContent>
        <TabsContent value="eco-friendly">
          <EcoFriendly />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AboutNavigation;



