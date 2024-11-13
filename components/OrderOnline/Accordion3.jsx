"use client";
import React, { useState } from "react";
import { FaArrowup, FaArrowDown } from "react-icons/fa";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const Accordion1 = () => {
  const [openSection, setOpenSection] = useState(null);
  const accordionData = [
    {
      title:
        "What services does Toyota Saudi Arabia provide to its guests through the online ordering service?",
      content: [
        {
          intro: "Toyota Saudi Arabia offers the following services:",
          services: [
            {
              title: "Your own advisor",
              description:
                "we rely on a fully-trained and qualified team of experienced and professional experts to provide you with the best advice and recommendations during the new car purchase process.",
            },
            {
              title: "Financing",
              description:
                "Over the years, Toyota Saudi has signed several agreements with most banks and Abdul Latif Jameel Finance Company to provide the best financing services to its esteemed guests.",
            },
            {
              title: "Insurance of plates",
              description:
                "When purchasing a car via order online, the plates and forms are issued by the sales consultant after the government fees are paid by the guest. The guest is required to hold a valid license and to have paid all violations incurred. In addition, to any additional instructions that may be required from the official authorities.",
            },
            {
              title: "Delivery",
              description:
                "Toyota online shall bear all transportation to deliver the car to the guest's home according to the terms and conditions previously agreed with the sales consultant and the financing entity.",
            },
          ],
        },
      ],
    },
    {
      title: "Are all cars covered by a warranty?",
      content: [
        {
          intro:
            "All cars are covered by Abdul Latif Jameel Company in the Kingdom of Saudi Arabia. The warranty period starts from the date of purchase the car for a period of 36 months or a distance of  100,000 km, whichever is earlier.For more information regarding the warranty, please visit the warranty page on our website.",
        },
      ],
    },
    {
      title: "How long is a hybrid battery warranty?",
      content: [
        {
          intro:
            "Hybrid battery warranty is up to  8 years or 160000 km, whichever is earlier. Based on the terms and conditions of the service. For more information regarding the warranty terms, please visit the warranty page on our website.",
        },
      ],
    },
  ];

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="lg:max-w-2xl px-0 mx-auto p-4">
      <div className="bg-red-500 h-1 w-32 mx-auto  my-6" />
      <h1 className="text-2xl font-bold text-center mb-8">
        SERVICE AND WARRANTY QUESTIONS
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
                <MdKeyboardArrowUp className="h-5 w-5 text-red-500" />
              ) : (
                <MdKeyboardArrowDown className="h-5 w-5 text-red-500" />
              )}
            </button>

            {openSection === index && (
              <div className="pb-6 text-gray-600 space-y-4">
                {section.content.map((contentSection, idx) => (
                  <div key={idx}>
                    <p className="text-gray-600 mb-4">{contentSection.intro}</p>
                    <div className="space-y-4">
                      {contentSection.services?.map((service, serviceIdx) => (
                        <div key={serviceIdx} className="space-y-1">
                          <span className="font-medium text-gray-700">
                            {service.title}:{" "}
                          </span>
                          <span className="text-gray-600">
                            {service.description}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion1;
