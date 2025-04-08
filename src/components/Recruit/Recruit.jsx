import React from "react";
import Banner from "../Banner";
import RecruitCard from "./RecruitCard";
import { useNavigate } from "react-router-dom";

const Recruit = () => {
  const navigate = useNavigate();
  return (
    <>
      <Banner text="Recruit" img="/RecruitImg/Img1.jpg" />
      <RecruitCard
        text1="Job Ref: #FDMAN2038-234"
        text2="Frontend Developer"
        text3="Yangon, MM"
        text4="Negotiation"
        text5="Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis. Mi at fermentum imperdiet velit magna a aliquam. Faucibus et quam ac elit placerat tristique vulputate. Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis. 

"
        text6=" 

Mi at fermentum imperdiet velit magna a aliquam. Faucibus et quam ac elit placerat tristique vulputate"
        onClick={() => navigate("/application")}
      />
      <RecruitCard
        text1="Job Ref: #FDMAN2038-234"
        text2="Backend Developer"
        text3="Yangon, MM"
        text4="Negotiation"
        text5="Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis. Mi at fermentum imperdiet velit magna a aliquam. Faucibus et quam ac elit placerat tristique vulputate. Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis. 

"
        text6=" 

Mi at fermentum imperdiet velit magna a aliquam. Faucibus et quam ac elit placerat tristique vulputate"
        onClick={() => navigate("/application")}
      />
      <RecruitCard
        text1="Job Ref: #FDMAN2038-234"
        text2="Senior Software Engineer"
        text3="Yangon, MM"
        text4="Negotiation"
        text5="Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis. Mi at fermentum imperdiet velit magna a aliquam. Faucibus et quam ac elit placerat tristique vulputate. Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis. 

"
        text6=" 

Mi at fermentum imperdiet velit magna a aliquam. Faucibus et quam ac elit placerat tristique vulputate"
        onClick={() => navigate("/application")}
      />
      <RecruitCard
        text1="Job Ref: #FDMAN2038-234"
        text2="Software Engineer"
        text3="Yangon, MM"
        text4="Negotiation"
        text5="Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis. Mi at fermentum imperdiet velit magna a aliquam. Faucibus et quam ac elit placerat tristique vulputate. Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis. 

"
        text6=" 

Mi at fermentum imperdiet velit magna a aliquam. Faucibus et quam ac elit placerat tristique vulputate"
        onClick={() => navigate("/application")}
      />
    </>
  );
};

export default Recruit;
