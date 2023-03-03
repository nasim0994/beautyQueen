import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import ProductCard from "../ProductCard/ProductCard";
import flashSaleProducts from "../../Data/flashSaleProducts";

const FlashSale = () => {
  return (
    <div className="mt-10">
      <div className="w-[90%] xl:w-[1280px] mx-auto bg-base-100 p-4 rounded-lg shadow-lg">
        <div className="flex justify-between items-center border-b pb-4 border-primary">
          <div className="sm:flex gap-8 items-center">
            <h1 className="text-xl font-semibold text-secondary">FlashSale</h1>

            <div className="flex gap-2 items-center">
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

          <div>
            <button className="flex items-center text-primary font-semibold hover-go ">
              <h1>Shop More</h1>
              <MdKeyboardArrowRight className="text-[22px] pt-px duration-200" />
            </button>
          </div>
        </div>

        {/* Product Card */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-2">
          {flashSaleProducts?.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
