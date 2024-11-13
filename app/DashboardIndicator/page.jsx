"use client";
import Image from "next/image";
import React, { useState } from "react";
import Indicator1 from "../../public/indicator1.png";

import Indicator2 from "../../public/indicator2.png";
import Indicator3 from "../../public/indicator3.png";
import Indicator4 from "../../public/indicator4.png";
import Indicator5 from "../../public/indicator5.png";
import Dash1 from "../../components/DashboardIndicator/Dash1";

import Dash2 from "../../components/DashboardIndicator/Dash2";
import Dash3 from "../../components/DashboardIndicator/Dash3";

const DashboardIndicator = () => {
  const [selectedIndicator, setSelectedIndicator] = useState(null);

  const indicators = [
    {
      id: "cruise",
      icon: <Image src={Indicator1} className="h-20 w-20" />,
      title: "Cruise Control Indicator",
      description: "Indicates that cruise control has been activated.",
    },
    {
      id: "steering",
      icon: <Image src={Indicator2} className="h-20 w-20" />,
      title: "Electric power steering warning light",
      description:
        "Indicates an issue with the electric power steering system.",
    },
    {
      id: "headlight",
      icon: <Image src={Indicator3} className="h-20 w-20" />,
      title: "High-Beam Headlight Indicator",
      description:
        "Indicates that the high-beam headlights are currently active.",
    },
    {
      id: "oil",
      icon: <Image src={Indicator4} className="h-20 w-20" />,
      title: "Low engine oil pressure warning light",
      description: "Indicates that the engine oil pressure is too low.",
    },
    {
      id: "fuel",
      icon: <Image src={Indicator5} className="h-20 w-20" />,
      title: "Low Fuel Level Warning Light",
      description: "Indicates that the fuel level is low.",
    },
  ];

  return (
    <div className="py-12">
      <div className="h-1 w-44 bg-red-500 my-8 mx-auto" />

      <p className="text-center font-bold text-2xl pb-4">
        DASHBOARD INDICATORS
      </p>
      <p className="text-center font-semibold max-w-screen-md mx-auto">
        While these might be some of the most common indicators, they may or may
        not apply to your vehicle. Please refer to the Owners Manual for the
        most accurate information.
      </p>
      <Dash1 />
      <Dash2 />
      <Dash3 />

      <div className="px-12 ">
        <p className="text-red-500 font-bold py-4">Important Note</p>
        <p>
          While these might be some of the most common indicators, they may or
          may not apply to your vehicle, Please refer to the Owners Manual for
          the most accurate information.{" "}
        </p>
      </div>
    </div>
  );
};

export default DashboardIndicator;
