import React from "react";
import Container from "../../shared/Container";
import MiniHeader from "../../shared/MiniHeader";
import HeaderT from "../../shared/HeaderT";
import Flex from "../../shared/Flex";
import MarkText from "../../shared/MarkText";
import SideLayout from "../../shared/SideLayout";
import { motion } from "framer-motion";
import { fadeInFR, fadeUp } from "../../animations";
import SeconaryText from "../../shared/SeconaryText";
const services = [
  "Qualify Engineers",
  "Latest Technology",
  "Quality Control",
  "Over 10 Years Experience",
];

const Quality = () => {
  return (
    <>
      <div className=" mt-20 md:px-15 h-auto  mx-auto px-4">
        <Flex className="2xl:space-x-14 gap-4">
          <SideLayout className="pb-50">
            <MiniHeader image="miniLogo.svg" classNameImg="md:w-fit">
              Welcome to ACE Japan
            </MiniHeader>
            <HeaderT className="xl:text-5xl md:text-3xl my-4">
              We’re Commited to Quality
            </HeaderT>
            <SeconaryText>
              <motion.p
                variants={fadeUp(0.4)}
                initial="hidden"
                whileInView="show"
                className="text-gray py-5">
                With expertise in Outsourcing Services, Recruitment Services,
                System Operating & Maintenance Services, Nearshore System
                Development and Offshore System Development. ACE Japan provides
                comprehensive IT and business solutions tailored to the need of
                our clients.
              </motion.p>
              <div className="grid md:grid-cols-2 grid-cols-1  gap-3 py-8">
                {services.map((text, index) => (
                  <MarkText key={index}>
                    <p>{text}</p>
                  </MarkText>
                ))}
              </div>
            </SeconaryText>
          </SideLayout>

          {/* left side */}
          <div className="xl:block hidden pb-10">
            <img src="/AboutUsPageImg/quality.png" alt="" />
          </div>
        </Flex>
      </div>
    </>
  );
};

export default Quality;
