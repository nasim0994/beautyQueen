import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { UseContext } from "../../ContextApi/ContextProvider";
import ProductCard from "../ProductCard/ProductCard";

const MenFashion = () => {
  const { homeProducts } = UseContext();
  return (
    <div className="mt-6">
      <div className="w-[95%] xl:w-[1280px] mx-auto bg-base-100 p-4 rounded-lg shadow-lg">
        <div className="flex justify-between sm:items-center border-b pb-2 border-primary">
          <h1 className="text-xl font-semibold text-neutral mb-2 sm:mb-0">
            Men's Fashion
          </h1>

          <div>
            <button className="w-max flex items-center text-primary font-semibold hover-go ">
              <h1>Shop More</h1>
              <MdKeyboardArrowRight className="text-[22px] pt-px duration-200" />
            </button>
          </div>
        </div>

        {/* Product Card */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-5">
          {homeProducts.products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenFashion;
