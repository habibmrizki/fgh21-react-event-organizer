import React from "react";
// import logoWetick from "../assets/img/logo-wetick.png";
import LogoBlurWetick from "../assets/img/logo-blur-wetick.png";
import { Link } from "react-router-dom";
import SignUp from "../pages/SignUp";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import Avatar from "../assets/img/Avatar.svg";
import profile from "../redux/reducers/profile";
import { TiTicket } from "react-icons/ti";
import { FaTicket } from "react-icons/fa6";

function navbar() {
  // component
  const [navbar, setNavbar] = React.useState(true);
  function buttonMenu() {
    if (navbar === true) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  }
  const token = useSelector((state) => state.auth.form);
  const profile = useSelector((state) => state.profile.data);
  console.log(token !== null);
  return (
    <nav className="w-full flex justify-between md:flex-row flex-col items-center fixed z-10 bg-[#222] py-[1.4rem] px-[5%] inset-x-0 top-0 font-semibold md:w-full gap-[15px] md:gap-[0] ">
      <div className="flex justify-between items-center md:w-auto w-full">
        <div className="text-2xl italic">
          <a
            href="#"
            className="flex flex-row justify-center items-center gap-3"
          >
            <FaTicket className="text-blue-600" />
            <div className="text-[#b6895b]">
              Kenanga<span className="text-[#fff]">senja</span>
            </div>
          </a>
        </div>
        <button type="button" onClick={buttonMenu} className="md:hidden ">
          <GiHamburgerMenu />
        </button>
      </div>
      <div
        className={
          navbar
            ? "flex flex-col justify-between items-center md:flex-row gap-6 w-full md:w-auto "
            : "md:flex gap-6 hidden "
        }
      >
        <div className="flex gap-[30px] items-center flex-col md:flex-row w-full ">
          <div className="text-sm tracking-[1px] text-[#3366FF] font-semibold ">
            <Link to="/">Home</Link>
          </div>
          <div className="text-sm tracking-[1px] font-semibold text-[#fff] ">
            <Link to="/CreateEvent">Create Event</Link>
          </div>
          <a href="#">
            <div className="text-sm tracking-[1px] font-semibold  text-[#fff] ">
              Location
            </div>
          </a>
        </div>
      </div>
      {/* <div
        className={
          navbar
            ? "flex flex-col items-center md:flex-row gap-6 w-full md:w-auto"
            : "md:flex gap-6 hidden "
        }
      >
        <div className="flex gap-[30px] w-full px-0 py-0 md:w-[300px] flex-col items-center md:flex-row mt-[25px] md:mt-[0]">
          <button
            type="button"
            className=" md:w-[100px] w-full  rounded-lg "
            id="to-login"
          >
            <Link to="/Login">Login</Link>
          </button>
          <button
            type="button"
            className="w-full h-[40px]  rounded-lg bg-[#3366ff] text-[#ffffff]"
            id="to-signup"
          >
            <Link to="/SignUp">Sign Up</Link>
          </button>
        </div>
      </div> */}
      {token !== null ? (
        <Link to="/Profile" className="flex items-center gap-2 ">
          <div className="flex items-center gap-4 justify-center ">
            <button className="h-[55px] w-[55px] flex justify-center items-center rounded-full overflow-hidden border-4 border-[#b6895b]">
              <img
                src={profile.picture}
                alt=""
                className="h-[44px] w-[44px] rounded-full"
              />
            </button>
            <button className="text-[#fff] font-semibold text-sm">
              {profile.name}
            </button>
          </div>
        </Link>
      ) : (
        <Link to="/Profile" className="flex items-center gap-2 ">
          <div className="flex flex-col gap-3 md:flex-row md:gap-0">
            <Link to="/login">
              <button className="h-10 w-36 font-bold text-[#373A42] ">
                Log in
              </button>
            </Link>
            <Link to="/SignUp">
              <button className="bg-[#3366FF] h-10  w-36 text-white rounded-xl font-bold">
                Sign up
              </button>
            </Link>
          </div>
        </Link>
      )}
    </nav>
  );
}

export default navbar;
