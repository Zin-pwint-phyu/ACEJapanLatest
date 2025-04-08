import React from "react";
import Card from "../../shared/Card";
import Grid from "../../shared/Grid";
import { motion } from "framer-motion";
import { fadeUp } from "../../animations";
const EstablishCategories = [
  {
    img: "/AboutUsPageImg/Vector (1).svg",
    title: "JAN 2014",
    text: "Establishment",
    delay: 0.2,
  },
  {
    img: "/AboutUsPageImg/Vector (2).svg",
    title: "45M Yen",
    text: "Establishment",
    delay: 0.3,
  },
  {
    img: "/AboutUsPageImg/Vector (3).svg",
    title: "1200+",
    text: "Group Human Resource",
    delay: 0.4,
  },
  {
    img: "/AboutUsPageImg/Vector (4).svg",
    title: "29",
    text: "Group Company",
    delay: 0.5,
  },
];
const Establishment = () => {
  return (
    <>
      <div className="py-5 overflow-y-hidden cusContainer mx-auto px-4">
        <Grid className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {EstablishCategories.map((item, index) => (
            <motion.div
              variants={fadeUp(item.delay)}
              initial="hidden"
              whileInView="show"
              key={index}>
              <Card
                img={item.img}
                title={item.title}
                text={item.text}
                className=" text-blue 2xl:text-4xl font-bold lg:text-3xl md:text-2xl bg-seconary space-y-2 hover:scale-105 transition-all duration-200 cursor-pointer"
              />
            </motion.div>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Establishment;
