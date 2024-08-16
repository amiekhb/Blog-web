import React, { useContext } from "react";
import Blog from "./blog";
import { useEffect, useState } from "react";
import Link from "next/link";

const BLOG = () => {
  const [article, setArticles] = useState([]);

  const getArticleData = async () => {
    const response = await fetch(
      "https://dev.to/api/articles?page=3&per_page=9"
    );
    const data = await response.json();
    setArticles(data);
    // console.log("data", data)
  };

  useEffect(() => {
    getArticleData();
  }, []);

  console.log("articles", article);
  return (
    <div className="mt-32 text-center ">
      <p className="text-xl font-bold mb-10 text-start">All Blog Post </p>
      <div className="flex justify-between mb-10">
        <ul className="flex gap-5">
          <li>All</li>
          <li>Design</li>
          <li>Travel</li>
          <li>Fashion</li>
          <li>Technology</li>
          <li>Branding</li>
        </ul>
        <ul>
          <li>View All</li>
        </ul>
      </div>

      <div className="grid grid-cols-3  gap-12">
        {article.map((article) => {
          console.log("article", article);
          return (
            <Link href={`/blog/${article.id}`}>
              <Blog
                zurag={article.cover_image}
                category={article.type_of}
                headline={article.title}
                udur={article.readable_publish_date}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BLOG;
