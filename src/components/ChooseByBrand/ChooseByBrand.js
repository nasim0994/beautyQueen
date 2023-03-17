import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const ChooseByBrand = () => {
  return (
    <div className="mt-6">
      <div className="w-[95%] xl:w-[1280px] mx-auto bg-base-100 p-4 rounded-lg shadow-lg">
        <div className="flex justify-between sm:items-center border-b pb-2 border-primary">
          <h1 className="text-xl font-semibold text-neutral mb-2 sm:mb-0">
            Choose By Brand
          </h1>

          <div>
            <button className="w-max flex items-center text-primary font-semibold hover-go">
              <h1>Shop More</h1>
              <MdKeyboardArrowRight className="text-[22px] pt-px duration-200" />
            </button>
          </div>
        </div>

        {/* brand logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-3 mt-2">
          <Link
            to=""
            className="bg-gray-200 rounded shadow flex justify-center items-center"
          >
            <img
              src="https://jachai.com/_next/image?url=https%3A%2F%2Fproduction-jachai-service.s3-ap-southeast-1.amazonaws.com%2Fstatic_image%2F2023-02-26T11%3A04%3A28.930_VISON.png&w=128&q=75"
              alt=""
              className="w-28  h-24"
            />
          </Link>
          <Link
            to=""
            className="bg-gray-200 rounded shadow flex justify-center items-center"
          >
            <img
              src="https://jachai.com/_next/image?url=https%3A%2F%2Fproduction-jachai-service.s3-ap-southeast-1.amazonaws.com%2Fstatic_image%2F2023-02-08T11%3A15%3A03.223_itel.png&w=128&q=75"
              alt=""
              className="w-28  h-24"
            />
          </Link>
          <Link
            to=""
            className="bg-gray-200 rounded shadow flex justify-center items-center"
          >
            <img
              src="https://jachai.com/_next/image?url=https%3A%2F%2Fproduction-jachai-service.s3-ap-southeast-1.amazonaws.com%2Fstatic_image%2F2023-02-08T11%3A13%3A40.654_nokia.png&w=128&q=75"
              alt=""
              className="w-28  h-24"
            />
          </Link>
          <Link
            to=""
            className="bg-gray-200 rounded shadow flex justify-center items-center"
          >
            <img
              src="https://jachai.com/_next/image?url=https%3A%2F%2Fproduction-jachai-service.s3-ap-southeast-1.amazonaws.com%2Fstatic_image%2F2022-09-28T15%3A24%3A27.916_Realme.png&w=128&q=75"
              alt=""
              className="w-28  h-24"
            />
          </Link>
          <Link
            to=""
            className="bg-gray-200 rounded shadow flex justify-center items-center"
          >
            <img
              src="https://jachai.com/_next/image?url=https%3A%2F%2Fproduction-jachai-service.s3-ap-southeast-1.amazonaws.com%2Fstatic_image%2F2022-09-28T14%3A51%3A46.986_Xiaomi.png&w=128&q=75"
              alt=""
              className="w-28  h-24"
            />
          </Link>
          <Link
            to=""
            className="bg-gray-200 rounded shadow flex justify-center items-center"
          >
            <img
              src="https://jachai.com/_next/image?url=https%3A%2F%2Fproduction-jachai-service.s3-ap-southeast-1.amazonaws.com%2Fstatic_image%2F2023-02-06T13%3A14%3A08.199_Logo_of_Infinix.png&w=128&q=75"
              alt=""
              className="w-28  h-24"
            />
          </Link>
          <Link
            to=""
            className="bg-gray-200 rounded shadow flex justify-center items-center"
          >
            <img
              src="https://jachai.com/_next/image?url=https%3A%2F%2Fproduction-jachai-service.s3-ap-southeast-1.amazonaws.com%2Fstatic_image%2F2022-09-27T11%3A10%3A20.317_samsung.png&w=128&q=75"
              alt=""
              className="w-28  h-24"
            />
          </Link>
          <Link
            to=""
            className="bg-gray-200 rounded shadow flex justify-center items-center"
          >
            <img
              src="https://jachai.com/_next/image?url=https%3A%2F%2Fproduction-jachai-service.s3-ap-southeast-1.amazonaws.com%2Fstatic_image%2F2022-09-27T11%3A08%3A16.928_apple1.png&w=128&q=75"
              alt=""
              className="w-28  h-24"
            />
          </Link>
          <Link
            to=""
            className="bg-gray-200 rounded shadow flex justify-center items-center"
          >
            <img
              src="https://jachai.com/_next/image?url=https%3A%2F%2Fproduction-jachai-service.s3-ap-southeast-1.amazonaws.com%2Fstatic_image%2F2022-09-28T14%3A56%3A19.802_Dell.png&w=128&q=75"
              alt=""
              className="w-28  h-24"
            />
          </Link>
          <Link
            to=""
            className="bg-gray-200 rounded shadow flex justify-center items-center"
          >
            <img
              src="https://jachai.com/_next/image?url=https%3A%2F%2Fproduction-jachai-service.s3-ap-southeast-1.amazonaws.com%2Fstatic_image%2F2023-02-26T11%3A06%3A29.593_rfl.png&w=128&q=75"
              alt=""
              className="w-28  h-24"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseByBrand;
