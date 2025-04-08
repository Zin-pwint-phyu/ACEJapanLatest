import React from "react";
import Flex from "../shared/Flex";
import { motion } from "framer-motion";
import { fadeUp } from "../animations";

const Banner = ({ text, img }) => {
  return (
    <>
      <Flex
        className="w-full h-[435px] bg-cover bg-center  mt-4 flex justify-center items-center"
        style={{ backgroundImage: `url(${img})` }}>
        <motion.p
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="show"
          className="md:text-5xl text-3xl text-white font-bold text-center px-2">
          {text}
        </motion.p>
      </Flex>
    </>
  );
};

export default Banner;
