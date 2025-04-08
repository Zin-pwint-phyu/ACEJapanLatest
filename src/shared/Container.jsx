import React from "react";
import { cn } from "../utils";

const Container = ({ children, className, onClick}) => {
  return (
    <>
      <div className={cn("container  xl:mx-auto px-10", className)} onClick={onClick}>
        {children}
      </div>
    </>
  );
};

export default Container;
