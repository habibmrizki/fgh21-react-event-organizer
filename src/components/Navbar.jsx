import react from "react";
// import logoWetick from "../assets/img/logo-wetick.png";
import LogoBlurWetick from "../assets/img/logo-blur-wetick.png";
import { Link } from "react-router-dom";

function navbar() {
  // component
  return (
    <nav className="flex justify-between align-center bg-[#ffffff] px-9 py-3 inset-x-0 top-0 font-semibold bg-white bg-white-600">
      <div class="main">
        <div className="text-2xl">
          <a href="#" className="flex flex-row justify-center items-center">
            <img src={LogoBlurWetick} alt="logo-witeck" />
            <span className="text-[#3366ff]">We</span>
            <span className="text-[#FC1055]">Tick</span>
          </a>
        </div>
      </div>

      <div className="flex gap-[48px] items-center">
        <a href="#">
          <div className="text-sm tracking-[1px] text-[#3366FF] font-semibold ">
            Home
          </div>
        </a>
        <a href="#">
          <div className="text-sm tracking-[1px] font-semibold ">
            Create Event
          </div>
        </a>
        <a href="#">
          <div className="text-sm tracking-[1px] font-semibold ">Location</div>
        </a>
      </div>

      {/* <div className="text-black list-none flex  gap-[50px] items-center p-4  ">
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <a href="#">Create Event</a>
        </li>
        <li>
          <a href="#">Location</a>
        </li>
      </div> */}

      <div className="flex gap-[30px] px-6 py-6 w-[300px] ">
        <button type="button" className=" w-[100px] rounded-lg " id="to-login">
          Log In
        </button>
        <button
          type="button"
          className="w-[200px] h-[40px] rounded-lg bg-[#3366ff] text-[#ffffff]"
          id="to-signup"
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default navbar;
