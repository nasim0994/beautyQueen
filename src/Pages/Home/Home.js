import React from "react";
import "./Home.css";
import Banner from "../../components/HomeComponents/Banner/Banner";
import ChooseByCategory from "../../components/HomeComponents/ChooseByCategory/ChooseByCategory";
import FlashSale from "../../components/HomeComponents/FlashSale/FlashSale";
import ShopBanner from "../../components/HomeComponents/ShopBanner/ShopBanner";

const Home = () => {
  window.scroll(0, 0);
  return (
    <div>
      <Banner />
      <ChooseByCategory />
      <FlashSale />
      <ShopBanner />
    </div>
  );
};

export default Home;
