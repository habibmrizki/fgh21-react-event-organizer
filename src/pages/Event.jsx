import react from "react";
import EventPic from "../assets/img/picture1.png";
import Navbar from "../components/Navbar.jsx";
import PictureEvent from "../assets/img/picture1.png";
import MapPin from "../assets/img/map-pin.svg";
import Clock from "../assets/img/clock.svg";
import Persons from "../assets/img/Group 27.png";

function Event() {
  // component
  return (
    <div className="mt-[150px] bg-[#ffffff] mx-[120px] rounded-[30px]">
      <div className="flex p-[80px]">
        <div className="flex flex-col items-center w-[50%]">
          <div>
            <img src={PictureEvent} alt="" />
          </div>
          <div className="flex items-center text-center justify-center flex-row gap-[20px]">
            <div></div>
            <div className="text-[#373A42] text-[20px] font-bold">
              Add To Whislist
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[50%] gap-[20px] ">
          <div className="flex flex-col gap-[30px] border-b-2 border-black">
            <div className="font-bold color-[#373A42] text-2xl">
              Sights & Sounds Exhibition
            </div>
            <div className="flex flex-row">
              <div className="flex flex-row gap-[100px] ">
                <div className="flex flex-row gap-[10px]">
                  <img src={MapPin} alt="" />
                  <div>Jakarta, Indonesia</div>
                </div>
                <div className="flex flex-row gap-[10px]">
                  <img src={MapPin} alt="" />
                  <div>Jakarta, Indonesia</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div>Attendee</div>
              <div>List Atendde</div>
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
            <div className="flex justify-center items-center text-[white] bg-[#3366FF] w-[100%] h-[55px] rounded-[15px] ">
              <button type="button">Buy Tickets</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
