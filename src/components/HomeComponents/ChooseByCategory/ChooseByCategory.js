import React from "react";
import { Link } from "react-router-dom";
import categories from "../../../Data/categoryData";

const ChooseByCategory = () => {
  return (
    <div className="mt-6">
      <div className="w-[95%] xl:w-[1280px] mx-auto bg-base-100 p-4 rounded-lg shadow-lg">
        <div className="flex justify-between sm:items-center border-b pb-2 border-primary">
          <h1 className="text-xl font-semibold text-neutral mb-2 sm:mb-0">
            Choose By Category
          </h1>
        </div>

        {/* brand logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 mt-2">
          {categories.map((category) => (
            <Link to={`/category/${category.title}`}>
              <div className="category-item">
                <img
                  src={category.icon}
                  alt=""
                  className="h-44 sm:h-60 w-full rounded-t-full scale-[.98] duration-300"
                />
                <h1 className="text-xl text-center font-bold text-neutral/80 duration-300">
                  {category.title}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseByCategory;
