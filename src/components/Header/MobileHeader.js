import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import MobileCategory from "../Categories/MobileCategory/MobileCategory";

const MobileHeader = () => {
  const [mobileCategoryToggle, setMobileCategoryToggle] = useState(false);
  return (
    <>
      <div className="fixed bottom-0 w-full z-50 lg:hidden">
        <div className="flex justify-around items-center py-2 bg-base-100 text-sm  shadow-lg text-neutral/90">
          <NavLink to="/" className="flex flex-col items-center">
            <AiFillHome className="text-xl" />
            <h1>Home</h1>
          </NavLink>

          <NavLink to="/cart" className="flex flex-col items-center">
            <FaShoppingCart className="text-xl" />
            <h1>Cart</h1>
          </NavLink>

          <NavLink to="/account" className="flex flex-col items-center">
            <MdAccountCircle className="text-2xl" />
            <h1>Account</h1>
          </NavLink>

          <button
            onClick={() => setMobileCategoryToggle(!mobileCategoryToggle)}
            className="flex flex-col items-center text-neutral"
          >
            <AiOutlineMenu className="text-xl" />
            <h1>Category</h1>
          </button>
        </div>
      </div>
      <MobileCategory
        mobileCategoryToggle={mobileCategoryToggle}
        setMobileCategoryToggle={setMobileCategoryToggle}
      />
    </>
  );
};

export default MobileHeader;
