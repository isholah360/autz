import React from "react";

const UrbanNote = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* General Maintenance Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            Notes for all the vehicles except SUPRA and URBAN CRUISER:
          </h2>
        </div>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-gray-200 pb-4">
            <div className="font-medium text-gray-700">Fuel Filter</div>
            <div className="space-y-1">
              <div className="text-gray-600">Out Tank every 40000 km</div>
              <div className="text-gray-600">In Tank every 80000 km</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-gray-200 pb-4">
            <div className="font-medium text-gray-700">SLLC (Coolant)</div>
            <div className="space-y-1">
              <div className="text-gray-600">First time after 160,000 km</div>
              <div className="text-gray-600">After that every 80,000 km</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="font-medium text-gray-700">Spark Plugs</div>
            <div className="space-y-1">
              <div className="text-gray-600">Normal type every 20,000 km</div>
              <div className="text-gray-600">Iridium type every 100,000 km</div>
            </div>
          </div>
        </div>
      </div>

      {/* Supra Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800">Notes for SUPRA:</h2>
        </div>
        <div className="space-y-3">
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 shrink-0"></div>
            <p className="text-sm text-gray-600">
              Replace both the engine oil and oil filter when the engine oil
              warning light appears, even if 12 months have not passed or when
              driven less than 12,000 km since the last oil change.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 shrink-0"></div>
            <p className="text-sm text-gray-600">
              For Brake pads: Replace when the brake warning light appears.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 shrink-0"></div>
            <p className="text-sm text-gray-600">
              For Brake fluid: First replace at 36 months, then replace every 24
              months.
            </p>
          </div>
        </div>
      </div>

      {/* Urban Cruiser Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            Notes for Urban Cruiser:
          </h2>
        </div>
        <div className="space-y-3">
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 shrink-0"></div>
            <p className="text-sm text-gray-600">
              Engine coolant: First replace at 160,000 km (96 M), then replace
              every 80,000 km (48 M).
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 shrink-0"></div>
            <p className="text-sm text-gray-600">
              Spark plugs (Iridium): Replace every 105,000 km.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 shrink-0"></div>
            <p className="text-sm text-gray-600">
              Fuel filter: Replace every 105,000 km.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 shrink-0"></div>
            <p className="text-sm text-gray-600">
              Parking brake lever and cable: Check, Adjustment (1st 15,000 km
              only)
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 shrink-0"></div>
            <p className="text-sm text-gray-600">
              Automatic transmission fluid: Replace every 165,000 km.
            </p>
          </div>
        </div>
      </div>

      {/* Important Note Section */}
      <div className="bg-red-50 rounded-lg shadow-lg p-6">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-red-600">Important Note</h2>
        </div>
        <p className="text-sm text-red-700">
          Periodic maintenance schedule below is to illustrate the common points
          in a required maintenance. Please refer to your owners Manual/
          Warranty booklet for specific / exact periodic maintenance
          information.
        </p>
      </div>
    </div>
  );
};

export default UrbanNote;
