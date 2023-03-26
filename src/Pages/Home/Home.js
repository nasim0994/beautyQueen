import React from "react";
import "./Home.css";
import Banner from "../../components/Banner/Banner";
import ChooseByCategory from "../../components/ChooseByCategory/ChooseByCategory";
import FlashSale from "../../components/FlashSale/FlashSale";
import MerchantSlider from "../../components/MerchantSlider/MerchantSlider";

const Home = () => {
  window.scroll(0, 0);
  return (
    <div>
      <Banner />
      <ChooseByCategory />
      <FlashSale />

      <MerchantSlider />
    </div>
  );
};

export default Home;
