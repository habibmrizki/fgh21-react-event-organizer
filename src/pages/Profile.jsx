import React, { useEffect, useState } from "react";
import ProfilePic from "../assets/img/profile.png";
import IconProfile from "../assets/img/icons-profile.png";
import Logout from "../assets/img/logout.png";
// import Setting from "../assets/img/settings.png";
// import WalletCard from "../assets/img/wallet-card.png";
// import Edit from "../assets/img/edit-blue.png";
// import Booking from "../assets/img/booking.png";
// import Whislist from "../assets/img/Wishlist.png";
// import ChangePassword from "../assets/img/lock.png";
// import ChoosePic from "../assets/img/profile-picture.png";
import NavbarProfile from "../components/NavbarProfile.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { logout } from "../redux/reducers/auth.js";
import { removeProfile } from "../redux/reducers/profile.js";
import { useDispatch, useSelector } from "react-redux";

function Profile() {
  // component
  const dispatch = useDispatch();
  const [profession, setprofession] = useState([]);
  const [nationality, setNationality] = useState([]);
  function out() {
    dispatch(logout(null));
    dispatch(removeProfile(null));
  }

  const token = useSelector((state) => state.auth.form.token);
  const profile = useSelector((state) => state.profile.data);
  const today = new Date();
  const numberOfDaysToAdd = 0;
  const date = today.setDate(today.getDate() + numberOfDaysToAdd);
  const defaultValue = new Date(date).toISOString().split("T")[0];

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://wsw6zh-8888.csb.app/profile/professions",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      const data = await response.json();
      const newProfession = data.results;
      console.log(newProfession);
      setprofession(newProfession);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://wsw6zh-8888.csb.app/profile/nationalities",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      const region = await response.json();
      const newNationality = region.results;
      console.log(newNationality);
      setNationality(newNationality);
    })();
  }, []);

  return (
    <div>
      <NavbarProfile />
      <div className="flex md:mt-[50px]">
        <div className="w-[25%] bg-[#b6895b] pl-[50px] pr-[30px] hidden md:block md:rounded-[30px] md:ml-5">
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
            <div className="flex flex-col gap-[30px] font-bold text-[16px] ">
              <div className="flex flex-row gap-[20px]">
                <Link to="/Profile">
                  <div className="flex flex-row gap-[20px]">
                    <div>
                      <FaUser />
                    </div>
                    <div className="text-[#010101]">Profile</div>
                  </div>
                </Link>
              </div>
              <div className="flex flex-row gap-[20px] pl-[43px]">
                <div>
                  <FaWallet />
                </div>
                <div className="text-[#010101]">Card</div>
              </div>
              <div className="flex flex-row gap-[20px] pl-[43px]">
                <a href="#" className="flex flex-row gap-[20px]">
                  <div className="text-[#3366ff]">
                    <FaPen />
                  </div>
                  <div className="text-[#3366ff]">Edit Profile</div>
                </a>
              </div>
              <div className="flex flex-row gap-[20px] pl-[43px]">
                <Link to="/ChangePassword">
                  <div className="flex flex-row gap-[20px]">
                    <div>
                      <FaLockOpen />
                    </div>
                    <div className="text-[#010101]">Change Password</div>
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
                  <div className="text-[#010101]">Create Event</div>
                </Link>
              </div>
              <div className="flex flex-row gap-[20px]">
                <Link to="/MyBooking">
                  <div className="flex flex-row gap-[20px]">
                    <div>
                      <FaBook />
                    </div>
                    <div className="text-[#010101]">My Booking</div>
                  </div>
                </Link>
              </div>
              <div className="flex flex-row gap-[20px]">
                <Link to="/MyWhislist">
                  <div className="flex flex-row gap-[20px]">
                    <div>
                      <FaHeart />
                    </div>
                    <div className="text-[#010101]">My Whislist</div>
                  </div>
                </Link>
              </div>
              <div className="flex flex-row gap-[20px]">
                <div>
                  <FaGear />
                </div>
                <div className="text-[#010101]">Setting</div>
              </div>
              <div className="flex flex-row  ">
                <Link to="/Login">
                  <div className="flex flex-row  gap-[20px]">
                    <div>
                      <img src={Logout} alt="" className="text-red-600" />
                    </div>
                    <button onClick={out} className="text-red-600">
                      Logout
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[75%] md:ml-[50px] bg-[#b6895b] md:mr-[70px] mr-[0] md:rounded-[30px] mt-0 w-full">
          <div className="flex flex-col gap-[70px] py-[46px] px-[50px] text-[#010101] text-[20px] font-bold">
            Profile
          </div>
          <div className="flex px-[50px] flex-wrap-reverse md:flex-nowrap">
            <form className="flex flex-col  gap-[30px] w-[120%]">
              <div className="flex justify-between items-center">
                <label htmlFor="name" className="">
                  Name
                </label>
                <input
                  type="text"
                  name=""
                  id="name"
                  placeholder={profile.name}
                  className="rounded-xl border pl-[25px] w-[65%] h-[50px] outline-none"
                />
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="username" className="">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder={profile.username}
                  className="rounded-xl border pl-[25px] w-[65%] h-[50px] outline-none "
                />
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="email" className="">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder={profile.email}
                  className="rounded-xl border pl-[25px] w-[65%] h-[50px] outline-none"
                />
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="phoneNumber" className="">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder={profile.phoneNumber}
                  className="rounded-xl border pl-[25px] w-[65%] h-[50px] outline-none"
                />
              </div>
              <div className="flex justify-between ">
                <div>Gender</div>

                <div className="flex flex-row gap-[20px] w-[65%]">
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    checked
                    className="text-blue-400"
                    defaultChecked={profile.gender === "male" ? true : false}
                  />
                  <label htmlFor="male">Male</label>
                  <input type="radio" name="gender" id="female" />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="Entrepreneur" className="">
                  Profession
                </label>
                <select
                  name=""
                  id="Entrepreneur"
                  className="rounded-xl border pl-[25px] w-[65%] h-[50px] outline-none"
                >
                  {profession.map((data) => {
                    return (
                      <option selected={profile.profession}>{data.name}</option>
                    );
                  })}
                </select>
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="Entrepreneur" className="">
                  Profession
                </label>
                <select
                  name=""
                  id="Entrepreneur"
                  className="rounded-xl border pl-[25px] w-[65%] h-[50px] outline-none"
                >
                  {nationality.map((data) => {
                    return (
                      <option selected={profile.Nationalities}>
                        {data.name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="flex justify-between items-center">
                <label htmlFor="Nationality" className="">
                  Birtday Date
                </label>
                <input
                  type="date"
                  name="Nationality"
                  id="Nationality"
                  placeholder={profile.birthdayDate}
                  className="rounded-xl border pl-[25px] w-[65%] h-[50px] outline-none"
                  defaultValue={defaultValue}
                />
              </div>

              <div className="flex w-full mb-[53px]">
                <button className=" text-[#222]rounded-xl bg-[#222] w-full h-[55px] rounded-[15px] text-[#ffffff]">
                  Save
                </button>
              </div>
            </form>
            <div className="w-full mb-[70px]">
              <div className="flex justify-center items-center pl-[60px]">
                <div className="flex flex-col text-center gap-[60px] w-full items-center">
                  <div className="rounded-full">
                    <img
                      src={profile.picture}
                      alt=""
                      className="rounded-full w-[200px] h-[200px]"
                    />
                  </div>
                  <button
                    type="button"
                    className="w-full max-w-[255px] h-[40px] text-center gap-[60px] bg-[#ffffff] border-2 border-solid rounded-[10px] border-[#222] hidden md:inline-block "
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
      {/* <div className=" fixed bg-gray-500 w-full top-0 left-0 h-screen ">
        <div>loading</div>
      </div> */}
    </div>
  );
}

export default Profile;
