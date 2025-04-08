import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../animations";
import { FaArrowRightLong } from "react-icons/fa6";

const Services = [
  {
    img: "/serviceImg/Development (1).svg",
    title: "Outsourcing Services",
    text: "We understand the importance of having the right talent to drive business success. Our HR outsourcing service provide businesses with highly skilled professionals, ensuring flexibility and quality in meeting your workforce needs.",
    more: "Read More",
    delay: 0.3,
  },
  {
    img: "/serviceImg/System.svg",
    title: "Recruitment Service",
    text: "ACEJAPAN is in the process of establishing specialized nearshore development services to provide Japanese business with a perfect blend of quality, security, and cost-effectiveness. These services are designed to offer seamless collaboration and superior results while prioritizing client needs and industry standards.",
    more: "Read More",
    delay: 0.5,
  },
  {
    img: "/serviceImg/Business.svg",
    title: "System Operating & Maintenance Service",
    text: "We provide cost-effective offshore system development, delivering high-quality solutions specifically designed for the Japanese market. Leveraging a skilled and dedicated workforce, we help businesses achieve efficiency and significant cost savings without compromising on quality.",
    more: "Read More",
    delay: 0.4,
  },
  {
    img: "/serviceImg/Development (1).svg",
    title: "Nearshore System Development",
    text: "We understand the importance of having the right talent to drive business success. Our HR outsourcing service provide businesses with highly skilled professionals, ensuring flexibility and quality in meeting your workforce needs.",
    more: "Read More",
    delay: 0.6,
  },
  {
    img: "/serviceImg/System.svg",
    title: "Offshore System Development",
    text: "ACEJAPAN is in the process of establishing specialized nearshore development services to provide Japanese business with a perfect blend of quality, security, and cost-effectiveness. These services are designed to offer seamless collaboration and superior results while prioritizing client needs and industry standards.",
    more: "Read More",
    delay: 0.7,
  },
];

const ServiceCard = () => {
  return (
    <>
      <div className="flex flex-wrap gap-6 justify-center xl:p-12">
        {/* First row - 2 centered cards */}
        <div className="grid grid-cols-1 gap-12  xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 ">
          {Services.slice(0, 2).map((item, index) => (
            <motion.div
              variants={fadeUp(item.delay)}
              initial="hidden"
              whileInView="show"
              key={index}
              className="xl:w-[345px] 2xl:w-[425px]">
              <div className="bg-blue w-full hover:scale-105 cursor-pointer hover:bg-red transition-all duration-300">
                <div className="flex flex-col items-start p-6">
                  <img src={item.img} alt="" />
                  <div className="text-white text-left xl:py-4 lg:py-2 h-[240px]">
                    <p className="md:text-[30px] text-[24px] font-semibold">
                      {item.title}
                    </p>
                    <p className="pt-3 text-primary">{item.text}</p>
                  </div>
                  <a href="#" className="xl:pt-24 lg:pt-10 md:pt-3 pt-16">
                    <p className="md:text-lg text-sm text-white flex justify-center items-center gap-3">
                      {item.more}
                      <FaArrowRightLong />
                    </p>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Second row - 3 cards */}
        <div className="grid grid-cols-1 gap-12  xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 mt-10">
          {Services.slice(2).map((item, index) => (
            <motion.div
              variants={fadeUp(item.delay)}
              initial="hidden"
              whileInView="show"
              key={index + 2}
              className="xl:w-[345px] 2xl:w-[425px]">
              <div className="bg-blue w-full hover:scale-110 cursor-pointer hover:bg-red transition-all duration-300 ">
                <div className="flex flex-col items-start p-6">
                  <img src={item.img} alt="" />
                  <div className="text-white text-left xl:py-4 lg:py-2 h-[240px]">
                    <p className="md:text-[30px] text-[24px] font-semibold">
                      {item.title}
                    </p>
                    <p className="pt-3 text-primary">{item.text}</p>
                  </div>
                  <a href="#" className="xl:pt-24 lg:pt-10 md:pt-3 pt-16">
                    <p className="md:text-lg text-sm text-white flex justify-center items-center gap-3 pt-10">
                      {item.more}
                      <FaArrowRightLong />
                    </p>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
