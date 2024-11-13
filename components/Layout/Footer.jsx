import Image from "next/image";
import React from "react";
import Logo from "../../public/Logo.jpeg";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { CiLocationOn, CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <footer>
      <div className="flex-col lg:flex ">
        {/* TOP CONTAINER */}
        <div className="lg:flex lg:flex-row lg:justify-between bg-[#323232] px-5 py-16 md:px-10 md:py-20">
          {/* LOGO DIV */}
          <div>
            {/* LOGO */}
            <Image src={Logo} className="w-44" alt="" />

            <p className="font-inter mt-4 max-w-80 text-base font-light text-gray-100">
              Your best chice for car dealership...
            </p>
            {/* SOCIAL MEDIA ICONS */}
            <div className="mb-8 mt-6 flex flex-row text-white">
              <a
                href=""
                className="mr-4 text-black transition hover:text-gray-400"
              >
                <FaFacebook className="text-white" />
              </a>
              <a
                href=""
                className="mx-4 text-black transition hover:text-gray-400"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href=""
                className="mx-4 text-black transition hover:text-gray-400"
              >
                <FaXTwitter className="text-white" />
              </a>
              <a
                href=""
                className="mx-4 text-black transition hover:text-gray-400"
              >
                <FaYoutube className="text-white" />
              </a>
            </div>
          </div>
          {/* FOOTER LINKS */}
          <div className="flex grow flex-row flex-wrap lg:mx-10 lg:flex-nowrap lg:justify-center">
            {/* LINK BLOCK */}
            <div className="my-5 mr-8 flex max-w-52 grow basis-24 flex-col space-y-5 lg:mx-10 lg:mt-0">
              <h2 className="font-inter  text-[#ed0a1d] font-bold">SOLUTION</h2>
              <a href="" className="font-inter font-light text-gray-100">
                Marketing
              </a>
              <a href="" className="font-inter font-light text-gray-100">
                Analytics
              </a>
              <a href="" className="font-inter font-light text-gray-100">
                Commerce
              </a>
              <a href="" className="font-inter font-light text-gray-100">
                Insights
              </a>
            </div>
            {/* LINK BLOCK */}
            <div className="my-5 mr-8 flex max-w-52 grow basis-24 flex-col space-y-5 lg:mx-10 lg:mt-0">
              <h2 className="font-inter font-bold text-[#ed0a1d]">SUPPORT</h2>
              <a href="" className="font-inter font-light text-gray-100">
                Find a Center
              </a>
              <a href="" className="font-inter font-light text-gray-100">
                Book a Service
              </a>
              <a href="" className="font-inter font-light text-gray-100">
                Book a Test Drive
              </a>
              <a href="" className="font-inter font-light text-gray-100">
                Buy Online
              </a>
              <a href="" className="font-inter font-light text-gray-100">
                Service & Parts
              </a>
            </div>
            {/* LINK BLOCK */}
            <div className="my-5 mr-8 flex max-w-52 grow basis-24 flex-col space-y-5 lg:mx-10 lg:mt-0">
              <h2 className="font-inter text-[#ed0a1d] font-bold">COMPANY</h2>
              <a href="" className="font-inter font-light text-gray-100">
                About
              </a>
              <a href="" className="font-inter font-light text-gray-100">
                Blog
              </a>
              <a href="" className="font-inter font-light text-gray-100">
                Jobs
              </a>
              <a href="" className="font-inter font-light text-gray-100">
                Press
              </a>
              <a href="" className="font-inter font-light text-gray-100">
                Partners
              </a>
            </div>
          </div>
          {/* LOCATION & SUPPORT */}
          <div className="mt-10 flex flex-col lg:mt-0">
            {/* ITEM */}
            <div className="mb-4 flex flex-row items-center max-w-72 text-white">
              <CiLocationOn className="text-white text-2xl" />

              <p className="font-inter ml-4 text-white">
                8502 Preston Rd. Inglewood, Maine 98380, USA
              </p>
            </div>
            {/* ITEM */}
            <div className="mb-4 flex flex-row items-center max-w-72">
              <CiMail className="text-white" />
              <p className="font-inter ml-4 text-white">toyota@gmail.com</p>
            </div>
          </div>
        </div>
        {/* DIVIDER */}
        {/* COPYRIGHT TEXT */}
        <div className="bg-black py-6">
          <p className="font-inter text-center text-sm text-gray-100 lg:mt-0">
            © Copyright 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
