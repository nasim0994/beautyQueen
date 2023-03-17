import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { TbAddressBook } from "react-icons/tb";
import { FaMoneyBillWave } from "react-icons/fa";
import { BsGem, BsHeart } from "react-icons/bs";
import { SlLike } from "react-icons/sl";

const AccountSidebar = () => {
  const path = useLocation();
  return (
    <div>
      <h1 className="font-semibold">
        Hello, <span>Nasim Uddin</span>
      </h1>

      <div className="bg-base-100 shadow-lg p-4 rounded mt-5">
        <div className="mb-4">
          <h1 className="font-semibold">My Account</h1>
          <ul className="text-[15px] text-neutral/80 mt-1">
            <li className="py-[1.5px]">
              <NavLink
                to="/account/profile"
                className={`flex items-center gap-2 hover:text-primary duration-300 ${
                  path.pathname === "/account" && "active"
                }`}
              >
                <BiUser />
                My Profile
              </NavLink>
            </li>
            <li className="py-[1.5px]">
              <NavLink
                to="/account/orders"
                className="flex items-center gap-2 hover:text-primary duration-300"
              >
                <HiOutlineClipboardCheck />
                My Orders List
              </NavLink>
            </li>
            <li className="py-[1.5px]">
              <NavLink
                to="/account/address"
                className="flex items-center gap-2 hover:text-primary duration-300"
              >
                <TbAddressBook />
                My Address
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h1 className="font-semibold">My Assets</h1>
          <ul className="text-[15px] text-neutral/80 mt-1">
            <li className="py-[1.5px]">
              <NavLink
                to="/account/coupons-voucher"
                className="flex items-center gap-2 hover:text-primary duration-300"
              >
                <FaMoneyBillWave />
                Coupons/Voucher
              </NavLink>
            </li>
            <li className="py-[1.5px]">
              <NavLink
                to="/account/point-balance"
                className="flex items-center gap-2 hover:text-primary duration-300"
              >
                <BsGem />
                Point/Balance
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h1 className="font-semibold">Account Management</h1>
          <ul className="text-[15px] text-neutral/80 mt-1">
            <li className="py-[1.5px]">
              <NavLink
                to="/account/wishlist"
                className="flex items-center gap-2 hover:text-primary duration-300"
              >
                <BsHeart />
                My wishlist
              </NavLink>
            </li>
            <li className="py-[1.5px]">
              <NavLink
                to="/account/followed-stores"
                className="flex items-center gap-2 hover:text-primary duration-300"
              >
                <SlLike />
                Followed Stores
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccountSidebar;
