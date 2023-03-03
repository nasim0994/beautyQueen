import React from "react";
import { Link } from "react-router-dom";
import { BsTelephoneInbound, BsPerson } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";

const TopHeader = () => {
  return (
    <div className="hidden lg:block py-2 border-b bg-gray-50">
      <div className="w-[90%] xl:w-[1280px] mx-auto text-neutral">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center">
            <Link
              to="tel: 01706260994"
              className="flex items-center gap-2 hover:text-primary duration-300"
            >
              <BsTelephoneInbound />
              <p>01706260994</p>
            </Link>
            <div className="divider divider-horizontal mx-1"></div>
            <Link
              to="mailto: abc@example.com"
              className="flex items-center gap-2 hover:text-primary duration-300"
            >
              <MdOutlineMail className="text-base" />
              <p>suport@pmall.com</p>
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link
              to="mailto: abc@example.com"
              className="flex items-center gap-1 hover:text-primary duration-300"
            >
              <BsPerson className="text-base" />
              <p className="pt-1">Become a Merchant</p>
            </Link>
            <Link
              to="mailto: abc@example.com"
              className="flex items-center gap-1 hover:text-primary duration-300"
            >
              <FaMobileAlt />
              <p className="pt-px">Open App</p>
            </Link>
            <Link
              to="mailto: abc@example.com"
              className="flex items-center gap-1 hover:text-primary duration-300"
            >
              <AiOutlineLogin />
              <p>Login/Signup</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
