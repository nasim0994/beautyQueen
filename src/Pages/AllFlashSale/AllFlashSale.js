import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useQuery } from "@tanstack/react-query";

const AllFlashSale = () => {
  window.scroll(0, 0);
  const { data: flashSale = [], isLoading } = useQuery({
    queryKey: ["flashSale"],
    queryFn: () =>
      fetch(`https://beauty-queen-server.vercel.app/flashSale`).then((res) =>
        res.json()
      ),
  });
  return (
    <div className="py-5">
      <div className="w-[95%] xl:w-[1280px] mx-auto">
        {/* Path */}
        <div className="text-sm breadcrumbs mb-4">
          <ul>
            <li>
              <Link to="/" className="text-primary">
                Home
              </Link>
            </li>
            <li>
              <div className="sm:flex gap-8 items-center">
                <h1 className="text-xl font-semibold text-neutral mb-2 sm:mb-0">
                  FlashSale
                </h1>

                <div className="w-max flex gap-2 items-center">
                  <p className="text-primary">End in</p>
                  <div className="flex gap-2 items-center">
                    <span className="bg-primary w-8 h-8 flex justify-center items-center text-base-100 rounded">
                      10
                    </span>
                    <span>:</span>
                    <span className="bg-primary w-8 h-8 flex justify-center items-center text-base-100 rounded">
                      25
                    </span>
                    <span>:</span>
                    <span className="bg-primary w-8 h-8 flex justify-center items-center text-base-100 rounded">
                      15
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex gap-6 shopPage">
          {/* Products */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 bg-base-100 shadow-lg rounded-md px-4">
            {isLoading ? (
              <h2>Loading</h2>
            ) : flashSale.length < 1 ? (
              "No Products "
            ) : (
              flashSale?.map((product, i) => (
                <ProductCard key={i} product={product} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllFlashSale;
