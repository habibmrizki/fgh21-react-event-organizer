// import React, { useRef, useState, useEffect } from "react";
// // import Jakarta from "../assets/img/Jakarta.png";
// // import Bandung from "../assets/img/bandung.png";
// // import Bali from "../assets/img/bali.png";
// // import Aceh from "../assets/img/aceh.png";
// // import Semarang from "../assets/img/semarang.png";
// // import Solo from "../assets/img/solo.png";
// // import Yogyakarta from "../assets/img/yogyakarta.png";
// import axios from "axios";

// function Location() {
//   // component
//   const [locat, setLocat] = useState([]);
//   const endpoint = "http://localhost:8080/location";
//   async function locations() {
//     const data = await axios.get(endpoint);
//     const listLocation = data.data.result;
//     setLocat(listLocation);
//   }

//   useEffect(() => {
//     locations();
//   }, []);

//   const bali = useRef();
//   const aceh = useRef();
//   const yogyakarta = useRef();
//   const semarang = useRef();
//   function buttonLocation() {
//     bali.current.classList.toggle("hidden");
//     aceh.current.classList.toggle("hidden");
//     yogyakarta.current.classList.toggle("hidden");
//     semarang.current.classList.toggle("hidden");
//   }
//   return (
//     <div className="p-[50px] bg-[#b6895b] rounded-[50px] font-semibold text-[#ffff] mb-[50px] mx-[40px]">
//       <div>
//         <div className="flex items-center justify-center bg-[#FFFFFF40] text-[#FFFFFF]  h-[30px] md:w-[150px] py-[5px] px-[30px] w-full  rounded-[30px] before:content-['\2501'] gap-[20px]  mb-[25px] ">
//           <div className="before:content-[2015] flex items-center">
//             Location
//           </div>
//         </div>
//       </div>
//       <div className="grid md:grid-cols-4 gap-[50px]  mb-[50px]">
//         <div className="w-full h-full text-[36px] flex items-center justify-center">
//           Discover Events Near You
//         </div>
//         {locat.map((data) => {
//           return (
//             <div>
//               <img
//                 src={data.image}
//                 alt="jkt"
//                 className="w-full h-full rounded-[20px]"
//               />
//               <div className="text-center mt-[15px]">{data.name}</div>
//             </div>
//           );
//         })}
//       </div>
//       <div className="flex justify-center mt-[100px]">
//         <button
//           onClick={buttonLocation}
//           className="pt-[10px] pr-[99px] pb-[9px] pl-[97px] rounded-[10px] text-[#ffffff] bg-[#222]"
//         >
//           See All
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Location;

// <div className="">
//   <img src={Bandung} alt="jkt" className="w-full h-full" />
//   <div className="text-center mt-[15px]">Bandung</div>
// </div>
// <div className="" ref={bali}>
//   <img src={Bali} alt="jkt" className="w-full h-full" />
//   <div className="text-center mt-[15px]">Bali</div>
// </div>
// <div className="" ref={aceh}>
//   <img src={Aceh} alt="jkt" className="w-full h-full " />
//   <div className="text-center mt-[15px]">Aceh</div>
// </div>
// <div>
//   <img src={Solo} alt="jkt" className="w-full h-full" />
//   <div className="text-center mt-[15px]">Solo</div>
// </div>
// <div className="" ref={yogyakarta}>
//   <img src={Yogyakarta} alt="jkt" className="w-full h-full" />
//   <div className="text-center mt-[15px]">Yogyakarta</div>
// </div>
// <div className="" ref={semarang}>
//   <img src={Semarang} alt="jkt" className="w-full h-full" />
//   <div className="text-center mt-[15px]">Semarang</div>
// </div>

import React, { useState, useEffect } from "react";
import axios from "axios";

function Location() {
  const [locat, setLocat] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const endpoint = "http://localhost:8080/location";
  async function locations() {
    const data = await axios.get(endpoint);
    const listLocation = data.data.result;
    setLocat(listLocation);
  }

  useEffect(() => {
    locations();
  }, []);

  function buttonLocation() {
    setShowAll(!showAll);
  }

  return (
    <div className="p-[50px] bg-[#b6895b] rounded-[50px] font-semibold text-[#ffff] mb-[50px] mx-[40px]">
      <div>
        <div className="flex items-center justify-center bg-[#FFFFFF40] text-[#FFFFFF]  h-[30px] md:w-[150px] py-[5px] px-[30px] w-full  rounded-[30px] before:content-['\2501'] gap-[20px]  mb-[25px] ">
          <div className="before:content-[2015] flex items-center">
            Location
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-[50px] mb-[50px]">
        <div className="w-full h-full text-[36px] flex items-center justify-center">
          Discover Events Near You
        </div>
        {locat.map((data, index) => {
          if (showAll || (!showAll && index < 3)) {
            return (
              <div key={data.name}>
                <img
                  src={data.image}
                  alt={data.name}
                  className="w-full h-full rounded-[20px]"
                />
                <div className="text-center mt-[15px]">{data.name}</div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="flex justify-center mt-[100px]">
        <button
          onClick={buttonLocation}
          className="pt-[10px] pr-[99px] pb-[9px] pl-[97px] rounded-[10px] text-[#ffffff] bg-[#222]"
        >
          {showAll ? "Show Less" : "See All"}
        </button>
      </div>
    </div>
  );
}

export default Location;
