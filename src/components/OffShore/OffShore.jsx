import React from "react";
import Banner from "../Banner";
import Solution from "../OutsourcingService/Solution";
import HeaderT from "../../shared/HeaderT";
import SeconaryText from "../../shared/SeconaryText";
import Text from "../../shared/Text";

const OffShore = () => {
  return (
    <>
      <Banner
        img="/offShoreImg/Background.png"
        text="Offshore System Development"
      />
      <Solution img="/offShoreImg/Image.png">
        <div className="lg:mx-20 xl:mx-30 px-4">
          <Text className="lg:w-full py-10">
            We provide cost-effective offshore system development, delivering
            high-quality solutions specifically designed for the Japanese
            market. Leveraging a skilled and dedicated workforce, we help
            businesses achieve efficiency and significant cost savings without
            compromising on quality.
          </Text>

          <div>
            <HeaderT className="xl:text-5xl">
              Offshore System Development
            </HeaderT>
            <SeconaryText className="my-8">
              At ACE JAPAN, we have crafted a collaborative offshore development
              model designed to seamlessly integrate customer requirements with
              expert execution.
            </SeconaryText>
          </div>
          <div className="space-y-4">
            <div>
              <HeaderT className="lg:text-xl ">
                Requirement Analysis and Design
              </HeaderT>
              <SeconaryText>
                Our customer-resident staff in Japan(BSE) work closely with
                clients to gather and define system requirements. They create
                detailed designs in Japanese to ensure clear communication and
                precise alignment with project goals
              </SeconaryText>
              <HeaderT className="lg:text-xl">Coding and Testing</HeaderT>
              <SeconaryText>
                Once the detailed designs are finalized, our highly skilled
                offshore team takes over the coding and testing phases. Located
                in a cost-effective environment our team ensures high-quality,
                reliable results.
              </SeconaryText>
              <HeaderT className="lg:text-xl">Collaboration</HeaderT>
              <SeconaryText>
                Through constant communication and coordination between our
                Japanese-based staff (BSE) and the offshore team, we deliver
                efficient, tailored solutions.
              </SeconaryText>
              <SeconaryText className="pt-4">
                Our approach has been successfully implemented across various
                sectors, including:
                <ul className="list-disc pl-6">
                  <li>Banking</li>
                  <li>Insurance</li>
                  <li>TeleCommunications</li>
                </ul>
                By bridging cultural and technical expertise. ACE Japan ensures
                that every project not only meets but exceeds client
                expectations, providing superior outcomes with cost and quality
                advantages.
              </SeconaryText>
            </div>
          </div>
          <div className="my-8">
            <HeaderT className="lg:text-xl ">
              Benefits of Offshore System Development
            </HeaderT>
            <div>
              <SeconaryText>
                At ACE JAPAN, our offshore development model is designed to
                deliver maximum value by combining cost efficiency, high-quality
                standards, and seamless collaboration. Here’s how yours business
                can benefit:
              </SeconaryText>
            </div>
            <HeaderT className="xl:text-xl mt-3">Cost Efficiency</HeaderT>
            <SeconaryText>
              offshore is to take advantage of lower labor costs in regions with
              a large pool of affordable skilled workers. This can result in
              significant savings, particularly for large-scale IT projects.
            </SeconaryText>

            <HeaderT className="xl:text-xl mt-3">
              Scalability & Flexibility
            </HeaderT>
            <SeconaryText>
              offshore is to take advantage of lower labor costs in regions with
              a large pool of affordable skilled workers. This can result in
              significant savings, particularly for large-scale IT projects.
            </SeconaryText>

            <HeaderT className="xl:text-xl mt-3">
              Offshore System Development
            </HeaderT>
            <SeconaryText>
              offshore is to take advantage of lower labor costs in regions with
              a large pool of affordable skilled workers. This can result in
              significant savings, particularly for large-scale IT projects.
            </SeconaryText>
          </div>
          <div className="my-10">
            <HeaderT className="xl:text-2xl">
              Benefits of our Offshore Development Approach
            </HeaderT>
            <SeconaryText className="pt-4">
              At ACE Japan, our offshore development model is designed to
              deliver maximum value by combining cost efficiency, high-quality
              standards, and seamless collaboration. Here’s how yours business
              can benefit:
              <ul className="list-disc pl-6 font-bold">
                <li>24/7 Productivity</li>
              </ul>
              Continuous progress with teams in different time zones ensures
              faster project completion.
              <ul className="list-disc pl-6 font-bold">
                <li>Flexibility</li>
              </ul>
              Adjust resources as needed to align with your project timeline and
              budget.
              <ul className="list-disc pl-6 font-bold">
                <li>Global Expansion</li>
              </ul>
              Gain a competitive edge with scalable, cost-effectives solutions
              that support your business growth.
            </SeconaryText>
          </div>
        </div>
      </Solution>
      <div className="mx-auto cusContainer my-10 px-4">
        <img src="/outsourceImg/OffShore.png" alt="" className="pt-5 " />
      </div>
    </>
  );
};

export default OffShore;
