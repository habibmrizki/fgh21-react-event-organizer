import React from "react";
// import logoWetick from "../assets/img/logo-wetick.png";
import LogoBlurWetick from "../assets/img/logo-blur-wetick.png";
import { Link } from "react-router-dom";
import SignUp from "../pages/SignUp";
import { GiHamburgerMenu } from "react-icons/gi";

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
  return (
    <nav className="w-full flex justify-between md:flex-row flex-col items-center bg-[#ffffff] py-[1.4rem] px-[5%] inset-x-0 top-0 font-semibold md:w-full gap-[15px] md:gap-[0] ">
      <div className="flex justify-between items-center   ">
        <div className="text-2xl">
          <a href="#" className="flex flex-row justify-center items-center">
            <img src={LogoBlurWetick} alt="logo-witeck" />
            <span className="text-[#3366ff]">We</span>
            <span className="text-[#FC1055]">Tick</span>
          </a>
        </div>
        <button type="button" onClick={buttonMenu} className="md:hidden ">
          <GiHamburgerMenu />
        </button>
      </div>
      <div
        className={
          navbar
            ? "flex flex-col justify-between items-center md:flex-row gap-6 w-full md:w-auto"
            : "md:flex gap-6 hidden "
        }
      >
        <div className="flex gap-[30px] items-center flex-col md:flex-row w-full">
          <div className="text-sm tracking-[1px] text-[#3366FF] font-semibold ">
            <Link to="/">Home</Link>
          </div>
          <div className="text-sm tracking-[1px] font-semibold ">
            <Link to="/CreateEvent">Create Event</Link>
          </div>
          <a href="#">
            <div className="text-sm tracking-[1px] font-semibold ">
              Location
            </div>
          </a>
        </div>
      </div>
      <div
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
      </div>
    </nav>
  );
}

export default navbar;
