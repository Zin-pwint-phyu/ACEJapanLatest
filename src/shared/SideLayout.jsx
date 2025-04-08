import React from "react";
import { cn } from "../utils";

const SideLayout = ({ className, children, ...props }) => {
  return (
    <>
      <div
        className={cn("max-w-[600px] md:ml-25 xl:ml-0 lg:pt-14", className)}
        {...props}>
        <div className="w-full overflow-hidden">{children}</div>
      </div>
    </>
  );
};

export default SideLayout;
