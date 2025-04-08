import React from "react";
import Banner from "../components/Banner";
import ContactDetails from "../components/ContactSection/ContactDetails";
import GetInTouch from "../components/ContactSection/GetInTouch";

const ContactUs = () => {
  return (
    <>
      <Banner img="/ContactUsImg/Image.jpg" text="Contact Us" />
      <ContactDetails />
      <GetInTouch />
    </>
  );
};

export default ContactUs;
