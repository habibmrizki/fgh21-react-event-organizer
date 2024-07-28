import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Jakarta from "../assets/img/Jakarta.png";
import Bandung from "../assets/img/bandung.png";
import Bali from "../assets/img/bali.png";
import Aceh from "../assets/img/aceh.png";
import Semarang from "../assets/img/semarang.png";
import Solo from "../assets/img/solo.png";
import Yogyakarta from "../assets/img/yogyakarta.png";

function Location() {
  // component

  const bali = useRef();
  const aceh = useRef();
  const yogyakarta = useRef();
  const semarang = useRef();
  function buttonLocation() {
    bali.current.classList.toggle("hidden");
    aceh.current.classList.toggle("hidden");
    yogyakarta.current.classList.toggle("hidden");
    semarang.current.classList.toggle("hidden");
  }
  return (
    <div className="p-[50px] bg-[#b6895b] rounded-[50px] font-semibold text-[#ffff] mb-[50px] mx-[40px]">
      <div>
        <div className="flex items-center justify-center bg-[#FFFFFF40] text-[#FFFFFF]  h-[30px] md:w-[150px] py-[5px] px-[30px] w-full  rounded-[30px] before:content-['\2501'] gap-[20px]  mb-[25px] ">
          <div className="before:content-[2015] flex items-center">
            Location
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-[50px]  mb-[50px]">
        <div className="w-full h-full text-[36px] flex items-center justify-center">
          Discover Events Near You
        </div>
        <div>
          <img src={Jakarta} alt="jkt" className="w-full h-full" />
          <div className="text-center mt-[15px]">Jakarta</div>
        </div>
        <div className="">
          <img src={Bandung} alt="jkt" className="w-full h-full" />
          <div className="text-center mt-[15px]">Bandung</div>
        </div>
        <div className="" ref={bali}>
          <img src={Bali} alt="jkt" className="w-full h-full" />
          <div className="text-center mt-[15px]">Bali</div>
        </div>
        <div className="" ref={aceh}>
          <img src={Aceh} alt="jkt" className="w-full h-full " />
          <div className="text-center mt-[15px]">Aceh</div>
        </div>
        <div>
          <img src={Solo} alt="jkt" className="w-full h-full" />
          <div className="text-center mt-[15px]">Solo</div>
        </div>
        <div className="" ref={yogyakarta}>
          <img src={Yogyakarta} alt="jkt" className="w-full h-full" />
          <div className="text-center mt-[15px]">Yogyakarta</div>
        </div>
        <div className="" ref={semarang}>
          <img src={Semarang} alt="jkt" className="w-full h-full" />
          <div className="text-center mt-[15px]">Semarang</div>
        </div>
      </div>
      <div className="flex justify-center mt-[100px]">
        <button
          onClick={buttonLocation}
          className="pt-[10px] pr-[99px] pb-[9px] pl-[97px] rounded-[10px] text-[#ffffff] bg-[#222]"
        >
          See All
        </button>
      </div>
    </div>
  );
}

export default Location;
