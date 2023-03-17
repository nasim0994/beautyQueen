import React from "react";
import { Link } from "react-router-dom";
import { RiStore2Line } from "react-icons/ri";

const FollowedStores = () => {
  return (
    <div>
      <h1 className="font-semibold text-2xl">Followed Stores</h1>

      <div className="mt-3">
        <div className="bg-base-100 rounded p-4 shadow-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                src="https://static-01.daraz.com.bd/other/shop/a2034a944510e4da51b6acb183b3d796.jpeg_80x80q80.jpg_.webp"
                alt=""
                className="w-12 h-12 rounded-full"
              />
              <h1 className="text-lg font-medium">Ripti Wear House</h1>
            </div>
            <div>
              <Link
                to=""
                className="text-[13px] uppercase text-primary hover:underline duration-200"
              >
                Visit
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center py-20 mt-3">
          <div className="flex flex-col justify-between items-center">
            <RiStore2Line className="text-5xl opacity-60" />
            <p className="text-sm mt-2">You didn’t follow any store</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowedStores;
