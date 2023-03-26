import React from "react";
import "./Categories.css";
import categories from "../../Data/categoryData";
import CategoryItems from "./CategoryItems";

const Categories = () => {
  return (
    <div className="bg-base-100 shadow-lg p-4 rounded w-80 sticky top-20 overflow-y-auto max-h-[78vh]">
      <div className="mt-2 font-medium text-neutral">
        <ul>
          <h6 className="mb-2 border-b pb-2">Product categories</h6>
          {categories.map((category, i) => (
            <CategoryItems key={i} category={category} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
