import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { image, title, price, discount, rating } = product;
  const newPrice = price - (price * discount) / 100;
  const ratingStar = Array.from({ length: 5 }, (element, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <FaStar className="text-yellow-400" />
        ) : rating >= number ? (
          <FaStarHalfAlt className="text-yellow-400" />
        ) : (
          <FaStar className="text-gray-300" />
        )}
      </span>
    );
  });
  return (
    <div className="mt-4 hover:shadow-lg rounded overflow-hidden product-card duration-300">
      <Link to="">
        <div className="overflow-hidden relative">
          <img src={image} alt="" className="w-full h-60 duration-500" />
          {/* Discount */}
          {discount && (
            <div className="absolute top-1 text-base-100 right-0 bg-red-600 w-14 rounded-l-full px-2 py-px">
              <p>{discount}%</p>
            </div>
          )}
        </div>
        <div className="p-2">
          <h1 className="text-lg font-semibold mb-1">{title}</h1>
          <div className="flex items-center gap-2">
            <p className="text-primary text-lg">৳{newPrice}</p>

            <del className="text-neutral/70 text-sm ">৳{price}</del>
          </div>

          <div className="flex text-sm mt-1">{ratingStar}</div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
