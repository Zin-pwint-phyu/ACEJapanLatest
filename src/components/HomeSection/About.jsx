import React from "react";
import { LiaEditSolid } from "react-icons/lia";
import AboutComponent from "../AboutComponent";
import { motion } from "framer-motion";
import Remark from "../Remark";
import { RemarkText } from "../../constants";
import { fadeUp } from "../../animations";
const scaleUp = (delay) => {
  return {
    hidden: { opacity: 0, scale: 0.5, translateY: 300 },
    show: {
      opacity: 1,
      scale: 1,
      translateY: 0,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
};
const About = () => {
  return (
    <>
      <motion.div
        variants={fadeUp(0.3)}
        initial="hidden"
        whileInView="show"
        className="w-full h-auto bg-seconary overflow-x-hidden">
        <div className=" flex flex-col xl:flex-row justify-center md:items-start xl:py-20  xl:items-center items-center gap-4 xl:px-15 lg:gap-10 ">
          <motion.div
            variants={fadeUp(0.3)}
            initial="hidden"
            whileInView="show"
            className=" w-full bg-[url('/AboutUs.png')] xl:max-h-[800px] md:h-[921px] bg-cover flex justify-center items-center">
          </motion.div>
          {/* left side */}

          <div className="w-full  px-5">
            <div className="flex justify-start items-center">
              <motion.div
                variants={scaleUp(0.1)}
                initial="hidden"
                whileInView="show"
                className=" flex justify-center items-center px-5 py-1">
                <LiaEditSolid className="text-color-3 text-2xl" />
                <p className="text-color-1 font-semibold pl-2">Why Choose Us</p>
              </motion.div>
            </div>

            <div className="mt-1">
              <motion.p
                variants={fadeUp(0.2)}
                initial="hidden"
                whileInView="show"
                className="lg:text-5xl text-2xl text-color-1 font-semibold leading-[1.2]  ">
                Few Reasons Why You <br /> Should Choose Us
              </motion.p>
              <motion.p
                variants={fadeUp(0.4)}
                initial="hidden"
                whileInView="show"
                className="text-color-2 pt-5">
                At ACEJapan, we understand the unique needs of Japanese business
                and provide customized strategies to support their expansion
                into new markets. With our commitment to quality and client
                satisfaction, we have become a trusted partner for businesses
                seeking competitive advantages in the global marketplace.
              </motion.p>
              <motion.p
                variants={fadeUp(0.4)}
                initial="hidden"
                whileInView="show"
                className="text-color-2 pt-5">
                Whether you aim to reduce costs, enhance system reliability, or
                explore new opportunities, ACE Japan is your reliable partner
                for driving success.
              </motion.p>
            </div>

            <div className="md:space-y-12 space-y-5 md:w-[558px] md:mt-8 mt-5 overflow-hidden">
              {RemarkText.map((item, index) => (
                <Remark
                  delay={item.delay}
                  text={item.text}
                  title={item.title}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
