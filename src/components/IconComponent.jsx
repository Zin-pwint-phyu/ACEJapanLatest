import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../animations";
import { Link } from "react-router-dom";
const IconComponent = ({ icon: Icon, delay, to }) => {
  return (
    <Link to={to}>
      <motion.div
        variants={fadeUp(delay)}
        initial="hidden"
        whileInView="show"
        className="bg-white/10 p-2 rounded-full flex justify-center items-center hover:bg-white/20 transition-colors cursor-pointer">
        <Icon className="text-white text-2xl" />
      </motion.div>
    </Link>
  );
};

export default IconComponent;
