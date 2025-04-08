import React from "react";
import FocusIcon from "../../shared/FocusIcon";
import HeaderT from "../../shared/HeaderT";
import { DirectorsContent } from "../../constants";
import Card from "../../shared/Card";
import Grid from "../../shared/Grid";
import Text from "../../shared/Text";
import { motion } from "framer-motion";
import { fadeUp } from "../../animations";

const Directors = () => {
  return (
    <>
      <div className="md:mt-14 mt-20 px-2">
        <div className="flex flex-col justify-center items-center">
          <FocusIcon text="Our Team" className="bg-seconary" />
          <HeaderT className="py-2">Meet Our Experts</HeaderT>
          <Text className="text-center xl:w-[680px]">
            Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
            facilisi. In sed pretium metus. Proin pretium id urna sit amet
            tincidunt.
          </Text>
        </div>
        <div className="px-15 mt-10 mb-30 ">
          <Grid className="gap-6 md:grid-cols-2">
            {DirectorsContent.map((content, id) => (
              <motion.div
                variants={fadeUp(id * 0.2)}
                initial="hidden"
                whileInView="show"
                key={id}>
                <Card
                  img={content.img}
                  text={content.text}
                  title={content.name}
                  className="border border-gray-300
                 px-5 pb-2 text-blue font-bold hover:scale-110 transition-all duration-200 cursor-pointer"></Card>
              </motion.div>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Directors;
