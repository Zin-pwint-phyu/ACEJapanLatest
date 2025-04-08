import React from "react";
import { cn } from "../utils";
import { motion } from "framer-motion";
import { fadeUp } from "../animations";

const MarkText = ({ children, className, ...props }) => {
  return (
    <>
      <motion.div
        variants={fadeUp(0.2)}
        initial="hidden"
        whileInView="show"
        className={cn(
          "flex items-start space-x-2 w-full overflow-hidden",
          className
        )}
        {...props}>
        <img src="correctIcon.svg" alt="IconImg" />
        {children}
      </motion.div>
    </>
  );
};

export default MarkText;
