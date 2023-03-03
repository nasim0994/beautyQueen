import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

import categoryData from "./../../Data/categoryData";

import { RiArrowRightSLine } from "react-icons/ri";

const Categories = () => {
  return (
    <div className="categories">
      <ul className="py-2">
        {categoryData.map((item) =>
          item.dropdown ? (
            <li key={item.id} className="px-4 py-1 relative text-sm">
              <button className="w-full flex justify-between items-center ">
                <div className="flex items-center gap-1 hover:text-primary duration-300">
                  <img src={item.icon} alt="" className="w-5" />
                  {item.title}
                </div>
                <RiArrowRightSLine className="text-lg" />
              </button>
              <div className="dropdownMenu z-20 shadow-lg">
                <div className="grid grid-cols-3 gap-6">
                  {item.dropdown.map((item) => (
                    <div key={item.id}>
                      <h1 className="text-base font-semibold">
                        {item.category}
                      </h1>
                      <ul>
                        {item?.items?.map((item) => (
                          <li key={item.id} className="text-sm mt-1">
                            <Link className="text-neutral/80 hover:text-primary duration-300">
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          ) : (
            <li className="px-4 py-2 text-sm">
              <Link className="flex items-center gap-1 hover:text-primary duration-300">
                <img src={item.icon} alt="" className="w-5" />
                {item.title}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Categories;
