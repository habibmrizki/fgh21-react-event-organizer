import react from "react";
import SeatMap from "../assets/img/Denah Tempat Duduk.png";
import Short from "../assets/img/shorting.png";
import SeatPurple from "../assets/img/pic-section-purple.png";
import SeatRed from "../assets/img/pic-section-red.png";
import SeatOrange from "../assets/img/pic-section-orange.png";

function Booking() {
  // component
  return (
    <div className="flex mt-[150px] bg-[#ffffff] mx-[120px] rounded-[30px]">
      <div className="flex justify-center items-center w-[50%]">
        <img src={SeatMap} alt="" />
      </div>
      <div className="flex flex-col mt-[35px] mr-[50px] w-[50%] h-full">
        <div className="flex justify-between items-center">
          <div className="text-[20px] text-[#373A42]">Tickets</div>
          <div className="flex flex-row gap-[15px] items-center justify-center">
            <div className="text-[#FC1055] font-bold text-[14px]">By Price</div>
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
                  <button className="border-2 w-[33px] h-[30.1px] rounded-[7px] text-center">
                    -
                  </button>
                  <div>0</div>
                  <button className="border-2 w-[33px] h-[30.1px] rounded-[7px] text-center">
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
                  <button className="border-2 w-[33px] h-[30.1px] rounded-[7px] text-center">
                    -
                  </button>
                  <div>2</div>
                  <button className="border-2 w-[33px] h-[30.1px] rounded-[7px] text-center">
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
                  <button className="border-2 w-[33px] h-[30.1px] rounded-[7px] text-center">
                    -
                  </button>
                  <div>2</div>
                  <button className="border-2 w-[33px] h-[30.1px] rounded-[7px] text-center">
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
            <div className="text-[#3366ff]">VIP</div>
          </div>
          <div className="flex justify-between">
            <div>Quantity</div>
            <div className="text-[#3366ff]">2</div>
          </div>
          <div className="flex justify-between">
            <div>Total Payment</div>
            <div className="text-[#3366ff]">$70</div>
          </div>
        </div>
        <div className=" w-full  ">
          <button
            type="button"
            className="bg-[#3366ff] text-[white] w-full h-[55px] rounded-[15px] mt-[35px] "
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Booking;
