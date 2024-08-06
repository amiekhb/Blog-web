import React from "react";

const Trend = ({ img, tags, title }) => {
  return (
    <div
      className={`h-[420px] rounded-xl bg-teal-500 flex flex-col gap-5 w-[380px] `}
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="m-5 flex flex-col gap-5 justify-end h-full">
        {" "}
        <div className="bg-indigo-600 text-white w-[110px] justify-center rounded-lg h-8 flex items-center">
          {tags}
        </div>
        <div className="text-white font-semibold text-xl ">{title}</div>
      </div>
    </div>
  );
};
export default Trend;
