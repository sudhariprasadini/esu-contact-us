"use client";
import React, { useState } from "react";
import Image from "next/image";
import smallESU from "@/images/small-ESU.svg";
import BgImage from "@/images/3708927765-preview.png";

const Body = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div className="w-full h-[76px] bg-[#00418F] uppercase flex justify-between">
        <div className="lg:hidden flex items-center ml-[40px]">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none mr-4"
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
        <div className="lg:ml-[60px] ml-[10px] ">
          <Image src={smallESU} alt="Description" />
        </div>

        <div className="lg:flex lg:flex-row text-white font-semibold text-[20px] items-center lg:gap-[62px] hidden ">
          <p>Courses</p>
          <p>Faculties</p>
          <p>Transfer Programmes</p>
          <p>Branch Network</p>
          <p>International Placements</p>
        </div>

        <div className="flex flex-row text-white font-semibold text-[20px] items-center lg:mr-[60px] mr-[40px]">
          <button
            type="submit"
            className="bg-[#02AEC9] hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded md:w-[250px] lg:text-[20px] text-[16px] lg:mr-0 "
          >
            Register Online
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#00418F] px-[40px] py-4">
          <div className="text-white flex flex-col gap-4 uppercase font-semibold text-[18px]">
            <p>Courses</p>
            <p>Faculties</p>
            <p>Transfer Programmes</p>
            <p>Branch Network</p>
            <p>International Placements</p>
          </div>
        </div>
      )}

      <div
        className="w-full h-[616px] flex items-center justify-center bg-cover bg-center "
        style={{
          backgroundImage: `url(${BgImage.src})`,
        }}
      >
        <div className="w-full h-full py-[1px] bg-gradient-to-b from-transparent via-[#0A0A0C]/80 to-black/90 flex justify-end">
          <div className="text-center text-white pb-[70px] mt-auto self-end w-full">
            <div>
              <h1 className="lg:text-[120px] text-[60px] font-bold mx-[40px]">
                Contact <span className="text-[#02AEC9]">Us</span>
              </h1>
              <p className="font-bold lg:text-[20px] text-[16px] lg:px-[410px] mx-[40px]">
                Connect with Excellence! Reach out to ESOFT Metro Campus today –
                where all your questions find answers, and your future begins.
                Your life-changing journey towards knowledge, innovation and
                success starts with a simple touch. Contact us now and let&#39;s
                shape your future together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
