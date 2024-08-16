import React from "react";
import pertamina from "../assets/img/Pertamina.jpeg";
import holcim from "../assets/img/holcim.jpeg";
import fazztrack from "../assets/img/fazztrack.jpg";
import nestle from "../assets/img/nestle.jpeg";
import alfamart from "../assets/img/alfamart.jpeg";
import mandiri from "../assets/img/mandiri.jpeg";

function Sponsorship() {
  return (
    <div
      // style={{
      //   backgroundImage: "url(" + senja + ")",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      //   width: "w-full",
      //   backgroundColor: "red",
      // }}
      className="bg-[#b6895b]"
    >
      <div className="flex flex-col justify-center items-center mb-[50px]  text-[#ffff] gap-[30px]">
        <div className="bg-[#222] h-[30px] py-[5px] px-[30px] items-center flex text-[#FFFFFF] rounded-[30px] mt-[39px] before:content-['\2501'] md:gap-[10px] gap-[10px]">
          <div>Partner</div>
        </div>
        <div className="text-[36px] font-semibold">Our Trusted Partners</div>
        <div className="mb-[50px]">By Companies Like :</div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-[170px]  ">
          <img src={fazztrack} alt="1" className="w-[82px] h-[60px]" />
          <img src={holcim} alt="2" className="w-[82px] h-[60px]" />
          <img src={alfamart} alt="3" className="w-[82px] h-[60px]" />
          <img src={nestle} alt="4" className="w-[82px] h-[60px]" />
          <img src={mandiri} alt="5" className="w-[82px] h-[60px]" />
          <img src={pertamina} alt="6" className="w-[82px] h-[60px]" />
        </div>
      </div>
    </div>
  );
}

export default Sponsorship;
