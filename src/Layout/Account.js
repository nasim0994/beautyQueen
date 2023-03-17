import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./../components/Footer/Footer";
import AccountSidebar from "../components/AccountSidebar/AccountSidebar";

const Account = () => {
  window.scroll(0, 0);
  return (
    <div>
      <Header />
      <div className="min-h-[65vh] py-10">
        <div className="w-[95%] xl:w-[1280px] mx-auto md:flex gap-6">
          <div className="md:w-96">
            <AccountSidebar />
          </div>
          <div className="md:w-full mt-6 md:mt-0">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
