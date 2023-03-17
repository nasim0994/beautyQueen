import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsTelephoneInbound } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { CgLogOff } from "react-icons/cg";
import { BiUser } from "react-icons/bi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { TbAddressBook } from "react-icons/tb";
import SignUpInModal from "./../SignUpInModal/SignUpInModal";

const TopHeader = () => {
  const [accountDropdown, setAccountDropdown] = useState(false);
  const [formToggle, setFormToggle] = useState("login");

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (!e.target.closest("#topAccount")) {
        setAccountDropdown(false);
      }
    });
  }, []);
  return (
    <div className="hidden lg:block py-2 border-b bg-gray-50">
      <div className="w-[95%] xl:w-[1280px] mx-auto text-neutral">
        <div className="flex justify-between items-center text-[13px]">
          <div className="flex items-center">
            <Link
              to="tel: 01706260994"
              className="flex items-center gap-2 hover:text-primary duration-300"
            >
              <BsTelephoneInbound />
              <p>01531714355</p>
            </Link>
            <div className="divider divider-horizontal mx-1"></div>
            <Link
              to="mailto: abc@example.com"
              className="flex items-center gap-2 hover:text-primary duration-300"
            >
              <MdOutlineMail className="text-base" />
              <p>beautyqueen@gmail.com</p>
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative" id="topAccount">
              <button
                onClick={() => setAccountDropdown(!accountDropdown)}
                className="flex items-center gap-1 hover:text-primary duration-300"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBhcplevwUKGRs1P-Ps8Mwf2wOwnW_R_JIA&usqp=CAU"
                  alt=""
                  className="w-5 h-5 rounded-full"
                />
                Nasim Account
              </button>

              {accountDropdown && (
                <div className="absolute top-[120%] left-0 z-50 bg-base-100 shadow-lg w-48 p-2 rounded">
                  <ul className="text-[15px] text-neutral/90 mt-1 font-medium">
                    <li
                      onClick={() => setAccountDropdown(false)}
                      className="py-1"
                    >
                      <Link
                        to="/account/profile"
                        className="flex items-center gap-2 hover:text-primary duration-300"
                      >
                        <BiUser />
                        <h1>My Profile</h1>
                      </Link>
                    </li>
                    <li
                      onClick={() => setAccountDropdown(false)}
                      className="py-1"
                    >
                      <Link
                        to="/account/orders"
                        className="flex items-center gap-2 hover:text-primary duration-300"
                      >
                        <HiOutlineClipboardCheck />
                        <h1>My Orders</h1>
                      </Link>
                    </li>

                    <li
                      onClick={() => setAccountDropdown(false)}
                      className="py-1"
                    >
                      <Link
                        to="/account/wishlist"
                        className="flex items-center gap-2 hover:text-primary duration-300"
                      >
                        <TbAddressBook />
                        <h1>My Wishlist</h1>
                      </Link>
                    </li>

                    <li
                      onClick={() => setAccountDropdown(false)}
                      className="border-t border-dashed py-2 mt-2 hover:bg-gray-100 hover:text-primary duration-300"
                    >
                      <button className="w-full flex justify-between items-center font-semibold px-2">
                        <h1>SignOut</h1>
                        <CgLogOff className="text-lg" />
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <ul className="flex gap-6 items-center font-medium ">
              <li>
                <label
                  onClick={() => setFormToggle("signup")}
                  htmlFor="signUpIn"
                  className="hover:text-primary duration-300 cursor-pointer"
                >
                  Signup
                </label>

                <SignUpInModal
                  formToggle={formToggle}
                  setFormToggle={setFormToggle}
                />
              </li>

              <li>
                <label
                  onClick={() => setFormToggle("login")}
                  htmlFor="signUpIn"
                  className="border border-neutral px-6 py-1.5 rounded-md hover:border-primary hover:text-base-100 hover:bg-primary duration-500 cursor-pointer"
                >
                  Login
                </label>

                <SignUpInModal
                  formToggle={formToggle}
                  setFormToggle={setFormToggle}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
