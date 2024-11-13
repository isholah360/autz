"use client";
import { useState } from "react";
import Toyota from "../../components/ToyotaLexus/Toyota";

import Lexus from "../../components/ToyotaLexus/Lexus";

const ToyotaLexus = () => {
  const [activeTab, setActiveTab] = useState("Toyota");

  return (
    <div className="flex flex-col items-center py-12">
      {/* Tabs */}
      <div className="flex space-x-20 text-lg font-semibold  border-gray-200">
        <button
          className={`pb-2 ${
            activeTab === "Toyota"
              ? "text-red-600 border-b-2 border-red-600"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("Toyota")}
        >
          Toyota
        </button>
        <button
          className={`pb-2 ${
            activeTab === "Lexus"
              ? "text-red-600 border-b-2 border-red-600"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("Lexus")}
        >
          Lexus
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "Toyota" && <Toyota />}
        {activeTab === "Lexus" && <Lexus />}
        {/* Add content for other tabs (SUV & MPV, Commercial) here */}
      </div>
    </div>
  );
};

export default ToyotaLexus;
