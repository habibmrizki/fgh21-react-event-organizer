import React, { useEffect } from "react";
// import CoverHome from "../assets/img/logo-background.png";
import CoverHomeBlack from "../assets/img/bubble-sponsor.png";
import Kopi from "../assets/img/kopi.jpg";
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
import pertamina from "../assets/img/Pertamina.jpeg";
import holcim from "../assets/img/holcim.jpeg";
import fazztrack from "../assets/img/fazztrack.jpg";
import nestle from "../assets/img/nestle.jpeg";
import alfamart from "../assets/img/alfamart.jpeg";
import nature from "../assets/img/nature.jpeg";
import mandiri from "../assets/img/mandiri.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { addEvent } from "../redux/reducers/event";
import senja from "../assets/img/senja.jpg";
import gunung from "../assets/img/senja2.jpg";
import gunung2 from "../assets/img/gunung2.jpg";
import axios from "axios";

// import home from "../assets/img/";
// const endpoint = "https://api-dummy.fahrul.id/events";
// const event = useSelector((state) => state.event.dataEvent);
// const dispatch = useDispatch();

// useEffect(() => {
//   (async () => {
//     const data = await axios.get(endpoint);
//     dispatch(addEvent(data.data.results));
//   })();
// }, []);
function Home() {
  // component

  const newEvent = useSelector((state) => state.event.dataEvent);
  const endpoint = "https://wsw6zh-8888.csb.app/events";
  const dispatch = useDispatch();
  const defaultValue = new Date().toISOString().split("T")[0];
  useEffect(() => {
    (async () => {
      const data = await axios.get(endpoint);
      const resultData = data.data.results;
      console.log(newEvent);
      dispatch(addEvent(resultData));
    })();
  }, []);

  const dummyEvent = [
    {
      id: 1,
      title: "Sights & Sounds Exhibition",
      date: "Wed, 15 Nov, 4:00 PM",
      img: CategoryEvent1,
    },
    {
      id: 2,
      title: "Sights & Sounds Exhibition",
      date: "Wed, 15 Nov, 4:00 PM",
      img: CategoryEvent1,
    },
    {
      id: 3,
      title: "Sights & Sounds Exhibition",
      date: "Wed, 15 Nov, 4:00 PM",
      img: CategoryEvent1,
    },
    {
      id: 4,
      title: "Sights & Sounds Exhibition",
      date: "Wed, 15 Nov, 4:00 PM",
      img: CategoryEvent1,
    },
    {
      id: 5,
      title: "Sights & Sounds Exhibition",
      date: "Wed, 15 Nov, 4:00 PM",
      img: CategoryEvent1,
    },
    {
      id: 6,
      title: "Sights & Sounds Exhibition",
      date: "Wed, 15 Nov, 4:00 PM",
      img: CategoryEvent1,
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="h-[750px] ">
        <div className="bg-repeat   bg-cover bg-center  ">
          <div>
            {" "}
            <img src={senja} alt="h-screen" />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-[25px] mt-[100px]">
          <div className="flex items-center justify-center flex-row bg-[#b6895b] text-[#ffffff] w-[150px] h-[30px] gap-[10px] rounded-[25px]">
            <div className="flex justify-content items-center font-medium gap-[20px] before:content-['\2501']">
              Event
            </div>
          </div>
          <div className="text-4xl font-bold mb-14 text-[#fff]">
            Event For You
          </div>
        </div>
        <div className="mb-4 ">
          <div className="flex justify-center gap-[10px] text-center text-[#b6895b] ">
            <div className="p-[10px]  hover:border-[#ff8900] hover:rounded-[20px] hover:border-2">
              <div>13</div>
              <div>Mon</div>
            </div>
            <div className="p-[10px] hover:border-[#ff8900] hover:rounded-[20px] hover:border-2">
              <div>14</div>
              <div>Mon</div>
            </div>
            <div className=" p-[10px]  hover:border-[#ff8900] hover:rounded-[20px] hover:border-2">
              <div>15</div>
              <div>Mon</div>
              <div className="text-[24px] text-[#ff8900]">.</div>
            </div>
            <div className="p-[10px]  hover:border-[#ff8900] hover:rounded-[20px] hover:border-2">
              <div>16</div>
              <div>Mon</div>
            </div>
            <div className="p-[10px]  hover:border-[#ff8900] hover:rounded-[20px] hover:border-2">
              <div>17</div>
              <div>Mon</div>
            </div>
          </div>
        </div>
        <div className="flex overflow-x-scroll mb-[100px] ">
          <Link to="/Event">
            <EventHome />
          </Link>
        </div>
        <div>
          <Location />
        </div>
        <div className="flex justify-center items-center flex-col gap-[25px] mt-[80px]">
          <div className="flex items-center justify-center flex-row bg-[#b6895b] text-[#fff] w-[150px] h-[30px] gap-[10px] rounded-[25px]">
            <div className="flex justify-content items-center font-medium gap-[20px] before:content-['\2501']">
              Category
            </div>
          </div>
          <div className="flex text-[20px] text-[#fff] font-bold">
            Browse Events By Category
          </div>
          <div>
            <div className="mt-[10px] ">
              <div className="md:flex gap-10 grid md:grid-cols-2 grid-cols-3 items-center md:mb-[20px] mb-[20px] mx-[10px] ">
                <div className="text-[#fff] hover:text-[#3366FF]  text-[16px] ">
                  Music
                </div>
                <div className="text-[#fff]  hover:text-[#3366FF] text-[16px]">
                  Arts
                </div>
                <div className="text-[#fff] hover:text-[#3366FF] text-[16px]">
                  Outdoors
                </div>
                <div className="text-[#fff] hover:text-[#3366FF] text-[16px]">
                  Workshop
                </div>
                <div className="text-[#fff] hover:text-[#3366FF] text-[16px]">
                  Sport
                </div>
                <div className="text-[#fff] hover:text-[#3366FF] text-[16px]">
                  Festival
                </div>
                <div className="text-[#fff] hover:text-[#3366FF] text-[16px]">
                  Fashion
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-[20px] flex justify-evenly items-center flex-row gap-[30px] overflow-x-scroll md:overflow-x-scroll b-[80px] mb-[50px]">
            <div>
              <button type="button">
                <img src={ButtonLeft} alt="" />
              </button>
            </div>
            <div className="flex gap-[30px] h-[350px]  overflow-hidden mb-8 shrink-0  ">
              {newEvent.map((data) => {
                return (
                  <div className="w-full h-full bg-[#3366ff] rounded-[18px] ">
                    <img
                      src={"https://wsw6zh-8888.csb.app" + data.picture}
                      alt=""
                      className="w-full h-[55%]  object-fill rounded-t-[18px] "
                    />
                    <div className="flex ml-[25px] mt-[-15px] mb-[35px]">
                      {data.attendees.map((item) => {
                        return (
                          <div className="h-[29px] w-[29px] rounded-full overflow-hidden border border-white  ml-[-10px]">
                            <img
                              src={"https://wsw6zh-8888.csb.app" + item.picture}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-col text-[left] gap-[10px] ml-[25px]">
                      <div className="text-[#fff] text-[18px] gap-[20px] ">
                        {data.time.split("T")[0]}
                      </div>
                      <div className="text-[#fff] text-[22px] tracking-wide font-semiBold">
                        {data.title}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* <div className="w-[300px] h-[350px] bg-[#ff8900] rounded-[50px] overflow-hidden shrink-0">
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
            </div> */}
            <div>
              <button class="button-right">
                <img src={ButtonRight} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div
          // style={{
          //   backgroundImage: "url(" + senja + ")",
          //   backgroundPosition: "center",
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "cover",
          //   width: "w-full",
          //   backgroundColor: "red",
          // }}
          className="bg-[#b6895b]"
        >
          <div className="flex flex-col justify-center items-center mb-[50px]  text-[#ffff] gap-[30px]">
            <div className="bg-[#222] h-[30px] py-[5px] px-[30px] items-center flex text-[#FFFFFF] rounded-[30px] mt-[39px] before:content-['\2501'] md:gap-[10px] gap-[10px]">
              <div>Partner</div>
            </div>
            <div className="text-[36px] font-semibold">
              Our Trusted Partners
            </div>
            <div className="mb-[50px]">By Companies Like :</div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-[170px]  ">
              <img src={fazztrack} alt="1" className="w-[82px] h-[60px]" />
              <img src={holcim} alt="2" className="w-[82px] h-[60px]" />
              <img src={alfamart} alt="3" className="w-[82px] h-[60px]" />
              <img src={nestle} alt="4" className="w-[82px] h-[60px]" />
              <img src={mandiri} alt="5" className="w-[82px] h-[60px]" />
              <img src={pertamina} alt="6" className="w-[82px] h-[60px]" />
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
