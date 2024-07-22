import react from "react";
import Wallet from "../assets/img/dompet.png";
import Dollar from "../assets/img/icon-dollar.png";
import Retail from "../assets/img/retail.png";
import Bank from "../assets/img/bank.png";
import Atm from "../assets/img/atm.png";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Navbar from "../components/NavbarProfile";
import Footer from "../components/Footer";

import { FaChevronDown } from "react-icons/fa6";

function Payment() {
  // component
  return (
    <div>
      <Navbar />
      <div className="flex  md:mt-[150px] mt-[0] bg-[#ffffff] md:mx-[130px] rounded-[30px] md:p-[100px] p-[30px] flex-wrap md:flex-nowrap ">
        <div className="flex flex-col w-full">
          <div className="font-bold text-[20px] mb-[40px]">Payment Method</div>
          <form action="" className="flex flex-col gap-[40px] w-full">
            <div className="flex  justify-between items-center w-full max-w-[310px]">
              <div className="flex items-center gap-[15px]">
                <div>
                  <input type="radio" name="payment-method" checked></input>
                </div>
                <div>
                  <img src={Wallet} alt="" />
                </div>
                <div className="font-bold">Card</div>
              </div>
              <button type="button">
                <FaChevronDown />
              </button>
            </div>
            <div className="flex justify-between items-center w-[315px] pl-[27px]">
              <div className="flex items-center gap-[15px]">
                <div>
                  <img src={Atm} alt="" />
                </div>
                <button className="flex items-center justify-center rounded-[10px] w-[45px] h-[45px] border-2 border-[#3366ff] border-dotted">
                  <FaPlus />
                </button>
              </div>
            </div>
            <div className="flex  justify-between items-center w-full max-w-[310px]">
              <div className="flex items-center gap-[15px]">
                <div>
                  <input type="radio" name="payment-method"></input>
                </div>
                <div>
                  <img src={Bank} alt="" />
                </div>
                <div className="font-bold">Bank Transfer</div>
              </div>
              <button type="button">
                <FaChevronDown />
              </button>
            </div>
            <div className="flex  justify-between items-center w-full max-w-[310px]">
              <div className="flex items-center gap-[15px]">
                <div>
                  <input type="radio" name="payment-method"></input>
                </div>
                <div>
                  <img src={Retail} alt="" />
                </div>
                <div className="font-bold">Retail </div>
              </div>
              <button type="button">
                <FaChevronDown />
              </button>
            </div>
            <div className="flex justify-between items-center w-full max-w-[310px]">
              <div className="flex items-center gap-[15px]">
                <div>
                  <input type="radio" name="payment-method"></input>
                </div>
                <div>
                  <img src={Dollar} alt="" />
                </div>
                <div className="font-bold">E-Money</div>
              </div>
              <button type="button">
                <FaChevronDown />
              </button>
            </div>
          </form>
        </div>
        <div className=" md:border-l-4 md:border-t-0 md:border-l-black w-full mt-[50px] md:mt-[0] border-t-4 border-t-black border-0">
          <div className=" md:pl-[100px] pl-[0] ">
            <div className="flex mb-[50px] font-bold text-[20px] mt-[30px] md:mt-[0]">
              Ticket Detail
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="justify-between hidden md:flex">
                <div className="text-[#010101] font-bold">Event</div>
                <div className="text-[#2e5de8] font-bold">
                  Sight % Sound Exhibition
                </div>
              </div>
              <div className="flex justify-between ">
                <div className="text-[#010101] font-bold">Ticket Section</div>
                <div className="text-[#2e5de8] font-bold">Vip</div>
              </div>
              <div className="flex justify-between">
                <div className="text-[#010101] font-bold">Quantity</div>
                <div className="text-[#2e5de8] font-bold">2</div>
              </div>
              <div className="flex justify-between">
                <div className="text-[#010101] font-bold">Total Payment</div>
                <div className="text-[#2e5de8] font-bold">$70</div>
              </div>
              <div>
                <button className="text-[white] mt-[50px] bg-[#3366ff] rounded-[15px] w-full h-[55px]">
                  Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Payment;
