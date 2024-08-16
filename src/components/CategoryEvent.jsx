import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ButtonLeft from "../assets/img/button-left.png";
import ButtonRight from "../assets/img/button-right.png";

function CategoryEvent() {
  const newEvent = useSelector((state) => state.event.dataEvent);
  const endpoint = "http://localhost:8080/event";
  const dispatch = useDispatch();
  // const defaultValue = new Date().toISOString().split("T")[0];
  useEffect(() => {
    (async () => {
      const data = await axios.get(endpoint);
      const resultData = data.data.result;
      dispatch(addEvent(resultData));
    })();
  }, []);

  // console.log(newEvent);

  return (
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
                src={data.image}
                alt=""
                className="w-full h-[55%]  object-fill rounded-t-[18px] "
              />
              <div className="flex flex-col text-[left] gap-[10px] ml-[25px]">
                <div className="text-[#fff] text-[18px] gap-[20px] ">
                  {data.date}
                </div>
                <div className="text-[#fff] text-[22px] tracking-wide font-semiBold">
                  {data.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <button class="button-right">
          <img src={ButtonRight} alt="" />
        </button>
      </div>
    </div>
  );
}

export default CategoryEvent;
