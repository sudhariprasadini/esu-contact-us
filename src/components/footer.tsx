import Image from "next/image";
import React from "react";
import footerImage from "@/images/footer-image-ESU.svg";

const FooterContactUs = () => {
  return (
    <div>
      <div className="w-full h-[703px] bg-[#02AEC9] flex flex-col">
        <div className="w-full h-[141px]"></div>
        <div className="bg-[#100B25] w-full h-full flex flex-row text-[18px] text-white pt-[60px]">
          <div className="ml-[160px]">
            <p className="font-bold mb-[20px]">CONTACT SETAILS</p>
            <p>Hotline Number</p>
            <p>+94117572572</p>
            <p>Email</p>
            <p>info@esoft.lk</p>
            <p>Head Office(Block E)</p>
            <p>
              ESOFT Metro Campus No.03,
              <br /> De Fonseka Place,
              <br />
              Colombo 4,Sri Lanka.
            </p>
          </div>
          <div className="pl-[96px]">
            <p className="font-bold mb-[20px]">QUICK LINKS</p>
            <ul className="flex flex-col gap-[14px] list-disc">
              <li>Home </li>
              <li>Student Life</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Careers</li>
              <li>News & Event</li>
              <li>Blogs</li>
              <li>CSR</li>
            </ul>
          </div>
          <div className="pl-[136px] flex flex-col">
            <h3 className="font-bold mb-[20px]">IMPORTANT LINKS</h3>
            <ul className="flex flex-col gap-[14px] list-disc">
              <li>Courses</li>
              <li>Faculties</li>
              <li>Transfer Programmes </li>
              <li>Privacy Policy</li>
              <li>Payment Policy</li>
              <li>Refund Policy</li>
              <li>Quality Policy</li>
              <li>Referrals</li>
            </ul>
          </div>
          <div className="ml-[29]">
            <Image
              src={footerImage}
              alt="Description"
              width={877}
              height={483}
            />
          </div>
        </div>
        <div className="w-full h-[34px]"></div>
      </div>
    </div>
  );
};

export default FooterContactUs;
