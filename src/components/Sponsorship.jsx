import React, { useEffect, useState } from "react";
import axios from "axios";

function Sponsorship() {
  const [partner, setPartner] = useState([]);
  const endpoint = "http://localhost:8080/partner";

  async function dataPartner() {
    const data = await axios.get(endpoint);
    const partner = data.data.result;
    setPartner(partner);
  }

  useEffect(() => {
    dataPartner();
  }, []);

  return (
    <div className="bg-[#b6895b]">
      <div className="flex flex-col justify-center items-center mb-[50px]  text-[#ffff] gap-[30px]">
        <div className="bg-[#222] h-[30px] py-[5px] px-[30px] items-center flex text-[#FFFFFF] rounded-[30px] mt-[39px] before:content-['\2501'] md:gap-[10px] gap-[10px]">
          <div>Partner</div>
        </div>
        <div className="text-[36px] font-semibold">Our Trusted Partners</div>
        <div className="mb-[50px]">By Companies Like :</div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-[170px]  ">
          {partner.map((item) => (
            <img
              src={item.image}
              className="w-[90%] flex items-center justify-center"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sponsorship;
