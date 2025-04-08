import React from "react";

import HeaderT from "../../shared/HeaderT";
import Button from "../../shared/Button";
import { cn } from "../../utils";

const ContactDetailCard = ({ className, icon, title, num, btnName }) => {
  return (
    <>
      <div
        className={cn(
          "bg-red w-fit flex flex-col justify-center items-center xl:px-10 lg:px-4 px-10 py-12 space-y-4",
          className
        )}>
        <div className="text-5xl text-blue">{icon}</div>
        <HeaderT className="lg:text-2xl">{title}</HeaderT>
        <p className="text-white xl:text-3xl lg:text-2xl text-2xl">{num}</p>
        <Button className="bg-blue text-white">{btnName}</Button>
      </div>
    </>
  );
};

export default ContactDetailCard;
