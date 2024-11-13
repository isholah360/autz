"use client";
import Image from "next/image";
import React, { useState } from "react";
import Lease from "../../../public/lease.png";
import Cash from "../../../public/cash.png";
import { FaAngleRight } from "react-icons/fa6";
import Cap from "../../../public/cap.png";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { useRouter } from 'next/navigation';
import { useLanguage } from "@/components/context/language-context";
import { translations } from "@/components/context/translations";


const OrderForm = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [paymentType, setPaymentType] = useState("Cash");
  const [activeCard, setActiveCard] = useState(null);

  const { language } = useLanguage();
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


  const handleCash = (type) => {
    setPaymentType(type); 
    setActiveCard(type); 
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    vehicleBrand: "",
    grade: "",
    extraInfo: "",
  });

 
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const [isFormValid, setIsFormValid] = useState(true);
  const [termsError, setTermsError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleCheckboxChange = (e) => {
    setAgreedToTerms(e.target.checked);

    if (e.target.checked) {
      setTermsError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   console.log("clicked")
    const isValid = Object.values(formData).every(
      (value) => value !== "" && value !== false
    );

    if (!isValid) {
      setIsFormValid(false)
      return;
    }

   
    if (!agreedToTerms) {
      setTermsError("You must agree to the terms and conditions.");
      return;
    }

    try {
      const response = await fetch(
        "https://autz.onrender.com/api/customers/submit-customer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: formData.firstName,      
            lastName: formData.lastName,
            email:formData.email,
            phone:formData.phone,
            address:formData.city,
            brand:formData.vehicleBrand,
            vehicleInfo:formData.grade,
            additionalInfo:formData.extraInfo,
            paymentTypes: paymentType, 
            agreedToTerms:agreedToTerms, 
          }),
          credentials: "include",
        }
      );
        

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      const data = await response.json();
      if (data) {
      
        router.push("/");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    console.log("Form Submitted", formData);
  };

  // Disable submit button if terms are not agreed to
  const isSubmitDisabled = !agreedToTerms;
  console.log({formData, agreedToTerms, paymentType})
  return (
    <div className="py-12">
      <p className="text-center text-4xl font-bold">ORDER ONLINE</p>
      <p className="text-center lg:px-32 px-12">
        Fill out this quick form to start the purchase process, and a customer
        service agent will get back to you within 48 hours. By filling out this
        form you are under no obligation to purchase a vehicle from Toyota.
      </p>
      <p className="py-6 text-center font-semibold italic">
        Please tell us how would you like to finance this purchase.
      </p>
      <form onSubmit={handleSubmit} className="px-12 w-full">
      <div className="flex items-center justify-center gap-8 mx-auto">
   
      <div
        onClick={() => handleCash("Cash")}
        className={`group flex flex-col items-center p-6 bg-white rounded-lg shadow-xl transition-shadow duration-300 ${
          activeCard === "Cash" ? "shadow-2xl shadow-black" : "hover:shadow-2xl"
        }`}
      >
        <div
          className={`w-16 h-16 flex items-center justify-center rounded-full bg-red-50 group-hover:bg-red-100 transition-colors duration-300 ${
            activeCard === "Cash" ? "bg-red-100" : ""
          }`}
        >
          <div className="text-red-600">
            <Image src={Cash} alt="Cash" />
          </div>
        </div>
        <div className="inline-flex mt-4 gap-4 items-center">
          <div className="text-red-600">
            <FaAngleRight />
          </div>
          <h2 className="font-semibold text-sm text-gray-900 text-center">
          {translations[language].cash}
          </h2>
        </div>
      </div>

  
      <div
        onClick={() => handleCash("Lease")}
        className={`group flex flex-col items-center p-6 bg-white rounded-lg shadow-xl transition-shadow duration-300 ${
          activeCard === "Lease" ? "shadow-2xl shadow-black" : "hover:shadow-2xl"
        }`}
      >
        <div
          className={`w-16 h-16 flex items-center justify-center rounded-full bg-red-50 group-hover:bg-red-100 transition-colors duration-300 ${
            activeCard === "Lease" ? "bg-red-100" : ""
          }`}
        >
          <div className="text-red-600">
            <Image src={Lease} alt="Lease" />
          </div>
        </div>
        <div className="inline-flex mt-4 gap-4 items-center">
          <div className="text-red-600">
            <FaAngleRight />
          </div>
          <h2 className="font-semibold text-sm text-gray-900 text-center">
          {translations[language].lease}
          </h2>
        </div>
      </div>
    </div>
        {/* Vehicle Information */}
        <div>
          <p className="font-bold py-8">{translations[language].vehicleInfo}</p>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
            <div>
              <label
                htmlFor="vehicleBrand"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                {translations[language].brand}
              </label>
              <input
                type="text"
                name="vehicleBrand"
                value={formData.vehicleBrand}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Toyota"
                required
              />
            </div>

            <div>
              <label
                htmlFor="grade"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                {translations[language].grade}
              </label>
              <input
                type="text"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
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
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
            <div>
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                {translations[language].fname}
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                {translations[language].lname}
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Tim"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
               {translations[language].email}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="John@gmail.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                {translations[language].phone}
              </label>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="05xxxxxxx"
                required
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                {translations[language].address}
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="City Name"
                required
              />
            </div>
          </div>
        </div>

        {/* Extra Information */}
        <div className="py-8">
          <label
            htmlFor="extraInfo"
            className="block mb-2 font-bold text-black"
          >
            Please add any extra information about your Purchase request
          </label>
          <textarea
            name="extraInfo"
            value={formData.extraInfo}
            onChange={handleChange}
            className="border h-40 w-full p-4"
            placeholder="Enter message (maximum 300 characters)"
          />
        </div>

        {/* Terms and Condition */}
        <div className="flex items-start py-5">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              checked={agreedToTerms}
              onChange={handleCheckboxChange}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
              required
            />
          </div>
          {termsError && (
          <p className="text-red-500 text-sm mt-2">{termsError}</p>
        )}
          <label
              htmlFor="terms" 
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
          disabled={isSubmitDisabled}
          className={`w-full py-3 rounded-md text-white transition-colors ${
            isSubmitDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-700"
          }`}
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

        {/* Error Message */}
        {!isFormValid && (
          <p className="text-red-500 text-center mt-4">
            Please fill out all required fields before submitting the form.
          </p>
        )}
      </form>
    </div>
  );
};

export default OrderForm;
