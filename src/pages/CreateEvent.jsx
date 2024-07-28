import react from "react";
import ProfilePic from "../assets/img/profile.png";
import IconProfile from "../assets/img/icons-profile.png";
import Logout from "../assets/img/logout.png";
import Setting from "../assets/img/settings.png";
import WalletCard from "../assets/img/wallet-card.png";
import Edit from "../assets/img/edit.png";
import Booking from "../assets/img/booking.png";
import Whislist from "../assets/img/Wishlist.png";
import ChangePassword from "../assets/img/lock.png";
import CreateEventBlue from "../assets/img/create-blue.png";
import { FaRegHeart } from "react-icons/fa";
import NavbarProfile from "../components/NavbarProfile";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

function CreateEvent() {
  // component

  // const [isPopupVisible, setIsPopupVisible] = useState(false);
  // const popupRef = useRef(null);

  // const setPopUp2 = () => setIsPopupVisible(true);
  // const standBy = (event) => event.stopPropagation();

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (popupRef.current && !popupRef.current.contains(event.target)) {
  //       setIsPopupVisible(false);
  //     }
  //   };
  // });
  function setPopUp() {
    const PopUp = document.getElementById("popup");
    ``;
    PopUp.classList.toggle("hidden");
  }
  function standBy(e) {
    e.stopPropagation();
  }
  function setPopUp2() {
    PopUp.classList.toggle("hidden");
  }

  const token = useSelector((state) => state.auth.form.token);
  const profile = useSelector((state) => state.profile.data);
  // formList.addEventListener("submit", function (e) {
  //   e.preventDefault();
  //   contentPopup.classList.remove("hide");
  // });

  return (
    <div>
      <div>
        <NavbarProfile />
        <div>
          <div className="md:flex md:mt-[50px] mt-[0] w-full ">
            <div className="w-[25%] bg-[#b6895b]  pl-[50px] pr-[30px] hidden md:block md:ml-5 md:rounded-[30px]">
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
                <div className="flex flex-col  font-bold text-[16px] gap-[30px] ">
                  <div className="flex flex-row gap-[20px] items-center">
                    <Link to="/Profile">
                      <div className="flex flex-row gap-[20px]">
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
                  <div className="flex flex-row gap-[20px] items-center">
                    <a href="#" className="flex flex-row gap-[20px]">
                      <div>
                        <img src={CreateEventBlue} alt="" />
                      </div>
                      <div className="text-[#3366ff]">Create Event</div>
                    </a>
                  </div>
                  <div className="flex flex-row gap-[20px] items-center">
                    <Link to="/MyBooking">
                      <div className="flex flex-row gap-[20px]">
                        <div>
                          <FaBook />
                        </div>
                        <div className="text-[#373A42]">My Booking</div>
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
                  <div className="flex flex-row items-center ">
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

            <div className="md:w-[75%] md:ml-[50px] md:p-[30px] p-[30px]  md:mr-[120px] bg-[#b6895b]  md:rounded-[30px] flex flex-col ">
              <div className="flex md:items-center md:justify-between flex-col gap-[30px] md:flex-row md:p-[33px] p-[30px]">
                <div className="text-[20px] font-bold text-[#373A42] ">
                  Manage Event
                </div>
                <div className="bg-[#222] w-[125px] h-[50px] flex items-center justify-center rounded-[15px]">
                  <button
                    type="submit"
                    onClick={setPopUp}
                    className="text-[#ffffff] font-medium"
                  >
                    Create
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-[20px] p-[30px] ">
                <div className="flex justify-between">
                  <div className="flex gap-[25px]">
                    <div className="flex flex-col p-[10px] text-center font-semibold text-[#ff8900] bg-[#ffffff]  w-[60px] h-[75px] rounded-[20px]">
                      <div>15</div>
                      <div className="text-gray-500">Wed</div>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                      <div className="text-[24px] font-bold text-[#373A42]">
                        Sights & Sounds Exhibition
                      </div>
                      <div>
                        <div className="flex flex-col gap-[10px]">
                          <div className="text-gray-500">
                            Jakarta, Indonesia
                          </div>
                          <div className="text-gray-500">
                            Wed, 15 Nov, 4:00 PM
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[15px]">
                        <div className="text-[#3366FF]">Details</div>
                        <div className="text-[#3366FF]">Update</div>
                        <div className="text-[#3366FF]">Delete</div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="flex justify-between">
                  <div className="flex gap-[25px]">
                    <div className="flex flex-col p-[10px] text-center font-semibold text-[#ff8900] bg-[#ffffff]  w-[60px] h-[75px] rounded-[20px]">
                      <div>15</div>
                      <div className="text-gray-500">Wed</div>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                      <div className="text-[24px] font-bold text-[#373A42]">
                        Sights & Sounds Exhibition
                      </div>
                      <div>
                        <div className="flex flex-col gap-[10px]">
                          <div className="text-gray-500">
                            Jakarta, Indonesia
                          </div>
                          <div className="text-gray-500">
                            Wed, 15 Nov, 4:00 PM
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[15px]">
                        <div className="text-[#3366FF]">Details</div>
                        <div className="text-[#3366FF]">Update</div>
                        <div className="text-[#3366FF]">Delete</div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="flex justify-between">
                  <div className="flex gap-[25px]">
                    <div className="flex flex-col p-[10px] text-center font-semibold text-[#ff8900] bg-[#ffffff]  w-[60px] h-[75px] rounded-[20px]">
                      <div>15</div>
                      <div className="text-gray-500">Wed</div>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                      <div className="text-[24px] font-bold text-[#373A42]">
                        Sights & Sounds Exhibition
                      </div>
                      <div>
                        <div className="flex flex-col gap-[10px]">
                          <div className="text-gray-500">
                            Jakarta, Indonesia
                          </div>
                          <div className="text-gray-500">
                            Wed, 15 Nov, 4:00 PM
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[15px]">
                        <div className="text-[#3366FF]">Details</div>
                        <div className="text-[#3366FF]">Update</div>
                        <div className="text-[#3366FF]">Delete</div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="flex justify-between">
                  <div className="flex gap-[25px]">
                    <div className="flex flex-col p-[10px] text-center font-semibold text-[#ff8900] bg-[#ffffff]  w-[60px] h-[75px] rounded-[20px]">
                      <div>15</div>
                      <div className="text-gray-500">Wed</div>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                      <div className="text-[24px] font-bold text-[#373A42]">
                        Sights & Sounds Exhibition
                      </div>
                      <div>
                        <div className="flex flex-col gap-[10px]">
                          <div className="text-gray-500">
                            Jakarta, Indonesia
                          </div>
                          <div className="text-gray-500">
                            Wed, 15 Nov, 4:00 PM
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[15px]">
                        <div className="text-[#3366FF]">Details</div>
                        <div className="text-[#3366FF]">Update</div>
                        <div className="text-[#3366FF]">Delete</div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
          <Footer />
          <div
            onClick={setPopUp2}
            className="bg-[#0000007e] absolute top-0 hidden w-full"
            id="popup"
          >
            <div
              onClick={standBy}
              className="bg-[#ffff] rounded-3xl p-4 m-8 md:p-20 md:m-20"
            >
              <div className="font-bold text-2xl mb-10">Update Event</div>
              <form className="flex flex-col gap-2 md:gap-10">
                <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="flex-1 flex flex-col gap-4">
                    <label htmlFor="">Name</label>
                    <input
                      className="border p-5 w-full mr-10 rounded-xl"
                      type="text"
                      placeholder="Input name event..."
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-4">
                    <label htmlFor="">Category</label>
                    <input
                      className="border p-5 w-full mr-10 rounded-xl"
                      type="text"
                      placeholder="Select Category"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="flex-1 flex flex-col gap-4">
                    <label htmlFor="">Location</label>
                    <input
                      className="border p-5 w-full mr-10 rounded-xl"
                      type="text"
                      placeholder="Select Location"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-4">
                    <label htmlFor="">Date/Time Show</label>
                    <input
                      className="border p-5 w-full mr-10 rounded-xl"
                      type="text"
                      placeholder="01/01/2022"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="flex-1 flex flex-col gap-4">
                    <label htmlFor="">Price</label>
                    <input
                      className="border p-5 w-full mr-10 rounded-xl"
                      type="text"
                      placeholder="Input Price ..."
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-4">
                    <label htmlFor="">Image</label>
                    <input
                      className="border p-5 w-full mr-10 rounded-xl"
                      type="text"
                      placeholder="Choose File ..."
                    />
                  </div>
                </div>
                <div className="flex items-center gap-12">
                  <div className="flex-1 flex flex-col gap-4">
                    <label htmlFor="">Detail</label>
                    <input
                      className="border p-5 w-full mr-10 rounded-xl"
                      type="text"
                      placeholder="Input Details"
                    />
                  </div>
                </div>
                <div>
                  <button
                    className="w-full py-[16px] px-110px] text-[#ffff] font-semibold text-[16px] rounded-[15px] bg-[#3366ff]"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;
