import React from "react";
import { FaOpencart } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { UseContext } from "../../../ContextApi/ContextProvider";

const Wishlist = () => {
  const {
    wishlist,
    handelAddToCartFromWishlist,
    handelDeleteWishlist,
    handelAddToCartAndDeleteWishlist,
  } = UseContext();

  return (
    <div>
      <h1 className="font-semibold text-2xl">My Wishlist</h1>

      <div className="mt-3">
        <div className="grid lg:grid-cols-2 gap-4">
          {wishlist?.map((item) => (
            <div className="flex gap-4 bg-base-100 p-4 rounded shadow-lg ">
              <div className="w-[20%]">
                <img src={item.thumbnail} alt="" className="w-40" />
              </div>
              <div className="w-[80%]">
                <div>
                  <h1 className="text-xl font-semibold text-neutral">
                    {item.title}
                  </h1>
                  <div className="text-sm sm:flex gap-6 items-center mt-1">
                    <p>
                      <span className="text-neutral/80">Brand:</span>
                      <span>{item.brand}</span>
                    </p>
                    <p>
                      <span className="text-neutral/80">Category:</span>
                      <span>{item.category}</span>
                    </p>
                  </div>
                  {/* Price */}
                  <div className="py-1">
                    <div className="flex items-center gap-2">
                      <p className="text-primary text-lg font-medium">
                        ৳{" "}
                        {parseInt(
                          item.price -
                            (item.price * item.discountPercentage) / 100
                        )}
                      </p>

                      <del className="text-neutral/70">৳ {item.price}</del>
                    </div>
                  </div>

                  <div className="flex justify-between gap-4 items-center">
                    <button
                      onClick={() => handelDeleteWishlist(item)}
                      className="scale-[.97] hover:text-primary hover:scale-[1] duration-300 text-2xl text-neutral/90"
                    >
                      <RiDeleteBinLine />
                    </button>

                    <button
                      onClick={() => handelAddToCartFromWishlist(item)}
                      className="w-40 bg-primary text-base-100 px-2 py-1.5 rounded flex items-center gap-1 justify-center scale-[.97] hover:scale-[1] duration-300"
                    >
                      <FaOpencart />
                      Add To Card
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
