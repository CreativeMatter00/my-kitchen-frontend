import Link from "next/link";
import React from "react";
// import Breadcrumbs from "../breadcrumbs/Breadcrumbs";

const Info = () => {
  return (
    <div className="h-[calc(100vh-145px)]">
      {/* <Breadcrumbs /> */}
      <div className="text-3xl text-primary ">This is Info Page</div>

      <Link href={"/info/details"} className="hover:underline">
        Go Details
      </Link>
    </div>
  );
};

export default Info;
