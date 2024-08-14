import React from "react";

const Scroll = ({ Tag, date, pic, header }) => {
  return (
    <div className="relative">
      <div className="bg-blend-darken bg-[rgba(0,0,0,0.3)]">
        <img
          className="h-[800px] w-full object-cover rounded-xl mt-32  "
          src={pic}
          alt=""
        />
      </div>
      <div className="h-[300px] w-2/4 m-4 rounded-xl bg-white absolute bottom-0 left-0 flex flex-col justify-evenly items-start ">
        {" "}
        <div className="bg-indigo-600 text-white w-[110px] justify-center rounded-lg h-8 flex items-center">
          {Tag}
        </div>
        <h1 className="font-semibold text-5xl ml-5">{header}</h1>
        <div> {date}</div>
      </div>
    </div>
  );
};

export default Scroll;
