import React from "react";
import HeaderT from "../../shared/HeaderT";
import SeconaryText from "../../shared/SeconaryText";

const About = () => {
  return (
    <>
      <div className="py-5 cusContainer mx-auto overflow-y-hidden">
        <div className="px-4">
          <HeaderT className="xl:text-5xl md:text-3xl my-4">About Us</HeaderT>
          <SeconaryText className="text-justify">
            Established in 2014, ACE Japan is a leading provider of IT
            solutions, specializing in system development and business support
            services. As part of the ACE Data Systems Group, we are committed to
            delivering high-quality and cost-effective solutions tailored to the
            needs of the Japanese market.
          </SeconaryText>
          <SeconaryText className="pt-4">
            <ul className="list-disc pl-6">
              <li>
                1. Engineer Dispatch (dispatch business license number:
                <span className="font-bold"> 派14-302693 </span>)
              </li>
              <li className="pt-3">
                2. Recruitment Services (Employment placement business license
                number:
                <span className="font-bold">14-ユ-301418 </span>)
              </li>
            </ul>
          </SeconaryText>
          <SeconaryText className="pt-4">
            With over 10 years of experience, our services extend across
            Southeast Asia, including Singapore, Thailand, Cambodia, and
            Myanmar. We focus on system development, operational support and IT
            consulting, ensuring seamless integration and quality control for
            our clients.
          </SeconaryText>
          <SeconaryText className="pt-4">
            Our expertise also includes post-editing systems and local
            operational support in Japan, enabling businesses to optimize their
            processes and achieve long-term success. At ACE Japan, we are
            committed to innovation, quality and customer satisfaction ensuring
            that our solutions drive business excellence.
          </SeconaryText>
        </div>
      </div>
    </>
  );
};

export default About;
