import React, { useEffect, useState } from "react";
import Trend from "./trend";
import Link from "next/link";

const TREND = () => {
  const [articles, setArticles] = useState([]);

  const getArticleData = async () => {
    const response = await fetch("https://dev.to/api/articles?per_page=4");
    const data = await response.json();
    setArticles(data);
    // console.log("data", data)
  };

  useEffect(() => {
    getArticleData();
  }, []);

  return (
    <div className="mt-32 w-full">
      {" "}
      <div className="flex m-auto justify-between">
        {articles.map((article) => {
          console.log("article", article);
          return (
            <Link href={`/blog/${article.id}`}>
              <Trend
                tags={article.type_of}
                img={article.cover_image}
                title={article.title}
              />
            </Link>
          );
        })}
      </div>
    </div>
    // <div className="mt-32 text-center ">
  );
};

export default TREND;
