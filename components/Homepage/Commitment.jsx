import React from "react";
import Car from "../../public/Car.png";
import Image from "next/image";

const Commitment = () => {
  return (
    <div className="relative min-h-screen bg-black">
      <div className=" mx-auto  ">
        <div className="grid grid-cols-1 lg:grid-cols-2  items-center min-h-screen">
          {/* Left side - Car Image */}
          <div className="relative w-full">
            <Image
              src={Car}
              alt="Toyota vehicle top view"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right side - Content */}
          <div className="text-white space-y-6 py-12 lg:py-0 px-12">
            {/* Red line decoration */}
            <div className="w-12 h-1 bg-red-600 mb-6"></div>

            <h2 className="text-4xl font-bold tracking-wide mb-8">
              OUR COMMITMENT
            </h2>

            <p className="text-gray-200 leading-relaxed text-lg">
              Abdul Latif Jameel Motors Guest First principles have guided the
              company to provide facilities and services to make the purchase
              and ownership of a Toyota vehicle as satisfying as possible. Our
              vehicle sales and distribution network features outlets across
              Saudi Arabia, and we are able to source and service over 1.2
              million vehicles annually. This is backed up by our continual
              investment in vehicle and parts importation and distribution.
            </p>

            <div className="pt-8">
              <button className="flex justify-center items-center   gap-2 w-44 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-red-700 hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">
                <p>ABOUT US</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commitment;
