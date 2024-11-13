"use client";
import React from "react";
import Image from "next/image";
import Pass1 from "../../public/pass1.png";

import Pass2 from "../../public/pass2.png";
import Pass3 from "../../public/pass3.jpeg";

import Pass4 from "../../public/pass4.png";
import Pass5 from "../../public/pass6.jpeg";
import Pass6 from "../../public/pass6.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"; // Swiper navigation styles

const SwiperPass = () => {
  const posts = [
    {
      title: "YARIS 2024",
      img: Pass1,

      href: "#",
    },
    {
      title: "COROLLA 2024",
      img: Pass2,

      href: "#",
    },
    {
      title: "CAMRY 2025",
      img: Pass3,

      href: "#",
    },
    {
      title: "CROWN 2023",
      img: Pass4,

      href: "#",
    },
    {
      title: "SUPRA 2024",
      img: Pass5,

      href: "#",
    },
    {
      title: "GR86 2024",
      img: Pass6,

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

export default SwiperPass;
