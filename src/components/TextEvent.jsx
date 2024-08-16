import React from "react";

function TextEvent() {
  return (
    <div className="flex justify-center items-center flex-col gap-[25px] mt-[100px]">
      <div className="flex items-center justify-center flex-row bg-[#b6895b] text-[#ffffff] w-[150px] h-[30px] gap-[10px] rounded-[25px]">
        <div className="flex justify-content items-center font-medium gap-[20px] before:content-['\2501']">
          Event
        </div>
      </div>
      <div className="text-4xl font-bold mb-14 text-[#fff]">Event For You</div>
    </div>
  );
}

export default TextEvent;
