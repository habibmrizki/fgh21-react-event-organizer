import React, { useState } from "react";
import logoLeftLogin from "../assets/img/logo-user-authentication.png";
import logoWetick from "../assets/img/logo-wetick.png";
import { useNavigate } from "react-router-dom";
import { FaEye, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(0);
  const [loading, setLoading] = useState(0);
  const [message, setMessage] = useState("");
  const [pass, setPass] = useState("password");
  const [confirmPass, setConfirmPassword] = useState("password");

  async function checkSignUp(e) {
    e.preventDefault();

    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (!username || !email || !password || !confirmPassword) {
      setMessage("Username, email, and password can't be empty");
      setAlert(1);
      return;
    }

    setLoading(true);

    const inputData = new URLSearchParams();
    inputData.append("fullName", username);
    inputData.append("email", email);
    inputData.append("password", password);
    inputData.append("confirmPassword", confirmPassword);

    const endpoint = "http://localhost:8080/auth/register";

    const response = await fetch(endpoint, {
      method: "POST",
      body: inputData,
    });
    const data = await response.json();
    if (data.success) {
      setMessage(data.message);
      setTimeout(() => {
        navigate("/Login");
      }, 2000);
    } else {
      setLoading(false);
      setMessage(data.message);
      setAlert(1);
    }
  }

  function revealPasswordSignUp() {
    setPass(pass === "password" ? "text" : "password");
  }

  function revealConfirmPasswordSignUp() {
    setConfirmPassword(confirmPass === "password" ? "text" : "password");
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="md:flex w-7/12 bg-[#3366ff] hidden justify-center items-center">
        <img src={logoLeftLogin} alt="" />
      </div>
      <div className="flex w-full md:w-5/12 justify-center items-center">
        <form
          onSubmit={checkSignUp}
          className="flex max-w-xs w-full flex-col gap-[20px]"
        >
          <div>
            <img src={logoWetick} alt="" />
          </div>
          <div className="font-semibold text-2xl text-[#fff]">Sign Up</div>
          <p className="text-[#373A42]">
            Already have an account?{" "}
            <Link to="/Login" className="text-[#3366ff] font-bold">
              Log in
            </Link>
          </p>
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
          <div className="flex h-[55px] rounded-2xl border-neutral-500">
            <input
              className="w-full h-full px-6 text-sm bg-[white] box-border border rounded-2xl overflow-hidden outline-none"
              type="text"
              placeholder="Full Name"
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
              className="w-full px-6 text-sm box-border rounded-2xl overflow-hidden outline-none"
              type={pass}
              placeholder="Password"
              name="password"
            />
            <button
              type="button"
              onClick={revealPasswordSignUp}
              className="bg-[transparent] pr-[15px]"
            >
              <FaEye />
            </button>
          </div>
          <div className="flex h-[55px] w-full bg-[white] rounded-2xl border justify-between bg-[transparent]">
            <input
              className="w-full px-6 text-sm box-border rounded-2xl overflow-hidden outline-none"
              type={confirmPass}
              placeholder="Confirm Password"
              name="confirmPassword"
            />
            <button
              type="button"
              onClick={revealConfirmPasswordSignUp}
              className="bg-[transparent] pr-[15px]"
            >
              <FaEye />
            </button>
          </div>
          <div className="flex gap-[10px] text-[#fff]">
            <input type="checkbox" name="terms" id="check" />
            <label htmlFor="check">Accept terms and condition</label>
          </div>
          <div>
            <button
              onSubmit={checkSignUp}
              className="border-none rounded-lg w-full h-[55px] text-white bg-[#3366ff]"
            >
              Sign Up
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

export default SignUp;
