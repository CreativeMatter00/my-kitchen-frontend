// 'use client';
// import React, { useState } from 'react';
// import { RiArrowRightSFill } from 'react-icons/ri';
// import { TbCategory } from "react-icons/tb";
// import { TiStarOutline } from "react-icons/ti";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from '@/components/ui/productCategoryAccordion';

// const Category = () => {
//   const [openItems, setOpenItems] = useState<string[]>([]);
//   const [selectedCategories, setSelectedCategories] = useState<string[]>([]); // Track selected categories

//   const toggleItem = (title: string) => {
//     setOpenItems((prevOpenItems) =>
//       prevOpenItems.includes(title)
//         ? prevOpenItems.filter((item) => item !== title)
//         : [...prevOpenItems, title]
//     );
//   };

//   const toggleCategorySelection = (title: string) => {
//     setSelectedCategories((prevSelectedCategories) =>
//       prevSelectedCategories.includes(title)
//         ? prevSelectedCategories.filter((category) => category !== title)
//         : [...prevSelectedCategories, title]
//     );
//   };

//   const categories = [
//     {
//       title: 'Kitchen',
//       count: 84,
//       items: [
//         { title: 'Trending Now', content: '' },
//         { title: 'Standard Kitchen', content: '' },
//         { title: 'Luxury Kitchen', content: '' },
//         { title: 'Economy Kitchen', content: '' },
//         { title: 'Couple Kitchen', content: '' },
//         { title: 'Parallel Kitchen', content: '' },
//       ],
//     },
//     {
//       title: 'Counter Top',
//       count: 67,
//       items: [
//         { title: 'Granite', content: '' },
//         { title: 'Acrylic Solid Surface', content: '' },
//         { title: 'Sintered', content: '' },
//         { title: 'HPL', content: '' },
//         { title: 'CPL', content: '' },
//       ],
//     },
//     { title: 'Wardrobes', count: 63, items: [] },
//     { title: 'Walk-In Closets', count: 63, items: [] },
//     { title: 'Vanities', count: 25, items: [] },
//     { title: 'Accessories', count: 0, items: [] },
//   ];

//   const brands = [
//     {
//       title: 'BLUM',
//       count: 78,
//       items: [
//         { title: 'Aventos', content: '12' },
//         { title: 'Legrabox', content: '' },
//         { title: 'Movento', content: '' },
//         { title: 'Standard', content: '' },
//         { title: 'Orga-Line', content: '' },
//         { title: 'Blumotion', content: '' },
//         { title: 'Servo-Drive', content: '' },
//         { title: 'Space Tower', content: '' },
//         { title: 'Space Twin', content: '' },
//       ],
//     },
//     {
//       title: 'GRASS',
//       count: 24,
//       items: [
//         { title: 'Granite', content: '' },
//         { title: 'Acrylic Solid Surface', content: '' },
//         { title: 'Sintered', content: '' },
//         { title: 'HPL', content: '' },
//         { title: 'CPL', content: '' },
//       ],
//     },
//     {
//       title: 'KESSEBOHMER',
//       count: 17,
//       items: [
//         { title: 'Tall Unit', content: '' },
//         { title: 'Wall Unit', content: '' },
//         { title: 'Corner Cabinets', content: '' },
//         { title: 'Base Unit', content: '' }
//       ],
//     },
//     {
//       title: 'HAFELE',
//       count: 33,
//       items: [
//         { title: 'Tall Unit', content: '' },
//         { title: 'Wall Unit', content: '' },
//         { title: 'Corner Cabinets', content: '' },
//         { title: 'Base Unit', content: '' }
//       ],
//     },
//     {
//       title: 'BLANCO',
//       count: 46,
//       items: [
//         { title: 'Tall Unit', content: '' },
//         { title: 'Wall Unit', content: '' },
//         { title: 'Corner Cabinets', content: '' },
//         { title: 'Base Unit', content: '' }
//       ],
//     },
//     {
//       title: 'TEKA',
//       count: 57,
//       items: [
//         { title: 'Tall Unit', content: '' },
//         { title: 'Wall Unit', content: '' },
//         { title: 'Corner Cabinets', content: '' },
//         { title: 'Base Unit', content: '' }
//       ],
//     },

//   ];

//   return (
//     // className="mx-auto px-4 p-2 container"
//     <div>
//       <div className='flex justify-start items-center gap-2 mt-4'>
//       <div><TbCategory className='w-6 h-6'/></div>
//       <div className='font-normal text-base'>Category</div>
//       </div>
//       <hr className='mt-4 text-grayLightPrimary'/>

//       <div className='mt-6'>
//       {categories.map((category, index) => (
//         <Accordion type="single" collapsible key={index}>
//           <AccordionItem value={`item-${index + 1}`}>
//             <div className='mt-2'>
//             {/* <AccordionTrigger className='mt-[-10px] hover:text-brandColor'>
//               {category.title} ({category.count})
//             </AccordionTrigger> */}
//             <AccordionTrigger
//                   className={`hover:text-brandColor text-sm font-bold text-textSecondary  ${
//                     selectedCategories.includes(category.title)
//                       ? 'text-red-600 bg-gray-200 ' // Apply red text and gray background for selected category
//                       : ''
//                   }`}
//                   onClick={() => toggleCategorySelection(category.title)}
//                 >
//                   <div className='flex gap-2'>
//                   <div>{category.title} </div>
//                   <div className=''>({category.count})</div>
//                   </div>
//                 </AccordionTrigger>
//             </div>
//             <AccordionContent>
//               {category.items.length > 0 ? (
//                 category.items.map(({ title, content }) => (
//                   <div key={title}>
//                     <div
//                       className="flex items-center hover:text-brandColor cursor-pointer"
//                       onClick={() => toggleItem(title)}
//                     >
//                       <div className='flex'>
//                       <RiArrowRightSFill
//                         className={`h-4 w-4 mr-2 shrink-0 transition-transform duration-500 ml-10 ${
//                           openItems.includes(title) ? 'rotate-90' : ''
//                         }`}
//                       />
//                       <div className="flex-1 font-bold text-sm text-textOptional hover:text-brandColor">{title}</div>
//                       </div>
//                     </div>
//                     <div
//                       className={`mt-4  ml-6 transition-opacity duration-200  ${
//                         openItems.includes(title) ? 'opacity-100 ' : 'opacity-0'
//                       }`}
//                     >
//                       {content}
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className='mt-4 ml-10 font-bold text-sm text-textOptional'>No items available.</div>
//               )}
//             </AccordionContent>
//           </AccordionItem>
//         </Accordion>
//       ))}
//     </div>

//       {/* Brand */}

//       <div className='flex justify-start items-center gap-2 mt-6'>
//       <div><TiStarOutline className='w-6 h-6'/></div>
//       <div className='font-normal text-base'>Brand</div>
//       </div>

//     <hr className='mt-4 text-grayLightPrimary'/>

//     <div className='mt-6'>
//       {brands.map((category, index) => (
//         <Accordion type="single" collapsible key={index}>
//           <AccordionItem value={`item-${index + 1}`}>
//             <div className='mt-2'>
//             {/* <AccordionTrigger className='mt-[-10px] hover:text-brandColor'>
//               {category.title} ({category.count})
//             </AccordionTrigger> */}
//             <AccordionTrigger
//                   className={`hover:text-brandColor  ${
//                     selectedCategories.includes(category.title)
//                       ? 'text-brandColor bg-graySecondary' // Apply red text and gray background for selected category
//                       : ''
//                   }`}
//                   onClick={() => toggleCategorySelection(category.title)}
//                 >
//                   {category.title} ({category.count})
//                 </AccordionTrigger>
//             </div>
//             <AccordionContent>
//               {category.items.length > 0 ? (
//                 category.items.map(({ title, content }) => (
//                   <div key={title}>
//                     <div
//                       className="flex items-center hover:text-brandColor cursor-pointer"
//                       onClick={() => toggleItem(title)}
//                     >
//                       <RiArrowRightSFill
//                         className={`h-4 w-4 mr-2 shrink-0 transition-transform duration-500 ${
//                           openItems.includes(title) ? 'rotate-90' : ''
//                         }`}
//                       />
//                       <div className="flex-1">{title}</div>
//                     </div>
//                     <div
//                       className={`mt-4  ml-6 transition-opacity duration-200 ${
//                         openItems.includes(title) ? 'opacity-100' : 'opacity-0'
//                       }`}
//                     >
//                       {content}
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className='mt-4 ml-6'>No items available.</div>
//               )}
//             </AccordionContent>
//           </AccordionItem>
//         </Accordion>
//       ))}
//     </div>
//     </div>
//   );
// };

// export default Category;

"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/productCategoryAccordion";
import { useState } from "react";
import { RiArrowRightSFill } from "react-icons/ri";
import { TbCategory } from "react-icons/tb";
import { TiStarOutline } from "react-icons/ti";

const Category = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]); // Track selected categories

  const toggleItem = (title: string) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(title)
        ? prevOpenItems.filter((item) => item !== title)
        : [...prevOpenItems, title]
    );
  };

  const toggleCategorySelection = (title: string) => {
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(title)
        ? prevSelectedCategories.filter((category) => category !== title)
        : [...prevSelectedCategories, title]
    );
  };

  const categories = [
    {
      title: "Kitchen",
      count: 84,
      items: [
        { title: "Trending Now" },
        { title: "Standard Kitchen" },
        { title: "Luxury Kitchen" },
        { title: "Economy Kitchen" },
        { title: "Couple Kitchen" },
        { title: "Parallel Kitchen" },
      ],
    },
    {
      title: "Counter Top",
      count: 67,
      items: [
        { title: "Granite" },
        { title: "Acrylic Solid Surface" },
        { title: "Sintered" },
        { title: "HPL" },
        { title: "CPL" },
      ],
    },
    { title: "Wardrobes", count: 63, items: [] },
    { title: "Walk-In Closets", count: 63, items: [] },
    { title: "Vanities", count: 25, items: [] },
    { title: "Accessories", count: 0, items: [] },
  ];

  const brands = [
    {
      title: "BLUM",
      count: 78,
      items: [
        { title: "Aventos" },
        { title: "Legrabox" },
        { title: "Movento" },
        { title: "Standard" },
        { title: "Orga-Line" },
        { title: "Blumotion" },
        { title: "Servo-Drive" },
        { title: "Space Tower" },
        { title: "Space Twin" },
      ],
    },
    {
      title: "GRASS",
      count: 24,
      items: [
        { title: "Granite" },
        { title: "Acrylic Solid Surface" },
        { title: "Sintered" },
        { title: "HPL" },
        { title: "CPL" },
      ],
    },
    {
      title: "KESSEBOHMER",
      count: 17,
      items: [
        { title: "Tall Unit" },
        { title: "Wall Unit" },
        { title: "Corner Cabinets" },
        { title: "Base Unit" },
      ],
    },
    {
      title: "HAFELE",
      count: 33,
      items: [
        { title: "Tall Unit" },
        { title: "Wall Unit" },
        { title: "Corner Cabinets" },
        { title: "Base Unit" },
      ],
    },
    {
      title: "BLANCO",
      count: 46,
      items: [
        { title: "Tall Unit" },
        { title: "Wall Unit" },
        { title: "Corner Cabinets" },
        { title: "Base Unit" },
      ],
    },
    {
      title: "TEKA",
      count: 57,
      items: [
        { title: "Tall Unit" },
        { title: "Wall Unit" },
        { title: "Corner Cabinets" },
        { title: "Base Unit" },
      ],
    },
  ];

  return (
    <div>
      <div className="flex justify-start items-center gap-2 mt-4">
        <div>
          <TbCategory className="w-6 h-6 text-textOptional" />
        </div>
        <div className="font-normal text-base text-text">Category</div>
      </div>
      <hr className="mt-4 text-grayLightPrimary" />

      <div className="mt-6">
        {categories.map((category, index) => (
          <Accordion type="single" collapsible key={index}>
            <AccordionItem value={`item-${index + 1}`}>
              <div className="mt-2">
                <AccordionTrigger
                  className={`hover:text-brandColor text-sm text-textSecondary 
              ${
                selectedCategories.includes(category.title)
                  ? "text-red-600 bg-gray-200"
                  : ""
              }`}
                  onClick={() => toggleCategorySelection(category.title)}
                >
                  <div className="flex gap-2">
                    <div className="font-bold">{category.title}</div>
                    {category.count > 0 && (
                      <div className="font-normal">({category.count})</div>
                    )}
                  </div>
                </AccordionTrigger>
              </div>
              <AccordionContent className="py-2">
                {category.items.length > 0 ? (
                  category.items.map(({ title }) => {
                    // const formattedTitle =
                    //   content && !isNaN(content)
                    //     ? ` ${title} (${content})`
                    //     : title;
                    return (
                      <div key={title}>
                        <div className="flex items-center cursor-pointer">
                          <div className="flex py-3 transition-all duration-200 cursor-pointer group">
                            <div className="group-hover:text-brandColor flex items-center text-textOptional">
                              <RiArrowRightSFill className=" mr-2 ml-10 w-5 h-5 transition-transform duration-500 shrink-0" />
                              <span className="font-bold text-sm">{title}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="mb-[-8px] ml-16 font-bold text-sm text-textOptional">
                    No items available.
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>

      {/* Brand */}

      <div className="flex justify-start items-center gap-2 mt-6">
        <div>
          <TiStarOutline className="w-6 h-6 text-textOptional" />
        </div>
        <div className="font-normal text-base text-text">Brand</div>
      </div>

      <hr className="mt-4 text-grayLightPrimary" />

      <div className="mt-6">
        {brands.map((category, index) => (
          <Accordion type="single" collapsible key={index}>
            <AccordionItem value={`item-${index + 1}`}>
              <div className="mt-2">
                <AccordionTrigger
                  className={`hover:text-brandColor text-sm text-textSecondary 
              ${
                selectedCategories.includes(category.title)
                  ? "text-brandColor bg-graySecondary"
                  : ""
              }`}
                  onClick={() => toggleCategorySelection(category.title)}
                >
                  <div className="flex gap-2">
                    <div className="font-bold">{category.title}</div>
                    {category.count > 0 && (
                      <div className="font-normal">({category.count})</div>
                    )}
                  </div>
                </AccordionTrigger>
              </div>
              <AccordionContent className="py-0">
                {category.items.length > 0 ? (
                  category.items.map(({ title }) => {
                    // const formattedTitle =
                    //   content && !isNaN(content)
                    //     ? ` ${title} (${content})`
                    //     : title;
                    return (
                      <div key={title}>
                        <div className="flex items-center cursor-pointer">
                          <div className="flex py-3 transition-all duration-200 cursor-pointer group">
                            <div className="group-hover:text-brandColor flex items-center text-textOptional">
                              <RiArrowRightSFill className=" mr-2 ml-10 w-5 h-5 transition-transform duration-500 shrink-0" />
                              <span className="font-bold text-sm">{title}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="mb-[-8px] ml-16 font-bold text-sm text-textOptional">
                    No items available.
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Category;
