import React from "react";
import logoLeftLogin from "../assets/img/logo-user-authentication.png";
import logoWetick from "../assets/img/logo-wetick.png";
import goggle from "../assets/img/google.png";
import facebook from "../assets/img/facebook.png";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";

import { Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  function processLogin(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (
      username === "Habib" &&
      email === "Habib@gmail.com" &&
      password === "1234"
    ) {
      window.alert("Selamat login anda sukses!");
      navigate("/");
    } else {
      username === "" && email === "" && password === "";
      alert("Enter your account to Login");
    }
  }

  let [pass, setPass] = React.useState("password");
  function revealPassword() {
    if (pass === "password") {
      setPass("test");
    } else {
      setPass("password");
    }
  }

  return (
    <div className="flex h-[100vh] ">
      <div className="md:flex w-7/12 bg-[#3366ff] hidden justify-center items-center">
        <img src={logoLeftLogin} alt="" />
      </div>
      <div className="flex w-full md:w-5/12 justify-center items-center ">
        <form
          onSubmit={processLogin}
          className="flex max-w-xs w-full flex-col gap-[20px] "
        >
          <div>
            <img src={logoWetick} alt="" />
          </div>
          <h2 className="font-semibold text-2xl">Sign In</h2>
          <p className="text-[#373A42]">Hi, Welcome back to Urticket!</p>
          <div className="flex h-[55px] rounded-2xl border-neutral-500">
            <input
              className="w-full h-full px-6 text-sm bg-[white] box-border border rounded-2xl overflow-hidden outline-none "
              type="text"
              placeholder="Username"
              name="username"
            />
          </div>
          <div className="flex h-[55px] rounded-2xl border-neutral-500">
            <input
              className="w-full h-full px-6 text-sm bg-[white] box-border border rounded-2xl overflow-hidden outline-none"
              type="email"
              placeholder="Email"
              name="email"
            />
          </div>
          <div className="flex h-[55px] w-full bg-[white] rounded-2xl border justify-between bg-[transparent]">
            <input
              className="w-full  px-6 text-sm  box-border rounded-2xl overflow-hidden outline-none ::-ms-reveal-none"
              type={pass}
              placeholder="Password"
              name="password"
            />
            <button
              type="button"
              onClick={revealPassword}
              className="bg-[transparent] pr-[15px]"
            >
              <FaEye />
            </button>
          </div>
          {/* <div className="p-[16px] border rounded-xl flex justify-between">
            <input
              name="password"
              type={pass}
              placeholder="Password"
              className="w-full h-full px-6 text-sm bg-[white] box-border border rounded-2xl overflow-hidden "
            />
            <button type="button" onClick={revealPassword}>
              <FaEye />
            </button>
          </div> */}
          <div>
            <div className="text-right ">
              <Link
                to="/ForgotPassword"
                href="user-authentication.html"
                className="text-blue-500"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
          <div>
            <button
              onSubmit={processLogin}
              className=" border-none rounded-lg w-full h-[55px] text-white bg-[#3366ff]"
            >
              Sign In
            </button>
          </div>
          <div className="mt-[20px] text-center text-[#373A42] ">
            Or sign in with.
          </div>
          <div className=" flex justify-center gap-5 mt-5 text-center">
            <button
              type="button"
              className="border border-[#3366ff] rounded-[7px] bg-[#ffffff] w-[95px] h-[55px] justify-center flex items-center"
            >
              <img src={goggle} alt="Logo-google" />
            </button>
            <button
              type="button"
              className="border border-[#3366ff] rounded-[7px] bg-[#ffffff] w-[95px] h-[55px] justify-center flex items-center"
            >
              <img src={facebook} alt="Logo-fb" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
