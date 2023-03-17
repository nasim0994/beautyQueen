import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import { BsSearch } from "react-icons/bs";
import { RiShoppingCartLine } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { UseContext } from "../../ContextApi/ContextProvider";

const MainHeader = () => {
  const { cart } = UseContext();
  const subTotal = cart?.reduce(
    (price, item) =>
      price +
      item.quantity *
        parseInt(item.price - (item.price * item.discountPercentage) / 100),
    0
  );
  return (
    <div className="py-2 text-neutral shadow sticky top-0 z-40 lg:bg-[#ffffffcc] lg:backdrop-blur-[30px] backdrop-saturate-[200%]">
      <div className="w-[95%] xl:w-[1280px] mx-auto">
        <div className="flex items-center justify-between">
          <div className="hidden lg:block">
            <Link to="/">
              <img src={logo} alt="" className="w-32" />
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
              to="/account/wishlist"
              className="flex gap-1 items-center text-neutral hover:text-primary duration-300"
            >
              <FiHeart className="text-xl" />
              <h1 className="font-medium">wishlist</h1>
            </Link>

            <Link
              to="/cart"
              className="flex gap-3 items-end hover:text-primary duration-300"
            >
              <div className="relative ">
                <RiShoppingCartLine className="text-2xl" />
                <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold bg-primary text-base-100 border-base-100 rounded-full -top-3 -right-3">
                  {cart?.length}
                </div>
              </div>
              <h1 className="font-medium">৳ {subTotal}</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
