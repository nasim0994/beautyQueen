import React from "react";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../../../components/ProductCard/ProductCard";

const RelatedProducts = ({ category }) => {
  const { data: relatedProducts = [], isLoading } = useQuery({
    queryKey: ["relatedProducts"],
    queryFn: () =>
      fetch(`https://dummyjson.com/products/category/${category}`).then((res) =>
        res.json()
      ),
  });
  return (
    <div className="mt-10 bg-base-100 p-4 rounded shadow-lg">
      <h1 className="text-2xl font-semibold text-neutral">Related Products</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-5 mt-2">
        {isLoading && <h2>Loading...</h2>}
        {relatedProducts.products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
