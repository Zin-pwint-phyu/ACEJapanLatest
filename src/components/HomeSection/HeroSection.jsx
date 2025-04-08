import React from "react";
import { motion } from "framer-motion";
import Button from "../../shared/Button";
import { fadeUp, scaleUp } from "../../animations";

const HeroSection = () => {
  return (
    <>
      <div className="w-full">
        <motion.div className="bg-[url('/Hero.jpg')] w-full max-h-screen xl:h-screen mt:20 xl:-mt-15 bg-no-repeat object-cover bg-cover bg-center flex justify-start mt-4  lg:-mt-14">
          <div className="px-15 xl:px-0 w-full lg:w-[680px] xl:w-[940px] 2xl:w-[1200px] mx-auto xl:mx-auto flex flex-col justify-center    text-left my-20 md:my-22">
            <div className="w-full">
              <motion.div
                variants={scaleUp()}
                initial="hidden"
                whileInView="show"
                className="flex w-fit md:items-center lg:py-2 bg-white/30 py-1 md:mt-10">
                <img
                  src="GlobalJob.svg"
                  alt="Icon"
                  className="w-[25px] md:w-[35px]  pl-2"
                />
                <p className="text-white text-xs xl:text-lg px-2">
                  We Provide Comprehensive IT and Business solutions.
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp(0.4)}
                initial="hidden"
                whileInView="show"
                className="my-4 xl:my-8">
                <p className="text-white text-2xl xl:text-6xl font-bold">
                  We Are Professional <br /> Quality IT Services
                </p>
              </motion.div>
              <div>
                <Button>Our Services</Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default HeroSection;
