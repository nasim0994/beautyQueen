import React from "react";
import { Link } from "react-router-dom";
import olevs from "../../Images/products/olevs.jpg";
import { AiFillStar } from "react-icons/ai";

const ProductCard = () => {
  return (
    <div className="mt-4 hover:shadow-lg rounded overflow-hidden product-card duration-300">
      <Link to="">
        <div className="overflow-hidden relative">
          <img src={olevs} alt="" className="w-full h-60 duration-500" />
          {/* Discount */}
          <div className="absolute top-1 text-base-100 right-0 bg-red-600 w-14 rounded-l-full px-2 py-px">
            <p>10%</p>
          </div>
        </div>
        <div className="p-2">
          <h1 className="text-lg font-semibold mb-1">Oleves Watch</h1>
          <div className="flex items-center gap-2">
            <p className="text-primary text-lg">৳1500</p>

            <del className="text-neutral/70 text-sm ">৳2000</del>
          </div>

          <div className="flex  text-sm text-yellow-500 mt-1">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
