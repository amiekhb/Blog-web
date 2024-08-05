import React from "react";

const Scroll = ({ Tag, date }) => {
  return (
    <div className="relative">
      <img
        className="h-[800px] w-full object-cover rounded-xl mt-32 "
        src="https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p895KkdD7DfcCulv8AGa6shbfkAQ13LytdYV4Wsw0PQ-FL22qhaG4o-eKbtZx7eC5DRPpiBpCGUpjA693ZOyVqMT2J470CF5oPujcq9NlJ3lWfW-JUAgxgQbjWqUjceO~P6LG5zQBnAXLsDlYyLfGZGXpGRAWM~PjK7cuD7ZeIWAB~9B25Ya0Qi6N8hGL5AmXlwT33Lqr3vmpMzULNrBhPpc~DCGFZ0rpAhc~vU7mdu7gEWoRMdWX1LA0jTsS3k~eM1KcmqcWGuHD0rhQ-KTBspRHuS7cVmwTdluAQNY5C0Tf2yC8pqCOm2771pFOW-2NiyECQSKSclX-GQ9714nJw__"
        alt=""
      />
      <div className="h-[300px] w-2/4 m-4 rounded-xl bg-white absolute bottom-0 left-0 flex flex-col justify-evenly items-start ">
        {" "}
        <div className="bg-indigo-600 text-white w-[110px] justify-center rounded-lg h-8 flex items-center">
          {Tag}
        </div>
        <h1 className="font-semibold text-5xl ml-5">
          Grid system for better <br /> Design User Interface
        </h1>
        <div> {date}</div>
      </div>
    </div>
  );
};

export default Scroll;
