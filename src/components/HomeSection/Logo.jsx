import React from "react";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <>
      <motion.div className="cusContainer px-4 md:px-15 xl:px-0 mx-auto md:items-center mt-5 md:flex md:justify-between flex justify-between items-center ">
        <motion.div className=" w-[180px]">
          <div className="w-full overflow-hidden">
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              src="Logo.jpg"
              alt="ACEJapan-logo"
              className=" lg:w-full h-full object-cover w-[140px]"
            />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Logo;
