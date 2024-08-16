import React, { useEffect } from "react";
import Event1 from "../assets/img/picture-event1.png";
import Event2 from "../assets/img/picture-event2.png";
import Event3 from "../assets/img/picture-event3.jpg";
import Event4 from "../assets/img/picture-event4.jpg";
import Event5 from "../assets/img/picture-event5.jpg";
import Event6 from "../assets/img/picture-event6.jpg";
import Event7 from "../assets/img/picture-event7.jpg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { addEvent } from "../redux/reducers/event";

function EventHome() {
  const newEvent = useSelector((state) => state.event.dataEvent);
  const endpoint = "http://localhost:8080/event";
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const data = await axios.get(endpoint);
      const resultData = data.data.result;
      // console.log(resultData);
      dispatch(addEvent(resultData));
      // console.log(endpoint);
    })();
  }, []);

  // console.log(newEvent);
  const dummyEvent = [
    {
      id: 1,
      title: "Sights & Sounds Exhibition",
      date: "Wed, 15 Nov, 4:00 PM",
      img: Event1,
    },
    {
      id: 2,
      title: "Movie Vector",
      date: "Fri, 12 Jan, 7:00 PM",
      img: Event2,
    },
    {
      id: 3,
      title: "Let's Play Skater",
      date: "Sun, 1 Aug, 3:00 PM",
      img: Event3,
    },
    {
      id: 4,
      title: "Macth MU vs Arsenal",
      date: "Mon, 15 Nov, 6:00 PM",
      img: Event4,
    },
    {
      id: 5,
      title: "Meeting Sribu",
      date: "Wed, 26 Ap, 9:00 AM",
      img: Event5,
    },
    {
      id: 6,
      title: "Class Cooking",
      date: "Sat, 20 March, 12:00 PM",
      img: Event6,
    },
    {
      id: 7,
      title: "Class Cooking",
      date: "Sat, 20 March, 12:00 PM",
      img: Event7,
    },
    {
      id: 8,
      title: "Party Color Fun",
      date: "Sat, 20 March, 12:00 PM",
      img: Event7,
    },
  ];
  return (
    <div className="flex gap-[30px] my-[50px] overflow-x-scroll mx-[60px] mb-[100px]">
      {newEvent.map((data) => {
        return (
          <div className="flex gap-4 flex-row">
            <Link to="/Event">
              <div className="w-[260px] h-[376px] overflow-hidden rounded-3xl flex-shrink-0 relative ">
                <img
                  src={data.image}
                  alt="Event-1"
                  className="w-full h-full object-cover"
                />
                <div className="flex flex-col justify-end text-white gap-6 px-[25px] py-[32px] absolute w-full h-full bg-gradient-to-b from-transparent via-[rgba(0,0,0,0)] to-[rgba(16,20,38,1)] top-0 left-0">
                  <div className="flex flex-col">
                    <div className="text-sm">{data.date}</div>
                    <div className="text-2xl font-semibold">{data.title}</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default EventHome;
