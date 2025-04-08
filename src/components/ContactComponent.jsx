import React from "react";
const ContactCard = ({ icon, title, content, titleColor, contentColor }) => {
  return (
    <div className="flex space-x-2">
      <div className="flex items-center space-x-3">
        <div className=" lg:p-5 p-3 bg-color-20 rounded-full flex items-center justify-center">
          {icon}
        </div>
        <div>
          <p className={`text-lg ${titleColor} lg:text-2xl`}>{title}</p>
          <p className={`${contentColor} `}>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
