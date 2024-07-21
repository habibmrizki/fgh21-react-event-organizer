import React from "react";
import Event1 from "../assets/img/picture-event1.png";
import Event2 from "../assets/img/picture-event2.png";
import Event3 from "../assets/img/picture-event3.jpg";
import Event4 from "../assets/img/picture-event4.jpg";
import Event5 from "../assets/img/picture-event5.jpg";
import Event6 from "../assets/img/picture-event6.jpg";
import Event7 from "../assets/img/picture-event7.jpg";
import Attendee from "./Attendee";
import { Link } from "react-router-dom";

function EventHome() {
  // component
  return (
    <div className="flex gap-[30px] my-[50px] mx-[60px]">
      <div className="flex gap-4">
        <div className="w-[260px] h-[376px] overflow-hidden rounded-3xl flex-shrink-0 relative">
          <img
            src={Event1}
            alt="Event-1"
            className="w-full h-full object-cover"
          />
          <div className="flex flex-col justify-end text-white gap-6 px-[25px] py-[32px] absolute w-full h-full bg-gradient-to-b from-transparent via-[rgba(0,0,0,0)] to-[rgba(16,20,38,1)] top-0 left-0">
            <div className="flex flex-col">
              <div className="text-sm">Wed, 15 Nov, 4:00 PM</div>
              <div className="text-2xl font-semibold">
                Sights & Sounds Exhibition
              </div>
            </div>
            <Attendee />
          </div>
        </div>
        <div className="w-[260px] h-[376px] overflow-hidden rounded-3xl flex-shrink-0 relative">
          <img
            src={Event2}
            alt="Event-1"
            className="w-full h-full object-cover"
          />
          <div className="flex flex-col justify-end text-white gap-6 px-[25px] py-[32px] absolute w-full h-full bg-gradient-to-b from-transparent via-[rgba(0,0,0,0)] to-[rgba(16,20,38,1)] top-0 left-0">
            <div className="flex flex-col">
              <div className="text-sm">Fri, 12 Jan, 7:00 PM</div>
              <div className="text-2xl font-semibold">Movie Vector</div>
            </div>
            <Attendee />
          </div>
        </div>
        <div className="w-[260px] h-[376px] overflow-hidden rounded-3xl flex-shrink-0 relative">
          <img
            src={Event3}
            alt="Event-1"
            className="w-full h-full object-cover"
          />
          <div className="flex flex-col justify-end text-white gap-6 px-[25px] py-[32px] absolute w-full h-full bg-gradient-to-b from-transparent via-[rgba(0,0,0,0)] to-[rgba(16,20,38,1)] top-0 left-0">
            <div className="flex flex-col">
              <div className="text-sm">Sun, 1 Aug, 3:00 PM</div>
              <div className="text-2xl font-semibold">Let's Play Skater</div>
            </div>
            <Attendee />
          </div>
        </div>
        <div className="w-[260px] h-[376px] overflow-hidden rounded-3xl flex-shrink-0 relative">
          <img
            src={Event4}
            alt="Event-1"
            className="w-full h-full object-cover"
          />
          <div className="flex flex-col justify-end text-white gap-6 px-[25px] py-[32px] absolute w-full h-full bg-gradient-to-b from-transparent via-[rgba(0,0,0,0)] to-[rgba(16,20,38,1)] top-0 left-0">
            <div className="flex flex-col">
              <div className="text-sm">Mon, 15 Nov, 6:00 PM</div>
              <div className="text-2xl font-semibold">Macth MU vs Arsenal</div>
            </div>
            <Attendee />
          </div>
        </div>
        <div className="w-[260px] h-[376px] overflow-hidden rounded-3xl flex-shrink-0 relative">
          <img
            src={Event5}
            alt="Event-1"
            className="w-full h-full object-cover"
          />
          <div className="flex flex-col justify-end text-white gap-6 px-[25px] py-[32px] absolute w-full h-full bg-gradient-to-b from-transparent via-[rgba(0,0,0,0)] to-[rgba(16,20,38,1)] top-0 left-0">
            <div className="flex flex-col">
              <div className="text-sm">Wed, 26 Ap, 9:00 AM</div>
              <div className="text-2xl font-semibold">Meeting Sribu</div>
            </div>
            <Attendee />
          </div>
        </div>
        <div className="w-[260px] h-[376px] overflow-hidden rounded-3xl flex-shrink-0 relative">
          <img
            src={Event6}
            alt="Event-1"
            className="w-full h-full object-cover"
          />
          <div className="flex flex-col justify-end text-white gap-6 px-[25px] py-[32px] absolute w-full h-full bg-gradient-to-b from-transparent via-[rgba(0,0,0,0)] to-[rgba(16,20,38,1)] top-0 left-0">
            <div className="flex flex-col">
              <div className="text-sm">Sat, 20 March, 12:00 PM</div>
              <div className="text-2xl font-semibold">Class Cooking</div>
            </div>
            <Attendee />
          </div>
        </div>
        <div className="w-[260px] h-[376px] overflow-hidden rounded-3xl flex-shrink-0 relative">
          <img
            src={Event7}
            alt="Event-1"
            className="w-full h-full object-cover"
          />
          <div className="flex flex-col justify-end text-white gap-6 px-[25px] py-[32px] absolute w-full h-full bg-gradient-to-b from-transparent via-[rgba(0,0,0,0)] to-[rgba(16,20,38,1)] top-0 left-0">
            <div className="flex flex-col">
              <div className="text-sm">Sat, 3 Oct, 8:00 AM</div>
              <div className="text-2xl font-semibold">Party Color Fun</div>
            </div>
            <Attendee />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventHome;
