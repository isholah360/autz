"use client";
import React, { useState } from "react";
import { FaArrowup, FaArrowDown } from "react-icons/fa";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const Accordion2 = () => {
  const [openSection, setOpenSection] = useState(null);

  const accordionData = [
    {
      title: "What is order online service?",
      content:
        "A service launched by Abdul Latif Jameel Retail Company Limited since 2017 to experience buying a car online and delivering it to the door of the guest’s home for free without the need of visiting the showrooms in case of cash. In Financing case according to the terms and conditions of financing entity.The service is applied professionally from the moment the online purchase journey begins and the rest of the procedure is completed over the phone with one of our sales consultants, who is your own personal consultant, by providing you with all the required documents and forms during each stage of the purchase. The service is available for paying easily by cash directly through the online payment service, using Mada Card, Visa, or Master Card.Alternatively, you can pay in one of Abdul Latif Jameel Retail Company Limited centers, or by financing from Abdul Latif Jameel Finance Company or through the banks contracting with Abdul Latif Jameel Company. All you have to do is choose the car and the method of purchase (cash or financing) and fill out the purchase order form online. The sales consultant will then contact you to complete the purchase as per the established process.",
    },
    {
      title: "What are your working hours?",
      content:
        "You can register the purchase order online around the clock or call the unified number 8004400055 from Saturday to Thursday from 08:00 until 22:00 Friday from 14:00 until 22:00 and contact directly with the customer service team to submit the purchase request.",
    },
    {
      title: "When will the sales consultant contact me?",
      content:
        "You will be contacted by the online team within 48 hours of correctly submitting the order. If the communication does not take place - you can call the unified number and let us know how to serve you better.",
    },
    {
      title: "What are the procedures for online shopping trip?",
      content:
        "You can contact us, order online, or use the unified number or social media channels. Your sales consultant will be appointed and will work with you throughout the entire purchase/financing process to answer all inquiries, helping to choose the perfect vehicle for you, arrange financing and scheduling delivery. In regard to any legal forms and financial documents that you will need to sign before and upon delivery, the entire process will be handled smoothly online or over the phone without you having to leave your home or office in most cases.",
    },
    {
      title: "Can I buy any car model by ordering online?",
      content:
        "Yes, you can buy all models of cars available according to availability, terms and conditions.",
    },
    {
      title: "Can I see the vehicles on the ground?",
      content:
        "Of course, you can view the car on the ground - according to availability - by visiting one of the Abdul Latif Jameel centers around the Kingdom, and then complete the purchase by registering an online purchase order on the website.",
    },
  ];

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="lg:max-w-2xl px-0 mx-auto p-4">
      <div className="bg-red-500 h-1 w-32 mx-auto  my-6" />
      <h1 className="text-2xl font-bold text-center mb-8">OVERVIEW</h1>

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

export default Accordion2;
