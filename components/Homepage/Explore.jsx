"use client";
import SwiperPass from "../../components/Homepage/SwiperPass";

import SwiperCom from "../../components/Homepage/SwiperCom";
import SwiperSuv from "../../components/Homepage/SwiperSuv";
import React, { useState } from "react";

const Explore = () => {
  const [activeTab, setActiveTab] = useState("PASSENGER");

  const SuvMpvComponent = () => <div className="p-4">SUV & MPV Content</div>;
  const CommercialComponent = () => (
    <div className="p-4">Commercial Content</div>
  );

  const renderComponent = () => {
    switch (activeTab) {
      case "PASSENGER":
        return <SwiperPass />;
      case "SUV & MPV":
        return <SwiperSuv />;
      case "COMMERCIAL":
        return <SwiperCom />;
      default:
        return null;
    }
  };

  return (
    <div className="py-12 lg:px-12 px-2">
      <div className="text-center">
        <h1 className="font-bold text-4xl ">EXPLORE ALL VEHICLES</h1>

        <div className="flex flex-row items-center lg:text-xl text-sm justify-center lg:gap-12 gap-4 py-12 text-gray-500 font-bold">
          <p
            className={`cursor-pointer py-2 ${
              activeTab === "PASSENGER"
                ? "border-b-2 border-b-red-600 text-red-600"
                : ""
            }`}
            onClick={() => setActiveTab("PASSENGER")}
          >
            PASSENGER
          </p>
          <p
            className={`cursor-pointer py-2 ${
              activeTab === "SUV & MPV"
                ? "border-b-2 border-b-red-600 text-red-600"
                : ""
            }`}
            onClick={() => setActiveTab("SUV & MPV")}
          >
            SUV & MPV
          </p>
          <p
            className={`cursor-pointer py-2 ${
              activeTab === "COMMERCIAL"
                ? "border-b-2 border-b-red-600 text-red-600"
                : ""
            }`}
            onClick={() => setActiveTab("COMMERCIAL")}
          >
            COMMERCIAL
          </p>
        </div>

        {/* Tab Content */}
        <div>{renderComponent()}</div>
      </div>
    </div>
  );
};

export default Explore;
