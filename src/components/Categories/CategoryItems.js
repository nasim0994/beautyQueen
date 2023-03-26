import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useParams } from "react-router-dom";

const CategoryItems = ({ category }) => {
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const params = useParams();
  useEffect(() => {
    if (category.title === params.category) {
      setDropdownToggle(true);
    } else {
      setDropdownToggle(false);
    }
  }, [category.title, params.category]);

  if (category?.dropdown) {
    return (
      <li className="p-1 ">
        <button
          onClick={() => setDropdownToggle(!dropdownToggle)}
          className="flex justify-between items-center w-full hover:text-primary duration-300"
        >
          <p>{category.title}</p>
          <IoIosArrowDown
            className={`${dropdownToggle && "rotate-180 "} duration-300`}
          />
        </button>

        <nav>
          <ul
            className={`w-full pl-2 text-neutral/80 dropdown ${
              dropdownToggle && "dropdownShow "
            }`}
          >
            {category.dropdown.map((subCategory) => (
              <li className="hover:text-primary duration-300 hover:bg-gray-100 p-1 rounded">
                <Link
                  to={`/category/${category.title}/${subCategory.title}`}
                  className={`block ${
                    params.subCategory === subCategory.title && "text-primary"
                  }`}
                >
                  {subCategory.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </li>
    );
  } else {
    return (
      <li className="p-1 hover:text-primary duration-300">
        <Link>{category.title}</Link>
      </li>
    );
  }
};

export default CategoryItems;
