import react from "react";
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

function Profile() {
  // component
  return (
    <div className="flex mt-[50px]">
      <div className="w-[25%] bg-[#f4f7ff] pl-[50px] pr-[30px]">
        <div className="flex flex-col">
          <div className="flex flex-row gap-[15px] mb-[50px] items-center">
            <div>
              <img src={ProfilePic} alt="" />
            </div>
            <div>
              <div className="text-[14px] font-bold">Jhon Tomson</div>
              <div className="text-[14px] text-[#373a42b]">Entrepeneur, Id</div>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] font-bold text-[16px] gap-[30px]">
            <div className="flex flex-row gap-[20px]">
              <a href="#" className="flex flex-row gap-[20px]">
                <div>
                  <img src={IconProfile} alt="" />
                </div>
                <div className="text-[#373A42]">Profile</div>
              </a>
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
              <a href="#" className="flex flex-row gap-[20px]">
                <div>
                  <img src={ChangePassword} alt="" />
                </div>
                <div className="text-[#373A42]">Change Password</div>
              </a>
            </div>
            <div className="flex flex-row gap-[20px]">
              <a href="#" className="flex flex-row gap-[20px]">
                <div>
                  <img src={Booking} alt="" />
                </div>
                <div className="text-[#373A42]">My Booking</div>
              </a>
            </div>
            <div className="flex flex-row gap-[20px]">
              <a href="#" className="flex flex-row gap-[20px]">
                <div>
                  <img src={Whislist} alt="" />
                </div>
                <div className="text-[#373A42]">My Whislist</div>
              </a>
            </div>
            <div className="flex flex-row gap-[20px]">
              <div>
                <img src={Setting} alt="" />
              </div>
              <div className="text-[#373A42]">Setting</div>
            </div>
            <div className="flex flex-row  ">
              <a href="#" className="flex flex-row  gap-[20px]">
                <div>
                  <img src={Logout} alt="" />
                </div>
                <div className="text-[#f03800]">Logout</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[75%] bg-[#fff] mr-[70px] rounded-[20px]">
        <div className="flex flex-col gap-[70px] py-[46px] px-[50px]">
          Profile
        </div>
        <div className="flex text-center py-[0] px-[50px] ">
          <div className="flex flex-col gap-[70px] w-[120%]">
            <div className="flex flex-col gap-[50px] w-full">
              <div className="flex flex-row justify-between ">
                <div className="flex  items-center">name</div>
                <div className="w-[315px] h-[35px] rounded-[15px] flex justify-between items-center border-solid border-[black] ">
                  <div className="flex w-full">
                    <input
                      type="text"
                      placeholder="Jhon Tomson"
                      className="py-[17px] px-[25px] w-full border"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div>Username</div>
                <div>
                  Jhont0{" "}
                  <a href="#" className="text-[#2e5de8] ml-[15px]">
                    Edit
                  </a>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div>Email</div>
                <div>
                  jhont0@gmail.com{" "}
                  <a href="#" className="text-[#2e5de8] ml-[15px]">
                    {"Edit "}
                  </a>{" "}
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div>Phone Number</div>
                <div>
                  081562738467{" "}
                  <a href="#" className="text-[#2e5de8] ml-[15px]">
                    {"Edit "}
                  </a>{" "}
                </div>
              </div>
              <div className="flex items-center flex-row justify-between">
                <div>Gender</div>
                <form>
                  <div className="flex flex-row justify-between gap-[20px]">
                    <div className="flex gap-[5px]">
                      <label for="male">Male</label>
                      <input type="radio" id="male" name="gender" />
                    </div>
                    <div className="flex gap-[5px]">
                      <label for="female">female</label>
                      <input type="radio" id="female" name="gender" />
                    </div>
                  </div>
                </form>
              </div>
              <div className="flex flex-row justify-between ">
                <div className="flex  items-center">name</div>
                <div className="w-[315px] h-[35px] rounded-[15px] flex justify-between items-center border-solid border-[black] ">
                  <div className="flex w-full">
                    <input
                      type="text"
                      placeholder="Jhon Tomson"
                      className="py-[17px] px-[25px] w-full border"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between ">
                <div className="flex  items-center">name</div>
                <div className="w-[315px] h-[35px] rounded-[15px] flex justify-between items-center border-solid border-[black] ">
                  <div className="flex w-full">
                    <input
                      type="text"
                      placeholder="Jhon Tomson"
                      className="py-[17px] px-[25px] w-full border"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex justify-center items-center pl-[60px]">
              <div className="flex flex-col text-center gap-[60px] w-full items-center">
                <div>
                  <img src={ChoosePic} alt="" className="" />
                </div>
                <button
                  type="button"
                  className="w-full max-w-[255px] h-[40px] text-center gap-[60px] bg-[#ffffff] border-2 border-solid rounded-[10px] border-[#3366FF]"
                >
                  Choose Photo
                </button>
                <div className="flex flex-col text-start gap-[30px]">
                  <div>Image size: max, 2 MB</div>
                  <div>Image formats: .JPG, .JPEG, .PNG</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
