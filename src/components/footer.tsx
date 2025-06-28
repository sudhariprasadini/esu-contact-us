import Image from "next/image";
import React from "react";
import footerImage from "@/images/footer-image-ESU.svg";
import FooterImage1 from "@/images/FooterImage1.svg";
import FooterImage2 from "@/images/FooterImage2.svg";

const FooterContactUs = () => {
  return (
    <div>
      <div className="w-full lg:h-[703px] h-auto bg-[#02AEC9] flex flex-col mx-40px lg:mx-0">
        <div className="w-full  lg:h-[141px] p-5 flex lg:flex-row flex-col justify-between items-center lg:px-[140px] px-[40px]">
          <div>
            <h1 className="font-bold text-[60px]">#ESULife</h1>
          </div>
          <div className="bg-[#016879]">
            <Image src={FooterImage1} alt="Footer Image" />
          </div>
        </div>
        <div className="bg-[#100B25] w-full h-full flex lg:flex-row  flex-col text-[18px] text-white pt-[60px] lg:gap-5 gap-10">
          <div className="lg:ml-[160px] pl-[40px]">
            <p className="font-bold mb-[20px]">CONTACT DETAILS</p>
            <p>Hotline Number</p>
            <p className="font-bold mb-[10px]">+94117572572</p>
            <p>Email</p>
            <p className="font-bold mb-[10px]">info@esoft.lk</p>
            <p>Head Office(Block E)</p>
            <p className="font-bold mb-[10px]">
              ESOFT Metro Campus No.03,
              <br /> De Fonseka Place,
              <br />
              Colombo 4,Sri Lanka.
            </p>
            <div className="flex flex-row items-center gap-2 mt-[20px]">
              <h1 className="font-bold text-[18px]">AWARDS</h1>
              <Image src={FooterImage2} alt="Location Icon" />
            </div>
          </div>
          <div className="lg:pl-[96px] pl-[40px]">
            <p className="font-bold mb-[20px]">QUICK LINKS</p>
            <ul className="flex flex-col gap-[14px] list-disc lg:ml-0 ml-[40px]">
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
          <div className="lg:pl-[116px] pl-[40px] flex flex-col">
            <h3 className="font-bold mb-[20px]">IMPORTANT LINKS</h3>
            <ul className="flex flex-col gap-[14px] list-disc lg:ml-0 ml-[40px]">
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
            <Image src={footerImage} alt="Description" />
          </div>
        </div>
        <div className="w-full lg:h-[34px] h-auto text-white flex justify-center items-center text-[14px] lg:px-0 px-[40px]">
          <p>
            Copyright © 2025 ESU METRO CAMPUS All rights reserved. Website
            Designed And Developed By Web Lankan
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterContactUs;
