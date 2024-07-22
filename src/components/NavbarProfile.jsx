import React from "react";
import LogoBlurWetick from "../assets/img/logo-blur-wetick.png";
import Avatar from "../assets/img/Avatar.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

function App() {
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
    <nav className="flex justify-between items-center bg-[#ffffff] py-[1.4rem] px-[5%] inset-x-0 top-0 font-bold  md:w-full gap-[28px] md:gap-[0] flex-col md:flex-row">
      <div className="flex justify-between items-center w-full md:w-[10%]">
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
            : "md:flex gap-6  hidden "
        }
      >
        <div className="flex gap-[35px] md:gap-[50px] items-center flex-col md:flex-row">
          <div className="text-sm tracking-[1px] text-[#3366FF] font-semibold ">
            <Link to="/">Home</Link>
          </div>
          <div className="text-sm tracking-[1px] font-semibold ">
            <a href="#">Create Event</a>
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
            ? "flex flex-col justify-between items-center md:flex-row gap-6 w-full md:w-auto"
            : "md:flex gap-6 hidden "
        }
      >
        <Link to="/Profile">
          <div className="flex items-center gap-4 justify-center ">
            <button className="h-[55px] w-[55px] flex justify-center items-center rounded-full overflow-hidden border-4 border-t-blue-500 border-b-violet-700 border-l-violet-500 border-e-blue-400">
              <img
                src={Avatar}
                alt=""
                className="h-[44px] w-[44px] rounded-full"
              />
            </button>
            <button className="text-[#373A42] font-semibold text-sm">
              Jhon Tomson
            </button>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default App;
