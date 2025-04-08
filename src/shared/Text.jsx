import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../animations";
import { cn } from "../utils";

const Text = ({ children, className, ...props }) => {
  return (
    <>
      <motion.p
        variants={fadeUp(0.3)}
        initial="hidden"
        whileInView="show"
        className={cn("text-gray text-lg px-10 lg:w-[600px]", className)}
        {...props}>
        {children}
      </motion.p>
    </>
  );
};

export default Text;
