import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { Autoplay } from "swiper";
import banner1 from "../../Images/banner1.png";
import banner2 from "../../Images/banner2.avif";
import banner3 from "../../Images/banner3.jpg";

import Categories from "../Categories/Categories";
import MobileCategories from "../Categories/MobileCategories";

const Banner = () => {
  return (
    <div
      className="bg-[url('https://tailwindmaxui.netlify.app/static/media/installation.50c59fdd.9713bc44d9403301b053.jpg')] bg-no-repeat bg-cover py-2 lg:h-max"
      id="banner"
    >
      <div className="w-[90] xl:w-[1280px] mx-auto h-full">
        <div className="lg:flex flex-row-reverse gap-4 h-full">
          {/* Slider */}
          <div className="lg:w-[75%] xl:w-[80%]">
            <Swiper
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 5000,
              }}
              modules={[Autoplay]}
              className="h-full"
            >
              <SwiperSlide>
                <img
                  src={banner1}
                  alt=""
                  className="h-72 lg:h-full w-full rounded"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={banner2}
                  alt=""
                  className="h-72 lg:h-full w-full rounded"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={banner3}
                  alt=""
                  className="h-72 lg:h-full w-full rounded"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* CAtegories */}
          <div className="lg:w-[25%] xl:w-[20%] bg-base-100 min-h-full z-30 rounded">
            <div className="hidden lg:block ">
              <Categories />
            </div>
            <div className="lg:hidden">
              <MobileCategories />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
