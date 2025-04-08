import React from "react";
import { cn } from "../utils";
import { motion } from "framer-motion";
import { fadeUp } from "../animations";

const Input = ({ placeholder, className, ...props }) => {
  return (
    <>
      <motion.input
        variants={fadeUp(0.3)}
        initial="hidden"
        whileInView="show"
        type="text"
        className={cn(
          "bg-white border border-gray-300  p-4 rounded-sm outline-none",
          className
        )}
        {...props}
        placeholder={placeholder}
        required
      />
    </>
  );
};

export default Input;
