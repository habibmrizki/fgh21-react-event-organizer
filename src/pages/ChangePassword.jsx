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

function ChangePasswordPage() {
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
          <div className="flex flex-col gap-[30px] font-bold">
            <div className="flex flex-row gap-[20px]">
              <a href="#" className="flex flex-row gap-[20px]">
                <div>
                  <img src={IconProfile} alt="" />
                </div>
                <div>Profile</div>
              </a>
            </div>
            <div className="flex flex-row gap-[20px] pl-[43px]">
              <div>
                <img src={WalletCard} alt="" />
              </div>
              <div>Card</div>
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
                <div>Change Password</div>
              </a>
            </div>
            <div className="flex flex-row gap-[20px]">
              <a href="#" className="flex flex-row gap-[20px]">
                <div>
                  <img src={Booking} alt="" />
                </div>
                <div>My Booking</div>
              </a>
            </div>
            <div className="flex flex-row gap-[20px]">
              <a href="#" className="flex flex-row gap-[20px]">
                <div>
                  <img src={Whislist} alt="" />
                </div>
                <div>My Whislist</div>
              </a>
            </div>
            <div className="flex flex-row gap-[20px]">
              <div>
                <img src={Setting} alt="" />
              </div>
              <div>Setting</div>
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
          Change Password
        </div>
        <form className="flex flex-col gap-[50px] w-full px-[50px]">
          <div className="flex items-center justify-between">
            <div>
              <div>Old Password</div>
            </div>
            <input
              type="text"
              placeholder="Old Password"
              className="pd-[28px] h-[55px]"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePasswordPage;
