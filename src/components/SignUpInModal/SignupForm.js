import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import { HiUser } from "react-icons/hi";
import { MdEmail, MdKeyboardArrowDown } from "react-icons/md";
import { AiFillLock, AiTwotonePhone } from "react-icons/ai";
import { HiFlag } from "react-icons/hi";
const areaData = [
  "Dhaka",
  "Rajshahi",
  "Rangpur",
  "Sylhet",
  "Mymensingh",
  "Khulna",
  "Chittagong",
  "Barisal",
];

const SignupForm = () => {
  const [areaToggle, setAreaToggle] = useState(false);
  const [areas, setAreas] = useState(areaData);
  const [selectArea, setSelectArea] = useState("");

  const handelSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    const areaName = areaData.filter((area) =>
      area.toLowerCase().includes(searchText)
    );
    setAreas(areaName);
  };

  const handelOutputCountry = (e) => {
    setSelectArea(e.target.innerText);
    setAreaToggle(false);
  };

  return (
    <div>
      <img src={logo} alt="" className="w-48 mx-auto mb-2" />
      <h6 className="text-xl font-medium text-center">Sign Up</h6>

      <form action="" className="mt-10 text-neutral">
        {/* input */}
        <div>
          {/* name */}
          <div className="grid grid-cols-2 gap-6">
            <div className="mb-6 relative">
              <span className="absolute bottom-2 text-neutral/80">
                <HiUser />
              </span>
              <input
                type="text"
                placeholder="First Name"
                className="w-full border-b focus:border-b-primary outline-none pl-6 pb-1 placeholder:font-light"
                required
              />
            </div>

            <div className="mb-6 relative">
              <span className="absolute bottom-2 text-neutral/80">
                <HiUser />
              </span>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border-b focus:border-b-primary outline-none pl-6 pb-1 placeholder:font-light"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Email */}
            <div className="mb-6 relative">
              <span className="absolute bottom-2 text-neutral/80">
                <MdEmail />
              </span>
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b focus:border-b-primary outline-none pl-6 pb-1 placeholder:font-light"
                required
              />
            </div>

            {/* Phone */}
            <div className="mb-6 relative">
              <span className="absolute bottom-2 text-neutral/80">
                <AiTwotonePhone className="text-lg" />
              </span>
              <input
                type="text"
                placeholder="Number"
                className="w-full border-b focus:border-b-primary outline-none pl-6 pb-1 placeholder:font-light"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6 relative">
            <span className="absolute bottom-2 text-neutral/80">
              <AiFillLock />
            </span>
            <input
              type="password"
              placeholder="********"
              className="w-full border-b focus:border-b-primary outline-none pl-6 pb-1 placeholder:font-light"
              required
            />
          </div>

          {/* Area */}
          <div className="mb-2 relative">
            <div className="relative">
              <span className="absolute bottom-2 text-neutral/80">
                <HiFlag className="text-lg" />
              </span>
              <input
                type="text"
                placeholder="Area"
                className="w-full border-b focus:border-b-primary outline-none pl-6 pb-1 placeholder:font-light cursor-pointer"
                required
                onClick={() => setAreaToggle(!areaToggle)}
                defaultValue={selectArea}
              />
              <span className="absolute right-0">
                <MdKeyboardArrowDown />
              </span>
            </div>

            <div
              className={`${
                areaToggle && "dropdownShow"
              } w-full bg-base-100 shadow-lg rounded-md absolute top-full dropdown`}
            >
              <div className="p-4 pb-0">
                <input
                  type="search"
                  placeholder="Search Your Area"
                  className="border border-neutral/80 outline-none px-3 py-1.5 w-full bg-transparent rounded-md"
                  onChange={(e) => handelSearch(e)}
                />
              </div>
              <ul className="p-4 pt-2 h-52 overflow-y-scroll">
                {areas.map((area) => (
                  <li
                    onClick={(e) => handelOutputCountry(e)}
                    className="py-1 hover:bg-gray-100 duration-200 cursor-pointer px-2 rounded"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Privacy Policy */}
        <div className="mt-4 mb-6">
          <label className="label gap-2 justify-start items-center cursor-pointer">
            <input type="checkbox" className="checkbox checkbox-xs" />
            <span className="label-text">
              Send me emails with tips on how to find talent that fits my needs.
            </span>
          </label>

          <label className="label gap-2 justify-start items-center cursor-pointer">
            <input type="checkbox" className="checkbox checkbox-xs" />
            <span className="label-text">
              Yes, I understand and agree to the Upwork Terms of Service ,
              including the User Agreement and{" "}
              <Link className="text-primary underline">Privacy Policy</Link> .
            </span>
          </label>
        </div>

        {/* Button */}
        <div>
          <div className="flex flex-col w-full border-opacity-50">
            <button
              type="submit"
              className="w-full py-2 font-semibold text-base-100 bg-primary rounded hover:bg-opacity-90 duration-300 "
            >
              Create my account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
