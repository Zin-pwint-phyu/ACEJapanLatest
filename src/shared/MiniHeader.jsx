import React from "react";
import { cn } from "../utils";
import { motion } from "framer-motion";
import { fadeInFR } from "../animations";

const MiniHeader = ({ image, children, className, classNameImg }) => {
  return (
    <>
      <motion.div
        variants={fadeInFR(0.2)}
        initial="hidden"
        whileInView="show"
        className={cn(
          "flex bg-color-10 md:w-fit md:px-5 xl:py-3 py-2 w-[200px] justify-center items-center",
          className
        )}>
        <img src={image} alt="" className={cn("md:w-[20px]", classNameImg)} />
        <p className="pl-2 text-color-1">{children}</p>
      </motion.div>
    </>
  );
};

export default MiniHeader;
