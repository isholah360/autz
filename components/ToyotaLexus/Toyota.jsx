import React from "react";

import Image from "next/image";

import Pass1 from "../../public/pass1.png";
import Pass2 from "../../public/pass2.png";
import Pass3 from "../../public/pass3.jpeg";
import Pass4 from "../../public/pass4.png";

import Pass5 from "../../public/pass6.jpeg";
import Pass6 from "../../public/pass6.png";
import Suv1 from "../../public/suv1.jpg";
import Suv2 from "../../public/suv2.png";
import Suv3 from "../../public/suv3.png";
import Suv4 from "../../public/suv4.jpeg";
import Suv5 from "../../public/suv5.webp";
import Suv6 from "../../public/suv6.png";
import Suv7 from "../../public/suv7.png";

import comm1 from "../../public/comm1.png";
import comm2 from "../../public/comm2.png.webp";
import comm3 from "../../public/comm3.png";
import comm4 from "../../public/comm4.png";
import comm5 from "../../public/comm5.png";
import comm6 from "../../public/comm6.webp";
import comm7 from "../../public/comm7.png";

const Toyota = () => {
  return (
    <>
      <div>
        <p className="px-12 font-bold pt-6 uppercase text-red-500">Passenger</p>
        <div className="mt-8 grid lg:grid-cols-4 grid-cols-2 lg:gap-6 gap-2">
          <div className="text-center">
            <Image
              src={Pass1}
              alt="Yaris 2024"
              className="mx-auto h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">YARIS 2024</p>
          </div>
          <div className="text-center">
            <Image
              src={Pass2}
              alt="Corolla 2024"
              className="mx-auto h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">COROLLA 2024</p>
          </div>
          <div className="text-center">
            <Image
              src={Pass3}
              alt="Camry 2025"
              className="mx-auto h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">CAMRY 2025</p>
          </div>
          <div className="text-center">
            <Image
              src={Pass4}
              alt="Crown 2023"
              className=" h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">CROWN 2023</p>
          </div>
          <div className="text-center">
            <Image
              src={Pass5}
              alt="Crown 2023"
              className=" h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">CROWN 2023</p>
          </div>{" "}
          <div className="text-center">
            <Image
              src={Pass6}
              alt="Crown 2023"
              className=" h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">CROWN 2023</p>
          </div>
        </div>
      </div>

      <div>
        <p className="px-12 font-bold py-6 uppercase text-red-500">SUV & MPV</p>
        <div className="mt-8 grid lg:grid-cols-4 grid-cols-2 lg:gap-6 gap-2">
          <div className="text-center">
            <Image
              src={Suv1}
              alt="Yaris 2024"
              className="mx-auto h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">RAIZE 2024</p>
          </div>
          <div className="text-center">
            <Image
              src={Suv2}
              alt="Corolla 2024"
              className="mx-auto h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">URBAN CRUISER 2024</p>
          </div>
          <div className="text-center">
            <Image
              src={Suv3}
              alt="Camry 2025"
              className="mx-auto h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">VELOZ 2025</p>
          </div>
          <div className="text-center">
            <Image
              src={Suv4}
              alt="Crown 2023"
              className=" h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">COROLLA CROSS 2024</p>
          </div>
          <div className="text-center">
            <Image
              src={Suv5}
              alt="Crown 2023"
              className=" h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">RAV 4</p>
          </div>{" "}
          <div className="text-center">
            <Image
              src={Suv6}
              alt="Crown 2023"
              className=" h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">INNOVA 2024</p>
          </div>
          <div className="text-center">
            <Image
              src={Suv7}
              alt="Crown 2023"
              className=" h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">FORTUNER 2025</p>
          </div>
        </div>
      </div>

      <div>
        <p className="px-12 font-bold py-6 uppercase text-red-500">
          COMMERCIAL
        </p>
        <div className="mt-8 grid lg:grid-cols-4 grid-cols-2 lg:gap-6 gap-2">
          <div className="text-center">
            <Image
              src={comm1}
              alt="Yaris 2024"
              className="mx-auto h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">HILUX SINGLE CAB 2025</p>
          </div>
          <div className="text-center">
            <Image
              src={comm2}
              alt="Corolla 2024"
              className="mx-auto h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">HILUX DOUBLE CAB 2024</p>
          </div>
          <div className="text-center">
            <Image
              src={comm3}
              alt="Camry 2025"
              className="mx-auto h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">LAND CRUISER PICKUP 2024</p>
          </div>
          <div className="text-center">
            <Image
              src={comm4}
              alt="Crown 2023"
              className=" h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">LITEACE VAN 2024</p>
          </div>
          <div className="text-center">
            <Image
              src={comm5}
              alt="Crown 2023"
              className=" h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">COASTER 2024</p>
          </div>{" "}
          <div className="text-center">
            <Image
              src={comm6}
              alt="Crown 2023"
              className=" h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">HIACE BUS 2025</p>
          </div>
          <div className="text-center">
            <Image
              src={comm7}
              alt="Crown 2023"
              className=" h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">HIACE VAN 2025</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toyota;
