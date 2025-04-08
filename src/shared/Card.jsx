import React from "react";
import { cn } from "../utils";
import Flex from "./Flex";

const Card = ({ img, title, text, className, ...props }) => {
  return (
    <>
      <Flex
        className={cn("bg-secondary flex-col py-8  ", className)}
        {...props}>
        <img src={img} alt={title} className="mb-2 rounded-full object-cover" />
        <p className="pt-2">{title}</p>
        <p className="text-sm text-gray-600 py-2">{text}</p>
      </Flex>
    </>
  );
};

export default Card;
