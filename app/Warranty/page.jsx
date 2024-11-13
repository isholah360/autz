"use client";
import React from "react";
import Accordion from "../../components/Warranty/Accordion";
import Image from "next/image";
import Warrantypix from "../../public/Warranty.jpg";

const Warranty = () => {
  return (
    <div>
      <p className="text-center  font-bold py-12 text-3xl">WARRANTY</p>
      <Image src={Warrantypix} className="w-full h-[70vh]" alt="" />
      <Accordion />
    </div>
  );
};

export default Warranty;
