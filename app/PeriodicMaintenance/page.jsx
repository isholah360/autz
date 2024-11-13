"use client";
import Image from "next/image";
import React, { useState } from "react";
import Maintain from "../../public/maintain.png";
import One from "../../components/PeriodicMaintenance/One";

import Five from "../../components/PeriodicMaintenance/Five";

import Ten from "../../components/PeriodicMaintenance/Ten";
import Twenty from "../../components/PeriodicMaintenance/Twenty";
import Forty from "../../components/PeriodicMaintenance/Forty";
import Supra from "../../components/PeriodicMaintenance/Supra";
import Urban from "../../components/PeriodicMaintenance/Urban";

const PeriodicMaintenance = () => {
  const [activeTab, setActiveTab] = useState("1000KM");

  const SuvMpvComponent = () => <div className="p-4">5000KM Content</div>;
  const CommercialComponent = () => (
    <div className="p-4">Commercial Content</div>
  );

  const renderComponent = () => {
    switch (activeTab) {
      case "1000KM":
        return <One />;
      case "5000KM":
        return <Five />;
      case "10000KM":
        return <Ten />;
      case "20000KM":
        return <Twenty />;
      case "40000KM":
        return <Forty />;
      case "SUPRA":
        return <Supra />;

      case "URBAN":
        return <Urban />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Image src={Maintain} className="h-[70vh] w-full" />

      <div className="flex flex-row items-center lg:text-xl text-[10px] justify-center lg:gap-12 gap-2 py-12 text-gray-500 font-bold overscroll-auto overflow-x-scroll lg:overflow-clip overflow-auto">
        <p
          className={`cursor-pointer py-2 ${
            activeTab === "1000KM"
              ? "border-b-2 border-b-red-600 text-red-600"
              : ""
          }`}
          onClick={() => setActiveTab("1000KM")}
        >
          1,000 KM
        </p>
        <p
          className={`cursor-pointer py-2 ${
            activeTab === "5000KM"
              ? "border-b-2 border-b-red-600 text-red-600"
              : ""
          }`}
          onClick={() => setActiveTab("5000KM")}
        >
          5,000 KM
        </p>
        <p
          className={`cursor-pointer py-2 ${
            activeTab === "10000KM"
              ? "border-b-2 border-b-red-600 text-red-600"
              : ""
          }`}
          onClick={() => setActiveTab("10000KM")}
        >
          10,000 KM
        </p>
        <p
          className={`cursor-pointer py-2 ${
            activeTab === "20000KM"
              ? "border-b-2 border-b-red-600 text-red-600"
              : ""
          }`}
          onClick={() => setActiveTab("20000KM")}
        >
          20,000 KM
        </p>
        <p
          className={`cursor-pointer py-2 ${
            activeTab === "40000KM"
              ? "border-b-2 border-b-red-600 text-red-600"
              : ""
          }`}
          onClick={() => setActiveTab("40000KM")}
        >
          40,000 KM
        </p>
        <p
          className={`cursor-pointer py-2 ${
            activeTab === "SUPRA"
              ? "border-b-2 border-b-red-600 text-red-600"
              : ""
          }`}
          onClick={() => setActiveTab("SUPRA")}
        >
          SUPRA
        </p>
        <p
          className={`cursor-pointer py-2 ${
            activeTab === "URBAN"
              ? "border-b-2 border-b-red-600 text-red-600"
              : ""
          }`}
          onClick={() => setActiveTab("URBAN")}
        >
          URBAN CRUISER
        </p>
      </div>

      <div>{renderComponent()}</div>
    </div>
  );
};

export default PeriodicMaintenance;
