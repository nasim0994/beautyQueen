import React from "react";
import Banner from "../../components/Banner/Banner";
import FlashSale from "../../components/FlashSale/FlashSale";
import PopularProduct from "../../components/PopularProduct/PopularProduct";

const Home = () => {
  return (
    <div>
      <Banner />
      <FlashSale />
      <PopularProduct />
    </div>
  );
};

export default Home;
