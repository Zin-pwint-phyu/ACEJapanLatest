import React from "react";
import { cn } from "../utils";
import { motion } from "framer-motion";
import { fadeUp } from "../animations";

const HeaderT = ({ className, children }) => {
  return (
    <>
      <motion.div
        variants={fadeUp(0.3)}
        initial="hidden"
        whileInView="show"
        className={cn("text-color-1  md:text-xl text-lg font-bold", className)}>
        {children}
      </motion.div>
    </>
  );
};

export default HeaderT;
