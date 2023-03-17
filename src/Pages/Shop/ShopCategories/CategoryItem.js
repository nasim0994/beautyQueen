import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  const [dropdownToggle, setDropdownToggle] = useState(false);

  if (item.dropdown) {
    return (
      <li key={item.id} className="py-2 relative text-sm">
        <button
          onClick={() => setDropdownToggle(!dropdownToggle)}
          className="w-full flex justify-between items-center "
        >
          <div className="flex items-center gap-1 hover:text-primary duration-300">
            <img src={item.icon} alt="" className="w-5" />
            <h2 className="text-neutral/90">{item.title}</h2>
          </div>
          <MdKeyboardArrowDown className="text-lg" />
        </button>

        <div
          className={`shopDropdown ${dropdownToggle && "shopDropdown-show"}`}
        >
          <div className="pl-6 mt-2">
            {item.dropdown.map((item) => (
              <div key={item.id}>
                <Link to={`/shop/${item.category}`} className="font-medium">
                  {item.category}
                </Link>
                <ul className="pl-1">
                  {item?.items?.map((item) => (
                    <li key={item.id} className="text-sm py-1">
                      <Link
                        to={`/shop/${item.title}`}
                        className="text-neutral/80 hover:text-primary duration-300"
                      >
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
    );
  } else {
    return (
      <li className="py-2 text-sm">
        <Link
          to={`/shop/${item.title}`}
          className="flex items-center gap-1 hover:text-primary duration-300"
        >
          <img src={item.icon} alt="" className="w-5" />
          <h2 className="text-neutral/90">{item.title}</h2>
        </Link>
      </li>
    );
  }
};

export default CategoryItem;
