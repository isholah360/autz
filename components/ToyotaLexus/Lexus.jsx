import React from "react";
import Image from "next/image";

import Sedan1 from "../../public/Sedan1.png";
import Sedan2 from "../../public/Sedan2.png";
import Sedan3 from "../../public/Sedan3.jpeg";
import Sedan4 from "../../public/Sedan4.png";
import Sedan5 from "../../public/Sedan5.png";
import Sedan6 from "../../public/Sedan6.webp";
import Sedan7 from "../../public/Sedan7.webp";
import Sedan8 from "../../public/Sedan8.webp";
import Sedan9 from "../../public/Sedan9.png";
import Sedan10 from "../../public/Sedan10.webp";
import Sedan11 from "../../public/Sedan11.png";

import Coupe1 from "../../public/Coupe1.webp";
import Coupe2 from "../../public/Coupe2.png";

import Hybrid1 from "../../public/Hybrid1.webp";
import Hybrid2 from "../../public/Hybrid2.png";
import Hybrid3 from "../../public/Hybrid3.png";
import Hybrid4 from "../../public/Hybrid4.webp";
import Hybrid5 from "../../public/Hybrid5.webp";

import Perf1 from "../../public/Perf1.png";
import Perf2 from "../../public/Perf2.png";

const Lexus = () => {
  return (
    <>
      <div>
        <p className="px-12 font-bold pt-6 uppercase text-red-500">sedan</p>
        <div className="mt-8 grid lg:grid-cols-4 grid-cols-2 lg:gap-6 gap-2">
          <div className="text-center">
            <Image
              src={Sedan1}
              alt="Yaris 2024"
              className="mx-auto h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">Sedan IS</p>
          </div>
          <div className="text-center">
            <Image
              src={Sedan2}
              alt="Corolla 2024"
              className="mx-auto h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">Sedan ES</p>
          </div>
          <div className="text-center">
            <Image
              src={Sedan3}
              alt="Camry 2025"
              className="mx-auto h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">ES HYBRID</p>
          </div>
          <div className="text-center">
            <Image
              src={Sedan4}
              alt="Crown 2023"
              className=" h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">SEDAN LS</p>
          </div>
          <div className="text-center">
            <Image
              src={Sedan5}
              alt="Crown 2023"
              className=" h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">LS HYBRID</p>
          </div>{" "}
        </div>
      </div>

      <div>
        <p className="px-12 font-bold py-6 uppercase text-red-500">SUV</p>
        <div className="mt-8 grid lg:grid-cols-4 grid-cols-2 lg:gap-6 gap-2">
          <div className="text-center">
            <Image
              src={Sedan6}
              alt="Yaris 2024"
              className="mx-auto h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">UX HYBRID</p>
          </div>
          <div className="text-center">
            <Image
              src={Sedan7}
              alt="Corolla 2024"
              className="mx-auto h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">SEDAN NX</p>
          </div>
          <div className="text-center">
            <Image
              src={Sedan8}
              alt="Camry 2025"
              className="mx-auto h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">NX HYBRID</p>
          </div>
          <div className="text-center">
            <Image
              src={Sedan9}
              alt="Crown 2023"
              className=" h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">RX</p>
          </div>
          <div className="text-center">
            <Image
              src={Sedan10}
              alt="Crown 2023"
              className=" h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">RX HYBRID</p>
          </div>{" "}
          <div className="text-center">
            <Image
              src={Sedan11}
              alt="Crown 2023"
              className=" h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">LX</p>
          </div>
        </div>
      </div>

      <div>
        <p className="px-12 font-bold py-6 uppercase text-red-500">Coupe</p>
        <div className="mt-8 grid lg:grid-cols-4 grid-cols-2 lg:gap-6 gap-2">
          <div className="text-center">
            <Image
              src={Coupe1}
              alt="Yaris 2024"
              className="mx-auto h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">RC</p>
          </div>
          <div className="text-center">
            <Image
              src={Coupe2}
              alt="Corolla 2024"
              className="mx-auto h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">LC</p>
          </div>
        </div>
      </div>
      <div>
        <p className="px-12 font-bold py-6 uppercase text-red-500">Hybrid</p>
        <div className="mt-8 grid lg:grid-cols-4 grid-cols-2 lg:gap-6 gap-2">
          <div className="text-center">
            <Image
              src={Hybrid1}
              alt="Yaris 2024"
              className="mx-auto h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">UX HYBRID</p>
          </div>
          <div className="text-center">
            <Image
              src={Hybrid2}
              alt="Corolla 2024"
              className="mx-auto h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">ES HYBRID</p>
          </div>
          <div className="text-center">
            <Image
              src={Hybrid3}
              alt="Camry 2025"
              className="mx-auto h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">NX HYBRID</p>
          </div>
          <div className="text-center">
            <Image
              src={Hybrid4}
              alt="Crown 2023"
              className=" h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">LS HYBRID</p>
          </div>
          <div className="text-center">
            <Image
              src={Hybrid5}
              alt="Crown 2023"
              className=" h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">RX HYBRID</p>
          </div>{" "}
        </div>
      </div>
      <div>
        <p className="px-12 font-bold py-6 uppercase text-red-500">
          Performance
        </p>
        <div className="mt-8 grid lg:grid-cols-4 grid-cols-2 lg:gap-6 gap-2">
          <div className="text-center">
            <Image
              src={Perf1}
              alt="Crown 2023"
              className=" h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">RCF</p>
          </div>{" "}
          <div className="text-center">
            <Image
              src={Perf2}
              alt="Crown 2023"
              className=" h-48 w-full object-contain"
            />
            <p className="mt-2 font-semibold">LC</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lexus;
