import React from "react";
import { cn } from "../../utils";

const SolutionBtn = ({ className, children, ...props }) => {
  return (
    <>
      <button
        className={cn(
          "flex justify-between gap-1 py-2 lg:px-6 lg:py-3 px-2 mt-2 text-blue items-center bg-yellow ",
          className
        )}
        {...props}>
        {children}
      </button>
    </>
  );
};

export default SolutionBtn;
