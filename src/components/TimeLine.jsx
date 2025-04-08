import React from "react";
import { IoMdArrowDropleft } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeInFR, fadeUp } from "../animations";

const timelineData = [
  {
    year: "2014-2016",
    description:
      "ACE Data Systems Group supports various Japanese partners, including Daiwa Institute of Research, Taiyo Life Insurance, GMO Internet Group, Mitsuiwa Group, Gakken Holdings. We assist in establishing joint ventures such as offshore development centers and business centers, as well as launching operations in Myanmar.(Currently, over 450 engineers and specialists are working at these joint ventures, offshore development centers, and business centers.)",
  },
  {
    year: "2018-2020",
    description:
      "ACE Data Systems Group supports Japanese partners such as Scala Inc. and Nagata Holding (Nagata Advertising) in developing joint ventures",
  },
  {
    year: "2023",
    description:
      "Providing Functional Consultants, Software Engineers for Terminal Management System Projects for Major Sea Ports in Japan",
  },
];

const Timeline = () => {
  return (
    <motion.div
      variants={fadeUp(0.2)}
      initial="hidden"
      whileInView="show"
      className="relative border-l-4 border-dotted border-red ml-4">
      {timelineData.map((item, index) => (
        <div key={index} className="mb-15 ml-6 relative">
          {/* Timeline Icon */}
          {/* Timeline Icon with Inner Border */}

          <motion.div
            variants={fadeUp(0.3)}
            initial="hidden"
            whileInView="show"
            className="absolute -left-[34px] top-10 w-4 h-4 bg-white border-2 border-blue rounded-full flex items-center justify-center before:content-[''] before:w-2 before:h-2 before:bg-blue before:rounded-full"></motion.div>

          {/* Timeline Card with Angled Border */}
          <motion.div
            variants={fadeInFR(0.3)}
            initial="hidden"
            whileInView="show"
            className=" bg-white p-3 border border-gray-300">
            <div
              className="-mt-11 bg-blue
             text-white -ml-1 py-1 px-8 w-fit font-bold text-lg">
              {item.year}
            </div>

            <p className="text-gray mt-3 px-2">{item.description}</p>
            <div className="absolute top-8 left-[-21px] ">
              <div className="relative">
                <IoMdArrowDropleft className="text-4xl left-[-1px] absolute text-gray-300" />
                <IoMdArrowDropleft className="text-4xl absolute text-white " />
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

export default Timeline;
