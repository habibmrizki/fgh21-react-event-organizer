import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaTicket } from "react-icons/fa6";
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

  const token = useSelector((state) => state.auth.form);
  const profile = useSelector((state) => state.profile.data);

  return (
    <nav className="flex justify-between items-center bg-[#222] py-[1.4rem] px-[5%] inset-x-0 top-0 font-bold  md:w-full gap-[28px] md:gap-[0] flex-col md:flex-row">
      <div className="flex justify-between items-center w-full md:w-[10%]">
        <div className="text-2xl">
          <a
            href="#"
            className="flex flex-row justify-center items-center gap-3"
          >
            <FaTicket className="text-blue-600" />
            <div className="text-[#b6895b] italic">
              Kenangan<span className="text-[#fff]">senja.</span>
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
            : "md:flex gap-6  hidden "
        }
      >
        <div className="flex gap-[35px] md:gap-[50px] items-center flex-col md:flex-row">
          <div className="text-sm tracking-[1px] text-[#3366FF] font-semibold ">
            <Link to="/">Home</Link>
          </div>
          <div className="text-sm tracking-[1px] font-semibold text-[#fff] ">
            <Link to="/CreateEvent">Create Event</Link>
          </div>
          <a href="#">
            <div className="text-sm tracking-[1px] font-semibold text-[#fff] ">
              Location
            </div>
          </a>
        </div>
      </div>
      <div
        className={
          navbar
            ? "flex flex-col justify-between items-center md:flex-row gap-6 w-full md:w-auto "
            : "md:flex gap-6 hidden "
        }
      >
        <Link to="/Profile">
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
      </div>
    </nav>
  );
}

export default App;
