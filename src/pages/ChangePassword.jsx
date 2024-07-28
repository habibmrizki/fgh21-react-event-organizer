import react from "react";
import ProfilePic from "../assets/img/profile.png";
import IconProfile from "../assets/img/icons-profile.png";
import Logout from "../assets/img/logout.png";
import Setting from "../assets/img/settings.png";
import WalletCard from "../assets/img/wallet-card.png";
import Edit from "../assets/img/edit.png";
import Booking from "../assets/img/booking.png";
import Whislist from "../assets/img/Wishlist.png";
import ChangePassword from "../assets/img/lock-blue.png";
import ChoosePic from "../assets/img/profile-picture.png";
import { FaChevronDown } from "react-icons/fa6";
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
import { useDispatch, useSelector } from "react-redux";

function ChangePasswordPage() {
  // component

  const token = useSelector((state) => state.auth.form.token);
  const profile = useSelector((state) => state.profile.data);
  return (
    <div>
      <NavbarProfile />
      <div className="flex md:mt-[50px]">
        <div className="w-[25%] bg-[#b6895b] pl-[50px] pr-[30px] md:rounded-[30px] md:ml-5  hidden md:block">
          <div className="flex flex-col">
            <div className="flex flex-row gap-[15px] mb-[50px] items-center mt-[20px]">
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
            <div className="flex flex-col gap-[30px] font-bold">
              <div className="flex flex-col  font-bold text-[16px] gap-[30px]">
                <div className="flex flex-row gap-[20px]">
                  <Link to="/Profile">
                    <div className="flex flex-row gap-[20px]">
                      <div>
                        <FaUser />
                      </div>
                      <div className="text-[#373A42]">Profile</div>
                    </div>
                  </Link>
                </div>
                <div className="flex flex-row gap-[20px] pl-[43px]">
                  <div>
                    <FaWallet />
                  </div>
                  <div className="text-[#373A42]">Card</div>
                </div>
                <div className="flex flex-row gap-[20px] pl-[43px]">
                  <Link to="/Profile">
                    <div className="flex flex-row gap-[20px]">
                      <div>
                        <FaPen />
                      </div>
                      <div className="text-[#373A42]">Edit Profile</div>
                    </div>
                  </Link>
                </div>
                <div className="flex flex-row gap-[20px] pl-[43px]">
                  <Link to="/ChangePassword">
                    <div className="flex flex-row gap-[20px]">
                      <div className="text-[#2e5de8]">
                        <FaLockOpen />
                      </div>
                      <div className="text-[#2e5de8]">Change Password</div>
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
                    <div className="flex flex-row gap-[20px]">
                      <div>
                        <FaHeart />
                      </div>
                      <div className="text-[#373A42]">My Whislist</div>
                    </div>
                  </Link>
                </div>
                <div className="flex flex-row gap-[20px]">
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
        </div>
        <div className="flex flex-col md:w-[70%] md:ml-[50px] bg-[#b6895b] md:pb-[300px] p-[40px] md:p-12 md:rounded-[30px] w-full md:mr-[70px]">
          <form className="flex  flex-col gap-[33px] w-full">
            <div className="text-[20px] font-semibold text-[#373A42]">
              Change Password
            </div>
            <div className="flex w-full gap-6 flex-col text-sm">
              <div className="flex flex-col md:flex-row  w-full justify-between md:items-center">
                <label htmlFor="oldPass" className="text-[#373A42]">
                  Old Password
                </label>
                <input
                  type="password"
                  name="oldPass"
                  id="oldPass"
                  placeholder="Input Old Password ..."
                  className="w-[100%] md:w-[70%] rounded-xl pl-[25px] border h-[50px] outline-none"
                />
              </div>
              <div className="flex flex-col md:flex-row w-full justify-between md:items-center ">
                <label htmlFor="newPass" className="text-[#373A42]">
                  New Password
                </label>
                <input
                  type="password"
                  name="newPass"
                  id="newPass"
                  placeholder="Input New Password ..."
                  className="w-[100%] md:w-[70%]  rounded-xl pl-[25px] border h-[50px] outline-none"
                />
              </div>
              <div className="flex flex-col md:flex-row w-full justify-between md:items-center">
                <label htmlFor="confirmPass" className="text-[#373A42]">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPass"
                  id="confirmPass"
                  placeholder="Input Confirm Password ..."
                  className="w-[100%] md:w-[70%]  rounded-xl pl-[25px] border h-[50px] outline-none"
                />
              </div>
            </div>
            <div className="flex">
              <button className="w-full bg-[#222] h-[61px] text-white rounded-[15px] font-semiBold">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ChangePasswordPage;
