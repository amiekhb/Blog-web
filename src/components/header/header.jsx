import React from "react";
import Menu from "./menu";
// import { CiSearch } from "react-icons/ci";  <CiSearch />
const Header = () => {
  return (
    <div>
      <div className="m-10 flex justify-between">
        {" "}
        <img className="h-[36px] w-[158px]" src="./images/logo.png" alt="" />
        <Menu />
        <input
          className=" border border-stone-500 rounded-md"
          type="Search"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Header;
