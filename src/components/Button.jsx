import React from "react";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex gap-2 justify-center items-center  px-7 py-4 rounded-full  font-montserrat leading-none border ${
        fullWidth && "w-full"
      }
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "border-coral-red text-white bg-coral-red "
      }}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="w-5 h-5 rounded-full ml-2"
        />
      )}
    </button>
  );
};

export default Button;
