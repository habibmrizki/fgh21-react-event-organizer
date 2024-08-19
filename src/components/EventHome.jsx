// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
// import { addEvent } from "../redux/reducers/event";
// import { useNavigate } from "react-router-dom";

// function EventHome() {
//   const [eventId, setEventId] = useState([]);
//   const endpoint = "http://localhost:8080/event";
//   const navigate = useNavigate();
//   async function dataEvent() {
//     const data = await axios.get(endpoint);
//     const listEvent = data.data.result;
//     setEventId(listEvent);
//   }
//   useEffect(() => {
//     dataEvent();
//   }, []);

//   async function clickEvent(id) {
//     navigate("/event/" + id);
//   }

//   // console.log(newEvent);
//   return (
//     <div className="flex gap-[30px] my-[50px] overflow-x-scroll mx-[60px] mb-[100px]">
//       {eventId.map((data) => {
//         return (
//           <div
//             className="flex gap-4 flex-row"
//             onClick={() => clickEvent(data.id)}
//             key={data.id}
//           >
//             <Link to="/Event">
//               <div className="w-[260px] h-[376px] overflow-hidden rounded-3xl flex-shrink-0 relative ">
//                 <img
//                   src={data.image}
//                   alt="Event-1"
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="flex flex-col justify-end text-white gap-6 px-[25px] py-[32px] absolute w-full h-full bg-gradient-to-b from-transparent via-[rgba(0,0,0,0)] to-[rgba(16,20,38,1)] top-0 left-0">
//                   <div className="flex flex-col">
//                     <div className="text-sm">{data.date}</div>
//                     <div className="text-2xl font-semibold">{data.title}</div>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default EventHome;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaSpinner } from "react-icons/fa6";

function EventHome() {
  const [eventId, setEventId] = useState([]);
  const endpoint = "http://localhost:8080/event";
  const navigate = useNavigate();
  const [loading, setLoading] = useState(0);

  async function dataEvent() {
    const data = await axios.get(endpoint);
    const listEvent = data.data.result;
    setEventId(listEvent);
  }

  useEffect(() => {
    dataEvent();
  }, []);

  function clickEvent(id) {
    setTimeout(() => {
      navigate("/event/" + id);
    }, 1000);
    setLoading(1);
  }

  return (
    <div className="flex gap-[30px] my-[50px] overflow-x-scroll mx-[60px] mb-[100px]">
      {eventId.map((data) => (
        <div
          className="flex gap-4 flex-row cursor-pointer"
          onClick={() => clickEvent(data.id)}
          key={data.id}
        >
          <div className="w-[260px] h-[376px] overflow-hidden rounded-3xl flex-shrink-0 relative">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover"
            />
            <div className="flex flex-col justify-end text-white gap-6 px-[25px] py-[32px] absolute w-full h-full bg-gradient-to-b from-transparent via-[rgba(0,0,0,0)] to-[rgba(16,20,38,1)] top-0 left-0">
              <div className="flex flex-col">
                <div className="text-sm">{data.date}</div>
                <div className="text-2xl font-semibold">{data.title}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {loading ? (
        <div className="bg-slate-500/50 fixed top-0 left-0 flex items-center h-screen w-full">
          <div className="w-full h-screen flex items-center justify-center gap-[10px]">
            <FaSpinner className="animate-spin text-[50px]" />
            <span className="text-[50px] font-bold">Loading...</span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default EventHome;
