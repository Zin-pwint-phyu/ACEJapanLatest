import React from "react";
import FutureSection from "../components/HomeSection/FutureSection";
import Service from "../components/HomeSection/Service";
import About from "../components/HomeSection/About";
import Business from "../components/HomeSection/Business";
import PartnerShip from "../components/HomeSection/PartnerShip";
import Program from "../components/HomeSection/Program";
import HeroSection from "../components/HomeSection/HeroSection";

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <HeroSection />
      {/* Future Section */}
      <FutureSection />
      {/* Service */}
      <Service />
      {/* About Section */}
      <About />
      {/* Partners Section */}
      <PartnerShip />
      {/* Business Section */}
      <Business />
      {/* Program & training Section */}
      <Program />
    </>
  );
};

export default Home;
