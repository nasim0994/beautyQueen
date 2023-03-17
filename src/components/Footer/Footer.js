import React from "react";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <footer className="mt-10 p-10 bg-neutral text-neutral-content">
      <ScrollToTop
        smooth
        top="500"
        width="40"
        height="18"
        color="#fff"
        style={{
          background: "#EB5429",
          borderRadius: "100%",
        }}
      />
      <div className="w-[95%] xl:w-[1280px] mx-auto footer ">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
