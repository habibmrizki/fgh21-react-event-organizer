import React from "react";
import ProfilePic from "../assets/img/profile.png";
import IconProfile from "../assets/img/icons-profile.png";
import Logout from "../assets/img/logout.png";
import Setting from "../assets/img/settings.png";
import WalletCard from "../assets/img/wallet-card.png";
import Edit from "../assets/img/edit.png";
import Booking from "../assets/img/booking.png";
import CreateEventBlue from "../assets/img/create-blue.png";
import WhislistBlue from "../assets/img/wishlist-blue.png";
import ChangePassword from "../assets/img/lock.png";
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

function MyWhislist() {
  // component
  return (
    <div>
      <NavbarProfile />
      <div>
        <div className="md:flex md:mt-[50px] mt-[0] w-full">
          <div className="w-[25%] bg-[#f4f7ff] pl-[50px] pr-[30px] hidden md:block">
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
              <div className="flex flex-col gap-[30px] font-bold text-[16px] ">
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
                <div className="flex flex-row gap-[20px]">
                  <Link to="/MyBooking">
                    <div className="flex flex-row gap-[20px]">
                      <div>
                        <FaBook />
                      </div>
                      <div className="text-[#373A42]">My Booking</div>
                    </div>
                  </Link>
                </div>
                <div className="flex flex-row gap-[20px]">
                  <Link to="/MyWhislist">
                    <div className="flex flex-row gap-[20px] items-center">
                      <div>
                        <FaHeart className="text-[#3366ff]" />
                      </div>
                      <div className="text-[#3366ff]">My Whislist</div>
                    </div>
                  </Link>
                </div>
                <div className="flex flex-row gap-[20px] items-center">
                  <div>
                    <FaGear />
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
          <div className="md:w-[75%] w-full bg-[#fff] md:mr-[70px] rounded-[20px] ">
            <div className="w-full md:p-[100px] p-[40px] md:mr-[120px] bg-[#ffff] flex rounded-[30px] flex-col gap-[50px]">
              <div className=" ">
                <div className="text-[20px] font-bold text-[#373A42]">
                  My Wishlist
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="flex justify-between">
                  <div className="flex gap-[25px]">
                    <div className="flex flex-col p-[10px] text-center font-semibold text-[#ff8900] shadow-2xl shadow-gray-300 w-[60px] h-[75px] rounded-[20px]">
                      <div>15</div>
                      <div className="text-[#C1C5D0]">Wed</div>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                      <div className="text-[24px] font-bold text-[#373A42]">
                        Sights & Sounds Exhibition
                      </div>
                      <div className="flex flex-col gap-[10px]">
                        <div className="text-[#373A42BF]">
                          Jakarta, Indonesia
                        </div>
                        <div className="text-[#373A42BF]">
                          Wed, 15 Nov, 4:00 PM
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <FaRegHeart className="w-[36px] h-[36px] text-[#3366FF]" />
                  </div>
                </div>
                <hr />
                <div className="flex justify-between">
                  <div className="flex gap-[25px]">
                    <div className="flex flex-col p-[10px] text-center font-semibold text-[#ff8900] shadow-2xl shadow-gray-300 w-[60px] h-[75px] rounded-[20px]">
                      <div>15</div>
                      <div className="text-[#C1C5D0]">Wed</div>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                      <div className="text-[24px] font-bold text-[#373A42]">
                        Sights & Sounds Exhibition
                      </div>
                      <div className="flex flex-col gap-[10px]">
                        <div className="text-[#373A42BF]">
                          Jakarta, Indonesia
                        </div>
                        <div className="text-[#373A42BF]">
                          Wed, 15 Nov, 4:00 PM
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <FaRegHeart className="w-[36px] h-[36px] text-[#3366FF]" />
                  </div>
                </div>
                <hr />
                <div className="flex justify-between">
                  <div className="flex gap-[25px]">
                    <div className="flex flex-col p-[10px] text-center font-semibold text-[#ff8900] shadow-2xl shadow-gray-300 w-[60px] h-[75px] rounded-[20px]">
                      <div>15</div>
                      <div className="text-[#C1C5D0]">Wed</div>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                      <div className="text-[24px] font-bold text-[#373A42]">
                        Sights & Sounds Exhibition
                      </div>
                      <div className="flex flex-col gap-[10px]">
                        <div className="text-[#373A42BF]">
                          Jakarta, Indonesia
                        </div>
                        <div className="text-[#373A42BF]">
                          Wed, 15 Nov, 4:00 PM
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <FaRegHeart className="w-[36px] h-[36px] text-[#3366FF]" />
                  </div>
                </div>
                <hr />
                <div className="flex justify-between">
                  <div className="flex gap-[25px]">
                    <div className="flex flex-col p-[10px] text-center font-semibold text-[#ff8900] shadow-2xl shadow-gray-300 w-[60px] h-[75px] rounded-[20px]">
                      <div>15</div>
                      <div className="text-[#C1C5D0]">Wed</div>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                      <div className="text-[24px] font-bold text-[#373A42]">
                        Sights & Sounds Exhibition
                      </div>
                      <div className="flex flex-col gap-[10px]">
                        <div className="text-[#373A42BF]">
                          Jakarta, Indonesia
                        </div>
                        <div className="text-[#373A42BF]">
                          Wed, 15 Nov, 4:00 PM
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <FaRegHeart className="w-[36px] h-[36px] text-[#3366FF]" />
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyWhislist;

{
  /* <div className="w-2/3 p-[100px]  mr-[120px] bg-[#ffff] flex rounded-[30px] flex flex-col gap-[50px]">
          <div className="flex items-center justify-between">
            <div className="text-[20px] font-bold">My Booking</div>
            <div className="flex gap-[10px] items-center p-[20px] bg-[#D6E0FF] text-[#3366FF] rounded-[15px] font-semibold">
              <FaCalendarDays />
              <div>March</div>
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between">
              <div className="flex gap-[25px]">
                <div className="p-[10px] text-center font-semibold text-[#ff8900]">
                  <div>15</div>
                  <div className="text-gray-500">Wed</div>
                </div>
                <div className="flex flex-col gap-[15px]">
                  <div className="text-[24px] font-bold">
                    Sights & Sounds Exhibition
                  </div>
                  <div>
                    <div className="text-gray-500">Jakarta, Indonesia</div>
                    <div className="text-gray-500">Wed, 15 Nov, 4:00 PM</div>
                  </div>
                  <div onClick={clickEvent} className="text-[#3366FF]">
                    Details
                  </div>
                </div>
              </div>
              <div>
                <FaRegHeart className="w-[36px] h-[36px]" />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[25px]">
                <div className="p-[10px] text-center font-semibold text-[#ff8900]">
                  <div>15</div>
                  <div className="text-gray-500">Wed</div>
                </div>
                <div className="flex flex-col gap-[15px]">
                  <div className="text-[24px] font-bold">
                    Sights & Sounds Exhibition
                  </div>
                  <div>
                    <div className="text-gray-500">Jakarta, Indonesia</div>
                    <div className="text-gray-500">Wed, 15 Nov, 4:00 PM</div>
                  </div>
                  <div onClick={clickEvent} className="text-[#3366FF]">
                    Details
                  </div>
                </div>
              </div>
              <div>
                <FaRegHeart className="w-[36px] h-[36px]" />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[25px]">
                <div className="p-[10px] text-center font-semibold text-[#ff8900]">
                  <div>15</div>
                  <div className="text-gray-500">Wed</div>
                </div>
                <div className="flex flex-col gap-[15px]">
                  <div className="text-[24px] font-bold">
                    Sights & Sounds Exhibition
                  </div>
                  <div>
                    <div className="text-gray-500">Jakarta, Indonesia</div>
                    <div className="text-gray-500">Wed, 15 Nov, 4:00 PM</div>
                  </div>
                  <div onClick={clickEvent} className="text-[#3366FF]">
                    Details
                  </div>
                </div>
              </div>
              <div>
                <FaRegHeart className="w-[36px] h-[36px]" />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[25px]">
                <div className="p-[10px] text-center font-semibold text-[#ff8900]">
                  <div>15</div>
                  <div className="text-gray-500">Wed</div>
                </div>
                <div className="flex flex-col gap-[15px]">
                  <div className="text-[24px] font-bold">
                    Sights & Sounds Exhibition
                  </div>
                  <div>
                    <div className="text-gray-500">Jakarta, Indonesia</div>
                    <div className="text-gray-500">Wed, 15 Nov, 4:00 PM</div>
                  </div>
                  <div onClick={clickEvent} className="text-[#3366FF]">
                    Details
                  </div>
                </div>
              </div>
              <div>
                <FaRegHeart className="w-[36px] h-[36px]" />
              </div>
            </div>
          </div>
        </div> */
}
