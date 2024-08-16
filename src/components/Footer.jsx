import React from "react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="mx-60 mt-20 mb-20">
      <div className="flex justify-between ">
        <div className="flex flex-col gap-5 w-3/12">
          <h1 className="font-semibold">About</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <p className="text-gray-500">Email : info@jstemplate.net</p>
          <p className="text-gray-500">Phone : 880 123 456 789</p>
        </div>

        <ul className="flex flex-col gap-3 text-gray-500">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <div className="flex gap-5">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>

      <div className="border-t p-5 mt-10 flex justify-between items-center">
        <img
          className="h-[50px] w-[200px]"
          src="./images/Copyright.png"
          alt=""
        />
        <ul className="flex text-gray-500">
          <li className="p-3">Terms of Use</li>
          <li className="border-l p-3">Privacy Policy</li>
          <li className="border-l p-3">Cookie Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
