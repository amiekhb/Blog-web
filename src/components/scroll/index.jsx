import React, { useEffect, useState } from "react";
import Scroll from "./scroll";
import Link from "next/link";
import { CiSquareChevLeft } from "react-icons/ci";
import { CiSquareChevRight } from "react-icons/ci";
const SCROLL = () => {
  const [articles, setArticles] = useState([]);

  const getArticleData = async () => {
    const response = await fetch("https://dev.to/api/articles?per_page=1");
    const data = await response.json();
    setArticles(data);
    // console.log("data", data)
  };

  useEffect(() => {
    getArticleData();
  }, []);

  return (
    <div>
      {" "}
      {articles.map((article) => {
        console.log("article", article);
        return (
          <div>
            <Link href={`/blog/${article.id}`}>
              <Scroll
                Tag={article.type_of}
                date={article.readable_publish_date}
                header={article.title}
                pic={article.cover_image}
              />
            </Link>
            <div className="flex gap-3 justify-end mt-10">
              <button>
                <CiSquareChevLeft size={40} />
              </button>
              <button>
                <CiSquareChevRight size={40} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SCROLL;
