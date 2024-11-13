"use client";
import React from "react";
import Image from "next/image";
import suv1 from "../../public/suv1.jpg";
import suv2 from "../../public/suv2.png";
import suv3 from "../../public/suv3.png";
import suv4 from "../../public/suv4.jpeg";
import suv5 from "../../public/suv5.webp";
import suv6 from "../../public/suv6.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const SwiperSuv = () => {
  const posts = [
    {
      title: "RAIZE 2024",
      img: suv1,

      href: "#",
    },
    {
      title: "URBAN CRUISER 2025",
      img: suv2,

      href: "#",
    },
    {
      title: "VELOZ 2024",
      img: suv3,

      href: "#",
    },
    {
      title: "COROLLA CROSS 2024",
      img: suv4,

      href: "#",
    },
    {
      title: "RAV4 2024",
      img: suv5,

      href: "#",
    },
    {
      title: "INNOVA 2024",
      img: suv6,

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

export default SwiperSuv;
