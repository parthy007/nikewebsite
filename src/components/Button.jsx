import React from "react";

const Button = ({ label, iconURL }) => {
  return (
    <button className="flex gap-2 justify-center items-center bg-coral-red px-7 py-4 rounded-full text-white font-montserrat border border-coral-red leading-none">
      {label}
      <img
        src={iconURL}
        alt="arrow right icon"
        className="w-5 h-5 rounded-full ml-2"
      />
    </button>
  );
};

export default Button;
