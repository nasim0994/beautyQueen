import React from "react";
import "./Shop.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import ShopCategories from "./ShopCategories/ShopCategories";
import allProducts from "../../Data/allProducts.js";
console.log(allProducts);

const Shop = () => {
  window.scroll(0, 0);

  return (
    <div className="py-5">
      <div className="w-[95%] xl:w-[1280px] mx-auto">
        {/* Path */}
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/" className="text-primary">
                Home
              </Link>
            </li>
            <li>categories</li>
          </ul>
        </div>

        <div className="flex gap-6 shopPage">
          {/* Category */}
          <ShopCategories />

          {/* Products */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 bg-base-100 shadow-lg rounded-md px-4">
            {allProducts?.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
