"use client";
import React from "react";
import Image from "next/image";
import comm1 from "../../public/comm1.png";

import comm2 from "../../public/comm2.png.webp";
import comm3 from "../../public/comm3.png";

import comm4 from "../../public/comm4.png";
import comm5 from "../../public/comm5.png";
import comm6 from "../../public/comm6.webp";

import comm7 from "../../public/comm7.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"; // Swiper navigation styles

const SwiperCom = () => {
  const posts = [
    {
      title: "HILUX SINGLE CAB 2025",
      img: comm1,

      href: "#",
    },
    {
      title: "HILUX DOUBLE CAB 2024",
      img: comm2,

      href: "#",
    },
    {
      title: "LAND CRUISER PICKUP 2024",
      img: comm3,

      href: "#",
    },
    {
      title: "LITEACE VAN 2024",
      img: comm4,

      href: "#",
    },
    {
      title: "COASTER 2024",
      img: comm5,

      href: "#",
    },
    {
      title: "HIACE BUS 2025",
      img: comm6,

      href: "#",
    },
    {
      title: "HIACE VAN 2025",
      img: comm7,

      href: "#",
    },
  ];

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Navigation]}
      navigation={true} // Enable navigation
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {posts.map((items, key) => (
        <SwiperSlide
          className="max-w-md mx-auto mt-4  rounded-md duration-300 hover:shadow-sm"
          key={key}
        >
          <a href={items.href}>
            <Image
              src={items.img}
              alt={items.title}
              className="w-full h-48 rounded-t-md object-contain"
              width={500}
              height={500}
            />

            <div className="pt-3 ml-4 mr-2 mb-3">
              <h3 className="text-xl text-gray-900 font-bold">{items.title}</h3>
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCom;
