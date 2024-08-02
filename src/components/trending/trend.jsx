import React from "react";

const Trend = ({ img, tags, title }) => {
  return (
    <div className="mt-32">
      <p className=" text-xl font-bold mb-10">Trending</p>
      <div className="grid grid-cols-4 gap-5 ">
        <div
          className={`h-[420px] rounded-xl bg-teal-500`}
          style={{ backgroundImage: `url(${img})` }}
        >
          {/* <img src={img} alt="" /> */}
          <div>{tags}</div>
          <div>{title}</div>
        </div>
      </div>
    </div>
  );
};
export default Trend;
