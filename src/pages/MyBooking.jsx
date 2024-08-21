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
import { FaUser } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { ScrollRestoration } from "react-router-dom";

function MyBooking() {
  // component
  const token = useSelector((state) => state.auth.form.token);
  const profile = useSelector((state) => state.profile.data);
  return (
    <div>
      <NavbarProfile />
      <div className="md:flex md:mt-[50px]  mt-[0] w-full">
        <div className="w-[25%] bg-[#b6895b] pl-[50px] pr-[30px] hidden md:rounded-[30px] md:block md:ml-5 ">
          <div className="flex flex-col">
            <div className="flex flex-row gap-[15px] mb-[50px] items-center md:mt-[20px]">
              <div>
                <img
                  src={profile.picture}
                  alt=""
                  className="h-[55px] w-[55px] rounded-full"
                />
              </div>
              <div>
                <div className="text-[14px] font-bold">{profile.name}</div>
                <div className="text-[14px] text-[#373a42b]">
                  {profile.profession}
                </div>
              </div>
            </div>
            <div className="flex flex-col  font-bold text-[16px] gap-[30px]">
              <div className="flex flex-row gap-[20px]">
                <Link to="/Profile">
                  <div className="flex flex-row gap-[20px] items-center">
                    <div>
                      <FaUser />
                    </div>
                    <div className="text-[#373A42]">Profile</div>
                  </div>
                </Link>
              </div>
              <div className="flex flex-row gap-[20px] pl-[43px] items-center">
                <div>
                  <FaWallet />
                </div>
                <div className="text-[#373A42]">Card</div>
              </div>
              <div className="flex flex-row gap-[20px] pl-[43px] items-center">
                <Link to="/Profile">
                  <div className="flex flex-row gap-[20px]">
                    <div>
                      <FaPen />
                    </div>
                    <div className="text-[#373A42]">Edit Profile</div>
                  </div>
                </Link>
              </div>
              <div className="flex flex-row gap-[20px] pl-[43px] items-center">
                <Link to="/ChangePassword">
                  <div className="flex flex-row gap-[20px]">
                    <div>
                      <FaLockOpen />
                    </div>
                    <div className="text-[#373A42]">Change Password</div>
                  </div>
                </Link>
              </div>
              <div className="flex flex-row gap-[20px] ">
                <Link
                  to="/CreateEvent"
                  className="flex flex-row gap-[20px] items-center"
                >
                  <div>
                    <FaPlusCircle />
                  </div>
                  <div className="text-[#373A42]">Create Event</div>
                </Link>
              </div>
              <div className="flex flex-row gap-[20px] items-center">
                <Link to="/MyBooking">
                  <div className="flex flex-row gap-[20px]">
                    <div className="text-[#3366ff]">
                      <FaBook />
                    </div>
                    <div className="text-[#3366ff]">My Booking</div>
                  </div>
                </Link>
              </div>
              <div className="flex flex-row gap-[20px] items-center">
                <Link to="/MyWhislist">
                  <div className="flex flex-row gap-[20px]">
                    <div>
                      <FaHeart />
                    </div>
                    <div className="text-[#373A42]">My Whislist</div>
                  </div>
                </Link>
              </div>
              <div className="flex flex-row gap-[20px] items-center">
                <div>
                  <FaGear />
                </div>
                <div className="text-[#373A42]">Setting</div>
              </div>
              <div className="flex flex-row  items-center">
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

        <div className="md:w-[75%] md:p-[33px] p-[30px] md:mr-[120px] md:ml-[50px] bg-[#b6895b] md:rounded-[30px] flex flex-col gap-[50px]">
          <div className="flex md:items-center md:justify-between flex-col md:flex-row gap-[30px] ">
            <div className="text-[20px] font-bold text-[rgb(55,58,66)]">
              My Booking
            </div>
            <div className="bg-[#222] w-[125px] h-[50px] flex items-center justify-center rounded-[15px] gap-[15px]">
              <img src={Calender} alt="" />
              <div className="text-[#ffffff]">March</div>
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="md:flex justify-between w-full">
              <div className="md:flex gap-[25px] flex flex-row w-full">
                <div className=" flex flex-col p-[10px] text-center font-semibold text-[#ff8900] bg-[#ffffff]  w-[60px] h-[75px] rounded-[20px]">
                  <div>15</div>
                  <div className="text-[#C1C5D0]">Wed</div>
                </div>
                <div className="flex flex-col gap-[15px] w-full">
                  <div className="text-[24px] font-bold text-[#373A42]">
                    Sights & Sounds Exhibition
                  </div>
                  <div>
                    <div className="flex flex-col gap-[10px]">
                      <div className="text-[#373A42BF]">Jakarta, Indonesia</div>
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
                <div className="bg-[#ffffff]   flex flex-col p-[10px] text-center font-semibold text-[#ff8900] w-[60px] h-[75px] rounded-[20px]">
                  <div>15</div>
                  <div className="text-[#C1C5D0]">Wed</div>
                </div>
                <div className="flex flex-col gap-[15px] w-full">
                  <div className="text-[24px] font-bold text-[#373A42]">
                    Sights & Sounds Exhibition
                  </div>
                  <div>
                    <div className="flex flex-col gap-[10px]">
                      <div className="text-[#373A42BF]">Jakarta, Indonesia</div>
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
                <div className="flex flex-col p-[10px] text-center font-semibold text-[#ff8900] bg-[#ffffff]  w-[60px] h-[75px] rounded-[20px]">
                  <div>15</div>
                  <div className="text-[#C1C5D0]">Wed</div>
                </div>
                <div className="flex flex-col gap-[15px] w-full">
                  <div className="text-[24px] font-bold text-[#373A42]">
                    Sights & Sounds Exhibition
                  </div>
                  <div>
                    <div className="flex flex-col gap-[10px]">
                      <div className="text-[#373A42BF]">Jakarta, Indonesia</div>
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
                <div className="flex flex-col p-[10px] text-center font-semibold text-[#ff8900]  bg-[#ffffff]  w-[60px] h-[75px] rounded-[20px]">
                  <div>15</div>
                  <div className="text-[#C1C5D0]">Wed</div>
                </div>
                <div className="flex flex-col gap-[15px] w-full">
                  <div className="text-[24px] font-bold text-[#373A42]">
                    Sights & Sounds Exhibition
                  </div>
                  <div>
                    <div className="flex flex-col gap-[10px]">
                      <div className="text-[#373A42BF]">Jakarta, Indonesia</div>
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
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default MyBooking;
