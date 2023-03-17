import React from "react";
import "./Home.css";
import Banner from "../../components/Banner/Banner";
import ChooseByBrand from "../../components/ChooseByBrand/ChooseByBrand";
import FlashSale from "../../components/FlashSale/FlashSale";
import KidsBaby from "../../components/KidsBaby/KidsBaby";
import MenFashion from "../../components/MenFashion/MenFashion";
import MerchantSlider from "../../components/MerchantSlider/MerchantSlider";
import PopularProduct from "../../components/PopularProduct/PopularProduct";
import WomenFashion from "../../components/WomenFashion/WomenFashion";

const Home = () => {
  window.scroll(0, 0);
  return (
    <div>
      <Banner />
      <FlashSale />
      <PopularProduct />
      <ChooseByBrand />
      <WomenFashion />
      <MenFashion />
      <KidsBaby />
      <MerchantSlider />
    </div>
  );
};

export default Home;
