import React, { useContext, useState } from "react";
import Link from "next/link";
import { MyContext } from "@/pages/provider";

// import { CiSearch } from "react-icons/ci";  <CiSearch />
const Header = () => {
  const { setSearchValue } = useContext(MyContext);
  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };
  return (
    <div className="m-10 flex justify-between mx-60">
      {" "}
      <img className="h-[36px] w-[158px]" src="./images/logo.png" alt="" />
      <ul className="flex gap-10 text-gray-500">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <input
        className="border border-gray-600 rounded-md w-60 h-10"
        type="Search"
        placeholder="Search"
        onChange={handleChange}
      />
    </div>
  );
};

export default Header;
