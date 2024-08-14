import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "./provider";
import Blog from "@/components/All blog posts/blog";
import Link from "next/link";
import Header from "@/components/header/header";

const BlogPage = () => {
  const { searchValue, setSearchValue, articles } = useContext(MyContext);
  const [article, setArticles] = useState([]);

  const getArticleData = async () => {
    const response = await fetch("https://dev.to/api/articles?per_page=30");
    const data = await response.json();
    setArticles(data);
    // console.log("data", data)
  };

  useEffect(() => {
    getArticleData();
  }, []);
  console.log("articles", article);

  const handleChange = (text) => {
    setSearchValue(text);
    const findArticle = articles.filter((article) =>
      article.headline.toLowerCase().includes(text.toLowerCase())
    );
    setArticles(findArticle);
  };
  return (
    <div className="mt-32 text-center ">
      <p className="text-xl font-bold mb-10">All Blog Post </p>

      <div className="text-center mx-60">
        <h2>Хайлт: {searchValue}</h2>
      </div>
      <div className="grid grid-cols-3 w-full ">
        {article.map((article) => {
          console.log("article", article);
          return (
            <div>
              <Link href={`/blog/${article.id}`}>
                <Blog
                  zurag={article.cover_image}
                  category={article.type_of}
                  headline={article.title}
                  udur={article.readable_publish_date}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;
