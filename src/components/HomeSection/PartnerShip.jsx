import React from "react";
import { LiaEditSolid } from "react-icons/lia";
import { PartnersImg } from "../../constants";
import { motion } from "framer-motion";
import { fadeUp } from "../../animations";

const PartnerShip = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center xl:pt-30 pt-10 overflow-x-hidden">
        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="show"
          className=" flex justify-center items-center px-2 py-1 bg-color-10 w-fit">
          <LiaEditSolid className="text-color-3 text-2xl" />
          <p className="text-color-1 font-semibold pl-1">Our Focus</p>
        </motion.div>
        <motion.p
          variants={fadeUp(0.4)}
          initial="hidden"
          whileInView="show"
          className="text-color-1 text-2xl xl:text-5xl font-extrabold pt-3">
          Our Group Global Partners
        </motion.p>

        <div className=" mx-auto overflow-hidden whitespace-nowrap my-10 ">
          <div className="flex">
            <motion.div
              className="flex w-max shrink-0"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ ease: "linear", duration: 20, repeat: Infinity }}>
              {PartnersImg.map((img, index) => (
                <img
                  key={index}
                  src={img.image}
                  alt=""
                  className="xl:w-40 w-30 h-auto pr-10  object-contain"
                />
              ))}
            </motion.div>
            <motion.div
              className="flex w-max shrink-0"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ ease: "linear", duration: 20, repeat: Infinity }}>
              {PartnersImg.map((img, index) => (
                <img
                  key={index}
                  src={img.image}
                  alt=""
                  className="w-30 xl:w-40 h-auto pr-10 object-contain"
                />
              ))}
            </motion.div>
            <motion.div
              className="flex w-max shrink-0"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ ease: "linear", duration: 20, repeat: Infinity }}>
              {PartnersImg.map((img, index) => (
                <img
                  key={index}
                  src={img.image}
                  alt=""
                  className="w-30 xl:w-40 h-auto pr-10 object-contain"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerShip;
