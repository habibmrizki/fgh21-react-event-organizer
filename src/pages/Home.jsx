import React from "react";
import CoverHome from "../assets/img/logo-background.png";
import CoverHomeBlack from "../assets/img/bubble-sponsor.png";
import Line from "../assets/img/Line.png";
import Partner1 from "../assets/img/sponsor1.png";
import Partner2 from "../assets/img/sponsor2.png";
import Partner3 from "../assets/img/sponsor3.png";
import Partner4 from "../assets/img/sponsor4.png";
import Partner5 from "../assets/img/sponsor5.png";
import Partner6 from "../assets/img/sponsor6.png";
import ButtonLeft from "../assets/img/button-left.png";
import ButtonRight from "../assets/img/button-right.png";
import CategoryEvent1 from "../assets/img/pic-category1.png";
import { Link } from "react-router-dom";
import EventHome from "../components/EventHome";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Location from "../components/Location";
import Attendee from "../components/Attendee";

// import home from "../assets/img/";

function Home() {
  // component
  return (
    <div>
      <Navbar />
      <div className="h-[750px] ">
        <div className="flex justify-right items-right w-full">
          <img
            src={CoverHome}
            alt="maskot"
            className="bg-[#3366ff] w-full h-full "
          />
        </div>
        <div className="flex justify-center items-center flex-col gap-[25px] mt-[100px]">
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
        {/* <div className="bg-red-600 w-[260px] h-[376px] rounded-3xl overflow-hidden relative">
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
      </div> */}
        <div className="flex overflow-x-scroll mb-[100px] ">
          <Link to="/Event">
            <EventHome />
          </Link>
        </div>
        {/* <div className="p-[50px] bg-[#3366ff] rounded-[50px] font-semibold text-[#ffff] mb-[50px] mx-[40px]">
          <div>
            <div className="flex items-center justify-center bg-[#FFFFFF40] text-[#FFFFFF]  h-[30px] w-[150px] py-[5px] px-[30px]  rounded-[30px] before:content-['\2501'] gap-[20px]  mb-[25px] ml-[68px]">
              <div className="before:content-[2015]">Location</div>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-[50px]  mb-[50px]">
            <div className="w-full h-full text-[36px] flex items-center justify-center">
              Discover Events Near You
            </div>
            <div>
              <img src={Jakarta} alt="jkt" className="w-full h-full" />
              <div className="text-center mt-[15px]">Jakarta</div>
            </div>
            <div className="hidden md:inline-block">
              <img src={Bandung} alt="jkt" className="w-full h-full" />
              <div className="text-center mt-[15px]">Bandung</div>
            </div>
            <div className="hidden md:inline-block">
              <img src={Bali} alt="jkt" className="w-full h-full" />
              <div className="text-center mt-[15px]">Bali</div>
            </div>
            <div className="hidden md:inline-block">
              <img src={Aceh} alt="jkt" className="w-full h-full " />
              <div className="text-center mt-[15px]">Aceh</div>
            </div>
            <div>
              <img src={Solo} alt="jkt" className="w-full h-full" />
              <div className="text-center mt-[15px]">Solo</div>
            </div>
            <div className="hidden md:inline-block">
              <img src={Yogyakarta} alt="jkt" className="w-full h-full" />
              <div className="text-center mt-[15px]">Yogyakarta</div>
            </div>
            <div className="hidden md:inline-block">
              <img src={Semarang} alt="jkt" className="w-full h-full" />
              <div className="text-center mt-[15px]">Semarang</div>
            </div>
          </div>
          <div className="flex justify-center mt-[100px]">
            <button className="pt-[10px] pr-[99px] pb-[9px] pl-[97px] rounded-[10px] text-[#3366ff] bg-[#ffff]">
              See All
            </button>
          </div>
        </div> */}
        <div>
          <Location />
        </div>
        <div className="flex justify-center items-center flex-col gap-[25px] mt-[80px]">
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
          <div className="flex text-[30px] text-[#373A42] font-bold">
            Browse Events By Category
          </div>
          <div>
            <div className="mt-[10px] ">
              <div className="md:flex gap-10 grid md:grid-cols-2 grid-cols-4 items-center md:mb-[20px] mb-[20px]">
                <div className="text-[#010101]  text-[16px]">Music</div>
                <div className="text-[#010101]  text-[16px]">Arts</div>
                <div className="text-[#010101]  text-[16px]">Outdoors</div>
                <div className="text-[#010101]  text-[16px]">Workshop</div>
                <div className="text-[#010101]  text-[16px]">Sport</div>
                <div className="text-[#010101]  text-[16px]">Festival</div>
                <div className="text-[#010101]  text-[16px]">Fashion</div>
              </div>
            </div>
          </div>
          <div className="w-full mt-[20px] flex justify-evenly items-center flex-row gap-[30px] overflow-x-scroll md:overflow-x-hidden mb-[80px]">
            <div>
              <button type="button">
                <img src={ButtonLeft} alt="" />
              </button>
            </div>
            <div className="w-[300px] h-[350px] bg-[#ff8900] rounded-[50px] overflow-hidden shrink-0">
              <img src={CategoryEvent1} alt="" className="w-full h-[50%]" />
              <div className="w-full h-full bg-[#3366ff]">
                <div className="flex ml-[25px] mt-[-15px] mb-[35px]">
                  <Attendee />
                </div>
                <div className="flex flex-col text-[left] gap-[10px] ml-[25px]">
                  <div className="text-[#fff] text-[18px] gap-[20px]">
                    Wed, 15 Nov, 4:00 PM
                  </div>
                  <div className="text-[#fff] text-[22px] tracking-wide font-semiBold">
                    Sights & Sounds Exhibition
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[300px] h-[350px] bg-[#ff8900] rounded-[50px] overflow-hidden shrink-0">
              <img src={CategoryEvent1} alt="" className="w-full h-[50%] " />
              <div className="w-full h-full bg-[#3366ff]">
                <div className="flex ml-[25px] mt-[-15px] mb-[35px]">
                  <Attendee />
                </div>
                <div className="flex flex-col text-[left] gap-[10px] ml-[25px]">
                  <div className="text-[#fff] text-[18px] gap-[20px]">
                    Wed, 15 Nov, 4:00 PM
                  </div>
                  <div className="text-[#fff] text-[22px] tracking-wide font-semiBold">
                    Sights & Sounds Exhibition
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[300px] h-[350px] bg-[#ff8900] rounded-[50px] overflow-hidden shrink-0">
              <img src={CategoryEvent1} alt="" className="w-full h-[50%]" />
              <div className="w-full h-full bg-[#3366ff]">
                <div className="flex ml-[25px] mt-[-15px] mb-[35px]">
                  <Attendee />
                </div>
                <div className="flex flex-col text-[left] gap-[10px] ml-[25px]">
                  <div className="text-[#fff] text-[18px] gap-[20px]">
                    Wed, 15 Nov, 4:00 PM
                  </div>
                  <div className="text-[#fff] text-[22px] tracking-wide font-semiBold">
                    Sights & Sounds Exhibition
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button class="button-right">
                <img src={ButtonRight} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: "url(" + CoverHomeBlack + ")",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "w-full",
          }}
        >
          <div className="flex flex-col justify-center items-center mb-[50px]  text-[#ffff] gap-[30px]">
            <div className="bg-[#64666B] h-[30px] py-[5px] px-[30px] items-center flex text-[#FFFFFF] rounded-[30px] mt-[39px] before:content-['\2501'] md:gap-[10px] gap-[10px]">
              <div>Partner</div>
            </div>
            <div className="text-[36px] font-semibold">
              Our Trusted Partners
            </div>
            <div className="mb-[50px]">By Companies Like :</div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-[170px]">
              <img src={Partner1} alt="1" />
              <img src={Partner2} alt="2" />
              <img src={Partner3} alt="3" />
              <img src={Partner4} alt="4" />
              <img src={Partner5} alt="5" />
              <img src={Partner6} alt="6" />
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
