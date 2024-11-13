"use client";
import Image from "next/image";
import React, { useState } from "react";
import Indicator11 from "../../public/indicator11.png";
import Indicator12 from "../../public/indicator12.png";
import Indicator13 from "../../public/indicator13.png";
import Indicator14 from "../../public/indicator14.png";

const Dash3 = () => {
  const [selectedIndicator, setSelectedIndicator] = useState(null);

  const indicators = [
    {
      id: "cruise",
      icon: <Image src={Indicator11} className="h-20 w-20" alt="" />,
      title: "TRAC OFF INdicator",
      description:
        "If the vehicle gets stuck in fresh snow or mud, TRAC and VSC may reduce power from the engine to the wheels. You may need to turn the system off to enable you to rock the vehicle in order to free it.",
    },
    {
      id: "steering",
      icon: <Image src={Indicator12} className="h-20 w-20" alt="" />,
      title: "Turn Signal Indicator",
      description:
        "Indicates that the right or left turn signal has been activated.",
    },
    {
      id: "headlight",
      icon: <Image src={Indicator13} className="h-20 w-20" alt="" />,
      title: "ABS Warning Light",
      description: "Indicates a malfunction in ABS or Brake Assit system",
    },
    {
      id: "oil",
      icon: <Image src={Indicator14} className="h-20 w-20" alt="" />,
      title: "Chargin System Warning Light",
      description: "Indicates a malfunction in the vehicle charging system",
    },
  ];

  return (
    <div>
      <div className="bg-[#fcfcfc] lg:p-12 p-4">
        <div className="grid lg:grid-cols-5 grid-cols-2 gap-4 mb-8">
          {indicators.map((indicator) => (
            <button
              key={indicator.id}
              className={`p-4 rounded-lg flex flex-col items-center justify-center transition-all ${
                selectedIndicator?.id === indicator.id
                  ? "bg-red-100 text-blue-600"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setSelectedIndicator(indicator)}
            >
              {indicator.icon}
              <span className="text-xs text-center mt-2">
                {indicator.title}
              </span>
            </button>
          ))}
        </div>

        {selectedIndicator && (
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">
              {selectedIndicator.title}
            </h2>
            <p className="text-gray-600">{selectedIndicator.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dash3;
