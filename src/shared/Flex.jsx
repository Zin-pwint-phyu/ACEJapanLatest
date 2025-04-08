import React from "react";
import { cn } from "../utils";

const Flex = ({ className, children, ...props }) => {
  return (
    <div
      className={cn("flex justify-center items-center", className)}
      {...props}>
      {children}
    </div>
  );
};

export default Flex;
