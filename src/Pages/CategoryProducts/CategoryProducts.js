import React from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useQuery } from "@tanstack/react-query";
import ShopCategories from "./../Shop/ShopCategories/ShopCategories";

const CategoryProducts = () => {
  window.scroll(0, 0);
  const { category } = useParams();

  const { data: products = [], isLoading } = useQuery({
    queryKey: [category],
    queryFn: () =>
      fetch(`https://dummyjson.com/products/category/${category}`).then((res) =>
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
            <li>
              <Link to="/shop" className="text-primary">
                Shops
              </Link>
            </li>
            <li>{category}</li>
          </ul>
        </div>

        <div className="flex gap-10 shopPage">
          {/* Category */}
          <ShopCategories />
          {/* Products */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            {isLoading ? (
              <h1>Loading...</h1>
            ) : products?.products?.length ? (
              products?.products?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              "No Product Available"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
