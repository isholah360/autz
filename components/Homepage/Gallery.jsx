import Image from "next/image";
import React from "react";
import Gallery1 from "../../public/Gallery1.webp";

import Gallery2 from "../../public/Gallery2.png";

import Gallery3 from "../../public/Gallery3.png";
import { FaBookBookmark } from "react-icons/fa6";

const Gallery = () => {
  return (
    <section className="lg:p-12 p-4 py-12 ">
      {/* Container */}

      <h2 className="text-3xl font-bold md:text-5xl">Updates</h2>
      <p className="msm:text-base mb-8 mt-4 text-sm text-gray-500 md:mb-12 lg:mb-16">
        The latest from the CEO of Haal Autos....
      </p>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
        <div className="relative group cursor-pointer overflow-hidden">
          <Image
            src={Gallery1}
            alt=""
            className="w-full h-full transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40 h-full">
            <div className="flex top-0 justify-between lg:pt-40 pt-20 w-full">
              <div className="font-normal">
                <p className="text-sm font-extrabold">Hybrid Technology</p>
                <p className="text-xs italic">
                  Toyota engages in research & development for a wide range of
                  eco-cars. By making ever better eco-cars, Toyota aims to
                  promote the widespread use and thereby enhance contribution to
                  the environment.
                </p>
              </div>
              <div className="flex items-center">
                <FaBookBookmark />
              </div>
            </div>
          </div>
        </div>
        <div className="relative group cursor-pointer overflow-hidden">
          <Image
            src={Gallery2}
            alt=""
            width={500}
            height={1000}
            className="w-full lg:h-full h-[280px]  transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40 h-full">
            <div className="flex top-0 justify-between lg:pt-40 pt-20 w-full">
              <div className="font-normal">
                <p className="text-sm font-extrabold">Hybrid Technology</p>
                <p className="text-xs italic">
                  Toyota engages in research & development for a wide range of
                  eco-cars. By making ever better eco-cars, Toyota aims to
                  promote the widespread use and thereby enhance contribution to
                  the environment.
                </p>
              </div>
              <div className="flex items-center">
                <FaBookBookmark />
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="relative group cursor-pointer overflow-hidden">
          <Image
            src={Gallery3}
            alt=""
            className="w-full  lg:h-full h-[280px] transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40 h-full">
            <div className="flex justify-between lg:pt-40 pt-20 w-full">
              <div className="font-normal">
                <p className="text-sm font-extrabold">Hybrid Technology</p>
                <p className="text-xs italic">
                  Toyota engages in research & development for a wide range of
                  eco-cars. By making ever better eco-cars, Toyota aims to
                  promote the widespread use and thereby enhance contribution to
                  the environment.
                </p>
              </div>
              <div className="flex items-center">
                <FaBookBookmark />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="flex justify-center items-center mx-auto mt-6 gap-2 w-44 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-red-700 hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">
        <p>MORE ARTICLES</p>
      </button>
    </section>
  );
};

export default Gallery;
