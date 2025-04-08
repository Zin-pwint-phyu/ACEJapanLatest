import React from "react";
import { motion } from "framer-motion";
import { fadeInFL, fadeInFR } from "../animations";

const AboutComponent = ({ title }) => {
  return (
    <div className="w-full overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="show"
        className="flex flex-row items-center justify-center ">
        <motion.span
          variants={fadeInFL(0.2)}
          className="md:w-[96px] md:h-[65px] w-[65px] h-[45px] bg-color-20 text-white inline-flex justify-center items-center">
          -
        </motion.span>

        <motion.span
          variants={fadeInFR(0.2)}
          className="text-white md:text-2xl text-xl font-bold inline-flex w-[210px] h-[45px] md:w-[305px] md:h-[65px] py-[18px] px-[22px] border justify-center items-center">
          {title}
        </motion.span>
      </motion.div>
    </div>
  );
};

export default AboutComponent;
