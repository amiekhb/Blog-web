import Image from "next/image";
import { Inter } from "next/font/google";
import { useContext, useEffect, useState } from "react";
import BLOG from "@/components/All blog posts";
import { MyContext } from "./provider";
import Loader from "@/components/Loader";
import TREND from "@/components/trend";
import SCROLL from "@/components/scroll";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { searchValue, setSearchValue, articles, isLoading } =
    useContext(MyContext);

  return (
    <main className="text-center">
      <SCROLL />
      <div className="mx-60">
        <div className="mt-32 w-full">
          {" "}
          <p className=" text-xl font-bold mb-10 ">Trending</p>
          <div className="flex m-auto justify-between">
            {isLoading ? <Loader /> : <TREND />}
          </div>
        </div>

        <div>
          <h2>Хайлт: {searchValue}</h2>
          <BLOG />
        </div>
      </div>
      <button
        // onClick={handleLoadMore}
        className=" border rounded-md border-gray-500 bg-white text-gray-500 mb-20 "
      >
        <p className="m-2">Load More</p>
      </button>
    </main>
  );
}
