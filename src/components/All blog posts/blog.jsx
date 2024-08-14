import React from "react";

const Blog = ({ zurag, category, headline, udur }) => {
  return (
    <div className=" h-[600px] w-[400px] flex  items-center">
      <div className="  border border-gray-600 rounded-lg justify-center">
        {" "}
        <div className=" gap-3 m-3 flex flex-col items-start">
          {" "}
          <img className=" rounded-lg " src={zurag} alt="" />
          <div className="text-indigo-600 bg-gray-50 w-[110px] justify-center rounded-lg h-8 flex items-center">
            {category}
          </div>
          <div className="text-black font-semibold text-xl">{headline}</div>
          <div className="text-gray-500">{udur}</div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
