import React from "react";
import logoLeftLogin from "../assets/img/logo-user-authentication.png";
import logoWetick from "../assets/img/logo-wetick.png";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

function ForgotPassword() {
  // component
  return (
    <div className="flex h-[100vh] ">
      <div className="md:flex w-7/12 bg-[#3366ff] hidden justify-center items-center">
        <img src={logoLeftLogin} alt="" />
      </div>
      <div className="flex w-full md:w-5/12 justify-center items-center ">
        <form
          //   onSubmit={processLogin}
          className="flex max-w-xs w-full flex-col gap-[20px] "
        >
          <div>
            <img src={logoWetick} alt="" />
          </div>
          <h2 className="font-semibold text-2xl">Forgot Password</h2>
          <p className="text-[#373A42]">You’ll get mail soon on your email</p>
          <div className="flex h-[55px] rounded-2xl border-neutral-500">
            <input
              className="w-full h-full px-6 text-sm bg-[white] box-border border rounded-2xl overflow-hidden outline-none"
              type="email"
              placeholder="Email"
              name="email"
            />
          </div>
          <div>
            <button
              //   onSubmit={processLogin}
              className=" border-none rounded-lg w-full h-[55px] text-white bg-[#3366ff]"
            >
              Forgot Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
