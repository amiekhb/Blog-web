import React from "react";

const Blog = (zurag, category, headline, udur) => {
  return (
    <div className="grid grid-cols-3 h-[600px]">
      <div>
        <img src={zurag} alt="" />
      </div>
      <div>{category}</div>
      <div>{headline}</div>
      <div>{udur}</div>
    </div>
  );
};

export default Blog;
