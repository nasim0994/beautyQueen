import React, { useState } from "react";
import categories from "../../../Data/categoryData";
import { Link } from "react-router-dom";
import CategoryItem from "./CategoryItem";

const ShopCategories = () => {
  const [categoryToggle, setCategoryToggle] = useState(false);
  return (
    <div className="w-80 bg-base-100 rounded-md shadow-lg h-[75vh] overflow-y-auto">
      <ul className="py-2">
        {categories?.map((item) =>
          item.dropdown ? (
            <li key={item.id} className="px-4 py-1 relative text-[15px]">
              <button
                onClick={() => setCategoryToggle(!categoryToggle)}
                className="w-full flex justify-between items-center "
              >
                <div className="flex items-center gap-1 hover:text-primary duration-300">
                  <img src={item.icon} alt="" className="w-5" />
                  {item.title}
                </div>
                <p className="bg-gray-100 px-2 py-px rounded-full text-sm">
                  (10)
                </p>
              </button>

              <div className={`${categoryToggle ? "block" : "hidden"}`}>
                <ul className="pl-6 text-neutral/90">
                  {item.dropdown.map((item, i) => (
                    <CategoryItem item={item} key={i} />
                    // <li key={i}>
                    //   <Link className="hover:text-primary duration-300 py-2">
                    //     {item.title}
                    //   </Link>
                    // </li>
                  ))}
                </ul>
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

export default ShopCategories;
