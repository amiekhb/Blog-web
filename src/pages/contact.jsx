import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center mt-20 p-10">
      <div className="w-4/12 text-gray-600 flex flex-col gap-16 ">
        <h1 className="font-bold text-3xl text-black">Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </p>
        <div className=" flex justify-between gap-24">
          <div className="border rounded-md flex-1 p-2">
            <h1 className="text-black">Address</h1>
            <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
          </div>
          <div className="border rounded-md flex-1 p-2">
            <h1 className="text-black">Contact</h1>
            <p>313-332-8662 info@email.com</p>
          </div>
        </div>
        <div className="bg-gray-100 flex flex-col gap-5 p-5 rounded-md">
          <div className="flex gap-5">
            <input
              className="rounded-md p-2"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="rounded-md p-2"
              type="text"
              placeholder="Your Email"
            />
          </div>
          <input
            className="rounded-md p-2 "
            type="text"
            placeholder="Subject"
          />
          <input
            className="rounded-md h-[150px] text-start p-2 "
            type="text"
            placeholder="Write a message"
          />
          <button className="bg-indigo-500 text-white rounded-md p-2">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
