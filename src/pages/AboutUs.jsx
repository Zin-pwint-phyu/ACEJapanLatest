import React from "react";
import Banner from "../components/Banner";
import Quality from "../components/AboutUsSection/Quality";
import Establishment from "../components/AboutUsSection/Establishment";
import Achievement from "../components/AboutUsSection/Achievement";
import Directors from "../components/AboutUsSection/Directors";
import About from "../components/AboutUsSection/About";

const AboutUs = () => {
  return (
    <>
      <Banner img="/AboutUsPageImg/Background.png" text="About Us" />
      {/* <Timeline /> */}
      {/* Qulity */}
      <Quality />
      {/* Establish */}
      <Establishment />
      {/* About Us */}
      <About/>
      {/* Achievement */}
      <Achievement />
      {/* Director */}
      {/* <Directors /> */}
    </>
  );
};

export default AboutUs;
