import React from "react";
import Banner from "../Banner";
import Text from "../../shared/Text";
import HeaderT from "../../shared/HeaderT";
import SeconaryText from "../../shared/SeconaryText";
import Solution from "../OutsourcingService/Solution";

const NearShore = () => {
  return (
    <>
      <Banner
        img="/nearShoreImg/Background.png"
        text="Nearshore System Development"
      />
      <Solution img="/nearShoreImg/Image.png">
        <div className="lg:mx-20 xl:mx-30">
          <Text className="lg:w-full py-10">
            ACE Japan is on the process of establishing specialized nearshore
            development services to provide . Japanese businesses with a perfect
            blend of quality, security, and cost-effectiveness. These services
            are designed to offer seamless collaboration and superior results
            while prioritizing client needs and industry standards.
          </Text>

          <div className="px-4">
            <HeaderT className="xl:text-5xl">
              A perfect blend of Quality, Security and Cost Effectiveness
            </HeaderT>
            <SeconaryText className="my-8">
              ACEJapan is in the process of establishing specialized nearshore
              development services to provide Japanese businesses with a perfect
              blend of quality, security and cost-effectiveness. These services
              are designed to offer seamless collaboration and superior results
              while prioriz
            </SeconaryText>
          </div>
          <div className="space-y-4 xl:w-[500px] px-4">
            <div>
              <HeaderT className="lg:text-xl ">
                Tailored Talent Solutions
              </HeaderT>
              <SeconaryText>
                We provide customized workforce solutions to match your business
                needs.
              </SeconaryText>
            </div>
            <div>
              <HeaderT className="lg:text-xl">
                Scalable & Cost-Effective
              </HeaderT>
              <SeconaryText>
                Reduce recruitment costs while maintaining high-quality talent.
              </SeconaryText>
            </div>
            <div>
              <HeaderT className="lg:text-xl">
                Industry-Specific Expertise
              </HeaderT>
              <SeconaryText>
                Our professionals bring specialized skills for various
                industries.
              </SeconaryText>
            </div>
            <div>
              <HeaderT className="lg:text-xl">
                Cost Reduction with Seamless Integration
              </HeaderT>
              <SeconaryText>
                Quick and efficient onboarding for smooth team collaboration.
              </SeconaryText>
            </div>
          </div>
          <div className="my-10 px-4">
            <HeaderT className="xl:text-2xl">
              Strategic Outsourcing Solutions
            </HeaderT>
            <SeconaryText className="pt-4 sm:text-justify">
              Our outsourcing service model is designed to provide businesses
              with skilled professionals, ensuring operational efficiency and
              cost savings. We specialize in delivering workforce solutions
              across various industries, including IT, finance, customer
              service, and administrative support. At the initial stage, we
              collaborate closely with clients to assess their specific
              workforce requirements. We identify the right talent and customize
              outsourcing solutions to align with business objectives. This
              ensures seamless integration with existing teams and processes.
              Once the outsourcing plan is finalized, our dedicated teams handle
              recruitment, training, and ongoing management. We ensure
              high-quality service delivery while maintaining continuous
              communication with clients. Our structured approach guarantees
              flexibility, scalability, and consistent performance, helping
              businesses stay competitive in a dynamic market. Quick and
              efficient onboarding for smooth team collaboration.
            </SeconaryText>
          </div>
        </div>
      </Solution>
      <div className="mx-auto cusContainer my-10 px-4">
        <img src="/outsourceImg/NearShore.png" alt="" className="pt-5" />
      </div>
    </>
  );
};

export default NearShore;
