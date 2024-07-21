import React from "react";

import People1 from "../assets/img/people1.png";
import People2 from "../assets/img/people2.png";
import People3 from "../assets/img/people3.png";
import People4 from "../assets/img/people4.png";

function App() {
  // component
  return (
    <div className="flex relative">
      <div className="h-[29px] w-[29px] rounded-full overflow-hidden border border-white relative">
        <img
          src={People1}
          alt="people1"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-[29px] w-[29px] rounded-full overflow-hidden border border-white relative left-[-10px]">
        <img
          src={People2}
          alt="people2"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-[29px] w-[29px] rounded-full overflow-hidden border border-white relative left-[-20px]">
        <img
          src={People3}
          alt="people3"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-[29px] w-[29px] rounded-full overflow-hidden relative left-[-30px]">
        <img
          src={People4}
          alt="people4"
          className="h-full w-full object-cover"
        />
        <div className="flex justify-center items-center text-white absolute w-full h-full bg-[rgba(255,137,0,0.6)] text-[10px] top-0 left-0">
          62+
        </div>
      </div>
    </div>
  );
}

export default App;
