import React from 'react'

import Link from "next/link";
import { usePathname } from "next/navigation";

const BreadcrumbOfService = () => {

     const pathname = usePathname(); // Get the current path
      const pathSegments = pathname.split("/").filter(Boolean); // Split and remove empty segments
    
      // Helper function to capitalize each word in a segment
      const capitalizeSegment = (str: string) =>
        str
          .toLowerCase()
          .split("-")
          .map((word) => word.replace(/^\w/, (c) => c.toUpperCase()))
          .join(" ");


  return (
    <div>
      <nav className="mb-4">
      <div className="flex items-center space-x-2">
        {/* <Link href="/" className="hover:text-red-700 hover:underline text-text">
          Home
        </Link> */}
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;

          return (
            <React.Fragment key={index}>
              
              {isLast ? (
                <span className="text-gray-400">
                  {capitalizeSegment(decodeURIComponent(segment))}
                </span>
              ) : (
                <>
                <Link
                  href={href}
                  className="hover:text-red-700 hover:underline text-text"
                >
                  {capitalizeSegment(decodeURIComponent(segment))}
                  
                </Link>
                <span className="mx-2">/</span>
                </>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
    </div>
  )
}

export default BreadcrumbOfService
