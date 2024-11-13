"use client";
import React, { useState } from "react";
import { FaArrowup, FaArrowDown } from "react-icons/fa";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const UrbanAccordion = () => {
  const [openSection, setOpenSection] = useState(null);

  const accordionData = [
    {
      title: "15,000km, 75,000km",
      content: {
        intro: "Check and Replace",
        items: [
          "Drive belts: Tension check (Adjustment/ Replacement)",

          "Air cleaner filter element",
          "Brake discs and pads (front /rear)",
          "Brake pedal",
          "Brake fluid",
          "Engine oil",
          "Engine oil filter",
          "Air conditioner filter",
        ],
      },
    },

    {
      title: "30,000km & 60,000km",
      content: {
        intro: "Check and Replace",
        items: [
          "Drive belts: Tension check (Adjustment/ Replacement)",
          "Exhaust system (except catalyst)",
          "Air cleaner filter element",
          "Fuel lines",
          "Brake discs and pads (front /rear)",
          "Brake hoses and pipes",
          "Brake pedal",
          "Tires/Wheel",
          "Wheel bearings",
          "Suspension system",
          "Steering system",
          "All latches, hinges and locks",
        ],
      },
    },
    {
      title: "45,000km ",
      content: {
        intro: "Inspect, correct or replace as necessary",
        items: [
          "Engine oil/ Engine Oil filter",
          "Spark plugs",
          "Air filter",
          "Micro filter",
          "Horn, headlight flashers and hazard warning flashers",
          "Interior lighting",
          "Blower",
          "Lighting system",
          "Seat belts",
          "Wiper and window washer system",
          "Tire settings in central information display",
          "Tires (if necessary, emergency wheel)",
        ],
      },
    },
    {
      title: "90,000km ",
      content: {
        intro: "Inspect, correct or replace as necessary",
        items: [
          "Engine oil/ Engine Oil filter",
          "Spark plugs",
          "Air filter",
          "Micro filter",
          "Horn, headlight flashers and hazard warning flashers",
          "Interior lighting",
          "Blower",
          "Lighting system",
          "Seat belts",
          "Wiper and window washer system",
          "Tire settings in central information display",
          "Tires (if necessary, emergency wheel)",
        ],
      },
    },
  ];

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="lg:px-12 px-0 mx-auto p-4">
      <div className="bg-red-500 h-1 w-32 mx-auto  my-6" />

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
                  <p className="my-4 text-black font-semibold">
                    {section.content.intro}
                  </p>
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

export default UrbanAccordion;
