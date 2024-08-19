import React, { useEffect, useState } from "react";
import SeatMap from "../assets/img/Denah Tempat Duduk.png";
import SeatMap2 from "../assets/img/seats-2.png";
import Short from "../assets/img/shorting.png";
import SeatPurple from "../assets/img/pic-section-purple.png";
import SeatRed from "../assets/img/pic-section-red.png";
import SeatOrange from "../assets/img/pic-section-orange.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import NavbarProfile from "../components/NavbarProfile";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { FaSpinner } from "react-icons/fa6";

function Booking() {
  // component
  const { id } = useParams();
  const newEvent = useSelector((state) => state.event.dataEvent);
  // const [book, setBook] = React.useState([]);
  const endpoint = "http://localhost:8080/event/" + id;
  // const dispatch = useDispatch();
  const [booking, setBooking] = useState({});
  const [loading, setLoading] = useState(0);
  const navigate = useNavigate();
  // console.log(Booking);
  useEffect(() => {
    (async () => {
      const data = await axios.get(endpoint);
      const resultData = data.data.result;
      // console.log(resultData);
      setBooking(resultData);
      // console.log(endpoint);
    })();
  }, []);

  const [section, setSection] = useState({});
  const endpoint2 = "http://localhost:8080/event/section/" + id;
  useEffect(() => {
    (async () => {
      const dataSection = await axios.get(endpoint2);
      const resultSection = dataSection.data.result;
      console.log(resultSection);
      setSection(resultSection);
      // console.log(section);
    })();
  }, []);

  // console.log(booking);
  let [purple, setPurple] = React.useState(0);
  function seatPurpleMinus() {
    if (purple <= 0) {
      window.alert("disii");
    } else {
      setPurple(purple - 1);
    }
  }
  function seatPurplePlus() {
    if (purple > 9999) {
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
    if (red > 9999) {
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
    if (orange > 9999) {
      window.alert("disii");
    } else {
      setOrange(orange + 1);
    }
  }

  let ticket = [];
  if (purple > 0) {
    ticket.push(`REG (${purple})`);
  }
  if (red > 0) {
    ticket.push(`VIP (${red})`);
  }
  if (orange > 0) {
    ticket.push(`VVIP (${orange})`);
  }

  let dataTicket = "";
  ticket.length > 0 ? (dataTicket = ticket.join(", ")) : (dataTicket = "-");

  function clickEvent() {
    setTimeout(() => {
      navigate("/Payment");
    }, 1000);
    setLoading(1);
  }

  return (
    <div>
      <NavbarProfile />
      <div className="flex md:mt-[150px] bg-[#e7c098] md:mx-[120px] md:rounded-[30px] flex-col md:flex-row items-start justify-center  p-[30px]">
        <div className="md:flex md:justify-center md:items-center md:w-[50%] w-[100%] mt-[60px] hidden ">
          <img src={booking.image} alt="" className=" w-[80%] rounded-[20px]" />
        </div>
        <div className="md:hidden flex justify-center items-center">
          <img src={booking.image} alt="" className=" rounded-[20px]" />
        </div>
        <div className="flex flex-col mt-[35px] mr-[50px] md:w-[50%] w-full h-full">
          <div className="flex justify-between items-center">
            <div className="text-[20px] text-[#010101]">{booking.title}</div>
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
                  <div>section vvip</div>
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
              <div className="text-[#3366ff] flex items-center">
                {dataTicket}
              </div>
            </div>
            <div className="flex justify-between">
              <div>Quantity</div>
              <div className="text-[#3366ff]">
                {" "}
                {purple === 0 && red === 0 && orange === 0
                  ? "-"
                  : purple + red + orange}
              </div>
            </div>
            <div className="flex justify-between">
              <div>Total Payment</div>
              <div className="text-[#3366ff]">
                {purple === 0 && red === 0 && orange === 0
                  ? "-"
                  : "$" + (purple * 15 + red * 35 + orange * 50)}
              </div>
            </div>
          </div>
          <div className="w-full" onClick={clickEvent}>
            <button
              type="button"
              className="bg-[#222] text-[white] w-full h-[55px] rounded-[15px] mt-[35px] "
            >
              Checkout
            </button>
          </div>
        </div>
        {loading ? (
          <div className="bg-slate-500/50 fixed top-0 left-0 flex items-center h-screen w-full">
            <div className="w-full h-screen flex items-center justify-center gap-[10px]">
              <FaSpinner className="animate-spin text-[50px]" />
              <span className="text-[50px] font-bold">Loading...</span>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Booking;
