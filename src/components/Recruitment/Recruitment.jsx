import React from "react";
import Banner from "../Banner";
import Solution from "../OutsourcingService/Solution";
import HeaderT from "../../shared/HeaderT";
import SeconaryText from "../../shared/SeconaryText";
import Text from "../../shared/Text";

const Recruitment = () => {
  return (
    <>
      <Banner
        img="/RecruitmentImg/Background.png"
        text="Recruitment Services"
      />
      <Solution img="/RecruitmentImg/image 53.png">
        <div className="lg:mx-20 xl:mx-30">
          <Text className="lg:w-full py-10">
            We understand the importance of having the fight talent to drive
            business success.Our HR outsourcing services provide businesses with
            highly skilled professionals, ensuring flexibility and quality in
            meeting your workforce needs.
          </Text>

          <div className="px-4">
            <HeaderT className="xl:text-5xl">
              Efficient & Flexible Workforce Solutions
            </HeaderT>
            <SeconaryText className="my-8">
              Finding the right talent is crucial for business success. Our HR
              outsourcing services connect businesses with highly skilled
              professionals, ensuring flexibility and quality to meet workforce
              demands.
            </SeconaryText>
          </div>
          <div className="my-8 px-4">
            <div>
              <HeaderT className="lg:text-xl">
                Tailored Talent Solutions
              </HeaderT>
              <SeconaryText>
                We provide customized workforce solutions to match your business
                needs.
              </SeconaryText>
            </div>
            <div className="my-8">
              <HeaderT className="lg:text-xl">
                Scalable & Cost-Effective
              </HeaderT>
              <SeconaryText>
                Reduce recruitment costs while maintaining high-quality talent.
              </SeconaryText>
            </div>
            <div className="my-8">
              <HeaderT className="lg:text-xl">
                Industry-Specific Expertise
              </HeaderT>
              <SeconaryText>
                Our professionals bring specialized skills for various
                industries.
              </SeconaryText>
            </div>
            <div className="my-8">
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
              businesses stay competitive in a dynamic market.
            </SeconaryText>
          </div>
        </div>
      </Solution>
      <img src="/RecruitmentImg/Frame 18.png" alt="" className="pt-5" />
    </>
  );
};

export default Recruitment;
