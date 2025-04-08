import React from "react";
import { BusinessCardData } from "../constants";
import { motion, useAnimation, useInView } from "framer-motion";
import { fadeUp } from "../animations";

const BusinessCard = () => {
  const containerRef = React.useRef();
  const inView = useInView(containerRef);
  const aniControl = useAnimation();

  React.useEffect(() => {
    inView ? aniControl.start("visible") : aniControl.start("hidden");
  }, [inView, aniControl]);
  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 xl:mt-20 mt-10 px-5 pb-10">
      {BusinessCardData.map((item, index) => (
        <motion.div
          variants={fadeUp(item.delay)}
          initial="hidden"
          whileInView="show"
          key={index}>
          <div className="bg-white text-blue transition-all duration-300 group p-4  shadow-md">
            <div className="overflow-hidden  w-full  flex justify-center items-center">
              <img
                src={item.Businessimg}
                alt="Card Image"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Text Section */}
            <p className="xl:text-[20px] text-xl font-bold text-center  py-3">
              {item.Businesstitle}
            </p>

            <div className="text-center transition-all duration-300 group-hover:text-red group-hover:font-bold">
              <a href="#">
                <p className=" pb-3 xl:text-lg"> {item.text} </p>
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BusinessCard;
