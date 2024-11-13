"use client";
import { useState } from "react";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";

const WarrantyAccordion = () => {
  const [openSection, setOpenSection] = useState(null);

  const accordionData = [
    {
      title: "Introduction",
      content: (
        <div className="space-y-4">
          <h2 className="font-bold">Keep this booklet in your vehicle.</h2>
          <p className="text-gray-600">
            Warranty information is provided to protect your investment with an
            outline of procedures for solving any problem you may have with your
            new Toyota vehicle. Your Owners Manual also contains important
            information. Be sure to read it carefully.
          </p>
          <p className="text-gray-600">
            All information is based on the latest data available at the time of
            publication, and is subject to change without notice.
          </p>
          <p className="text-gray-600">
            Please be aware that any modification to your Toyota vehicle could
            affect its performance, safety or durability and may even violate
            governmental regulations.
          </p>
        </div>
      ),
    },
    {
      title: "What is covered?",
      content: (
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold">Warranty begins</h3>
            <p className="text-gray-600">
              The warranty period begins on the date the vehicle is first
              delivered or put into use (in-service date).
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Basic Coverage Period</h3>
            <p className="text-gray-600">
              Toyota warrants that it will either repair or replace any part of
              the new Toyota vehicle that is defective in material or
              workmanship under normal use except those items listed under What
              in Not Covered for a period of 36 months or 100,000 kilometers,
              whichever comes first. Warranty Coverage is fully transferable to
              subsequent vehicle owner.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "What is not covered?",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">
              Factors beyond the Manufacturers Control:
            </h3>
            <ul className="list-disc ml-6 text-gray-600 space-y-2 mt-2">
              <li>
                Repairs and adjustments required as a result of misuse (e.g.,
                racing, overloading), negligence, modification, alteration,
                tampering, disconnection, improper adjustments or repairs,
                accident and use of add-on parts/material are not covered.
              </li>
              <li>
                Cosmetic or surface corrosion from stone chips or scratches in
                the paint is not covered.
              </li>
              <li>
                Damage or surface corrosion from the environment such as acid
                rain, airborne fall-out (chemicals, tree sap, etc.), salt, hail,
                windstorms, lightning, and floods is not covered.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "How to get assistance?",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Customer Satisfaction</h3>
            <p className="text-gray-600">
              At Toyota we are proud of our total commitment to quality design,
              workmanship, and customer satisfaction. Every Toyota dealership in
              this country has the tools, equipment, and training needed to
              service and repair your Toyota vehicle.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Information Needed</h3>
            <ul className="list-disc ml-6 text-gray-600 space-y-2 mt-2">
              <li>
                An accurate description of the problem including the conditions
                under which it occurs
              </li>
              <li>Vehicle model and year</li>
              <li>Vehicle identification number (VIN)</li>
              <li>Present mileage</li>
              <li>Date of purchase</li>
              <li>Selling and servicing dealer</li>
              <li>Service history of your vehicle</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Keep your car in top condition with proper service",
      content: (
        <div className="space-y-4">
          <h3 className="font-semibold">Pre-delivery Service</h3>
          <p className="text-gray-600">
            To assure your satisfaction with the appearance and performance of
            your new Toyota vehicle, your dealer is responsible to perform
            specified factory-approved services for cleaning, inspecting, and
            testing of your Toyota vehicle. This was done to be sure that your
            Toyota vehicle was delivered to you in top condition after being
            shipped from the factory.
          </p>
          <p className="text-gray-600">
            First 1,000 km Maintenance Service You are entitled to Free 1,000 km
            Maintenance Service upon presentation of this Warranty Booklet to
            your Toyota dealer. This maintenance service shall be performed in
            accordance with your Owners Manual at no charge except for any
            lubricants, fluids or filters used since they are regular
            maintenance service items.
          </p>
          <p className="text-gray-600">
            Periodic Maintenance Service Proper maintenance will help insure
            maximum performance, greater reliability and longer life for your
            Toyota vehicle. To maintain your Toyota vehicle in top driving
            condition, it is vitally important to have it inspected and serviced
            periodically in accordance with the maintenance services listed in
            your Owners Manual.
          </p>
        </div>
      ),
    },
    {
      title: "Owner's responsibilities",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Obtaining Warranty Service</h3>
            <p className="text-gray-600">
              You are responsible for delivering your vehicle to any authorized
              Toyota dealer in this country in order to obtain warranty service.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Maintenance</h3>
            <p className="text-gray-600">
              You are responsible for properly operating, maintaining, and
              caring for your Toyota vehicle in accordance with the instructions
              contained in your Owners Manual.
            </p>
            <p className="text-gray-600">
              If your vehicle is subject to use under severe driving conditions,
              you should follow the maintenance requirements specified
              accordingly in your Owners Manual.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Maintenance Records</h3>
            <p className="text-gray-600">
              You are responsible for keeping maintenance records since it may
              be necessary in some instances for you to show that the required
              maintenance has been performed.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "What can you do to help protect your Toyota against corrosion?",
      content: (
        <div className="space-y-4">
          <p className="font-semibold">
            In order to help protect your vehicle against corrosion, it is
            important that you care for your vehicle regularly, following these
            suggestions:
          </p>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li>
              Wash regularly using cold clean water and mild vehicle wash soap.
            </li>
            <li>
              If insects, tar, or other similar deposits have accumulated on
              your vehicle, wash it as soon as possible.
            </li>
            <li>Wash your vehicle in the shade.</li>
          </ul>

          <p className="font-semibold mt-4">
            Under certain conditions, special care should be taken to protect
            your Toyota vehicle against corrosion:
          </p>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li>
              If you drive on salted or dust controlled roads, or if you drive
              near the ocean, hose off the under carriage at least once a month.
            </li>
            <li>
              It is important that the drain holes in the lower edges of the
              doors and rocker panels be kept clear.
            </li>
            <li>
              If you detect any stone chips or scratches in the paint, touch
              them up immediately.
            </li>
            <li>
              If you do much driving on gravel roads, consider installing mud or
              stone shields behind each wheel.
            </li>
            <li>
              If you carry special cargo, such as chemicals, fertilizers, deicer
              salt, etc., be sure that such materials are well packaged and
              sealed.
            </li>
            <li>
              If your Toyota vehicle is damaged due to an accident or similar
              cause which destroys the paint and protective coating, have your
              vehicle repaired as soon as possible. The cost of such repairs is
              considered the responsibility of the owner.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="lg:p-12  mx-auto p-4 space-y-2">
      {accordionData.map((section, index) => (
        <div key={index} className="border border-gray-200 rounded-lg">
          <button
            className="w-full p-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
            onClick={() => setOpenSection(openSection === index ? null : index)}
          >
            <span className="font-semibold text-left">{section.title}</span>
            {openSection === index ? (
              <IoChevronUp className="text-red-500 w-6 h-6" />
            ) : (
              <IoChevronDown className="text-red-500 w-6 h-6" />
            )}
          </button>
          {openSection === index && (
            <div className="p-4 border-t border-gray-200">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WarrantyAccordion;
