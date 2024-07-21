import React from "react";
import ProfilePic from "../assets/img/profile.png";
import IconProfile from "../assets/img/icons-profile.png";
import Logout from "../assets/img/logout.png";
import Setting from "../assets/img/settings.png";
import WalletCard from "../assets/img/wallet-card.png";
import Edit from "../assets/img/edit.png";
import BookingBlue from "../assets/img/my-booking.png";
import Whislist from "../assets/img/Wishlist.png";
import ChangePassword from "../assets/img/lock.png";
import Calender from "../assets/img/calender.png";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavbarProfile from "../components/NavbarProfile";
import Footer from "../components/Footer";

function MyBooking() {
  // component
  return (
    <div>
      <NavbarProfile />
      <div className="md:flex md:mt-[50px] mt-[0] w-full">
        <div className="w-[25%] bg-[#f4f7ff] pl-[50px] pr-[30px] hidden md:block ">
          <div className="flex flex-col">
            <div className="flex flex-row gap-[15px] mb-[50px] items-center">
              <div>
                <img src={ProfilePic} alt="" />
              </div>
              <div>
                <div className="text-[14px] font-bold">Jhon Tomson</div>
                <div className="text-[14px] text-[#373a42b]">
                  Entrepeneur, Id
                </div>
              </div>
            </div>
            <div className="flex flex-col  font-bold text-[16px] gap-[30px]">
              <div className="flex flex-row gap-[20px]">
                <Link to="/Profile">
                  <div className="flex flex-row gap-[20px]">
                    <div>
                      <img src={IconProfile} alt="" />
                    </div>
                    <div className="text-[#373A42]">Profile</div>
                  </div>
                </Link>
              </div>
              <div className="flex flex-row gap-[20px] pl-[43px]">
                <div>
                  <img src={WalletCard} alt="" />
                </div>
                <div className="text-[#373A42]">Card</div>
              </div>
              <div className="flex flex-row gap-[20px] pl-[43px]">
                <Link to="/Profile">
                  <div className="flex flex-row gap-[20px]">
                    <div>
                      <img src={Edit} alt="" />
                    </div>
                    <div className="text-[#373A42]">Edit Profile</div>
                  </div>
                </Link>
              </div>
              <div className="flex flex-row gap-[20px] pl-[43px]">
                <Link to="/ChangePassword">
                  <div className="flex flex-row gap-[20px]">
                    <div>
                      <img src={ChangePassword} alt="" />
                    </div>
                    <div className="text-[#373A42]">Change Password</div>
                  </div>
                </Link>
              </div>
              <div className="flex flex-row gap-[20px]">
                <Link to="/MyBooking">
                  <div className="flex flex-row gap-[20px]">
                    <div>
                      <img src={BookingBlue} alt="" />
                    </div>
                    <div className="text-[#3366ff]">My Booking</div>
                  </div>
                </Link>
              </div>
              <div className="flex flex-row gap-[20px]">
                <Link to="/MyWhislist">
                  <div className="flex flex-row gap-[20px]">
                    <div>
                      <img src={Whislist} alt="" />
                    </div>
                    <div className="text-[#373A42]">My Whislist</div>
                  </div>
                </Link>
              </div>
              <div className="flex flex-row gap-[20px]">
                <div>
                  <img src={Setting} alt="" />
                </div>
                <div className="text-[#373A42]">Setting</div>
              </div>
              <div className="flex flex-row  ">
                <Link to="/Login">
                  <div className="flex flex-row  gap-[20px]">
                    <div>
                      <img src={Logout} alt="" />
                    </div>
                    <div className="text-[#f03800]">Logout</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] md:w-[75%] bg-[#fff] md:mr-[70px] rounded-[20px] p-[30px]">
          <div className="w-full md:p-[33px] p-[30px] md:mr-[120px] bg-[#ffff] rounded-[30px] flex flex-col gap-[50px]">
            <div className="flex md:items-center md:justify-between flex-col md:flex-row gap-[30px] ">
              <div className="text-[20px] font-bold text-[rgb(55,58,66)]">
                My Booking
              </div>
              <div className="bg-[#eaf1ff] w-[125px] h-[50px] flex items-center justify-center rounded-[15px] gap-[15px]">
                <img src={Calender} alt="" />
                <div className="text-[#2e5de8]">March</div>
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="md:flex justify-between w-full">
                <div className="md:flex gap-[25px] flex flex-row w-full">
                  <div className=" flex flex-col p-[10px] text-center font-semibold text-[#ff8900] shadow-2xl shadow-gray-300 w-[60px] h-[75px] rounded-[20px]">
                    <div>15</div>
                    <div className="text-[#C1C5D0]">Wed</div>
                  </div>
                  <div className="flex flex-col gap-[15px] w-full">
                    <div className="text-[24px] font-bold text-[#373A42]">
                      Sights & Sounds Exhibition
                    </div>
                    <div>
                      <div className="flex flex-col gap-[10px]">
                        <div className="text-[#373A42BF]">
                          Jakarta, Indonesia
                        </div>
                        <div className="text-[#373A42BF]">
                          Wed, 15 Nov, 4:00 PM
                        </div>
                      </div>
                    </div>
                    <div className="text-[#3366FF]">Details</div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex justify-between w-full">
                <div className="flex gap-[25px] w-full">
                  <div className="flex flex-col p-[10px] text-center font-semibold text-[#ff8900] shadow-2xl shadow-gray-300 w-[60px] h-[75px] rounded-[20px]">
                    <div>15</div>
                    <div className="text-[#C1C5D0]">Wed</div>
                  </div>
                  <div className="flex flex-col gap-[15px] w-full">
                    <div className="text-[24px] font-bold text-[#373A42]">
                      Sights & Sounds Exhibition
                    </div>
                    <div>
                      <div className="flex flex-col gap-[10px]">
                        <div className="text-[#373A42BF]">
                          Jakarta, Indonesia
                        </div>
                        <div className="text-[#373A42BF]">
                          Wed, 15 Nov, 4:00 PM
                        </div>
                      </div>
                    </div>
                    <div className="text-[#3366FF]">Details</div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex justify-between w-full">
                <div className="flex gap-[25px] w-full">
                  <div className="flex flex-col p-[10px] text-center font-semibold text-[#ff8900] shadow-2xl shadow-gray-300 w-[60px] h-[75px] rounded-[20px]">
                    <div>15</div>
                    <div className="text-[#C1C5D0]">Wed</div>
                  </div>
                  <div className="flex flex-col gap-[15px] w-full">
                    <div className="text-[24px] font-bold text-[#373A42]">
                      Sights & Sounds Exhibition
                    </div>
                    <div>
                      <div className="flex flex-col gap-[10px]">
                        <div className="text-[#373A42BF]">
                          Jakarta, Indonesia
                        </div>
                        <div className="text-[#373A42BF]">
                          Wed, 15 Nov, 4:00 PM
                        </div>
                      </div>
                    </div>
                    <div className="text-[#3366FF]">Details</div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex justify-between w-full">
                <div className="flex gap-[25px] w-full">
                  <div className="flex flex-col p-[10px] text-center font-semibold text-[#ff8900] shadow-2xl shadow-gray-300 w-[60px] h-[75px] rounded-[20px]">
                    <div>15</div>
                    <div className="text-[#C1C5D0]">Wed</div>
                  </div>
                  <div className="flex flex-col gap-[15px] w-full">
                    <div className="text-[24px] font-bold text-[#373A42]">
                      Sights & Sounds Exhibition
                    </div>
                    <div>
                      <div className="flex flex-col gap-[10px]">
                        <div className="text-[#373A42BF]">
                          Jakarta, Indonesia
                        </div>
                        <div className="text-[#373A42BF]">
                          Wed, 15 Nov, 4:00 PM
                        </div>
                      </div>
                    </div>
                    <div className="text-[#3366FF]">Details</div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyBooking;
