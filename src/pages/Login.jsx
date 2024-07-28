import React, { useState } from "react";
import logoLeftLogin from "../assets/img/logo-user-authentication.png";
import senja from "../assets/img/gunung.jpg";
import logoWetick from "../assets/img/logo-wetick.png";
import goggle from "../assets/img/google.png";
import facebook from "../assets/img/facebook.png";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { login } from "../redux/reducers/auth";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProfile } from "../redux/reducers/profile";
import { FaSpinner } from "react-icons/fa6";
import { FaTicket } from "react-icons/fa6";

function Login() {
  // const dispatch = useDispatch();
  // const [alert, setALert] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function processLogin(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // dispatch(login(data.results.token));
    // if (username === "Habib" && password === "1234") {
    //   window.alert("Selamat login anda sukses!");
    //   navigate("/");
    // } else {
    //   username === "" && password === "";
    //   alert("Enter your account to Login");
    // }

    setLoading(true);
    const inputData = new URLSearchParams();
    inputData.append("email", email);
    inputData.append("password", password);

    // const response = await fetch("https://api-dummy.fahrul.id/auth/login", {
    //   method: "POST",
    //   body: inputData,
    // });
    fetch("https://wsw6zh-8888.csb.app/auth/login", {
      method: "POST",
      body: inputData,
    }).then((response) => {
      response.json().then((data) => {
        if (data.success) {
          const token = data.results.token;
          dispatch(login(token));
          (async () => {
            const response = await fetch(
              "https://wsw6zh-8888.csb.app/profile",
              {
                headers: {
                  Authorization: "Bearer " + token,
                },
              }
            );
            const data = await response.json();
            dispatch(addProfile(data.results));
            console.log(data);
            navigate("/");
          })();
        } else {
          window.alert(data.message);
        }
      });
    });

    // const input = await response.json();
    // if (input.success) {
    //   window.alert(input.message);
    //   navigate("/");
    //   // console.log("aha");
    // } else {
    //   window.alert(input.message);
    // }
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
      <div className="md:flex w-7/12  hidden justify-center items-center">
        <img src={senja} alt="" />
      </div>
      <div className="flex w-full md:w-5/12 justify-center items-center ">
        <form
          onSubmit={processLogin}
          className="flex max-w-xs w-full flex-col gap-[20px] "
        >
          <div className="flex flex-row items-center gap-[15px]">
            <FaTicket className="text-blue-600 w-9 h-9" />
            <div className="text-[#b6895b] text-[20px] italic">
              Kenangan<span className="text-[#fff]">senja.</span>
            </div>
          </div>
          <h2 className="font-semibold text-2xl text-[white]">Sign In</h2>
          <p className="text-[white]">Hi, Welcome back to Urticket!</p>
          <div className="flex h-[55px] rounded-2xl border-neutral-500">
            <input
              className="w-full h-full px-6 text-sm bg-[white] box-border border rounded-2xl overflow-hidden outline-none "
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
          <div className="mt-[20px] text-center text-[white] ">
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
      {loading ? (
        <div className="bg-slate-500/50 fixed top-0 left-0 flex items-center h-screen w-full">
          <div className=" w-full h-screen flex items-center justify-center gap-[10px]">
            <FaSpinner className="animate-spin " />
            loading
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Login;
