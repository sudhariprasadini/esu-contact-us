import Image from "next/image";
import React from "react";
import CareerImage from "@/images/shutterstock.svg";
import ReuseAddressSection from "./ReuseAddressSection";
import Group from "@/images/Group.svg";

const Career = () => {
  return (
    <div className="mt-[30px] lg:mt-[90px] pb-[40px] ">
      <div className=" lg:ml-[160px] mx-[40px]">
        <div className="flex flex-row">
          <h1 className="font-bold lg:text-[258px] text-[70px] leading-none text-[#02AEC9]">
            BUILDS
          </h1>
          <div className="flex justify-end items-end ">
            <Image src={Group} alt="Line" />
          </div>
        </div>
        <h2 className="lg:text-[94px] text-[24px] lg:mt-[-30px] leading-none">
          Your Career With <span className="font-bold ">US</span>
        </h2>
      </div>
      <div className="flex lg:flex-row flex-col lg:gap-[12px] mt-10 ">
        <div className="relative  lg:mt-[-110px]  flex flex-col lg:flex-row  ">
          <div>
            <Image src={CareerImage} alt="Career Image" height={707} />
          </div>
          <div className="w-auto">
            <ReuseAddressSection
              title="Head"
              highlightedWord="Office"
              address={{
                department: "Head Office (Block E)",
                institution: "ESOFT Metro Campus",
                street: "No.03,De Fonseka Place,Colombo 4,Srilanka",
                city: "",
                country: "",
              }}
              email="in@esoft.lk"
              phone="+94117572572"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#B0D8E2] h-[462px] w-full hidden xl:block mt-[-580px] "></div>
    </div>
  );
};

export default Career;
