import React from "react";
import Container from "../../shared/Container";
import HeaderT from "../../shared/HeaderT";
import Text from "../../shared/Text";

const AboutUs = () => {
  return (
    <>
      <Container className="w-full pb-60 pt-20">
        <HeaderT className="xl:text-4xl py-4">About Us</HeaderT>
        <Text className="xl:w-full px-0 font-semibold mt-4 pb-4">
          Established in 2014, ACE Japan is a leading provider of IT solutions,
          specializing in system development and business support services. As
          part of the ACE Data Systems Group, we are committed to delivering
          high-quality and cost-effective solutions tailored to the needs of the
          Japanese market.
        </Text>
        <div>
          <ul className="list-disc text-gray pl-4 space-y-3">
            <li>
              <Text className="px-0 font-semibold xl:w-full">
                1. Software Development & System Inteegrations
              </Text>
            </li>
            <li>
              <Text className="px-0 font-semibold xl:w-full">
                2. Outsourcing Services
              </Text>
            </li>
            <li>
              <Text className="px-0 font-semibold xl:w-full">
                3. Engineer Dispatch (dispatch business license
                number:14-302693)
              </Text>
            </li>
            <li>
              <Text className="px-0 font-semibold xl:w-full">
                4. Recruitment Services (Employment placement business license
                number:14-U-301418)
              </Text>
            </li>
          </ul>
        </div>
        <Text className="px-0 font-semibold xl:w-full py-4">
          With over 10 years of experience, our services extend across Southeast
          Asia, including Singapore, Thailand, Cambodia, and Myanmar. We focus
          on system development, operational support and IT consulting, ensuring
          seamless integration and quality control for our clients.
        </Text>
        <Text className="px-0 font-semibold xl:w-full pt-2">
          Our expertise also includes post-editing systems and local operational
          support in Japan, enabling businesses to optimize their processes and
          achieve long-term success. At ACE Japan, we are committed to
          innovation, quality and customer satisfaction ensuring that our
          solutions drive business excellence.
        </Text>
      </Container>
    </>
  );
};

export default AboutUs;
