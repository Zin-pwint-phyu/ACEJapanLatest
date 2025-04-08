import React from "react";
import { easeInOut, motion } from "framer-motion";
import MiniHeader from "../../shared/MiniHeader.jsx";
import { fadeInFL, fadeInFR, fadeUp } from "../../animations";
import HeaderT from "../../shared/HeaderT";

const FutureSection = () => {
  return (
    <>
      <div className="cusContainer mx-auto mt-15  sm:mb-10">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:px-0 px-6">
          <div className="hidden lg:block  w-full  ">
            <motion.img
              variants={fadeInFL(0.3)}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.5, delay: 0.2, ease: easeInOut }}
              src="FutureImg.png"
              alt="FutureImg"
              className=" w-full h-full object-cover  "
            />
          </div>
          {/* left side */}
          <div className="  md:ml-20">
            <div className="w-full overflow-hidden">
              <MiniHeader image="miniLogo.svg" classNameImg="md:w-fit">
                Welcome ACE Japan
              </MiniHeader>
              <motion.div
                variants={fadeInFR(0.3)}
                initial="hidden"
                whileInView="show"
                className="mt-3">
                <motion.p
                  variants={fadeInFR(0.4)}
                  initial="hidden"
                  whileInView="show"
                  className="xl:text-5xl text-color-1 font-extrabold md:py-3 lg:py-1 text-xl lg:text-3xl">
                  We Provide Your Future
                </motion.p>
                <motion.p
                  variants={fadeInFR(0.5)}
                  initial="hidden"
                  whileInView="show"
                  className="text-color-2 md:pt-5 pt-2 md:text-sm text-[12px] lg:pt-1">
                  Our mission is to provide seamless IT solutions and
                  comprehensive support to businesses in Japan, with a focus on
                  innovation, efficiency, and collaboration.
                </motion.p>
                <motion.p
                  variants={fadeInFR(0.6)}
                  initial="hidden"
                  whileInView="show"
                  className="text-color-2 md:pt-5 pt-2 lg:pt-3 md:text-sm text-[12px]">
                  By leveraging the expertise of the ACE Data Systems Group and
                  our close ties with Japanese companies, we excel in:
                </motion.p>
              </motion.div>
              <div className="flex  md:mt-10 mt-5 ">
                <motion.div
                  variants={fadeUp(0.3)}
                  initial="hidden"
                  whileInView="show"
                  className="bg-color-10 flex flex-col justify-center items-center w-[175px] xl:py-6 xl:px-4 ">
                  <HeaderT className="pb-4">Over</HeaderT>
                  <img
                    src="10.svg"
                    alt=""
                    className="xl:w-[80px]  md:w-[70px] w-[60px] "
                  />
                  <p className="xl:text-lg text-xl font-extrabold text-color-1 text-center md:pt-5 pt-3 lg:pt-1">
                    Years Of Experience
                  </p>
                </motion.div>
                <div className=" pl-6 lg:text-xs text-[12px]">
                  <ul className="text-color-2 md:space-y-2 space-y-2 list-disc text-justify word-sapcing">
                    <motion.li
                      variants={fadeUp(0.2)}
                      initial="hidden"
                      whileInView="show">
                      Outsourcing Services
                    </motion.li>
                    <motion.li
                      variants={fadeUp(0.3)}
                      initial="hidden"
                      whileInView="show">
                      Offshore System Development
                    </motion.li>
                    <motion.li
                      variants={fadeUp(0.4)}
                      initial="hidden"
                      whileInView="show">
                      Package solutions designed for efficiency
                    </motion.li>
                    <motion.li
                      variants={fadeUp(0.5)}
                      initial="hidden"
                      whileInView="show">
                      System support for sustainable growth
                    </motion.li>
                    <motion.li
                      variants={fadeUp(0.6)}
                      initial="hidden"
                      whileInView="show">
                      System support for sustainable growth
                    </motion.li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FutureSection;
