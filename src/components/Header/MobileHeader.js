import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

const MobileHeader = () => {
  return (
    <div className="fixed bottom-0 w-full z-50 lg:hidden">
      <div className="flex justify-around items-center py-2 bg-base-100 text-sm  shadow-lg text-neutral/90">
        <a href="#banner" className="flex flex-col items-center">
          <AiFillHome className="text-2xl" />
          <h1>Home</h1>
        </a>

        <Link to="" className="flex flex-col items-center">
          <FaShoppingCart className="text-2xl" />
          <h1>Cart</h1>
        </Link>

        <Link to="" className="flex flex-col items-center">
          <MdAccountCircle className="text-2xl" />
          <h1>Account</h1>
        </Link>

        <Link to="" className="flex flex-col items-center">
          <AiOutlineMenu className="text-2xl" />
          <h1>Menu</h1>
        </Link>
      </div>
    </div>
  );
};

export default MobileHeader;
