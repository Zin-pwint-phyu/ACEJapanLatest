import React from "react";
import { LiaEditSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import { fadeUp } from "../../animations";
import Container from "../../shared/Container";
import Flex from "../../shared/Flex";
import SideLayout from "../../shared/SideLayout";
import Remark from "../Remark";
import { GroupDevelopment, RemarkText } from "../../constants";

const Program = () => {
  return (
    <>
      <div className="mt-10 w-full h-auto flex flex-col items-center pt-10 cusContainer mx-auto">
        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="show"
          className=" flex justify-center items-center px-2 py-1 bg-color-30 w-fit">
          <LiaEditSolid className="text-color-3 text-2xl" />
          <p className="text-white font-semibold pl-1 ">Our Program</p>
        </motion.div>
        <motion.p
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-black text-2xl xl:text-5xl font-extrabold pt-3 text-center">
          Check Our Group Human Resource Development
        </motion.p>
        <Flex className="xl:space-x-14 pt-10 flex-col xl:flex-row">
          <SideLayout>
            <div className="md:space-y-12 space-y-5 md:w-[558px] md:mt-8 mt-5 overflow-hidden mb-15 px-4">
              {GroupDevelopment.map((item, index) => (
                <Remark
                  delay={item.delay}
                  text={item.text}
                  title={item.title}
                  key={index}
                />
              ))}
            </div>
          </SideLayout>
          <div className="">
            <img
              src="/HomeImg/Image.png"
              alt=""
              className="xl:h-[770px] object-cover pt-5"
            />
          </div>
        </Flex>
      </div>
    </>
  );
};

export default Program;
