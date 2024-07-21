import React from "react";
import LogoWetick from "../assets/img/logo-wetick.png";
import Facebook from "../assets/img/logo-facebook.png";
import whatsapp from "../assets/img/logo-whatsapp.png";
import intagram from "../assets/img/logo-instagram.png";
import twitter from "../assets/img/logo-twitter.png";

function Footer() {
  // component
  return (
    // <div className="pl-[216px] pr-[216px] w-full pb-[36px]">
    //   <div className="flex gap-[10px] mb-[76px]">
    //     <div className="w-2/5">
    //       <div className="mb-[30px] ">
    //         <img src={LogoWetick} alt="" />
    //       </div>
    //       <div className="mb-[15px] text-[#373A42] font-medium tracking-[1px] text-sm">
    //         Find events you love with our
    //       </div>
    //       <div className="flex gap-[16px]">
    //         <div>
    //           <img src={Facebook} alt="" />
    //         </div>
    //         <div>
    //           <img src={whatsapp} alt="" />
    //         </div>
    //         <div>
    //           <img src={intagram} alt="" />
    //         </div>
    //         <div>
    //           <img src={twitter} alt="" />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="w-1/5">
    //       <div className="font-semibold tracking-[1px] text-[#373A42] mb-[20px]">
    //         Wetick
    //       </div>
    //       <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
    //         About Us
    //       </div>
    //       <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
    //         Features
    //       </div>
    //       <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
    //         Blog
    //       </div>
    //       <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
    //         Payments
    //       </div>
    //       <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
    //         Mobile App
    //       </div>
    //     </div>
    //     <div className="w-1/5">
    //       <div className="font-semibold tracking-[1px] text-[#373A42] mb-[20px]">
    //         Features
    //       </div>
    //       <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
    //         Booking
    //       </div>
    //       <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
    //         Create Event
    //       </div>
    //       <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
    //         Discover
    //       </div>
    //       <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
    //         Register
    //       </div>
    //     </div>
    //     <div className="w-1/5">
    //       <div className="font-semibold tracking-[1px] text-[#373A42] mb-[20px]">
    //         Company
    //       </div>
    //       <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
    //         Partnership
    //       </div>
    //       <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
    //         Help
    //       </div>
    //       <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
    //         Terms of Service
    //       </div>
    //       <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
    //         Privacy Policy
    //       </div>
    //       <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
    //         Sitemap
    //       </div>
    //     </div>
    //   </div>
    //   <div className="font-semibold text-[#5A7184] tracking-[1px]">
    //     &copy; 2020 Wetick All Rights Reserved
    //   </div>
    // </div>

    // <div className="flex flex-col gap-[75px] py-8 px-8 md:py-[160px] md:px-[220px]">
    //   <div className="flex gap-[30px] justify-between flex-col md:flex-row">
    //     <div className="flex flex-col gap-[30px]">
    //       <div className="flex items-center text-2xl font-bold">
    //         <img src={LogoWetick} alt="logo" />
    //         <span className="text-[#3366ff]">We</span>
    //         <span className="text-[#ff3d71]">tick</span>
    //       </div>
    //       <div className="flex flex-col gap-[15px]">
    //         <div>Find events you love with our</div>
    //         <div className="flex gap-[16px]">
    //           <div>
    //             <img src={Facebook} alt="" />
    //           </div>
    //           <div>
    //             <img src={whatsapp} alt="" />
    //           </div>
    //           <div>
    //             <img src={intagram} alt="" />
    //           </div>
    //           <div>
    //             <img src={twitter} alt="" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex flex-col gap-[20px]">
    //       <div className="font-semibold">Wetick</div>
    //       <ul className="p-none m-none flex flex-col gap-[15px] text-[#c1c5d0]">
    //         <li>About Us</li>
    //         <li>Features</li>
    //         <li>Blog</li>
    //         <li>Payments</li>
    //         <li>Mobile Apps</li>
    //       </ul>
    //     </div>
    //     <div className="flex flex-col gap-[20px]">
    //       <div className="font-semibold">Features</div>
    //       <ul className="p-none m-none flex flex-col gap-[15px] text-[#c1c5d0]">
    //         <li>Booking</li>
    //         <li>Create Event</li>
    //         <li>Discover</li>
    //         <li>Register</li>
    //       </ul>
    //     </div>
    //     <div className="flex flex-col gap-[20px]">
    //       <div className="font-semibold">Company</div>
    //       <ul className="p-none m-none flex flex-col gap-[15px] text-[#c1c5d0]">
    //         <li>Partnership</li>
    //         <li>Help</li>
    //         <li>Terms of Service</li>
    //         <li>Privacy Policy</li>
    //         <li>Sitemap</li>
    //       </ul>
    //     </div>
    //   </div>
    //   <div>&copy; 2020 Wetick All Rights Reserved</div>
    // </div>

    <footer className="flex flex-col md:flex-col md:px-[218px] md:py-[159px] w-full py-8 px-8">
      <div className="flex md:gap-[40px]  gap-[50px] flex-col md:flex-row">
        <div className="flex flex-col w-2/5 gap-[30px]  ">
          <div className="flex md:w-full w-[50%]  ">
            <img src={LogoWetick} alt="" className="" />
          </div>
          <div>Find events you love with our</div>
          <div className="flex gap-[20px] md:gap-[15]">
            <img src={Facebook} alt="" />
            <img src={whatsapp} alt="" />
            <img src={intagram} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-[20px] w-[50%] md:w-1/5 ">
          <div>Wetick</div>
          <div>About Us</div>
          <div>Features</div>
          <div>Blog</div>
          <div>Payments</div>
          <div>Mobile App</div>
        </div>
        <div className="flex flex-col gap-[20px] w-[50%]  md:w-1/5 ">
          <div>Features</div>
          <div>Booking</div>
          <div>Create Event</div>
          <div>Discover</div>
          <div>Register</div>
        </div>
        <div className="flex flex-col gap-[20px] w-[50%]  md:w-1/5 ">
          <div>Company</div>
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
