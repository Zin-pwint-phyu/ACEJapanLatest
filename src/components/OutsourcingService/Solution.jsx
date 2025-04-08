import React from "react";
import Container from "../../shared/Container";

const Solution = ({ img, children }) => {
  return (
    <>
      <div className="cusContainer mx-auto mt-20">
        <div className="flex flex-col justify-center items-center">
          <img
            src={img}
            alt={img}
            className="w-full object-cover object-center"
          />
          {children}
        </div>
      </div>
    </>
  );
};

export default Solution;
