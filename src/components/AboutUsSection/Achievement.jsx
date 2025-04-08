import React from "react";
import SideLayout from "../../shared/SideLayout";
import MiniHeader from "../../shared/MiniHeader";
import HeaderT from "../../shared/HeaderT";
import { motion } from "framer-motion";
import Remark from "../Remark";
import Timeline from "../TimeLine";
import { fadeInFR } from "../../animations";
import SeconaryText from "../../shared/SeconaryText";
import { Experience } from "../../constants";

const Achievement = () => {
  return (
    <>
      <div className="bg-seconary w-full mt-24 px-4">
        <div className="flex  flex-col justify-center items-center xl:flex-row md:flex-col  xl:space-x-10">
          <SideLayout className="md:w-full md:ml-0 md:mt-4 mt-5">
            <MiniHeader image="miniLogo.svg" className="bg-white">
              Welcome To ACE Japan
            </MiniHeader>
            <HeaderT className="py-3 xl:text-5xl lg:text-3xl">
              ACE Japan Achievements
            </HeaderT>
            <motion.p
              variants={fadeInFR(0.3)}
              initial="hidden"
              whileInView="show"
              className="pb-3">
              <SeconaryText>
                The ACE Group has been operating offshore development centers
                for the Japanese market since 1998, establishing a relationship
                with Japan for over 25 years.
              </SeconaryText>
            </motion.p>
            <motion.p
              variants={fadeInFR(0.3)}
              initial="hidden"
              whileInView="show"
              className="pb-3">
              <SeconaryText>
                Furthermore, as demonstrated by our joint ventures with Japanese
                companies, ACE Group has strong ties with Japanese enterprises.
                Against this background, we established ACE Japan in 2014 as our
                operational base in Japan.
              </SeconaryText>
            </motion.p>
            <motion.p
              variants={fadeInFR(0.3)}
              initial="hidden"
              whileInView="show"
              className="pb-3">
              <SeconaryText>
                Currently, ACE Japan focuses on engineer dispatch services
                within Japan and offshore development at South East Asia. Moving
                forward, in line with our international expansion, we plan to
                establish a nearshore development center in Japan to further
                expand our business operations in Japan.
              </SeconaryText>
            </motion.p>
            <SeconaryText>
              {Experience.slice(0, 1).map((item, index) => (
                <Remark
                  key={index}
                  delay={item.delay}
                  text={item.text}
                  title={item.title}
                  className="py-3 mb-10"
                />
              ))}
            </SeconaryText>
          </SideLayout>

          {/* right side */}
          <div className="overflow-x-hidden">
            <div className="xl:w-[577px] mt-24">
              <Timeline />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievement;
