import React from "react";
import Link from "next/link";

// import { CiSearch } from "react-icons/ci";  <CiSearch />
const Header = () => {
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
        className=" border border-stone-500 rounded-md"
        type="Search"
        placeholder="Search"
      />
    </div>
  );
};

export default Header;
