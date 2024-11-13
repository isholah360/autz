"use client";
import React, { useState } from "react";
import { FaArrowup, FaArrowDown } from "react-icons/fa";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const OneAccordion = () => {
  const [openSection, setOpenSection] = useState(null);

  const accordionData = [
    {
      title: "Inspection",
      content: {
        intro: "",
        items: [
          "Radiator cap",

          "Engine belts",
          "Brake pipes & hoses",
          "All lights (interiro & exterior)",
          "Horn",
          "Wiper rubber & nozzle washer",
          "All gauges",
          "Power window/mirrors",
          "All seats & seat belts",
          "Doors central locks",
          "Tires & rims condition",
          "Exhaust pipes & mounting",
          "Steering linkages & arms & ball joint",
          "Front & rear suspension leakage",
          "Air filter (Clean)",
          "A/C filter",
        ],
      },
    },

    {
      title: "Adjusting",
      content: {
        intro: "",
        items: [
          "Washer fluid",
          "Tires pressure",
          "Brake pedal & parking brake",
          "Power steering fluid",
          "Battery fluid & terminal(Inspection - Tight - Lubricate)",
        ],
      },
    },
    {
      title: "Tight",
      content: {
        intro: "",
        items: ["Wheel nut torque as per SDS", "Body bolts & nuts"],
      },
    },
    {
      title: "Lubricate",
      content: {
        intro: "",
        items: ["Door locks/hinges"],
      },
    },
  ];

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="lg:px-12 px-0 mx-auto p-4">
      <div className="bg-red-500 h-1 w-32 mx-auto  my-6" />
      <h1 className="text-2xl font-bold text-center mb-8">
        FREE 1,000 KM MAINTENANCE
      </h1>

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

export default OneAccordion;
