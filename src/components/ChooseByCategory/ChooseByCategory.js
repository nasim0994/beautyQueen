import React from "react";
import { Link } from "react-router-dom";
import categories from "../../Data/categoryData";

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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-3 mt-2">
          {categories.map((category) => (
            <Link
              to={`/category/${category.title}`}
              className="bg-gray-200 rounded shadow text-center"
            >
              <div className="py-10">
                <h2 className="text-xl">{category.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseByCategory;
