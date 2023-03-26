import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { Autoplay } from "swiper";
import banner1 from "../../Images/banner1.jpg";

const Banner = () => {
  return (
    <div
      className="bg-[url('https://tailwindmaxui.netlify.app/static/media/installation.50c59fdd.9713bc44d9403301b053.jpg')] bg-no-repeat bg-cover py-2 lg:h-[450px]"
      id="banner"
    >
      <div className="w-[90] xl:w-[1280px] mx-auto h-full">
        <div className="lg:flex flex-row-reverse gap-4 h-full">
          {/* Slider */}
          <div className="w-[100%]">
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
                  src="https://images.shajgoj.com/wp-content/uploads/2023/01/Web-banner-coupon-Free-delivery-2.jpg"
                  alt=""
                  className="h-72 lg:h-full w-full rounded"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://images.shajgoj.com/wp-content/uploads/2023/03/Website-Slider-Free-Glow-Booster-1920x490.jpg"
                  alt=""
                  className="h-72 lg:h-full w-full rounded"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
