import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "./provider";
import Blog from "@/components/All blog posts/blog";
import Link from "next/link";

const BlogPage = () => {
  const { searchValue, setSearchValue } = useContext(MyContext);
  const [article, setArticles] = useState([]);
  const [findArticle, setFindArticle] = useState([]);

  const getArticleData = async () => {
    const response = await fetch("https://dev.to/api/articles?per_page=30");
    const data = await response.json();
    setArticles(data);
    setFindArticle(data);
  };

  useEffect(() => {
    getArticleData();
  }, []);
  console.log("articles", article);

  const handleChange = (text) => {
    setSearchValue(text);
    const findArticle = article.filter((data) =>
      data.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setArticles(findArticle);
  };
  return (
    <div className="mt-32 text-center mx-60">
      <p className="text-xl font-bold mb-14 text-start">All Blog Post </p>

      <div className="text-center mx-60">
        <h2>Хайлт: {searchValue}</h2>
      </div>
      <div className="grid grid-cols-3 w-full  gap-12">
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
