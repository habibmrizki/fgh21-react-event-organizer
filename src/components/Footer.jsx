import React from "react";
import Facebook from "../assets/img/logo-facebook.png";
import whatsapp from "../assets/img/logo-whatsapp.png";
import intagram from "../assets/img/logo-instagram.png";
import twitter from "../assets/img/logo-twitter.png";
import { FaTicket } from "react-icons/fa6";

function Footer() {
  // component
  return (
    <footer className="flex flex-col md:flex-col md:px-[218px] md:py-[159px] w-full py-8 px-8">
      <div className="flex md:gap-[40px]  gap-[50px] flex-col md:flex-row text-white">
        <div className="flex flex-col md:w-2/5 gap-[30px] w-[full] ">
          <div className="md:w-full w-[100%]  ">
            <div className="flex flex-row items-center gap-[15px]">
              <FaTicket className="text-blue-600 w-9 h-9" />
              <div className="text-[#b6895b] text-[20px] italic">
                Kenangan<span className="text-[#fff]">senja.</span>
              </div>
            </div>
          </div>
          <div>Find events you love with our</div>
          <div className="flex gap-[20px] md:gap-[15]">
            <img src={Facebook} alt="" />
            <img src={whatsapp} alt="" />
            <img src={intagram} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-[20px] w-[full] md:w-1/5 ">
          <div className="text-[#b6895b]">Wetick</div>
          <div>About Us</div>
          <div>Features</div>
          <div>Blog</div>
          <div>Payments</div>
          <div>Mobile App</div>
        </div>
        <div className="flex flex-col gap-[20px] w-[full]  md:w-1/5 ">
          <div className="text-[#b6895b]">Features</div>
          <div>Booking</div>
          <div>Create Event</div>
          <div>Discover</div>
          <div>Register</div>
        </div>
        <div className="flex flex-col gap-[20px] w-[full]  md:w-1/5 ">
          <div className="text-[#b6895b]">Company</div>
          <div>Partnership</div>
          <div>Help</div>
          <div>Terms of Service</div>
          <div>Privacy Policy</div>
          <div>Sitemap</div>
        </div>
      </div>
      <div className="mt-[50px] md:mt-[80px]">
        &copy; 2020 Wetick All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
