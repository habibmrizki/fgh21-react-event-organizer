import React from "react";

function DateEvent() {
  return (
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
  );
}

export default DateEvent;
