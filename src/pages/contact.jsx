import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center">
      <div className="w-4/12 text-gray-600 flex flex-col gap-16 ">
        <h1 className="font-bold text-3xl text-black">Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </p>
        <div className=" flex justify-between ">
          <div className="border">
            <h1 className="text-black">Address</h1>
            <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
          </div>
          <div className="border rounded-md">
            <h1 className="text-black">Contact</h1>
            <p>313-332-8662 info@email.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
