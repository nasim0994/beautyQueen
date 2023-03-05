import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import { BsSearch } from "react-icons/bs";
import { RiShoppingCartLine } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";

const MainHeader = () => {
  return (
    <div className="py-2 text-neutral shadow sticky top-0 z-50 lg:bg-[#ffffffcc] lg:backdrop-blur-[30px] backdrop-saturate-[200%]">
      <div className="w-[95%] xl:w-[1280px] mx-auto">
        <div className="flex items-center justify-between">
          <div className="hidden lg:block">
            <Link to="/">
              <img src={logo} alt="" className="w-48" />
            </Link>
          </div>
          <div className="w-full lg:w-3/5">
            <div className="relative">
              <input
                type="text"
                placeholder="search Product..."
                className="border w-full px-3 py-2 rounded outline-none"
              />
              <span className="absolute right-2  top-2.5 text-xl text-neutral/60">
                <BsSearch />
              </span>
            </div>
          </div>
          <div className="hidden lg:flex gap-6 items-center">
            <Link
              to=""
              className="flex gap-1 items-center text-neutral hover:text-primary duration-300"
            >
              <FiHeart className="text-xl" />
              <p>wishlist</p>
            </Link>

            <Link
              to=""
              className="flex gap-3 items-end hover:text-primary duration-300"
            >
              <div className="relative ">
                <RiShoppingCartLine className="text-2xl" />
                <div className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold bg-primary text-base-100 border-base-100 rounded-full -top-3 -right-3">
                  8
                </div>
              </div>
              <h1 className="font-medium">৳00</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
