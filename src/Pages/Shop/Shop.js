import React from "react";
import "./Shop.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ShopCategories from "./ShopCategories/ShopCategories";

const Shop = () => {
  window.scroll(0, 0);
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`https://dummyjson.com/products?limit=100`).then((res) =>
        res.json()
      ),
  });

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

        <div className="flex gap-10 shopPage">
          {/* Category */}
          <ShopCategories />

          {/* Products */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            {isLoading && <h1>Loading...</h1>}
            {products.products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
