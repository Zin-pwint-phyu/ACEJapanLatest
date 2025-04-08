import React from "react";

const AddressComponent = ({ label, text }) => {
  return (
    <>
      <div className=" border-b pl-0 border-gray-50  xl:w-[300px]  md:w-[200px] ">
        <p className="text-red text-lg">{label}</p>
        <p className="text-xl  text-white pb-4">{text}</p>
      </div>
    </>
  );
};

export default AddressComponent;
