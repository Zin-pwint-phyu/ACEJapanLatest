import React from "react";
import HeaderT from "../../shared/HeaderT";
import Container from "../../shared/Container";
import SeconaryText from "../../shared/SeconaryText";
import { FaArrowRight } from "react-icons/fa";

const RecruitCard = ({ text1, text2, text3, text4, text5, text6, onClick }) => {
  return (
    <div className="mx-10">
      <div
        className="flex flex-wrap relative cusContainer mx-auto px-4 justify-between xl:space-x-10 lg:space-x-0 items-center border border-gray-400 w-full my-10 py-5 cursor-pointer"
        onClick={() => {
          onClick();
        }}>
        <div className="space-y-3">
          <SeconaryText>{text1}</SeconaryText>
          <HeaderT className="xl:text-[40px]">{text2}</HeaderT>
          <HeaderT className="font-normal">{text3}</HeaderT>
          <HeaderT className="font-normal">{text4}</HeaderT>
        </div>

        {/* Right Section */}
        <div className="w-[613px] mt-5">
          <SeconaryText className="text-blue">{text5}</SeconaryText>
          <SeconaryText className="text-blue pt-5">{text6}</SeconaryText>
          {/* Arrow Button */}
          <div className="absolute bottom-0 right-0 bg-red w-fit p-4 text-white flex justify-center items-center">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitCard;
