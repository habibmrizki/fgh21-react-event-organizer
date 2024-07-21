import React from "react";
import ProfilePic from "../assets/img/profile.png";
import IconProfile from "../assets/img/icons-profile.png";
import Logout from "../assets/img/logout.png";
import Setting from "../assets/img/settings.png";
import WalletCard from "../assets/img/wallet-card.png";
import Edit from "../assets/img/edit-blue.png";
import Booking from "../assets/img/booking.png";
import Whislist from "../assets/img/Wishlist.png";
import ChangePassword from "../assets/img/lock.png";
import ChoosePic from "../assets/img/profile-picture.png";
import { FaChevronDown } from "react-icons/fa6";
import NavbarProfile from "../components/NavbarProfile.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";

function Profile() {
  // component
  return (
    <div>
      <NavbarProfile />
      <div className="flex mt-[50px]">
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
            <div className="flex flex-col gap-[30px] font-bold text-[16px] gap-[30px]">
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
                <a href="#" className="flex flex-row gap-[20px]">
                  <div>
                    <img src={Edit} alt="" />
                  </div>
                  <div className="text-[#3366ff]">Edit Profile</div>
                </a>
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
                      <img src={Booking} alt="" />
                    </div>
                    <div className="text-[#373A42]">My Booking</div>
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
        <div className="md:w-[75%] bg-[#fff] md:mr-[70px] mr-[0] rounded-[20px] w-full">
          <div className="flex flex-col gap-[70px] py-[46px] px-[50px] text-[#373A42] text-[20px] font-bold">
            Profile
          </div>
          <div className="flex px-[50px] flex-wrap-reverse md:flex-nowrap">
            <form className="flex flex-col  gap-[50px] w-[120%]">
              <div className="flex justify-between items-center">
                <label htmlFor="name" className="">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="jhon Thomson"
                  className="rounded-xl pl-2 border pl-[25px] w-[65%] h-[50px]"
                />
              </div>
              <div className="flex justify-between">
                <div>Username</div>
                <div className="flex flex-row gap-[15px]">
                  <div>@jhont0</div>
                  <div className="text-[#3366ff]">Edit</div>
                </div>
              </div>
              <div className="flex justify-between">
                <div>Email</div>
                <div className="flex flex-row gap-[15px]">
                  <div>jhont0@mail.com</div>
                  <div className="text-[#3366ff]">Edit</div>
                </div>
              </div>
              <div className="flex justify-between">
                <div>Phone Number</div>
                <div className="flex flex-row gap-[15px]">
                  <div>081234567890</div>
                  <div className="text-[#3366ff]">Edit</div>
                </div>
              </div>
              <div className="flex justify-between">
                <div>Gender</div>
                <div className="flex flex-row gap-[70px]">
                  <div className="flex flex-row  gap-[5px]">
                    <input type="radio" name="gender" id="male" />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div className="flex flex-row gap-[5px]">
                    <input type="radio" name="gender" id="female" />
                    <label htmlFor="female">Female</label>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="Entrepreneur" className="">
                  Entrepreneur
                </label>
                <input
                  type="text"
                  name="Entrepreneur"
                  id="Entrepreneur"
                  placeholder="Entrepreneur"
                  className="rounded-xl pl-2 border pl-[25px] w-[65%] h-[50px]"
                />
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="Nationality" className="">
                  Nationality
                </label>
                <input
                  type="Nationality"
                  name="Nationality"
                  id="Nationality"
                  placeholder="Indonesia"
                  className="rounded-xl pl-2 border pl-[25px] w-[65%] h-[50px]"
                />
                {/* <button type="button">
                <FaChevronDown />
              </button> */}
              </div>
              <div className="flex justify-between">
                <div>Birthday Date</div>
                <div className="flex flex-row gap-[15px]">
                  <div>24 / 10 / 2000</div>
                  <div className="text-[#3366ff]">Edit</div>
                </div>
              </div>
              <div className="flex w-full mb-[53px]">
                <button className=" text-white rounded-xl bg-[#3366ff] w-full h-[55px]">
                  Save
                </button>
              </div>
            </form>
            <div className="w-full mb-[70px] ">
              <div className="flex justify-center items-center pl-[60px]">
                <div className="flex flex-col text-center gap-[60px] w-full items-center">
                  <div>
                    <img src={ChoosePic} alt="" className="" />
                  </div>
                  <button
                    type="button"
                    className="w-full max-w-[255px] h-[40px] text-center gap-[60px] bg-[#ffffff] border-2 border-solid rounded-[10px] border-[#3366FF] hidden md:inline-block "
                  >
                    Choose Photo
                  </button>
                  <div className="flex-col text-start gap-[30px] hidden md:inline-block">
                    <div>Image size: max, 2 MB</div>
                    <div>Image formats: .JPG, .JPEG, .PNG</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
