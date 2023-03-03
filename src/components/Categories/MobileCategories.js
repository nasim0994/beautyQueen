import React from "react";
import { Link } from "react-router-dom";
import categoryData from "./../../Data/categoryData";
import { BiCategory } from "react-icons/bi";

const MobileCategories = () => {
  return (
    <div className="py-3">
      <div className="w-[90%] mx-auto">
        <div className="flex gap-1 items-center text-center pr-4 mb-3">
          <BiCategory className="text-primary text-xl" />
          <h1 className="font-semibold">Categories</h1>
        </div>

        <ul className="flex overflow-x-auto">
          {categoryData.map((item) => (
            <li className="flex flex-col items-center text-center border p-2 rounded mr-2">
              <img src={item.icon} alt="" className="w-8" />
              <Link className="w-24 text-sm">{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileCategories;
