import React from "react";
import MainHeader from "./MainHeader";
import MobileHeader from "./MobileHeader";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <>
      <TopHeader />
      <MainHeader />
      <MobileHeader />
    </>
  );
};

export default Header;
