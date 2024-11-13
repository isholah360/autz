"use client";
import React, { useState } from "react";
import { FaArrowup, FaArrowDown } from "react-icons/fa";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const Accordion5 = () => {
  const [openSection, setOpenSection] = useState(null);

  const accordionData = [
    {
      title: "How does Toyota online schedule my delivery?",
      content:
        "Once you have finalized the purchase of your new car, we will give you a call to prepare the delivery time and location. We can deliver your car to your work or directly to your home, depending on the delivery location agreed with the sales consultant.",
    },
    {
      title: "How long will I have to wait for my car to be delivered?",
      content:
        "Depending on the location, deliveries can normally be scheduled within two weeks of the order being completed and approval but delivery may take place earlier or late depending on the stock available.",
    },
    {
      title: "What do you charge for delivery?",
      content:
        "Nothing! Toyota online provides totally FREE delivery anywhere in Saudi Arabia, Toyota online service pays all the costs of delivering your car to your location to make your online car buying experience an unforgettable one.",
    },
    {
      title: "Can I pick the vehicle up myself?",
      content:
        "Yes! Of course. If you would prefer to pick your new vehicle up from one of the Abdul Latif Jameel centers, we are honored to receive and deliver your new car at your convenience.",
    },
    {
      title: "What if I’m not satisfied with the online service?",
      content:
        "One of our top priorities is the satisfaction of Toyota guests. If you are not satisfied with our services for any reason, please feel free to contact us here or call the unified number for customer service, and we will do our best to satisfy you.",
    },
  ];

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="lg:max-w-2xl px-0 mx-auto p-4">
      <div className="bg-red-500 h-1 w-32 mx-auto  my-6" />
      <h1 className="text-2xl font-bold text-center mb-8">DELIVERY</h1>

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

export default Accordion5;
