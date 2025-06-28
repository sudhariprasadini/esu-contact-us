import React from "react";

interface ReuseAddressSectionProps {
  title: string;
  highlightedWord: string;
  address: {
    department: string;
    institution: string;
    street: string;
    city: string;
    country: string;
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
      <div className="lg:h-[488px] lg:w-auto flex flex-col px-[80px] pt-[60px] pb-[70px]">
        <div className="text-[40px] font-bold">
          {title} <span className="text-[#00AECD]">{highlightedWord}</span>
        </div>
        <div className="mt-[50px]">
          <div className="text-[20px]">Address</div>
          <div className="text-[30px] font-bold">
            {address.department}
            <br />
            {address.institution}
            <br />
            {address.street}
            <br />
            {address.city}, {address.country}
          </div>
        </div>
        <div className="flex flex-row mt-[50px]">
          <div className="mr-[50px]">
            <div className="text-[20px]">Email</div>
            <div className="text-[30px] font-bold">{email}</div>
          </div>
          <div>
            <div className="text-[20px]">Call Us on</div>
            <div className="text-[30px] font-bold">{phone}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReuseAddressSection;
