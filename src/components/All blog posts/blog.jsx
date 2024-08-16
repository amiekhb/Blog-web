import React from "react";

const Blog = ({ zurag, category, headline, udur }) => {
  return (
    <div className="  flex  items-center ">
      <div className="  border border-gray-600 rounded-lg justify-center">
        {" "}
        <div className="  m-3 flex flex-col gap-5">
          <div className="h-[200px] w-full">
            <img className=" rounded-lg  " src={zurag} alt="No picture" />
          </div>
          <div className="w-full h-[150px] gap-3 flex flex-col items-start m-3 text-start">
            <div className="text-indigo-600 bg-gray-50 w-[110px] justify-center rounded-lg h-8 flex items-center">
              {category}
            </div>
            <div className="text-black font-semibold text-xl">{headline}</div>
            <div className="text-gray-500">{udur}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
