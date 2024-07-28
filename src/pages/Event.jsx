import React from "react";
import NavbarProfile from "../components/NavbarProfile.jsx";
import PictureEvent from "../assets/img/picture1.png";
import PictureEventMobile from "../assets/img/pic-event-mobile.png";
import MapPin from "../assets/img/map-pin.svg";
import { Link } from "react-router-dom";
import Attendee from "../components/Attendee.jsx";
import { FaRegHeart } from "react-icons/fa";
import Footer from "../components/Footer";
import Clock from "../assets/img/clock.svg";

function Event() {
  // component
  return (
    <div>
      <NavbarProfile />
      <div className="md:mt-[150px] bg-[#e7c098] md:mx-[130px] md:rounded-[30px] ">
        <div className="w-full md:p-[80px]  md:flex hidden ">
          <div className="flex flex-col items-center md:w-[50%] w-full h-full ">
            <div>
              <img src={PictureEvent} alt="" className="mt-[-20px] top-0" />
            </div>
            <div className="flex items-center text-center justify-center flex-row gap-[20px]">
              <div>
                <Link to="/MyWhislist">
                  <FaRegHeart />
                </Link>
              </div>
              <div className="text-[#373A42] text-[20px] font-bold ">
                Add To Whislist
              </div>
            </div>
          </div>
          <div className="flex flex-col md:w-[50%] gap-[20px] w-full ">
            <div className="flex flex-col gap-[30px] border-b-2 border-black w-full">
              <div className="font-bold color-[#373A42] text-2xl">
                Sights & Sounds Exhibition
              </div>
              <div className="md:flex justify-between flex-row w-full">
                <div className="md:flex flex flex-row gap-[20px] w-full ">
                  <div className="flex flex-row gap-[10px]">
                    <img src={MapPin} alt="" />
                    <div>Jakarta, Indonesia</div>
                  </div>
                  <div className="flex flex-row gap-[10px]">
                    <img src={Clock} alt="" />
                    <div>Wed, 15 Nov, 4:00 PM</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[27px] mb-[10px]">
                <div>Attendee</div>
                <div>
                  <Attendee />
                </div>
              </div>
            </div>
            <div>
              <div className="mb-[20px] font-bold text-[20px]">
                <h1>Event Detail</h1>
              </div>
              <div className="flex flex-col gap-[15px]">
                <div>
                  After his controversial art exhibition "Tear and Consume" back
                  in November 2018, in which guests were invited to tear up…
                </div>
                <div className="text-[#3366ff]">
                  <a href="#">Read More</a>
                </div>
              </div>
              <div className="flex flex-col gap-[15px] mt-[30px] mb-[40px]">
                <div className="text-[#373A42] text-[20px]">Location</div>
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63265.82739363208!2d109.3884297!3d-7.670869!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e650c8d0abed43b%3A0x4027a76e3530950!2sCilacap%2C%20Kabupaten%20Cilacap%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1721191453647!5m2!1sid!2sid"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className="rounded-[20px] w-full"
                  ></iframe>
                </div>
              </div>
              <Link to="/Booking">
                <div className="flex justify-center items-center text-[#fff] bg-[#222] w-[100%] h-[55px] rounded-[15px] ">
                  <button type="button">Buy Ticket</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className=" flex flex-col w-full md:hidden ">
          <div className="flex flex-col items-center w-full h-full">
            <div className="w-full h-full relative mt-[-30px]">
              <img src={PictureEventMobile} alt="" className="w-full h-full" />
            </div>
            <div className="justify-start flex-col gap-[20px] absolute  text-[#ffffff] ">
              <div className="hidden md:inline-block">
                <Link to="/MyWhislist">
                  <FaRegHeart />
                </Link>
              </div>
              <div className="flex flex-col gap-[20px] py-[206px] px-[30px]">
                <div className="flex justify-between gap-10">
                  <div className="font-semibold text-[#FFFFFF] text-2xl">
                    Sights & Sounds Exhibition
                  </div>
                  <div className="text-[40px] text-[#ffffff]">
                    <Link to="/MyWhislist">
                      <FaRegHeart />
                    </Link>
                  </div>
                </div>
                <div className="md:flex justify-between flex-row w-full">
                  <div className="md:flex flex  gap-[10px] w-full flex-col">
                    <div className="flex flex-row gap-[10px]">
                      <img src={MapPin} alt="" />
                      <div>Jakarta, Indonesia</div>
                    </div>
                    <div className="flex flex-row gap-[10px]">
                      <img src={Clock} alt="" />
                      <div>Wed, 15 Nov, 4:00 PM</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[27px] mb-[10px]">
                  <div>Attendee</div>
                  <div>
                    <Attendee />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:w-[50%] gap-[20px] w-full px-[30px] ">
            <div className="mb-[20px] font-bold text-[20px]">
              <h1>Event Detail</h1>
            </div>
            <div className="flex flex-col gap-[15px]">
              <div>
                After his controversial art exhibition "Tear and Consume" back
                in November 2018, in which guests were invited to tear up…
              </div>
              <div className="text-[#3366ff]">
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="flex flex-col gap-[15px] mt-[30px] mb-[40px]">
              <div className="text-[#373A42] text-[20px]">Location</div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63265.82739363208!2d109.3884297!3d-7.670869!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e650c8d0abed43b%3A0x4027a76e3530950!2sCilacap%2C%20Kabupaten%20Cilacap%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1721191453647!5m2!1sid!2sid"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className="rounded-[20px] w-full"
                ></iframe>
              </div>
            </div>
            <Link to="/Booking">
              <div className="flex justify-center items-center text-[white] bg-[#222] w-[100%] h-[55px] rounded-[15px] mb-[20px]">
                <button type="button" className="">
                  Buy Ticket
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Event;
