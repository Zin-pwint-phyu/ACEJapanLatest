import React from "react";
import { cn } from "../utils";

const Grid = ({ children, className, ...props }) => {
  return (
    <>
      <div className={cn("grid  lg:grid-cols-4", className)} {...props}>
        {children}
      </div>
    </>
  );
};

export default Grid;
