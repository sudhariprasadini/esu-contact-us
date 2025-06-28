import React from "react";

interface ReuseAddressSectionProps {
  title: string;
  highlightedWord: string;
  address: {
    department: string;
    institution: string;
    street: string | null;
    city: string | null;
    country: string | null;
  };
  email: string;
  phone: string;
  className?: string;
}

const ReuseAddressSection = ({
  title,
  highlightedWord,
  address,
  email,
  phone,
  className = "",
}: ReuseAddressSectionProps) => {
  return (
    <div className={className}>
      <div className="lg:h-[488px] lg:w-auto flex flex-col lg:px-[80px] px-[40px] lg:pt-[60px] lg:pb-[70px] ">
        <div className="lg:text-[40px] text-[20px] font-bold">
          {title} <span className="text-[#00AECD]">{highlightedWord}</span>
        </div>
        <div className="lg:mt-[50px] mt-[20px]">
          <div className="lg:text-[20px] text-[16px]">Address</div>
          <div className="lg:text-[30px] text-[20px] font-bold">
            {address.department}
            <br />
            {address.institution}
            <br />
            {address.street}
            <br />
            {address.city} {address.country}
          </div>
        </div>
        <div className="flex lg:flex-row flex-col lg:mt-[50px]">
          <div className="lg:mr-[50px] ">
            <div className="lg:text-[20px] text-[16px]">Email</div>
            <div className="lg:text-[30px] text-[20px] font-bold">{email}</div>
          </div>
          <div>
            <div className="lg:text-[20px] text-[16px]">Call Us on</div>
            <div className="lg:text-[30px] text-[20px] font-bold">{phone}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReuseAddressSection;
