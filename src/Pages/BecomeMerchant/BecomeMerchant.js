import React from "react";
import "./BecomeMerchant.css";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import LoginForm from "./LoginForm/LoginForm";
import one from "../../Images/whyPmall/1.png";
import two from "../../Images/whyPmall/2.png";
import three from "../../Images/whyPmall/3.png";
import four from "../../Images/whyPmall/4.png";
import five from "../../Images/whyPmall/5.png";
import six from "../../Images/whyPmall/6.png";

const BecomeMerchant = () => {
  return (
    <div>
      <header className="py-4 ">
        <div className="w-[95%] xl:w-[1280px] mx-auto">
          <Link to="" className="flex items-end">
            <img src={logo} alt="" className="w-28" />
            <p className="text-primary/80 font-medium">Merchant</p>
          </Link>
        </div>
      </header>

      {/* Banner */}
      <div className="merchantBanner flex justify-center items-center">
        <div className="w-[95%] xl:w-[1280px] mx-auto">
          <div className="grid grid-cols-2 gap-40 justify-between items-center text-base-100">
            <div>
              <h1 className="text-4xl font-semibold mb-4">
                Dedicated to Make Small Business Thrive
              </h1>
              <p>
                pmall.com simplifies the lives of small business owners with its
                all-in-one e-commerce platform that's tailored to meet every
                business's unique merchant service needs.
              </p>
              <button className="px-8 py-2 bg-primary mt-4 rounded scale-[.98] hover:scale-[1] duration-300">
                Signup
              </button>
            </div>

            {/* Login/ Signup */}
            <div className="bg-base-100 text-neutral px-4 py-10 rounded-lg w-3/4 mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold">Welcome</h2>
                <p className="text-sm">
                  To Jachai Mearchant Login/Registration Panel
                </p>
              </div>

              {/* Login Form */}
              <LoginForm />
            </div>
          </div>
        </div>
      </div>

      {/* Why PMall */}
      <div className="py-10">
        <div className="w-[95%] xl:w-[1280px] mx-auto">
          <h1 className="text-4xl font-bold">WHY SELL ON JACHAI?</h1>

          <div className="mt-8 grid grid-cols-3 gap-10">
            <div className="flex gap-4">
              <img src={one} alt="" className="w-12 h-12" />
              <div>
                <h2 className="text-2xl font-medium">Reach</h2>
                <p className="text-sm mt-2">
                  Millions of customers on Daraz, Bangladesh's most visited
                  shopping destination
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src={two} alt="" className="w-12 h-12" />
              <div>
                <h2 className="text-2xl font-medium">Free Registration</h2>
                <p className="text-sm mt-2">
                  Account registration & listing items for sale is free
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src={three} alt="" className="w-12 h-12" />
              <div>
                <h2 className="text-2xl font-medium">Reliable Shipping</h2>
                <p className="text-sm mt-2">
                  Fast, reliable and hassle free delivery through Daraz logistic
                  network
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src={four} alt="" className="w-12 h-12" />
              <div>
                <h2 className="text-2xl font-medium">Timely Payments</h2>
                <p className="text-sm mt-2">
                  Funds are safely deposited directly to your bank account on a
                  weekly basis
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src={five} alt="" className="w-12 h-12" />
              <div>
                <h2 className="text-2xl font-medium">Marketing Tools</h2>
                <p className="text-sm mt-2">
                  Find new customers & grow more with advertising and our whole
                  range of marketing tools
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src={six} alt="" className="w-12 h-12" />
              <div>
                <h2 className="text-2xl font-medium">Support&Training</h2>
                <p className="text-sm mt-2">
                  Learn all about ecommerce for free and get help with seller
                  support and Daraz University
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeMerchant;
