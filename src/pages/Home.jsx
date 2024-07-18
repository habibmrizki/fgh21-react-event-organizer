import React from "react";
import CoverHome from "../assets/img/logo-background.png";
import CoverHomeBlack from "../assets/img/bubble-sponsor.png";
import Line from "../assets/img/Line.png";
import pictureEventHome from "../assets/img/picture-event1.png";
import Pic1 from "../assets/img/picture-event1.png";
import Pic2 from "../assets/img/picture-event2.png";
import AvatarOne from "../assets/img/people1.png";
import AvatarTwo from "../assets/img/people2.png";
import AvatarThree from "../assets/img/people3.png";
import AvatarFour from "../assets/img/people4.png";
import Jakarta from "../assets/img/Jakarta.png";
import Bandung from "../assets/img/bandung.png";
import Bali from "../assets/img/bali.png";
import Aceh from "../assets/img/aceh.png";
import Solo from "../assets/img/solo.png";
import Yogyakarta from "../assets/img/yogyakarta.png";
import Semarang from "../assets/img/semarang.png";
import Partner1 from "../assets/img/sponsor1.png";
import Partner2 from "../assets/img/sponsor2.png";
import Partner3 from "../assets/img/sponsor3.png";
import Partner4 from "../assets/img/sponsor4.png";
import Partner5 from "../assets/img/sponsor5.png";
import Partner6 from "../assets/img/sponsor6.png";

// import home from "../assets/img/";

function Home() {
  // component
  return (
    <div className="h-[750px] ">
      <div className="flex justify-right items-right w-full">
        <img
          src={CoverHome}
          alt="maskot"
          className="bg-[#3366ff] w-full h-full "
        />
      </div>
      <div className="flex justify-center items-center flex-col gap-[25px] mt-52">
        <div className="flex items-center justify-center flex-row bg-[#ff3d7140] text-[#ff3d71] w-[150px] h-[30px] gap-[10px] rounded-[25px]">
          <div className="flex items-center justify-center">
            <img
              src={Line}
              alt=""
              className="flex items-center justify-center"
            />
          </div>
          <div className="flex justify-content items-center font-medium">
            Event
          </div>
        </div>
        <div className="text-4xl font-bold mb-14 text-[#373A42]">
          Event For You
        </div>
      </div>
      <div className="mb-4">
        <div className="flex justify-center gap-[10px] text-center">
          <div className="p-[10px]">
            <div>13</div>
            <div>Mon</div>
          </div>
          <div className="p-[10px]">
            <div>14</div>
            <div>Mon</div>
          </div>
          <div className="border-solid border-2 border-[#ff8900] p-[10px] rounded-[20px]">
            <div>15</div>
            <div>Mon</div>
            <div className="text-[24px] text-[#ff8900]">.</div>
          </div>
          <div className="p-[10px]">
            <div>16</div>
            <div>Mon</div>
          </div>
          <div className="p-[10px]">
            <div>17</div>
            <div>Mon</div>
          </div>
        </div>
      </div>
      <div className="bg-red-600 w-[260px] h-[376px] rounded-3xl overflow-hidden relative">
        <img src={Pic1} alt="" className="w-full h-full object-cover" />
        <div className="bg-gradient-to-b from-transparent to-black w-full h-full  absolute top-0 left-0 flex flex-col justify-end text-white p-18">
          <div>Wed, 15 Nov, 4:00 PM</div>
          <div>Sights & Sounds Exhibition</div>
          <div className="">
            <div className="w-10 h-10 bg-white rounded-full ">
              <img
                src={AvatarOne}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-10 h-10 bg-white rounded-full ">
              <img
                src={AvatarOne}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-10 h-10 bg-white rounded-full ">
              <img
                src={AvatarOne}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-[50px] bg-[#3366ff] rounded-[50px] font-semibold text-[#ffff] mb-[50px] mx-[40px]">
        <div>
          <div className="flex items-center justify-center bg-[#FFFFFF40] text-[#FFFFFF]  h-[30px] w-[150px] py-[5px] px-[30px]  rounded-[30px]  mb-[25px] ml-[68px]">
            <div className="before:content-[2015]">Location</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-[90px] ml-[70px] mb-[50px]">
          <div className="w-[230px] text-[36px] ">Discover Events Near You</div>
          <div>
            <img src={Jakarta} alt="jkt" />
            <div className="text-center mt-[15px]">Jakarta</div>
          </div>
          <div>
            <img src={Bandung} alt="jkt" />
            <div className="text-center mt-[15px]">Bandung</div>
          </div>
          <div>
            <img src={Bali} alt="jkt" />
            <div className="text-center mt-[15px]">Bali</div>
          </div>
          <div>
            <img src={Aceh} alt="jkt" />
            <div className="text-center mt-[15px]">Aceh</div>
          </div>
          <div>
            <img src={Solo} alt="jkt" />
            <div className="text-center mt-[15px]">Solo</div>
          </div>
          <div>
            <img src={Yogyakarta} alt="jkt" />
            <div className="text-center mt-[15px]">Yogyakarta</div>
          </div>
          <div>
            <img src={Semarang} alt="jkt" />
            <div className="text-center mt-[15px]">Semarang</div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="pt-[10px] pr-[99px] pb-[9px] pl-[97px] rounded-[10px] text-[#3366ff] bg-[#ffff]">
            See All
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col gap-[25px] mt-52">
        <div className="flex items-center justify-center flex-row bg-[#ff3d7140] text-[#ff3d71] w-[150px] h-[30px] gap-[10px] rounded-[25px]">
          <div className="flex items-center justify-center">
            <img
              src={Line}
              alt=""
              className="flex items-center justify-center"
            />
          </div>
          <div className="flex justify-content items-center font-medium">
            Category
          </div>
        </div>
        <div className="text-4xl font-bold mb-2 text-[#373A42] flex flex-col items-center justify-center">
          Browse Events By Category
        </div>
        <div>
          <div className="flex justify-evenly mt-[10px] ">
            <div className="nav-category">
              <div className="text-[#010101] mx-[1rem] text-[16px]">Music</div>
            </div>
            <div className="text-[#010101] mx-[0.5rem] text-[16px]">
              <div>Arts</div>
            </div>
            <div className="text-[#010101] mx-[0.5rem] text-[16px]">
              <div>Outdoors</div>
            </div>
            <div className="text-[#010101] mx-[0.5rem] text-[16px]">
              <div>Workshop</div>
            </div>
            <div className="text-[#010101] mx-[0.5rem] text-[16px]">
              <div>Sport</div>
            </div>
            <div className="text-[#010101] mx-[0.5rem] text-[16px]">
              <div>Festival</div>
            </div>
            <div className="text-[#010101] mx-[0.5rem] text-[16px]">
              <div>Fashion</div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url(" + CoverHomeBlack + ")",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col justify-center items-center mb-[50px]  text-[#ffff] gap-[30px]">
          <div className="bg-[#ff3d7140] h-[30px] py-[5px] px-[30px] items-center flex text-[#ff3d71] rounded-[30px] mt-[39px]">
            <div>Partner</div>
          </div>
          <div className="text-[36px] font-semibold">Our Trusted Partners</div>
          <div className="mb-[50px]">By Companies Like :</div>
          <div className="flex flex-wrap gap-[62px] mb-[170px]">
            <img src={Partner1} alt="1" />
            <img src={Partner2} alt="2" />
            <img src={Partner3} alt="3" />
            <img src={Partner4} alt="4" />
            <img src={Partner5} alt="5" />
            <img src={Partner6} alt="6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
