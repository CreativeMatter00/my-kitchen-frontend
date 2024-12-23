import React from 'react'
import { FaStar } from "react-icons/fa";

const Ratings = () => {
    const stars = [true, true, true, true, true];
  return (
    <>
        <div className="flex">
          {stars.map((isFilled, index) => (
            <FaStar
              key={index}
              className={`w-4 h-4 ${
                isFilled ? "text-yellow-500" : "text-gray-300"
              }`}
            />
          ))}
        </div>
    </>
  )
}

export default Ratings