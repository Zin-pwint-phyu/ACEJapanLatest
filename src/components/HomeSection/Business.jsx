import React from "react";
import { motion } from "framer-motion";
import BusinessCard from "../BusinessCard";
import { fadeUp } from "../../animations";
import FocusIcon from "../../shared/FocusIcon";
const Business = () => {
  return (
    <>
      <div className="w-full h-auto bg-color-30 mt-10">
        <div className="flex flex-col items-center pt-10 pb-10">
          <FocusIcon text="Our Focus" />
          <motion.p
            variants={fadeUp(0.3)}
            initial="hidden"
            whileInView="show"
            className="text-white xl:text-5xl text-2xl font-extrabold pt-3 xl:pt-5">
            Group Business Focus
          </motion.p>

          <div className=" mx-auto">
            <BusinessCard />
            {/* <BusinessCard /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Business;
