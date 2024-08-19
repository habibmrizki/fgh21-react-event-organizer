import React, { useEffect, useState } from "react";
import SeatPurple from "../assets/img/pic-section-purple.png";

function TickectSection() {
  let [purple, setPurple] = React.useState(0);
  function seatPurpleMinus() {
    if (purple <= 0) {
      window.alert("disii");
    } else {
      setPurple(purple - 1);
    }
  }
  function seatPurplePlus() {
    if (purple > 9999) {
      window.alert("disii");
    } else {
      setPurple(purple + 1);
    }
  }

  //   let [red, seatRed] = React.useState(0);
  //   function seatRedMinus() {
  //     if (red <= 0) {
  //       window.alert("disii");
  //     } else {
  //       seatRed(red - 1);
  //     }
  //   }
  //   function seatRedPlus() {
  //     if (red > 9999) {
  //       window.alert("disii");
  //     } else {
  //       seatRed(red + 1);
  //     }
  //   }

  //   let [orange, setOrange] = React.useState(0);
  //   function seatOrangeMinus() {
  //     if (orange <= 0) {
  //       window.alert("disii");
  //     } else {
  //       setOrange(orange - 1);
  //     }
  //   }
  //   function seatOrangePlus() {
  //     if (orange > 9999) {
  //       window.alert("disii");
  //     } else {
  //       setOrange(orange + 1);
  //     }
  //   }

  const [section, setSection] = useState({});
  const endpoint2 = "http://localhost:8080/event/section/" + id;
  useEffect(() => {
    (async () => {
      const dataSection = await axios.get(endpoint2);
      const resultSection = dataSection.data.result;
      console.log(resultSection);
      setSection(resultSection);
      // console.log(section);
    })();
  }, []);

  return (
    <div className="flex flex-col gap-[50px] mt-[25px] ">
      <div className="flex flex-row gap-[15px] w-full ">
        <div className="bg-[#F1EAFF] w-[45px] h-[45px] flex justify-center items-center rounded-[10px] ">
          <img src={SeatPurple} alt="" className="" />
        </div>
        <div className="flex flex-col w-full ">
          <div className="flex flex-row justify-between w-full">
            <div>section vvip</div>
            <div>$15</div>
          </div>
          <div className="flex flex-row justify-between w-full">
            <div>12 Seats available</div>
            <div>Per Person</div>
          </div>
          <div className="flex flex-row justify-between w-full">
            <div className="flex gap-[20px] mt-[25px]">Quantity</div>
            <div className="flex gap-[20px] mt-[25px]">
              <button
                onClick={seatPurpleMinus}
                className="border-2 border-stone-950 w-[33px] h-[30.1px] rounded-[7px] text-center"
              >
                -
              </button>
              <div>{purple}</div>
              <button
                onClick={seatPurplePlus}
                className="border-2 border-stone-950 w-[33px] h-[30.1px] rounded-[7px] text-center"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TickectSection;
