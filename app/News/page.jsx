import Image from "next/image";
import React from "react";
import Gallery1 from "../../public/Gallery1.webp";
import Gallery2 from "../../public/Gallery2.png";
import Gallery3 from "../../public/Gallery3.png";
import Admin from "../../public/Admin.png";
import Link from "next/link";

const News = () => {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="flex flex-col items-center">
          <h2 className="text-center text-3xl font-bold  pb-6">ALL ARTICLES</h2>

          {/* Content */}
          <div className="mb-6 grid gap-4 sm:grid-cols-2 sm:justify-items-stretch md:mb-10 md:grid-cols-3 lg:mb-12 lg:gap-6">
            <Link
              href="/News/NewsDetails"
              className="flex flex-col gap-4 rounded-md border border-solid border-gray-300 px-4 py-8 md:p-0"
            >
              <Image src={Gallery1} alt="" className="h-60 object-cover" />
              <div className="px-6 py-4">
                <p className="mb-4 text-sm font-semibold uppercase text-gray-500">
                  vehicles
                </p>
                <p className="mb-4 text-xl font-semibold">
                  The latest news with HalaAutos
                </p>
                <p className="mb-6 text-sm text-gray-500 sm:text-base lg:mb-8">
                  Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit
                  amet luctus venenatis elit ut aliquam, purus sit amet luctus
                  venenatis
                </p>
                <div className="flex">
                  <Image
                    src={Admin}
                    alt=""
                    className="mr-4 h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <h6 className="text-base font-bold">Admin</h6>
                    <div className="flex flex-col lg:flex-row">
                      <p className="text-sm text-gray-500">March 10, 2024</p>
                      <p className="mx-2 hidden text-sm text-gray-500 lg:flex">
                        -
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              href="/News/NewsDetails"
              className="flex flex-col gap-4 rounded-md border border-solid border-gray-300 px-4 py-8 md:p-0"
            >
              <Image src={Gallery2} alt="" className="h-60 object-cover" />
              <div className="px-6 py-4">
                <p className="mb-4 text-sm font-semibold uppercase text-gray-500">
                  corporate
                </p>
                <p className="mb-4 text-xl font-semibold">
                  The latest news with HalaAutos
                </p>
                <p className="mb-6 text-sm text-gray-500 sm:text-base lg:mb-8">
                  Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit
                  amet luctus venenatis elit ut aliquam, purus sit amet luctus
                  venenatis
                </p>
                <div className="flex">
                  <Image
                    src={Admin}
                    alt=""
                    className="mr-4 h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <h6 className="text-base font-bold">Admin</h6>
                    <div className="flex flex-col lg:flex-row">
                      <p className="text-sm text-gray-500">Oct 8, 2024</p>
                      <p className="mx-2 hidden text-sm text-gray-500 lg:flex">
                        -
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              href="/News/NewsDetails"
              className="flex flex-col gap-4 rounded-md border border-solid border-gray-300 px-4 py-8 md:p-0"
            >
              <Image src={Gallery3} alt="" className="h-60 object-cover" />
              <div className="px-6 py-4">
                <p className="mb-4 text-sm font-semibold uppercase text-gray-500">
                  lifestyle
                </p>
                <p className="mb-4 text-xl font-semibold">
                  The latest news with HalaAutos
                </p>
                <p className="mb-6 text-sm text-gray-500 sm:text-base lg:mb-8">
                  Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit
                  amet luctus venenatis elit ut aliquam, purus sit amet luctus
                  venenatis
                </p>
                <div className="flex">
                  <Image
                    src={Admin}
                    alt=""
                    className="mr-4 h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <h6 className="text-base font-bold">Admin</h6>
                    <div className="flex flex-col lg:flex-row">
                      <p className="text-sm text-gray-500">Jan 17, 2024</p>
                      <p className="mx-2 hidden text-sm text-gray-500 lg:flex">
                        -
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          {/* Button */}
          <Link
            href="#"
            className="rounded-md bg-red-500 px-6 py-3 text-center font-semibold text-white"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;
