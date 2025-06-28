"use client";
import React, { useState } from "react";

const HeaderContactUs = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div className="w-full h-[55px] bg-[#100B25] lg:px-[60px] px-[40px] py-[18px] flex justify-between items-center">
        <div className="text-white lg:flex flex-row gap-[30px] uppercase hidden">
          <p>home</p>
          <p>about us</p>
          <p>students life</p>
          <p>careers</p>
          <p>news & events</p>
          <p>blogs</p>
          <p>Research</p>
          <p>Scholarship</p>
          <p>CSR</p>
          <p>
            <a href="/contact-us">contact us</a>
          </p>
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        <div className="text-white flex flex-row gap-[30px] uppercase">
          <p>Payments</p>
          <p>Students</p>
          <p>Alumni</p>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#100B25] px-[60px] py-4">
          <div className="text-white flex flex-col gap-4 uppercase">
            <p>home</p>
            <p>about us</p>
            <p>students life</p>
            <p>careers</p>
            <p>news & events</p>
            <p>blogs</p>
            <p>Research</p>
            <p>Scholarship</p>
            <p>CSR</p>
            <p>
              <a href="/contact-us">contact us</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderContactUs;
