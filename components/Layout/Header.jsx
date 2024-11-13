"use client";
import Image from "next/image";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Logo from "../../public/Logo.jpeg";
import Link from "next/link";
import { useLanguage } from "@/components/context/language-context";
import { translations } from "@/components/context/translations";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOne, setMenuOne] = useState(false);

  const [isOpen2, setIsOpen2] = useState(false);
  const [menuOne2, setMenuOne2] = useState(false);
  const { language } = useLanguage();

  return (
    <section>
      <nav className="font-inter mx-auto h-auto w-full max-w-screen-2xl lg:relative lg:top-0 text-sm font-semibold">
        <div className="flex flex-col px-6 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-2 xl:px-20">
          <Link href="/">
            <Image src={Logo} className="h-12 w-44" alt="" />
          </Link>
          <div
            className={`mt-14 flex flex-col space-y-8 lg:mt-0 lg:flex lg:flex-row lg:space-x-1 lg:space-y-0 ${
              isOpen ? "" : "hidden"
            }`}
          >
            <Link
              href="/ToyotaLexus"
              className="font-inter rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-gray-800"
            >
              {translations[language].ToyotaLexus}
            </Link>
            <div className="relative flex flex-col">
              <button
                onClick={() => setMenuOne(!menuOne)}
                className={`flex flex-row items-center rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-gray-800 ${
                  menuOne
                    ? "text-gray-800 lg:border lg:border-gray-600 lg:bg-gray-50"
                    : "text-black lg:border lg:border-white"
                }`}
              >
                 {translations[language].Owner}
                <MdOutlineKeyboardArrowDown
                  className={`w-4 h-4 fill-current transition-transform duration-300 ${
                    menuOne ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {menuOne && (
                <div className="z-50 flex w-full flex-col rounded-lg lg:absolute lg:top-20 lg:w-96 bg-white">
                  {/* ITEM */}
                  <Link
                    href="/DashboardIndicator"
                    className="py-3 border-t-red-400 border-t-2 px-5"
                  >
                     {translations[language].dashboardInd}
                  </Link>

                  <Link
                    href="/PeriodicMaintenance"
                    className="py-3 border-t px-5"
                  >
                     {translations[language].peroidic}
                  </Link>

                  <Link href="/Warranty" className="py-3 border-t px-5">
                  {translations[language].warranty}
                  </Link>
                </div>
              )}
            </div>
            <div className="relative flex flex-col">
              <button
                onClick={() => setMenuOne2(!menuOne2)}
                className={`flex flex-row items-center rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-gray-800 ${
                  menuOne2
                    ? "text-gray-800 lg:border lg:border-gray-600 lg:bg-gray-50"
                    : "text-black lg:border lg:border-white"
                }`}
              >
                {translations[language].shoppingtools}
                <MdOutlineKeyboardArrowDown
                  className={`w-4 h-4 fill-current transition-transform duration-300 ${
                    menuOne2 ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {menuOne2 && (
                <div className="z-50 flex w-full flex-col rounded-lg lg:absolute lg:top-12 lg:w-96 bg-white cursor-pointer">
                  {/* ITEM */}
                  <Link
                    href="/OrderOnline"
                    className="py-3 border-t-red-400 border-t-2 px-5 cursor-pointer"
                  >
                     {translations[language].orderOnline}
                  </Link>

                  <p className="py-3 border-t px-5">E-Fleet</p>
                </div>
              )}
            </div>
            <Link
              href="/News"
              className="font-inter rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-gray-800"
            >
              {translations[language].news}
            </Link>
            <Link
              href="/AboutUs"
              className="font-inter rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-gray-800"
            >
              {translations[language].about}
            </Link>
          </div>

          <button
            className="absolute right-5 lg:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <IoMdMenu className="text-2xl pt-1" />
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Header;
