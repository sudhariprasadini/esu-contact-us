import Image from "next/image";
import React from "react";
import CareerImage from "@/images/shutterstock.svg";
import ReuseAddressSection from "./ReuseAddressSection";

const Career = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold text-[258px] lg:ml-[160px]">BUILDS</h1>
      </div>
      <div className="flex lg:flex-row flex-col lg:gap-[12px] mt-10 lg:px-[180px] bg-[#ADD5DF]">
        <div>
          <Image src={CareerImage} alt="Career Image" />
        </div>
        <div>
          <ReuseAddressSection
            title="Head"
            highlightedWord="Office"
            address={{
              department: "Head Office (Block E)",
              institution: "ESOFT Metro Campus",
              street: "No.03,De Fonseka Place,",
              city: "Colombo 4",
              country: "Srilanka",
            }}
            email="in@esoft.lk"
            phone="+94117572572"
          />
        </div>
      </div>
    </div>
  );
};

export default Career;
