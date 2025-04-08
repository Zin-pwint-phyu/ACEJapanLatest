import React from "react";
import HeaderT from "../../shared/HeaderT";
import Container from "../../shared/Container";
import AboutUs from "./AboutUs";
import Banner from "../Banner";

const MoreAboutUs = () => {
  return (
    <>
      <Banner text="About Us" />
      <Container className=" mx-auto xl:flex mt-30 justify-between flex-wrap md:gap-8">
        <div className=" bg-seconary h-auto xl:w-[345px] ">
          <div className=" divide-y-1 divide-gray-500 py-[48px] px-[30px] space-y-10">
            <div>
              <HeaderT className="xl:text-[20px] pb-4 font-extrabold ">
                Company Overview
              </HeaderT>
              <div className="w-[50px] h-1 bg-red"></div>
            </div>
            <div>
              <HeaderT className="xl:text-lg">Company Name :</HeaderT>
              <p className="pt-3 pb-2 text-gray font-bold text-lg">
                ACEJapan Co.,ltd.
              </p>
            </div>
            <div>
              <HeaderT className="xl:text-lg">Headquarter Location :</HeaderT>
              <p className="pt-3 pb-2 text-gray font-bold text-lg">
                28-2-617 Yamashita-cho, Naka-ku, Yokohama, Kanagawa Prefecture
                Postal Code: 231-0023
              </p>
            </div>
            <div>
              <HeaderT className="xl:text-lg">Directors :</HeaderT>
              <p className="pt-3 pb-2 text-gray font-bold text-lg">
                President: Mr.Hisayuki Kimata Vice President: Mr.Htun Taul Zaw
                Director: Mr.Zaw Moe Thant Director: Mr.Myo Lin Soe
              </p>
            </div>
          </div>
        </div>
        {/* left side */}
        <div>
          <img
            src="/moreAboutImg/Picture1 1.png"
            alt=""
            className=" w-full object-cover object-center h-full  "
          />
        </div>
      </Container>

      {/* About us */}
      <AboutUs />
    </>
  );
};

export default MoreAboutUs;
