import React from "react";
import "./Shop.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Categories from "./../../components/Categories/Categories";
import { useQuery } from "@tanstack/react-query";

const Shop = () => {
  window.scroll(0, 0);
  const { category, subCategory } = useParams();
  const products = useLoaderData();

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
            <li>
              <Link to="/shops" className="text-primary">
                Shops
              </Link>
            </li>
            {category && <li>{category}</li>}
            {subCategory && <li>{subCategory}</li>}
          </ul>
        </div>

        <div className="flex gap-6 shopPage">
          {/* Category */}
          <Categories />

          {/* Products */}
          <div className="w-full grid items-start grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 bg-base-100 shadow-lg rounded-md px-4">
            {products?.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
