import React, { useEffect, useState } from "react";
import { UseContext } from "../../../ContextApi/ContextProvider";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import { FiHeart, FiMinusCircle, FiPlusCircle, FiShare2 } from "react-icons/fi";
import { FaOpencart, FaStar, FaStarHalfAlt } from "react-icons/fa";

const ProductInfo = ({ product }) => {
  const {
    thumbnail,
    title,
    rating,
    price,
    brand,
    category,
    discountPercentage,
    size,
  } = product;

  //Import function to context api
  const {
    handelAddToCart,
    handelIncreaseCart,
    handelDecreaseCart,
    cart,
    handelAddWishlist,
    wishlist,
  } = UseContext();

  // Rating number to start convert
  const ratingStar = Array.from({ length: 5 }, (element, index) => {
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <FaStar className="text-yellow-400" />
        ) : rating >= index + 0.5 ? (
          <FaStarHalfAlt className="text-yellow-400" />
        ) : (
          <FaStar className="text-gray-300" />
        )}
      </span>
    );
  });

  // cart Product find
  const [cartProduct, setCartProduct] = useState(null);

  useEffect(() => {
    const exited = cart?.find((item) => item._id === product._id);
    setCartProduct(exited);
  }, [product, cart]);

  console.log(cart);

  // wishlist Product find
  const [wishlistProduct, setWishlistProduct] = useState({});
  useEffect(() => {
    const exited = wishlist?.find((item) => item._id === product._id);
    setWishlistProduct(exited);
  }, [product, wishlist]);

  return (
    <div className="lg:flex gap-6">
      {/* Image */}
      <div className="lg:w-[45%]">
        <div className="relative">
          <PhotoProvider>
            <PhotoView src={thumbnail}>
              <img src={thumbnail} alt="" className="h-96 w-full rounded" />
            </PhotoView>
          </PhotoProvider>

          {/* Discount */}
          <div className="absolute top-1 text-base-100 right-0 bg-red-600 w-max rounded-l-full px-2 py-px">
            <p>{discountPercentage}%</p>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="lg:w-[55%] mt-4 lg:mt-0">
        {/* title  */}
        <div>
          <h1 className="text-3xl font-semibold text-neutral">{title}</h1>
          <div className="text-sm">
            <p>
              <span className="text-neutral/80">Brand:</span>{" "}
              <span>{brand}</span>
            </p>
            <p>
              <span className="text-neutral/80">Category:</span>{" "}
              <span>{category}</span>
            </p>
          </div>
        </div>

        {/* rating  */}
        <div className="flex justify-between items-center">
          <div className="flex gap-px text-sm">{ratingStar}</div>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => handelAddWishlist(product)}
              className={`shadow-lg p-3 rounded-full ${
                wishlistProduct && "text-primary"
              }`}
            >
              <FiHeart />
            </button>
            <button className="shadow-lg p-3 rounded-full">
              <FiShare2 />
            </button>
          </div>
        </div>

        {/* Price */}
        <div className="py-3 border-y my-4">
          <div className="flex items-end gap-2">
            <p className="text-primary text-2xl font-medium">
              ৳ {parseInt(price - (price * discountPercentage) / 100)}
            </p>

            <del className="text-neutral/70">৳ {price}</del>
          </div>
        </div>

        {/* Size */}
        {size && (
          <div className="flex gap-4 items-center">
            <p>Size:</p>

            <div className="flex gap-2 items-center">
              {size?.map((size) => (
                <button className="py-2 px-3 rounded border scale-[.96] hover:scale-[1] hover:border-neutral duration-300">
                  {size.value}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-4 items-center mt-6">
          {/* <button className="w-40 bg-primary text-base-100 px-2 py-1.5 rounded flex items-center gap-1 justify-center scale-[.97] hover:scale-[1] duration-300">
            Buy Now
          </button> */}

          {cartProduct ? (
            <div className="w-40 bg-primary px-2 py-1.5 text-base-100 rounded flex justify-between gap-3">
              <button
                onClick={() => handelDecreaseCart(product)}
                className="text-2xl hover:text-neutral duration-200"
              >
                <FiMinusCircle />
              </button>
              <div>
                <p className="w-14 font-semibold text-center">
                  {cartProduct.quantity || 1}
                </p>
              </div>
              <button
                onClick={() => handelIncreaseCart(product)}
                className="text-2xl hover:text-neutral duration-200"
              >
                <FiPlusCircle />
              </button>
            </div>
          ) : (
            <button
              onClick={() => handelAddToCart(product)}
              className="w-40 bg-primary text-base-100 px-2 py-1.5 rounded flex items-center gap-1 justify-center scale-[.97] hover:scale-[1] duration-300"
            >
              <FaOpencart />
              Add To Card
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
