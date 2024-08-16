import React from "react";

function TextCategoryEvent() {
  return (
    <div className="flex justify-center items-center flex-col gap-[25px] mt-[80px]">
      <div className="flex items-center justify-center flex-row bg-[#b6895b] text-[#fff] w-[150px] h-[30px] gap-[10px] rounded-[25px]">
        <div className="flex justify-content items-center font-medium gap-[20px] before:content-['\2501']">
          Category
        </div>
      </div>
      <div className="flex text-[20px] text-[#fff] font-bold">
        Browse Events By Category
      </div>
      <div className="mt-[10px] ">
        <div className="md:flex gap-10 grid md:grid-cols-2 grid-cols-3 items-center md:mb-[20px] mb-[20px] mx-[10px] ">
          <div className="text-[#fff] hover:text-[#3366FF]  text-[16px] ">
            Music
          </div>
          <div className="text-[#fff]  hover:text-[#3366FF] text-[16px]">
            Arts
          </div>
          <div className="text-[#fff] hover:text-[#3366FF] text-[16px]">
            Outdoors
          </div>
          <div className="text-[#fff] hover:text-[#3366FF] text-[16px]">
            Workshop
          </div>
          <div className="text-[#fff] hover:text-[#3366FF] text-[16px]">
            Sport
          </div>
          <div className="text-[#fff] hover:text-[#3366FF] text-[16px]">
            Festival
          </div>
          <div className="text-[#fff] hover:text-[#3366FF] text-[16px]">
            Fashion
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextCategoryEvent;
