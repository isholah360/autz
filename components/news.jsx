"use client";
import Image from "next/image";
import React, { useState } from "react";
import Lease from "../../../public/lease.png";
import Cash from "../../../public/cash.png";
import { FaAngleRight } from "react-icons/fa6";
import Cap from "../../../public/cap.png";

import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const OrderForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const [isOpen2, setIsOpen2] = useState(false);
  const [selectedMethods, setSelectedMethods] = useState({
    selectAll: false,
    sms: false,
    email: false,
    whatsapp: false,
    socialMedia: false,
    phoneCall: false,
  });

  const handleSelectAll = (checked) => {
    setSelectedMethods({
      selectAll: checked,
      sms: checked,
      email: checked,
      whatsapp: checked,
      socialMedia: checked,
      phoneCall: checked,
    });
  };

  const handleMethodChange = (method, checked) => {
    const newMethods = {
      ...selectedMethods,
      [method]: checked,
    };

    // Update selectAll based on other checkboxes
    const allSelected = [
      "sms",
      "email",
      "whatsapp",
      "socialMedia",
      "phoneCall",
    ].every((key) => newMethods[key]);

    setSelectedMethods({
      ...newMethods,
      selectAll: allSelected,
    });
  };

  return (
    <div className="py-12">
      <p className="text-center text-4xl font-bold">ORDER ONLINE</p>
      <p className="text-center lg:px-32 px-12">
        Fill out this quick form to start the purchase process, and a customer
        service agent will get back to you within 48 hours. By filling out this
        form you are under no oblligation to purchase a vehicle from Toyota
      </p>
      <p className="py-6 text-center font-semibold italic">
        Please tell us how would you like to finance this purchase
      </p>
      <form className="px-12 w-full">
        <div className="flex items-center justify-center gap-8 mx-auto">
          <div className="group flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-2xl shadow-black transition-shadow duration-300">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-50 group-hover:bg-red-100 transition-colors duration-300">
              <div className="text-red-600">
                <Image src={Cash} alt="" />
              </div>
            </div>
            <div className="inline-flex mt-4 gap-4 items-center">
              <div className=" text-red-600">
                <FaAngleRight />
              </div>
              <h2 className=" font-semibold text-sm text-gray-900 text-center">
                Cash
              </h2>
            </div>
          </div>
          <div className="group flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-2xl shadow-black transition-shadow duration-300">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-50 group-hover:bg-red-100 transition-colors duration-300">
              <div className="text-red-600">
                <Image src={Lease} alt="Lease"/>
              </div>
            </div>
            <div className="inline-flex mt-4 gap-4 items-center">
              <div className=" text-red-600">
                <FaAngleRight />
              </div>
              <h2 className=" font-semibold text-sm text-gray-900 text-center">
                Lease
              </h2>
            </div>
          </div>
        </div>
        <p className="text-center font-light py-4">
          Buy your car outright with a <span className="font-bold"> Cash </span>
          purchase
        </p>

        {/* Vehicle Information */}
        <div>
          <p className="font-bold py-8">Vehicle Information</p>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
            <div>
              {" "}
              <label
                for="countries"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Vehicle Brand
              </label>
              <input
                type="text"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Toyota"
                required
              />
            </div>

            <div>
              {" "}
              <label
                for="countries"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Grade
              </label>
              <input
                type="text"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Hybrid 2024"
                required
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <p className="font-bold py-8">Contact Information</p>
          <div className="grid lg:grid-cols-2 grid-cols-1  gap-8">
            <div className="">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                First Name
              </label>
              <input
                type="text"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Last Name
              </label>
              <input
                type="text"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Tim"
                required
              />
            </div>
            <div className="">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Email
              </label>
              <input
                type="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="John@gmail.com"
                required
              />
            </div>
            <div className="">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Phone No
              </label>
              <input
                type="number"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="05xxxxxxx"
                required
              />
            </div>
            <div className="">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Tell us your closet city
              </label>
              <input
                type="text"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="City Name"
                required
              />
            </div>
          </div>
        </div>

        <div className="py-8">
          <label className="block mb-2  font-bold text-black ">
            Please add any extra information about your Purchase request
          </label>
          <textarea
            className="border h-40 w-full p-4"
            placeholder="Enter message (maximum 300 characters"
          />
        </div>
        {/* Terms and Condition */}
        <div className="flex items-start py-5">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
              required
            />
          </div>
          <label
            for="terms"
            className="ms-2 text-sm font-medium text-gray-900 "
          >
            I agree with the{" "}
            <a href="#" className="text-blue-600 hover:underline ">
              terms and conditions
            </a>
          </label>
        </div>
        <div className="border rounded-lg">
          <div className="p-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex justify-between items-center"
            >
              <div className="flex items-center space-x-1">
                <span className="text-gray-800">
                  By giving us consent, you agree that you have full legal
                  capacity and have read the
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 ml-1"
                  >
                    privacy policy
                  </a>
                </span>
              </div>
              {isOpen ? (
                <MdKeyboardArrowUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
              ) : (
                <MdKeyboardArrowDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
              )}
            </button>

            {isOpen && (
              <div className="mt-4 text-gray-600 leading-relaxed">
                By submitting this form, I agree to share my Personal Data as
                listed in the Privacy Policy, being processed for customer
                registration and providing the related services I have availed.
                I also understand that such processing includes receiving
                communications related to my order or services in the form of
                updates, reminders, inquiry responses, etc. from Toyota. I
                understand that such processing includes sharing my personal
                data with third parties for the purposes mentioned in the
                Privacy Policy.
              </div>
            )}
          </div>
        </div>
        {/* Socials */}
        <div className="py-12 rounded-lg">
          <div className="p-4 border-t">
            <p className="text-gray-800 mb-4">
              I consent to receive direct marketing communications from Toyota
              as indicated by me through the below-mentioned checkboxes.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedMethods.selectAll}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">Select All</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedMethods.sms}
                  onChange={(e) => handleMethodChange("sms", e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">SMS</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedMethods.email}
                  onChange={(e) =>
                    handleMethodChange("email", e.target.checked)
                  }
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">Email</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedMethods.whatsapp}
                  onChange={(e) =>
                    handleMethodChange("whatsapp", e.target.checked)
                  }
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">Whatsapp</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedMethods.socialMedia}
                  onChange={(e) =>
                    handleMethodChange("socialMedia", e.target.checked)
                  }
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">Social Media</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedMethods.phoneCall}
                  onChange={(e) =>
                    handleMethodChange("phoneCall", e.target.checked)
                  }
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">Phone Call</span>
              </label>
            </div>

            <p className="mt-6 text-gray-600 text-sm">
              You may withdraw your consent at any time by visiting the consent
              withdrawal OrderForm here{" "}
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Click Here
              </a>
            </p>
          </div>
        </div>
        <div className="mb-6 flex items-center justify-center">
          {/* Note: Replace with actual reCAPTCHA implementation */}
          <div className="border rounded p-4 w-fit bg-gray-50">
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-gray-700">I am not a robot</span>
              <Image src={Cap} alt="reCAPTCHA" className="h-10 w-24" />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition-colors"
        >
          SUBMIT
        </button>
        <div className="mt-6 space-y-2 text-sm text-gray-600">
          <p>
            *1 Denotes a mandatory field. Not filling in the required field will
            result in the inability to engage with representatives of our
            customers.
          </p>
          <p>
            *2 These communications may include but are not limited to
            promotional offers, announcements and other marketing messages.
          </p>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;