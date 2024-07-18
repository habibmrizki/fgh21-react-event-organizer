import react from "react";
import LogoWetick from "../assets/img/logo-wetick.png";
import Facebook from "../assets/img/logo-facebook.png";
import whatsapp from "../assets/img/logo-whatsapp.png";
import intagram from "../assets/img/logo-instagram.png";
import twitter from "../assets/img/logo-twitter.png";

function Footer() {
  // component
  return (
    <div className="pl-[216px] pr-[216px] w-full pb-[36px]">
      <div className="flex gap-[10px] mb-[76px]">
        <div className="w-2/5">
          <div className="mb-[30px] ">
            <img src={LogoWetick} alt="" />
          </div>
          <div className="mb-[15px] text-[#373A42] font-medium tracking-[1px] text-sm">
            Find events you love with our
          </div>
          <div className="flex gap-[16px]">
            <div>
              <img src={Facebook} alt="" />
            </div>
            <div>
              <img src={whatsapp} alt="" />
            </div>
            <div>
              <img src={intagram} alt="" />
            </div>
            <div>
              <img src={twitter} alt="" />
            </div>
          </div>
        </div>
        <div className="w-1/5">
          <div className="font-semibold tracking-[1px] text-[#373A42] mb-[20px]">
            Wetick
          </div>
          <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
            About Us
          </div>
          <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
            Features
          </div>
          <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
            Blog
          </div>
          <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
            Payments
          </div>
          <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
            Mobile App
          </div>
        </div>
        <div className="w-1/5">
          <div className="font-semibold tracking-[1px] text-[#373A42] mb-[20px]">
            Features
          </div>
          <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
            Booking
          </div>
          <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
            Create Event
          </div>
          <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
            Discover
          </div>
          <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
            Register
          </div>
        </div>
        <div className="w-1/5">
          <div className="font-semibold tracking-[1px] text-[#373A42] mb-[20px]">
            Company
          </div>
          <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
            Partnership
          </div>
          <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
            Help
          </div>
          <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
            Terms of Service
          </div>
          <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
            Privacy Policy
          </div>
          <div className="font-medium tracking-[1px] text-[#C1C5D0] mb-[16px]">
            Sitemap
          </div>
        </div>
      </div>
      <div className="font-semibold text-[#5A7184] tracking-[1px]">
        &copy; 2020 Wetick All Rights Reserved
      </div>
    </div>

    // <footer className="px-[218px] py-[159px] w-full">
    //   <div className="flex  gap-[30px] flex-row">
    //     <div className="flex flex-col w-2/5">
    //       <div className="flex ">
    //         <img src={LogoWetick} alt="" />
    //       </div>
    //       <div>Find events you love with our</div>
    //       <div className="flex gap-[20px] ">
    //         <img src={Facebook} alt="" />
    //         <img src={whatsapp} alt="" />
    //         <img src={intagram} alt="" />
    //         <img src={twitter} alt="" />
    //       </div>
    //     </div>
    //     <div className="flex flex-col gap-[20px] w-1/5">
    //       <div>Wetick</div>
    //       <div>About Us</div>
    //       <div>Features</div>
    //       <div>Blog</div>
    //       <div>Payments</div>
    //       <div>Mobile App</div>
    //     </div>
    //     <div className="flex flex-col gap-[20px] w-1/5">
    //       <div>Features</div>
    //       <div>Booking</div>
    //       <div>Create Event</div>
    //       <div>Discover</div>
    //       <div>Register</div>
    //     </div>
    //     <div className="flex flex-col gap-[20px] w-1/5">
    //       <div>Company</div>
    //       <div>Partnership</div>
    //       <div>Help</div>
    //       <div>Terms of Service</div>
    //       <div>Privacy Policy</div>
    //       <div>Sitemap</div>
    //     </div>
    //   </div>
    //   <div>

    //   </div>
    // </footer>
  );
}

export default Footer;
