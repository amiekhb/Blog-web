import React, { useState } from "react";

const Input = ({ handleChange }) => {
  const [searchValue, setSearchValue] = useState("");

  const changeValue = (e) => {
    console.log(e.target.value);
    handleChange(e.target.value);
  };
  return (
    <div>
      <input
        className="border border-gray-600 rounded-md w-60 h-10"
        type="Search"
        placeholder="Search"
        onChange={changeValue}
      />
    </div>
  );
};

export default Input;
