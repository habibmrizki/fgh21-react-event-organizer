import React from "react";
import SeatMap from "../assets/img/Denah Tempat Duduk.png";
import SeatMap2 from "../assets/img/seats-2.png";
import Short from "../assets/img/shorting.png";
import SeatPurple from "../assets/img/pic-section-purple.png";
import SeatRed from "../assets/img/pic-section-red.png";
import SeatOrange from "../assets/img/pic-section-orange.png";
import { Link } from "react-router-dom";
import NavbarProfile from "../components/NavbarProfile";
import Footer from "../components/Footer";

function Booking() {
  // component

  let [purple, setPurple] = React.useState(0);
  function seatPurpleMinus() {
    if (purple <= 0) {
      window.alert("disii");
    } else {
      setPurple(purple - 1);
    }
  }
  function seatPurplePlus() {
    if (purple >= 10) {
      window.alert("disii");
    } else {
      setPurple(purple + 1);
    }
  }

  let [red, seatRed] = React.useState(0);
  function seatRedMinus() {
    if (red <= 0) {
      window.alert("disii");
    } else {
      seatRed(red - 1);
    }
  }
  function seatRedPlus() {
    if (red >= 10) {
      window.alert("disii");
    } else {
      seatRed(red + 1);
    }
  }

  let [orange, setOrange] = React.useState(0);
  function seatOrangeMinus() {
    if (orange <= 0) {
      window.alert("disii");
    } else {
      setOrange(orange - 1);
    }
  }
  function seatOrangePlus() {
    if (orange >= 10) {
      window.alert("disii");
    } else {
      setOrange(orange + 1);
    }
  }
  return (
    <div>
      <NavbarProfile />
      <div className="flex md:mt-[150px] bg-[#e7c098] md:mx-[120px] md:rounded-[30px] flex-col md:flex-row items-start justify-center  p-[30px]">
        <div className="md:flex md:justify-center md:items-center md:w-[50%] w-[100%] mt-[60px] hidden ">
          <img src={SeatMap} alt="" className="" />
        </div>
        <div className="md:hidden flex justify-center items-center w-full">
          <img src={SeatMap2} alt="" />
        </div>
        <div className="flex flex-col mt-[35px] mr-[50px] md:w-[50%] w-full h-full">
          <div className="flex justify-between items-center">
            <div className="text-[20px] text-[#373A42]">Tickets</div>
            <div className="flex flex-row gap-[15px] items-center justify-center">
              <div className="text-[#FC1055] font-bold text-[14px]">
                By Price
              </div>
              <button type="button">
                <img src={Short} alt="" />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-[50px] mt-[25px] ">
            <div className="flex flex-row gap-[15px] w-full ">
              <div className="bg-[#F1EAFF] w-[45px] h-[45px] flex justify-center items-center rounded-[10px] ">
                <img src={SeatPurple} alt="" className="" />
              </div>
              <div className="flex flex-col w-full ">
                <div className="flex flex-row justify-between w-full">
                  <div>SECTION REG, ROW 1</div>
                  <div>$15</div>
                </div>
                <div className="flex flex-row justify-between w-full">
                  <div>12 Seats available</div>
                  <div>Per Person</div>
                </div>
                <div className="flex flex-row justify-between w-full">
                  <div className="flex gap-[20px] mt-[25px]">Quantity</div>
                  <div className="flex gap-[20px] mt-[25px]">
                    <button
                      onClick={seatPurpleMinus}
                      className="border-2 border-stone-950 w-[33px] h-[30.1px] rounded-[7px] text-center"
                    >
                      -
                    </button>
                    <div>{purple}</div>
                    <button
                      onClick={seatPurplePlus}
                      className="border-2 border-stone-950 w-[33px] h-[30.1px] rounded-[7px] text-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[15px] w-full ">
              <div className="bg-[#FFEAEF] w-[45px] h-[45px] flex justify-center items-center rounded-[10px] ">
                <img src={SeatRed} alt="" className="" />
              </div>
              <div className="flex flex-col w-full ">
                <div className="flex flex-row justify-between w-full">
                  <div>SECTION VIP, ROW 2</div>
                  <div>$35</div>
                </div>
                <div className="flex flex-row justify-between w-full">
                  <div>9 Seats available</div>
                  <div>Per Person</div>
                </div>
                <div className="flex flex-row justify-between w-full">
                  <div className="flex gap-[20px] mt-[25px]">Quantity</div>
                  <div className="flex gap-[20px] mt-[25px]">
                    <button
                      onClick={seatRedMinus}
                      className="border-2 border-stone-950 w-[33px] h-[30.1px] rounded-[7px] text-center"
                    >
                      -
                    </button>
                    <div>{red}</div>
                    <button
                      onClick={seatRedPlus}
                      className="border-2 border-stone-950 w-[33px] h-[30.1px] rounded-[7px] text-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[15px] w-full ">
              <div className="bg-[#FFF4E7] w-[45px] h-[45px] flex justify-center items-center rounded-[10px] ">
                <img src={SeatOrange} alt="" className="" />
              </div>
              <div className="flex flex-col w-full ">
                <div className="flex flex-row justify-between w-full">
                  <div>SECTION VVIP, ROW 3</div>
                  <div>$50</div>
                </div>
                <div className="flex flex-row justify-between w-full">
                  <div>6 Seats available</div>
                  <div>Per Person</div>
                </div>
                <div className="flex flex-row justify-between w-full">
                  <div className="flex gap-[20px] mt-[25px]">Quantity</div>
                  <div className="flex gap-[20px] mt-[25px]">
                    <button
                      onClick={seatOrangeMinus}
                      className="border-2 border-stone-950 w-[33px] h-[30.1px] rounded-[7px] text-center"
                    >
                      -
                    </button>
                    <div>{orange}</div>
                    <button
                      onClick={seatOrangePlus}
                      className="border-2  border-stone-950 w-[33px] h-[30.1px] rounded-[7px] text-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b-2 border-black mb-[25px] mt-[25px]"></div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div>Ticket Section</div>
              <div className="text-[#3366ff]">
                {" "}
                {purple === 0 && red === 0 && orange === 0
                  ? "-"
                  : `REG${" " + purple}, ` +
                    `VIP${" " + red}, ` +
                    `VVIP${" " + orange}`}
              </div>
            </div>
            <div className="flex justify-between">
              <div>Quantity</div>
              <div className="text-[#3366ff]">{purple + red + orange}</div>
            </div>
            <div className="flex justify-between">
              <div>Total Payment</div>
              <div className="text-[#3366ff]">
                ${purple * 15 + red * 35 + orange * 50}
              </div>
            </div>
          </div>
          <div className=" w-full  ">
            <Link to="/Payment">
              <button
                type="button"
                className="bg-[#222] text-[white] w-full h-[55px] rounded-[15px] mt-[35px] "
              >
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Booking;
