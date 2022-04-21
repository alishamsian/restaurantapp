import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer className="p-4 bg-cardOverlay rounded-lg shadow md:px-6 md:py-8 ">
      <div className="sm:flex sm:items-center sm:justify-between md:px-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo " />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 ">
          <li>
            <a className="mr-4 hover:underline md:mr-6 ">درباره ما</a>
          </li>
          <li>
            <a className="mr-4 hover:underline md:mr-6">ارتباط با ما</a>
          </li>
          <li>
            <a className="mr-4 hover:underline md:mr-6 ">خدمات</a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        . All Rights Reserved.
        <a href="#" className="hover:underline">
          Ali Shamsian
        </a>
        © 2022
      </span>
    </footer>
  );
};

export default Footer;
