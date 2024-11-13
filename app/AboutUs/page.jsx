import Image from "next/image";
import React from "react";
import Gallery3 from "../../public/Gallery3.png";

const AboutUs = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-16">
        {/* Image Section */}
        <div className="flex justify-center mb-12">
          <Image src={Gallery3} className="w-full h-[50vh]" alt="" />
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Our Story */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Our Principle</h2>
            <p className="text-gray-600">
              Our journey is fueled by a passion for turning ideas into
              immersive visual experiences. Established with a vision for
              revolution in the world of video content, we’ve evolved into a hub
              of creativity and innovation.
            </p>
          </div>

          {/* Mission */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Our History</h2>
            <p className="text-gray-600">
              Our mission is clear: to empower brands through the unparalleled
              power of storytelling. We believe that every brand has a unique
              narrative waiting to be told, and our mission is to bring those
              stories to life with authenticity, creativity, and impact.
            </p>
          </div>

          {/* Approach */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Our commitment</h2>
            <p className="text-gray-600">
              What sets us apart is our holistic approach to video production.
              From concept to execution and promotion, we guide our clients
              through every step, ensuring a seamless and effective process.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-lg font-bold uppercase mb-2">
            60 Years in Your Service.. Seeking to Delight You Every Day
          </h2>
          <div className="flex justify-center mb-4">
            <div className="w-12 h-1 bg-red-600"></div>
          </div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Through the unique relationship with Hala Auto, Alaa Abdelhamid has
            grown continuously over the years to become one of the leading
            entities in the automotive sector in Saudi Arabia, and one of the
            leading independent Toyota and Lexus distributors in the world.
          </p>
        </div>

        <div className="py-12 lg:p-20 p-4">
          <iframe
            className="  left-0 w-full h-[500px]"
            src={`https://www.youtube.com/embed/p2Ire8AuF8E?si=_NVB93NLX4WzlAdG`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
