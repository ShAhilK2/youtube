import React from "react";

const Button = ({ children }) => {
  return (
    <button className="px-2 py-1 bg-gray-200 hover:bg-black hover:text-white rounded-md  ">
      {children}
    </button>
  );
};

export default Button;
