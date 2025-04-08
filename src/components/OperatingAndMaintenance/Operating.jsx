import React from "react";
import Banner from "../Banner";
import Solution from "../OutsourcingService/Solution";
import HeaderT from "../../shared/HeaderT";
import SeconaryText from "../../shared/SeconaryText";
import Text from "../../shared/Text";

const Operating = () => {
  return (
    <>
      <Banner
        img="/OperatingImg/Background.png"
        text="Operating & Maintenance Services"
      />
      <Solution img="/OperatingImg/Image.png">
        <div className="lg:mx-20 xl:mx-30 px-4">
          <div>
            <HeaderT className="xl:text-5xl mt-8">
              Operation & Maintenance Services
            </HeaderT>
            <SeconaryText className="my-8">
              Ensure the stability and efficiency of your IT infrastructure with
              our comprehensive Operation & Maintenance Services. We provide
              proactive support and continuous monitoring to minimize downtime
              and keep your systems running smoothly. We Offer the support and
              regular maintenance services to ensure smooth and uninterrupted
              business operations.
            </SeconaryText>
          </div>

          <div className="my-10">
            <SeconaryText>Our Services Include</SeconaryText>
            <SeconaryText className="pt-4">
              System Monitoring: 24/7 surveillance to detect and resolve issues
              before they impact operations. Preventative Maintenance: Regular
              system checks and updates to ensure peak performance. Incident
              Management: Rapid response and resolution of technical issues.
              Performance Optimization: Ongoing assessment and tuning to improve
              system efficiency.
            </SeconaryText>
          </div>
        </div>
      </Solution>
      <img src="/OperatingImg/Frame 18.png" alt="" className="pt-5" />
    </>
  );
};

export default Operating;
