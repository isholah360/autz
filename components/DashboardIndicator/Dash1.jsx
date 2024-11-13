"use client";
import Image from "next/image";
import React, { useState } from "react";
import Indicator1 from "../../public/indicator1.png";

import Indicator2 from "../../public/indicator2.png";
import Indicator3 from "../../public/indicator3.png";
import Indicator4 from "../../public/indicator4.png";
import Indicator5 from "../../public/indicator5.png";

const Dash1 = () => {
  const [selectedIndicator, setSelectedIndicator] = useState(null);

  const indicators = [
    {
      id: "cruise",
      icon: <Image src={Indicator1} className="h-20 w-20" alt="" />,
      title: "Cruise Control Indicator",
      description: "Indicates that cruise control has been activated.",
    },
    {
      id: "steering",
      icon: <Image src={Indicator2} className="h-20 w-20" alt="" />,
      title: "Electric power steering warning light",
      description:
        "Indicates an issue with the electric power steering system.",
    },
    {
      id: "headlight",
      icon: <Image src={Indicator3} className="h-20 w-20" alt="" />,
      title: "High-Beam Headlight Indicator",
      description:
        "Indicates that the high-beam headlights are currently active.",
    },
    {
      id: "oil",
      icon: <Image src={Indicator4} className="h-20 w-20" alt="" />,
      title: "Low engine oil pressure warning light",
      description: "Indicates that the engine oil pressure is too low.",
    },
    {
      id: "fuel",
      icon: <Image src={Indicator5} className="h-20 w-20" alt="" />,
      title: "Low Fuel Level Warning Light",
      description: "Indicates that the fuel level is low.",
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

export default Dash1;
