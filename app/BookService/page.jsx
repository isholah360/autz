"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import Cap from "../../public/cap.png";

const BookService = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isOpen2, setIsOpen2] = useState(false);
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
      <div className="lg:p-12  p-4 ">
        <p className="font-bold  text-4xl">Book A Service</p>
        <p className="my-8">
          Booking an appointment at our award winning service centers could not
          be easier. Simply fill out the appointment form and we will be in
          touch within 48 hours to arrange a time and day for you to have your
          car looked at.
          <br />
          <br />
          The form should take less than 5 minutes to complete. But you can try
          our new service app which will provide more vivid experience and
          information about your service.
        </p>
      </div>

      <div className="px-12 w-full">
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
          </div>
        </div>
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
                Model Year
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option>2006</option>
                <option>2007</option>
                <option>2008</option>
                <option>2009</option>
                <option>2010</option>
                <option>2011</option>
                <option>2012</option>
                <option>2013</option>
                <option>2014</option>
                <option>2015</option>
                <option>2016</option>
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
              </select>
            </div>

            <div>
              {" "}
              <label
                for="countries"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Model
              </label>
              <input
                type="text"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Hybrid"
                required
              />
            </div>
          </div>
        </div>
        <div>
          <p className="font-bold py-8">
            Choose a city and center for your service
          </p>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
            <div>
              {" "}
              <label
                for="countries"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                City
              </label>
              <input
                type="text"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="City"
                required
              />
              {/* <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option>Al Hafuf</option>
                <option>Jeddah</option>
                <option>Riyadh</option>
                <option>Al Madinah Al Munawwarah</option>
                <option>Burydah</option>
                <option>Unayzah</option>
                <option>Al Jubail</option>
                <option>Yanbu</option>
                <option>Al khafji</option>
                <option>Arar</option>
                <option>At Taif</option>
                <option>Al khubar</option>
                <option>Al Wajh</option>
                <option>Baha</option>
              </select> */}
            </div>

            <div>
              {" "}
              <label
                for="countries"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Center
              </label>
              <input
                type="text"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Center"
                required
              />
              {/* <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option>GLE HEV</option>
                <option>LIMITED HEV 4x4</option>
              </select> */}
            </div>
          </div>
        </div>

        {/* Appointment information */}
        <div>
          <p className="font-bold py-8">Appointment Information</p>
          <div className="grid lg:grid-cols-2 grid-cols-1  gap-8">
            <div className="border flex flex-row justify-between items-center p-4">
              <p>Other Services</p>
              <input type="radio" />
            </div>
            <div className="border flex flex-row justify-between items-center p-4">
              <p>Periodic Maintenance</p>
              <input type="radio" />
            </div>

            <div>
              <label className="block mb-2  font-bold text-black ">
                What is your prefered date for your service?
              </label>
              <div className="border flex flex-row justify-between items-center p-4">
                <input type="date" className="border-none outline-none" />
              </div>
            </div>
            <div></div>
            <div>
              <label className="block mb-2  font-bold text-black ">
                Please add any extra information about your appointment request
              </label>
              <textarea
                className="border h-40 w-full p-4"
                placeholder="Enter message (maximum 300 characters"
              />
            </div>
          </div>
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
      </div>
    </div>
  );
};

export default BookService;
