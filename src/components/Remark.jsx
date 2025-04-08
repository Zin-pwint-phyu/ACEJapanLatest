import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils";
import { fadeInFR } from "../animations";
const Remark = ({ text, delay, title, className, ...props }) => {
  return (
    <>
      <motion.div
        variants={fadeInFR(delay)}
        initial="hidden"
        whileInView="show"
        className={cn(
          "flex items-start space-x-2 w-full overflow-hidden",
          className
        )}
        {...props}>
        <img src="correctIcon.svg" alt="IconImg" />
        <div>
          <p className="text-color-1 md:text-xl text-lg font-bold">{title}</p>
          <p className="text-color-2 ">{text}</p>
        </div>
      </motion.div>
    </>
  );
};

export default Remark;
