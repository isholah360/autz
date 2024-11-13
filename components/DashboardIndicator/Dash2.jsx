"use client";
import Image from "next/image";
import React, { useState } from "react";
import Indicator6 from "../../public/indicator6.png";

import Indicator7 from "../../public/indicator7.png";
import Indicator8 from "../../public/indicator8.png";
import Indicator9 from "../../public/indicator9.png";
import Indicator10 from "../../public/indicator10.png";

const Dash2 = () => {
  const [selectedIndicator, setSelectedIndicator] = useState(null);

  const indicators = [
    {
      id: "cruise",
      icon: <Image src={Indicator6} className="h-20 w-20" alt="" />,
      title: "Low Washer fluid Warning Light",
      description: "Indicates a low level of washer fluid.",
    },
    {
      id: "steering",
      icon: <Image src={Indicator7} className="h-20 w-20" alt="" />,
      title: "Slip Indicator",
      description:
        "If the vehicle is in danger of slipping or if any of the drive wheels spins, the slip indicator light flashes to indicate that the VSC/TRAC system are operating. Depending on the vehicle, abuzzer intermittent may sound to indicate that VSC is operating",
    },
    {
      id: "headlight",
      icon: <Image src={Indicator8} className="h-20 w-20" alt="" />,
      title: "SRS Arbag On-Off Indicator",
      description:
        "Your vehicle is equipped with a front passenger occupant classification system.",
    },
    {
      id: "oil",
      icon: <Image src={Indicator9} className="h-20 w-20" alt="" />,
      title: "SRS Warning Light",
      description: "Indicates that the engine oil pressure is too low.",
    },
    {
      id: "fuel",
      icon: <Image src={Indicator10} className="h-20 w-20" alt="" />,
      title: "Tire Pressure Warning Light",
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

export default Dash2;
