import React, { useContext } from "react";
import Link from "next/link";
import { SearchContext } from "@/provider/search-provider";

// import { CiSearch } from "react-icons/ci";  <CiSearch />
const Header = () => {
  const { setSearchValue } = useContext(SearchContext);
  const handleChange = (e) => {
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
        className=" border border-stone-500 rounded-md"
        type="Search"
        placeholder="Search"
        onChange={handleChange}
      />
    </div>
  );
};

export default Header;
