import React from "react";
import { cn } from "../utils";
import { motion } from "framer-motion";

import { LiaEditSolid } from "react-icons/lia";
import { fadeUp } from "../animations";
const FocusIcon = ({ text, className }) => {
  return (
    <>
      <motion.div
        variants={fadeUp(0.2)}
        initial="hidden"
        whileInView="show"
        className={cn(
          " flex justify-center items-center px-2  bg-white w-fit",
          className
        )}>
        <LiaEditSolid className="text-color-3 text-2xl" />
        <p className="text-color-1 font-semibold pl-1">{text}</p>
      </motion.div>
    </>
  );
};

export default FocusIcon;
