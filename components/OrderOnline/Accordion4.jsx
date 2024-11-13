"use client";
import React, { useState } from "react";
import { FaArrowup, FaArrowDown } from "react-icons/fa";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const Accordion4 = () => {
  const [openSection, setOpenSection] = useState(null);

  const accordionData = [
    {
      title: "What payment methods are available in cash?",
      content: {
        intro:
          "The sales advisor will explain all the available cash payment methods as follows:",
        items: [
          "Online payment service that enables you to pay through Mada, Visa or Master Card with ease and safety",
          "Transfer to Abdul Latif Jameel Company account.",
          "Depositing in the bank for Abdul Latif Jameel Company account.",
          "Payment into the fund, in one of the centers of Abdul Latif Jameel Company as permitted by the Monetary Authority.",
        ],
      },
    },
    {
      title: "Can I buy with financing?",
      content: {
        intro:
          "Yes, you can purchase through Abdul Latif Jameel Finance Company. You can also purchase through banks contracted with Abdul Latif Jameel Company.",
      },
    },
    {
      title: "How secure is my personal data and my credit card information?",
      content: {
        intro:
          "Data security is our first priority. We work with a fully integrated and secure payment process.",
      },
    },
    {
      title:
        "Can I buy a car with financing or cash if the driver's license is expired or has traffic violations?",
      content: {
        intro:
          "You can buy if the driver's license is expired or not available, provided that you are a Saudi national and pay cash. However, all traffic violations must be paid before purchasing, whether in cash or financing.",
      },
    },
    {
      title:
        "I have obligations in the Saudi Arabian Monetary Authority. Can I get financing?",
      content: {
        intro:
          "Yes, you can obtain financing, subject to the terms and conditions of the specified percentage of the Monetary Authority according to your request or contact us on the unified number 8004400055.",
      },
    },
    {
      title:
        "Can a Saudi woman or non- Saudi woman own a car without a driver's license?",
      content: {
        intro:
          "Yes, that is available for a Saudi woman, even if the license is not valid or does not exist, while a valid license is required for a non-Saudi woman",
      },
    },
    {
      title:
        "Can a Saudi woman or non- Saudi woman buy a car with financing without a driver's license?",
      content: {
        intro:
          "We apologize that you are not allowed to buy through the current rental system, which ends in ownership, except with a valid license.",
      },
    },
    {
      title:
        "I am retired and I am over 60 years old. Can I buy a car from you through finance?",
      content: {
        intro:
          "We can serve you according to the terms and conditions available with the financing entity. Please contact us to enable us to serve you.",
      },
    },
  ];

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="lg:max-w-2xl px-0 mx-auto p-4">
      <div className="bg-red-500 h-1 w-32 mx-auto  my-6" />
      <h1 className="text-2xl font-bold text-center mb-8">
        PURCHASE AND PAYMENT QUESTIONS
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

            {openSection === index && section.content && (
              <div className="pb-6 text-gray-600">
                <p className="mb-4">{section.content.intro}</p>
                <ul className="space-y-3">
                  {section.content.items?.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1.5 flex-shrink-0">
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

export default Accordion4;
