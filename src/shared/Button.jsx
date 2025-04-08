import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils";
import { scaleUp } from "../animations";

const Button = ({ children, className, ...props }) => {
  return (
    <>
      <motion.button
        variants={scaleUp(0.3)}
        initial="hidden"
        whileInView="show"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={cn(
          "text-white cursor-pointer bg-color-20 flex justify-center items-center xl:px-[33px] xl:py-[20px] xl:text-lg text-sm px-4 py-3",
          className
        )}
        {...props}>
        {children}
      </motion.button>
    </>
  );
};

export default Button;
