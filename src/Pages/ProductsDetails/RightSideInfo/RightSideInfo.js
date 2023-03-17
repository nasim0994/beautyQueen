import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineVerified } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiTakeMyMoney } from "react-icons/gi";
import { GrShieldSecurity } from "react-icons/gr";
import { FiExternalLink } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const RightSideInfo = () => {
  return (
    <>
      {/* Delivery */}
      <div className="border-b pb-3 mb-3">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-base font-medium">Delivery</h1>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <CiDeliveryTruck className="text-2xl" />
            <div>
              <h2>Standard Delivery</h2>
              <p className="text-neutral/80 text-xs">2 - 3 days</p>
            </div>
          </div>

          <p className="text-black font-semibold">৳ 45</p>
        </div>
        <div className="flex gap-2 items-center mt-3">
          <GiTakeMyMoney className="text-2xl" />
          <div>
            <h2>Cash on Delivery Available</h2>
          </div>
        </div>
      </div>

      {/* Service */}
      <div className="border-b pb-4 mb-3">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-base font-medium">Service</h1>
        </div>

        <div className="flex gap-2 items-center mt-3">
          <GrShieldSecurity className="text-xl opacity-70" />
          <div>
            <h2>Warranty not available</h2>
          </div>
        </div>
      </div>

      {/* Sold by */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-base font-medium">Sold by</h1>
        </div>

        <div>
          <p className="text-secondary text-base font-medium">
            Nur Fashion House BD
          </p>
        </div>

        <div className="flex justify-between items-center mt-2">
          <div className="flex gap-1 items-center text-xs">
            <MdOutlineVerified className="text-base text-green-500" />
            <div>
              <h2>VERIFIED</h2>
            </div>
          </div>

          <div className="flex text-yellow-400 gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <Link to="" className="flex items-center gap-1 ">
            <FiExternalLink className="text-lg opacity-90 -mt-1" />
            <p className="hover:text-primary duration-300">Visit Store</p>
          </Link>
          <Link to="" className="flex items-center gap-1 text-accent">
            <BsChatDots className="-mt-1" />
            <p>CHAT NOW</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default RightSideInfo;