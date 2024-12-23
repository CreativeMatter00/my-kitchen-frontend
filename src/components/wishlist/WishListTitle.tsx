import React from "react";
import { FaRegHeart } from "react-icons/fa";
const WishListTitle=()=>{
    return(
        <>
        <div className="flex justify-center items-center gap-5">
          <FaRegHeart size={40} />
          <div className="text-4xl text-text font-normal ">Wishlist</div>
        </div>
        </>
    )
}
export default WishListTitle