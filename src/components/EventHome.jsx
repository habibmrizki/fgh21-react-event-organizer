import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { addEvent } from "../redux/reducers/event";
import { useNavigate } from "react-router-dom";

function EventHome() {
  // const newEvent = useSelector((state) => state.event.dataEvent);
  // const endpoint = "http://localhost:8080/event";
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   (async () => {
  //     const data = await axios.get(endpoint);
  //     const resultData = data.data.result;
  //     // console.log(resultData);
  //     dispatch(addEvent(resultData));
  //     // console.log(endpoint);
  //   })();
  // }, []);

  // const endpoint = "http://localhost:8080/event";
  // // const newEvent = useSelector((state) => state.event.dataEvent);
  // // const dispatch = useDispatch();

  // const [event, setEvent] = useState([]);
  // console.log(event);
  // useEffect(() => {
  //   async () => {
  //     const data = await axios.get(endpoint);
  //     const resultData = data.data.result;
  //     setEvent(resultData.data.result);
  //   };
  // });

  // yang harus
  const [eventId, setEventId] = useState([]);
  const endpoint = "http://localhost:8080/event";
  const navigate = useNavigate();
  async function dataEvent() {
    const data = await axios.get(endpoint);
    const listEvent = data.data.result;
    setEventId(listEvent);
  }
  useEffect(() => {
    dataEvent();
  }, []);

  async function clickEvent(id) {
    navigate("/event/" + id);
  }

  // console.log(newEvent);
  return (
    <div className="flex gap-[30px] my-[50px] overflow-x-scroll mx-[60px] mb-[100px]">
      {eventId.map((data) => {
        return (
          <div
            className="flex gap-4 flex-row"
            onClick={() => clickEvent(data.id)}
            key={data.id}
          >
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
