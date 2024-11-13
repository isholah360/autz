"use client";
import Image from "next/image";
import React from "react";
import order from "../../public/order.jpg";
import Accordion1 from "../../components/OrderOnline/Accordion1";
import Accordion2 from "../../components/OrderOnline/Accordion2";
import Accordion3 from "../../components/OrderOnline/Accordion3";
import Accordion4 from "../../components/OrderOnline/Accordion4";
import Accordion5 from "../../components/OrderOnline/Accordion5";
import Link from "next/link";

const OrderOnline = () => {
  return (
    <div className="relative ">
      <Image src={order} className="w-full h-[70vh]" />

      <div className="h-1 w-44 bg-red-500 my-24 mx-auto" />
      <div className="py-12 lg:p-20 p-4">
        <iframe
          className="  left-0 w-full h-[500px]"
          src={`https://www.youtube.com/embed/M-6--Uu-5DQ?si=oLZtSiHy4gd47hJk`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <div className="lg:p-12 p-4 text-gray-800">
        <h1 className="text-2xl font-bold text-center text-black">
          Enjoy the experience of buying new car online and get it to the door
          of your home for free.
        </h1>
        <p className="py-4 text-center">Register your order now</p>
        <Link href="/OrderOnline/OrderForm">
          <button className="flex justify-center items-center mx-auto mt-6 gap-2 w-44 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-red-700 hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">
            ORDER ONLINE
          </button>
        </Link>
        <p className="py-8">
          Enjoy the experience of buying your new car online service that was
          launched in 2017 to make buying your new car an unforgettable
          experience. You can browse the Toyota Saudi website with ease and
          comfort, whether at home or in your workplace, providing you a
          showroom that’s available 24 hours a day, seven days a week throughout
          the year It displays all models, classes, specifications, features,
          colors, prices, and car offers. then, after choosing the right car for
          you and recording your data in the online purchase order form
          available icon next to each car on the site, the sales consultant will
          contact you as soon as possible.
          <br />
          <br /> In the online order service, we employ only a trained and
          fully-qualified work team which has all the necessary expertise to
          provide the best advice and tips and financing solutions that suit you
          and to serve you completely in the knowledge that your new car will be
          delivered to your door free of charge wherever you are in the Kingdom.
        </p>
        <p className="font-extrabold">
          Submit your purchase order online with ease. You simply have to
          following below steps:
        </p>
        <br />
        <p>
          First: Visit the Toyota Saudi website and choose the car that is right
          for you.
        </p>
        <br />
        <p>
          Second: Submit your purchase interest. Either through clicking on the
          online order icon for the car you have chosen, or calling our
          toll-free number 8004400055, or simply communicating with us through
          social media channels.
        </p>
        <br />
        <p>
          Third: One of sales consultants will contact you within 48 hours of
          registering the purchase order and will explain to you all the
          specifications and features of the chosen car, along with any other
          appropriate options and with a full explanation of the monthly offers,
          if any, as well as the available financing solutions, either through
          Abdul Latif Jameel Finance Company or through the available financing
          banks.
        </p>
        <br />
        <p>
          Fourth: your advisor will be happy to explain the sale procedures. If
          you wish to pay by cash, they will explain to you the easy online
          payment methods available that enable you to purchase easily and
          safely through the Mada Card, Visa, or Master Card. Or you can pay by
          direct transfer to the companys accounts. they will be able to provide
          you with all the required documents in the event of a desire to
          purchase through financing solutions available and help complete the
          purchase process for you through the approved financing authorities.
        </p>
        <br />

        <p>Fifth: your car will be delivered to your door for free.</p>
        <br />
        <p>
          * Terms and conditions apply in addition to the terms of the financing
          entity
        </p>
        <br />
        <p className="text-red-500 font-bold">Features:</p>
        <ol>
          <li>*Sales consulting service</li>
          <li>*Monthly offers</li> <li>*Cash / financing offers</li>{" "}
          <li>*Online payment</li> <li>*Free home delivery</li>
        </ol>

        <Accordion1 />
        <Accordion2 />
        <Accordion3 />
        <Accordion4 />
        <Accordion5 />
      </div>
    </div>
  );
};

export default OrderOnline;
