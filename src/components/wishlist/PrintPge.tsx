import React from 'react'

const PrintPge = () => {
    const handlePrint=()=>{
        window.print();
    }
  return (
    <div>
      <button className="py-3 px-10 font-medium text-backgroundColor text-lg bg-brandColorSecondary transition-all  hover:scale-95 duration-300"
      onClick={handlePrint}
      >
            Download List
          </button>
    </div>
  )
}

export default PrintPge
