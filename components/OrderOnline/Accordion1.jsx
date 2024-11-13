"use client";
import React, { useState } from "react";
import { FaArrowup, FaArrowDown } from "react-icons/fa";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const Accordion1 = () => {
  const [openSection, setOpenSection] = useState(null);

  const accordionData = [
    {
      title:
        "What measures are being taken to protect Toyota online guests and staff?",
      content:
        "Coronavirus is a significant concern for our country and all over the world. Toyota online is closely monitoring the guidance and information provided by the local Ministry of Health. The health and safety of our guests and staff are of the utmost importance to us.  vehicle will be sanitized upon arrival and departure from our lots. Thorough disinfection of customer contact points, including steering, driver and passenger areas, and doorknobs, will also be completed upon delivery to ensure customer protection.",
    },
    {
      title: "Will I need to interact with the delivery specialist in person?",
      content:
        "Toyota Saudi Arabia wants to make sure that the experience of buying your car is as safe as possible and we follow the policy of providing the car with complete protection, sterilization, and safety and in training delivery specialists in how this is done.\n\nIf you have any concerns, please tell a sales consultant to provide the delivery representative with the necessary procedures and we will be happy to meet your needs at any time.",
    },
  ];

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="lg:max-w-2xl px-0 mx-auto p-4">
      <div className="bg-red-500 h-1 w-32 mx-auto  my-6" />
      <h1 className="text-2xl font-bold text-center mb-8">
        COVID-19 GUESTS PROTECTION PLAN
      </h1>

      <div className="space-y-4">
        {accordionData.map((section, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              className="w-full flex justify-between items-center py-4 text-left"
              onClick={() => toggleSection(index)}
            >
              <span className="font-medium text-gray-900">{section.title}</span>
              {openSection === index ? (
                <MdKeyboardArrowDown className="h-5 w-5 text-red-500" />
              ) : (
                <MdKeyboardArrowUp className="h-5 w-5 text-red-500" />
              )}
            </button>

            {openSection === index && (
              <div className="pb-4 text-gray-600 whitespace-pre-line">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion1;
