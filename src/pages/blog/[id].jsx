import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ArticleDetail = () => {
  const { query } = useRouter();
  const [articleDetail, setArticleDetail] = useState(null);

  const getArticleDetailData = async () => {
    const response = await fetch(`https://dev.to/api/articles/${query.id}`);
    const data = await response.json();
    setArticleDetail(data);
  };

  useEffect(() => {
    getArticleDetailData();
  }, []);

  console.log("articleDetail", articleDetail);
  return (
    <div className="mt-32 mx-60 text-wrap">
      <h2 className="font-bold text-3xl  mb-20">{articleDetail?.title} </h2>
      <div
        className=" text-gray-700 "
        dangerouslySetInnerHTML={{ __html: articleDetail?.body_html }}
      ></div>
    </div>
  );
};

export default ArticleDetail;
