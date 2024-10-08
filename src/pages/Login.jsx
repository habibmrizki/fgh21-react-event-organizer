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
  let [alert, setAlert] = React.useState(0);
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = useState(0);
  const [pass, setPass] = useState("password");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function processLogin(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      setMessage("Email and password can't be empty");
      setAlert(1);
      return;
    }

    setLoading(true);
    const inputData = new URLSearchParams();
    inputData.append("email", email);
    inputData.append("password", password);

    fetch("http://localhost:8080/auth/login", {
      method: "POST",
      body: inputData,
    }).then((response) => {
      response.json().then((data) => {
        if (data.success) {
          const token = data.result.token;
          setLoading(1);
          console.log(token);
          dispatch(login(token));
          (async () => {
            const response = await fetch("http://localhost:8080/profile/", {
              headers: {
                Authorization: "Bearer " + token,
              },
            });
            const data = await response.json();
            console.log(data, "token");
            dispatch(addProfile(data.result));
            setTimeout(() => {
              navigate("/");
            }, 1000);
          })();
        } else {
          // window.alert(data.message);
          setLoading(1);
          setMessage(data.message);
          setAlert(1);
          setLoading(0);
        }
      });
    });
  }

  function revealPassword() {
    setPass(pass === "password" ? "text" : "password");
  }

  return (
    <div className="flex h-[100vh] ">
      <div className="md:flex w-7/12  hidden justify-center items-center">
        <img src={senja} alt="" />
      </div>
      <div className="flex w-full md:w-5/12 justify-center items-center ">
        <form
          onSubmit={processLogin}
          className="flex max-w-xs w-full flex-col gap-[17px] "
        >
          <div className="flex flex-row items-center gap-[15px]">
            <FaTicket className="text-blue-600 w-9 h-9" />
            <div className="text-[#b6895b] text-[20px] italic">
              Kenangan<span className="text-[#fff]">senja.</span>
            </div>
          </div>
          <h2 className="font-semibold text-2xl text-[white]">Sign In</h2>
          <p className="text-[white]">Hi, Welcome back to Urticket!</p>
          <div className="">
            {alert ? (
              <div className="h-12 flex-1 bg-red-400 flex items-center pl-4 justify-between rounded-[10px]">
                {message ? <div>{message}</div> : ""}
                <button
                  onClick={() => setAlert(0)}
                  className="h-12 w-12 font-bold"
                >
                  X
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
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

          <div className="flex flex-col gap-[20px]">
            <button
              onSubmit={processLogin}
              className=" border-none rounded-lg w-full h-[55px] text-white bg-[#3366ff]"
            >
              Sign In
            </button>
            <div className="text-center">
              <Link
                to="/ForgotPassword"
                href="user-authentication.html"
                className="text-blue-500 text-[15px]"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="flex items-center mx-[8px] w-auto">
              <div className="flex-grow border-t border-gray-300 "></div>
              <span className="px-2 text-gray-200">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <Link to="/Signup">
              <button className=" border-none rounded-lg w-full h-[55px] text-white bg-[#3366ff]">
                Sign Up
              </button>
            </Link>
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

export default Login;
