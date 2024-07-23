import React from "react";

const Footer = () => {
  const phoneNumber = "9458779728";
  const message =
    "Hello, I came across your portfolio and I would like to discuss potential opportunities.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <div className="flex flex-col md:flex-row gap-5 justify-center items-center md:justify-between text-center py-5 md:text-right bg-gray-800">
      <div className="flex flex-row gap-5 justify-center items-center ml-5">
        <a href="https://github.com/SiddhantAshok" target="_blank">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/color/48/github--v1.png"
            alt="github--v1"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/siddhant-ashok-091994/"
          target="_blank"
        >
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/color/48/linkedin.png"
            alt="linkedin"
          />
        </a>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/color/48/000000/apple-phone.png"
            alt="apple-phone"
          />
        </a>
      </div>
      <p className="text-gray-50 text-xs md:mr-2 font-bold">
        {" "}
        Created by Siddhant Ashok ☘️
      </p>
    </div>
  );
};

export default Footer;
