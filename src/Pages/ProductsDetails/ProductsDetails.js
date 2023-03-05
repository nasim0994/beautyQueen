import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import { useQuery } from "@tanstack/react-query";

import { CiDeliveryTruck } from "react-icons/ci";
import { GiTakeMyMoney } from "react-icons/gi";
import { GrShieldSecurity } from "react-icons/gr";
import {
  FiExternalLink,
  FiHeart,
  FiMinusCircle,
  FiPlusCircle,
  FiShare2,
} from "react-icons/fi";
import { MdOutlineVerified } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import { FaOpencart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import ProductCard from "./../../components/ProductCard/ProductCard";
import { UseContext } from "../../ContextApi/ContextProvider";

const ProductsDetails = () => {
  const product = useLoaderData();
  const {
    handelAddToCart,
    handelIncreaseCart,
    handelDecreaseCart,
    cart,
    handelAddWishlist,
    wishlist,
  } = UseContext();

  const {
    thumbnail,
    images,
    title,
    rating,
    price,
    description,
    brand,
    category,
    discountPercentage,
  } = product;

  const { data: relatedProducts = [], isLoading } = useQuery({
    queryKey: ["relatedProducts"],
    queryFn: () =>
      fetch(`https://dummyjson.com/products/category/${category}`).then((res) =>
        res.json()
      ),
  });

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

  const [cartProduct, setCartProduct] = useState({});
  useEffect(() => {
    const exited = cart?.find((item) => item.id === product.id);
    setCartProduct(exited);
  }, [product, cart]);

  const [wishlistProduct, setWishlistProduct] = useState({});
  useEffect(() => {
    const exited = wishlist?.find((item) => item.id === product.id);
    setWishlistProduct(exited);
  }, [product, wishlist]);

  return (
    <div className="py-2">
      <div className="w-[95%] xl:w-[1280px] mx-auto text-neutral">
        {/* Path */}
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/" className="text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="products" className="text-primary">
                Products
              </Link>
            </li>
            <li>{title}</li>
          </ul>
        </div>

        {/* Product info */}
        <div className="lg:flex shadow-lg mt-4 rounded overflow-hidden">
          <div className="lg:w-[75%] bg-base-100 p-4 text-neutral">
            <div className="lg:flex gap-6">
              {/* Image */}
              <div className="lg:w-[45%]">
                <div className="relative">
                  <PhotoProvider>
                    <PhotoView src={thumbnail}>
                      <img
                        src={thumbnail}
                        alt=""
                        className="h-96 w-full rounded"
                      />
                    </PhotoView>
                  </PhotoProvider>

                  {/* Discount */}
                  <div className="absolute top-1 text-base-100 right-0 bg-red-600 w-max rounded-l-full px-2 py-px">
                    <p>{discountPercentage}%</p>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  {images.map((img, i) => (
                    <button key={i}>
                      <img
                        src={img}
                        alt=""
                        className="w-20 h-20 border p-2 rounded"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="lg:w-[55%] mt-4 lg:mt-0">
                {/* title  */}
                <div>
                  <h1 className="text-3xl font-semibold text-neutral">
                    {title}
                  </h1>
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
                <div className="flex gap-4 items-center">
                  <p>Size:</p>

                  <div className="flex gap-2 items-center">
                    <button className="py-2 px-3 rounded border scale-[.96] hover:scale-[1] hover:border-neutral duration-300">
                      38
                    </button>
                    <button className="py-2 px-3 rounded border scale-[.96] hover:scale-[1] hover:border-neutral duration-300">
                      40
                    </button>
                    <button className="py-2 px-3 rounded border scale-[.96] hover:scale-[1] hover:border-neutral duration-300">
                      42
                    </button>
                    <button className="py-2 px-3 rounded border scale-[.96] hover:scale-[1] hover:border-neutral duration-300">
                      44
                    </button>
                  </div>
                </div>

                {/* Quantity */}
                {/* <div className="flex gap-4 items-center mt-6">
                  <p>Quantity:</p>

                  <div className="w-max flex items-center gap-3">
                    <button className="text-2xl text-neutral/70 hover:text-neutral duration-200">
                      <FiMinusCircle />
                    </button>
                    <div>
                      <p className="w-14 border-2 border-neutral/50 text-neutral font-semibold text-center rounded-lg py-px">
                        1
                      </p>
                    </div>
                    <button className="text-2xl text-neutral/70 hover:text-neutral duration-200">
                      <FiPlusCircle />
                    </button>
                  </div>
                </div> */}

                {/* Buttons */}
                <div className="flex gap-4 items-center mt-6">
                  <button className="w-40 bg-primary text-base-100 px-2 py-1.5 rounded flex items-center gap-1 justify-center scale-[.97] hover:scale-[1] duration-300">
                    Buy Now
                  </button>

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
          </div>

          <div className="lg:w-[25%] bg-stone-50 p-4 text-sm">
            {/* Delivery */}
            <div className="border-b pb-3 mb-3">
              <div className="flex justify-between items-center mb-2">
                <h1 className="text-base font-medium">Delivery</h1>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <CiDeliveryTruck className="text-2xl" />
                  <div>
                    <h2>Standard Delivery</h2>
                    <p className="text-neutral/80 text-xs">2 - 3 days</p>
                  </div>
                </div>

                <p className="text-black font-semibold">৳ 45</p>
              </div>
              <div className="flex gap-2 items-center mt-3">
                <GiTakeMyMoney className="text-2xl" />
                <div>
                  <h2>Cash on Delivery Available</h2>
                </div>
              </div>
            </div>

            {/* Service */}
            <div className="border-b pb-4 mb-3">
              <div className="flex justify-between items-center mb-2">
                <h1 className="text-base font-medium">Service</h1>
              </div>

              <div className="flex gap-2 items-center mt-3">
                <GrShieldSecurity className="text-xl opacity-70" />
                <div>
                  <h2>Warranty not available</h2>
                </div>
              </div>
            </div>

            {/* Sold by */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h1 className="text-base font-medium">Sold by</h1>
              </div>

              <div>
                <p className="text-secondary text-base font-medium">
                  Nur Fashion House BD
                </p>
              </div>

              <div className="flex justify-between items-center mt-2">
                <div className="flex gap-1 items-center text-xs">
                  <MdOutlineVerified className="text-base text-green-500" />
                  <div>
                    <h2>VERIFIED</h2>
                  </div>
                </div>

                <div className="flex text-yellow-400 gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <Link to="" className="flex items-center gap-1 ">
                  <FiExternalLink className="text-lg opacity-90 -mt-1" />
                  <p className="hover:text-primary duration-300">Visit Store</p>
                </Link>
                <Link to="" className="flex items-center gap-1 text-accent">
                  <BsChatDots className="-mt-1" />
                  <p>CHAT NOW</p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="bg-base-100 shadow-lg p-4 rounded mt-6">
          <h1 className="font-semibold text-lg">
            Product Description of {title}
          </h1>

          <div className="mt-3 pl-2">
            <p>{description}</p>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-10 bg-base-100 p-4 rounded shadow-lg">
          <h1 className="text-2xl font-semibold text-neutral">
            Related Products
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-5 mt-2">
            {isLoading && <h2>Loading...</h2>}
            {relatedProducts.products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
