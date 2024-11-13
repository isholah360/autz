"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Hero1 from "../../public/HERO.jpg";
import Hero2 from "../../public/hero2.jpg";
import Hero3 from "../../public/hero3.jpg";
import { translations } from "@/components/context/translations";
import { useLanguage } from "@/components/context/language-context";

const heroImages = [
  { src: Hero1, titleKey: "welcome", descriptionKey: "description" },
  { src: Hero2, titleKey: "discoverOfferings", descriptionKey: "learnMore" },
  { src: Hero3, titleKey: "experienceService", descriptionKey: "contactUs" },
];

const Hero = () => {
  const { language } = useLanguage(); // Get current language from context

  // Set the `dir` attribute based on language
  const isArabic = language === "ar";

  // Force re-rendering the Swiper component on language change using the `key` prop
  return (
    <Swiper
      key={language}  // This will reset the Swiper component when the language changes
      className="mySwiper"
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        bulletClass: "swiper-pagination-bullet bg-red-500",
      }}
      modules={[Autoplay, Pagination]}
      dir={isArabic ? "rtl" : "ltr"} // Set the direction based on language
    >
      {heroImages.map((hero, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[80vh]">
            <Image
              src={hero.src}
              className="w-full h-full object-cover"
              alt=""
            />
            <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center items-center">
              <h1 className="lg:text-5xl text-3xl font-bold mb-4">
                {index === 0 ? (
                  <div>{translations[language].welcome}</div>
                ) : index === 1 ? (
                  <div>{translations[language].discoverOfferings}</div>
                ) : index === 2 ? (
                  <div>{translations[language].experienceService}</div>
                ) : (
                  ""
                )}
              </h1>
              <div className="text-lg">
                {index === 0 ? (
                  <div>{translations[language].description}</div>
                ) : index === 1 ? (
                  <div>{translations[language].learnMore}</div>
                ) : index === 2 ? (
                  <div>{translations[language].contactUs}</div>
                ) : (
                  ""
                )}
              </div>

              <button className="flex justify-center items-center mx-auto mt-6 gap-2 w-44 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-red-700 hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">
                <p>{translations[language].discoverMore}</p>
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;

