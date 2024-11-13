"use client";
import React, { useState } from "react";
import { FaArrowup, FaArrowDown } from "react-icons/fa";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const FortyAccordion = () => {
  const [openSection, setOpenSection] = useState(null);

  const accordionData = [
    {
      title: "Adjusting",
      content: {
        intro: "",
        items: [
          "Washer fluid",
          "Tires pressure",
          "Cooling system, hosses & cooling level",
          "Cluth mechnisms & fluid",
          "Brake pedal & parking brake",
          "Brake Fluid",
          "Power steering fluid",
          "Battery fluid & terminal (Inspection - Tight - Lubricate)",
          "Tires rotation",
        ],
      },
    },
    {
      title: "Inspection",
      content: {
        intro: "",
        items: [
          "Radiator cap",
          "Engine belts",
          "Fuel tank cap, fuel lines, connectors & fuel vapor control",
          "Brake pipes % hoses",
          "A/C system efficiency & refrigerant",
          "All lights (interior & exterior)",
          "Horn",
          "Wipers rubber & nozzles washer",
          "All gauges",
          "Power window/mirrors",
          "All seats & seat belts",
          "Doors central locks",
          "Tires & rims conditions",
          "Exhaust pipes & mounting",
          "Steering linkages & arms & ball joint",
          "Front & rear suspension leakage",
          "Drive shaft boots",
          "Transfer oil (Replace if needed)",
          "Brake shoes (brake lining), drums & cylinders & brake pads, discs and calipers (Clean)",
        ],
      },
    },
    {
      title: "Lubricate",
      content: {
        intro: "",
        items: ["Door locks/hinges", "Propeller shaft, center bearing"],
      },
    },
    {
      title: "Replace",
      content: {
        intro: "",
        items: ["Engine oil / filter / gasket", "Air filter", "A/C filter"],
      },
    },
    {
      title: "Tight",
      content: {
        intro: "",
        items: ["Wheel nut torque as per SDS", "Body bolts & nuts"],
      },
    },
  ];

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="lg:px-12 px-0 mx-auto p-4">
      <div className="bg-red-500 h-1 w-32 mx-auto  my-6" />
      <h1 className="text-2xl font-bold text-center mb-4">
        40,000 KM MAINTENANCE
      </h1>
      <p className="text-center text-red-500 font-semibold mb-4">
        Applies to 80k, 120k/km
      </p>

      <div className="space-y-4">
        {accordionData.map((section, index) => (
          <div key={index} className="border-b border-gray-200 ">
            <button
              className="w-full flex justify-between items-center py-4 text-left bg-[#fefefe] lg:px-12 px-4"
              onClick={() => toggleSection(index)}
            >
              <span className="font-medium text-gray-900">{section.title}</span>
              {openSection === index ? (
                <MdKeyboardArrowUp className="h-5 w-5 text-red-500" />
              ) : (
                <MdKeyboardArrowDown className="h-5 w-5 text-red-500" />
              )}
            </button>

            {openSection === index && section.content && (
              <div className="pb-6 text-gray-600 lg:px-12 px-4">
                <ul className="space-y-3">
                  {section.content.items?.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-red-500 mr-2  flex-shrink-0">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FortyAccordion;
