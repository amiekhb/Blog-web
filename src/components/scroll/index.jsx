import React, { useEffect, useState } from "react";
import Scroll from "./scroll";
import Link from "next/link";
import { CiSquareChevLeft } from "react-icons/ci";
import { CiSquareChevRight } from "react-icons/ci";
const SCROLL = () => {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const getArticleData = async () => {
    const response = await fetch("https://dev.to/api/articles?per_page=5");
    const data = await response.json();
    setArticles(data);
    // console.log("data", data)
  };

  useEffect(() => {
    getArticleData();
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        className="flex h-full transition-all duration-15  "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {articles.map((article, i) => {
          console.log("article", article);
          return (
            <Link href={`/blog/${article.id}`} className="min-w-full h-full ">
              <Scroll
                Tag={article.type_of}
                date={article.readable_publish_date}
                header={article.title}
                pic={article.cover_image}
              />
            </Link>
          );
        })}
      </div>
      <div className="flex gap-3 justify-end mt-20 mr-60">
        <button
          onClick={() => {
            setCurrentIndex(currentIndex - 1);
          }}
        >
          <CiSquareChevLeft size={40} />
        </button>
        <button
          className="px-4 py-3 border rounded-xl"
          onClick={() => {
            setCurrentIndex(currentIndex + 1);
          }}
        >
          <CiSquareChevRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default SCROLL;
