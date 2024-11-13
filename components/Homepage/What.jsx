import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import What1 from "../../public/What1.png";

import What2 from "../../public/What2.png";

import What3 from "../../public/What3.png";

import What4 from "../../public/What4.png";
import Image from "next/image";

const What = () => {
  const services = [
    {
      icon: <Image src={What1} alt="" />,
      title: "BOOK A SERVICE",
      link: "#",
    },
    {
      icon: <Image src={What2} alt="" />,
      title: "BOOK A TEST DRIVE",
      link: "#",
    },
    {
      icon: <Image src={What3} alt="" />,
      title: "FIND A CENTER",
      link: "#",
    },
    {
      icon: <Image src={What4} alt="" />,
      title: "OFFERS",
      link: "#",
    },
  ];

  return (
    <div className=" bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">
          WHAT WOULD YOU LIKE TO DO?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="group flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-50 group-hover:bg-red-100 transition-colors duration-300">
                <div className="text-red-600">{service.icon}</div>
              </div>
              <div className="inline-flex mt-4 gap-4 items-center">
                <div className=" text-red-600">
                  <FaAngleRight />
                </div>
                <h2 className=" font-semibold text-sm text-gray-900 text-center">
                  {service.title}
                </h2>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default What;
