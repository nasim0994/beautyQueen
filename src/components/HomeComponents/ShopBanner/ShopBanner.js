import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Images/logo.png";

const ShopBanner = () => {
  return (
    <div className="shop-banner mt-10 py-10">
      <div className="w-[90%] xl:w-[1280px] mx-auto h-full">
        <div className="flex items-center h-full">
          <div className="md:w-1/2 text-neutral">
            <img src={logo} alt="" className="w-1/2" />
            <p
              className="text-lg mb-6 text-neutral"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              Beauty Quean is an online marketplace to provide your daily
              necessary products at your convenient way. You get best deal every
              day on this platform. Best price with accurate product.
            </p>
            <button
              className="scale-[.96] hover:scale-[1] duration-300"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-offset="100"
            >
              <Link
                to="/shops"
                className="uppercase bg-primary shadow rounded px-10 py-2.5 font-semibold text-base-100"
              >
                Shop
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;
