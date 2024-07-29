import React from "react";

const Button = ({ name }) => {
  // const { name } = props;
  return (
    <div>
      <button className="px-4 py-2 m-2 bg-gray-100 rounded-lg">{name}</button>
    </div>
  );
};

export default Button;
