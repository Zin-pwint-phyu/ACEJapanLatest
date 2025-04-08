import HeaderT from "../../shared/HeaderT";
import SeconaryText from "../../shared/SeconaryText";
import { techSkills } from "../../constants";
import Banner from "../Banner";
import {
  FaArrowLeft,
  FaArrowRight,
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Button from "../../shared/Button";
import { useNavigate } from "react-router-dom";
const skills = [
  "Project Management",
  "Copywriting",
  "Social Media Marketing",
  "English",
  "Copy Editing",
];
const userApplication = ["Full Name", "Email", "Contact Number"];
const Application = () => {
  const navigate = useNavigate();
  return (
    <>
      <Banner text="Recruit" img="/RecruitImg/Img1.jpg" />
      <div className="px-5 md:px-15 xl:px-0 container mx-auto my-8 md:my-12 xl:my-16">
        <div className="flex flex-col-reverse justify-between lg:flex-row lg:gap-8 xl:gap-16">
          <div className="my-8 flex flex-col lg:basis-[40%]">
            <div className="border border-gray-300 p-6 rounded-md lg:p-10">
              <HeaderT>Reference</HeaderT>
              <HeaderT className="font-normal">#FDMAN2038-234</HeaderT>
            </div>
            <div className="mt-5 flex flex-col gap-4">
              <HeaderT className="xl:text-3xl">Tech Stack</HeaderT>
              <SeconaryText>
                Learn about the technology and tools that Stripe uses.
              </SeconaryText>
              <div className="border-b-2 border-gray-200 sm:w-[50%] md:w-[50%] lg:w-full xl:w-[80%] lg:pb-10">
                <div className="flex flex-wrap gap-4 lg:gap-8">
                  {techSkills.map((techSkill, index) => (
                    <div
                      key={index}
                      className="w-[75px] items-center flex justify-center flex-col gap-3"
                    >
                      <img src={techSkill.img} key={index} className="" />
                      <SeconaryText className="text-dardBlue text-center">
                        {techSkill.tech}
                      </SeconaryText>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 items-center text-violet py-5">
                  <a href="" className="font-bold">
                    View Tech Stack
                  </a>
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>

          {/* left */}
          <div className="border-b-2 border-gray-200 pb-5 lg:basis-[60%]">
            <div className="">
              <HeaderT>Description</HeaderT>
              <SeconaryText className="text-black font-bold">
                Front End Developer
              </SeconaryText>
              <SeconaryText className="text-black font-bold leading-6">
                ACE Japan Co.,Ltd – Myanmar – Yangon Branch
              </SeconaryText>
              {/* paragraph */}
              <div className="mt-3 space-y-4">
                <SeconaryText className="text-blue text-base md:text-lg">
                  (Tech stack: Front End Developer, React, ReactJS 18, React
                  Hooks, React.js, Shopify platform, JavaScript, TypeScript,
                  HTML, CSS, UI, UX, User Interface, User Experience, Javascript
                  Developer, Front End Engineer, Front End Developer)
                </SeconaryText>
                <SeconaryText className="text-blue  text-base md:text-lg">
                  Our client is UK’s leading Ecommerce clothing company. They
                  are looking for a Front End Developer with experience in React
                  and Shopify platform. You will be responsible for
                  predominantly implementing new Figma designs and functionality
                  to the Shopify store, through fluent, maintainable code. You
                  will work alongside designers within the creative team, and
                  other senior members on multiple technical projects.
                </SeconaryText>
                <SeconaryText className="text-blue  text-base md:text-lg">
                  My client is looking for Front End Developers who has current
                  and relevant experience working with React and Shopify
                  platform. You will be building new pages, features and
                  functionality on the Ecommerce site. You will also discover
                  and debug issues and ensure the consistent quality and UX
                  across all devices and browsers.
                </SeconaryText>
                <SeconaryText className="text-blue  text-base md:text-lg">
                  Our client is looking for passionate Front End Developers with
                  experience in some or all of the following (full training will
                  be provided to fill any gaps in your skill set): React,
                  ReactJS 18, React Hooks, React.js, Shopify platform,
                  JavaScript, TypeScript, HTML, CSS, GIT, API’s, UI, UX, User
                  Interface, User Experience.
                </SeconaryText>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="lg:flex my-10 space-y-5 md:space-y-0 lg:gap-8 xl:gap-16">
          <div className="lg:basis-[40%] lg:-mt-30 xl:mt-0">
            <HeaderT>Required Skills</HeaderT>
            <div className="flex flex-wrap gap-3 mt-2">
              {skills.map((skill, index) => (
                <div
                  className="bg-violet/5 text-violet py-2 px-3 text-nowrap"
                  key={index}
                >
                  {skill}
                </div>
              ))}
            </div>
            <div>
              <HeaderT className="mt-5">Contact</HeaderT>
              <div className="flex flex-wrap gap-2 mt-3">
                <div className="text-violet border border-violet flex  items-center px-3 py-2 gap-3">
                  <FaTwitter />
                  <a href="">twitter.com/stripe</a>
                </div>
                <div className="text-violet border border-violet flex  items-center px-3 py-2 gap-3">
                  <FaFacebookF />
                  <a href="">facebook.com/StripeHQ</a>
                </div>
                <div className="text-violet border border-violet flex  items-center px-3 py-2 gap-3">
                  <FaLinkedin />
                  <a href="">linkedin.com/company/stripe</a>
                </div>
              </div>
            </div>
            <Button className="bg-dardBlue mt-10 flex items-center gap-2" onClick={() => navigate(-1)}>
              <FaArrowLeft />
              <span>Back</span>
            </Button>
          </div>

          <div className="lg:basis-[60%]">
            <HeaderT className="">Apply for this role</HeaderT>
            <div className="space-y-4 mt-3">
              {userApplication.map((name, index) => (
                <div className="" key={index}>
                  <label htmlFor="">{name}</label>
                  <input
                    type="text"
                    className="border border-gray-200 px-3 py-4 w-full rounded-md mt-2"
                  />
                </div>
              ))}
              <div className="flex flex-col space-y-3">
                <label htmlFor="">Cover Letter</label>
                <textarea
                  rows={4}
                  cols={10}
                  className="border border-gray-200 px-3 py-4 w-full rounded-md mt-1"
                ></textarea>
              </div>
              <Button className="flex justify-between gap-4 items-center mt-5">
                <span>Send Application</span>
                <FaArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Application;
