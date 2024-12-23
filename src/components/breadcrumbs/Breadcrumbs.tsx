

// // "use client";

// // import React from "react";
// // import Link from "next/link";

// // const Breadcrumbs = ({ currentItem }: { currentItem: string }) => {
// //   return (
// //     <nav className="mb-4 text-sm text-gray-500">
// //       <div className="flex">
// //         <Link className="text-gray-500" href={'/about'}>About</Link> /
// //         <Link  className="text-gray-500" href={'/about?tab=finish'}>Finish</Link> /
// //         <Link className=" cursor-pointer text-text" href={currentItem}>{currentItem}</Link>
        
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Breadcrumbs;


"use client";

import React from "react";
import Link from "next/link";

interface BreadcrumbsProps {
  parentItem: string;
  currentItem: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ parentItem, currentItem }) => {
  // Generate the dynamic parent link
  const parentLink = `/about?tab=${parentItem.toLowerCase()}`;

  return (
    <nav className="mb-4 text-sm">
      <div className="flex justify-center items-center gap-4 overflow-hidden text-ellipsis whitespace-normal line-clamp-2">
        <Link 
        className="text-text font-normal text-lg hover:underline hover:text-brandColor" href={`/about?tab=${parentItem.toLowerCase()}`}
        >
          About
        </Link>{" "}
        /
        <Link className="text-text font-normal text-lg hover:underline hover:text-brandColor" href={parentLink}>
          {parentItem}
        </Link>{" "}
        /
        <span className="text-textOptional font-normal text-lg">{currentItem}</span>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
