import React from "react";
import { UseContext } from "../../../ContextApi/ContextProvider";
import CategoryItem from "./CategoryItem";

const ShopCategories = () => {
  const { categories } = UseContext();

  return (
    <div className="hidden lg:block w-80 sticky top-20 self-start py-4 overflow-y-auto max-h-[90vh] shopCategories">
      <h1 className="font-semibold mb-2">All Categories</h1>
      <ul>
        {categories?.map((item, i) => (
          <CategoryItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ShopCategories;
