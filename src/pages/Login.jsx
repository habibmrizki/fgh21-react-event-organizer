import React from "react";
import logoLeftLogin from "../assets/img/logo-user-authentication.png";
import logoWetick from "../assets/img/logo-wetick.png";
import logoEye from "../assets/img/logo-eye.png";
import goggle from "../assets/img/google.png";
import facebook from "../assets/img/facebook.png";
import Eye from "../assets/img/logo-eye.png";
import { useNavigate } from "react-router-dom";
import react from "react";

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
      navigate("/Home");
    } else username === "" && email === "" && password === "";
    alert("Enter your account to Login");
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
      <div className="flex w-7/12 bg-[#3366ff]  justify-center items-center">
        <img src={logoLeftLogin} alt="" />
      </div>
      <div className="flex w-5/12 justify-center items-center">
        <form
          onSubmit={processLogin}
          className="flex max-w-xs w-full flex-col gap-6"
        >
          <div>
            <img src={logoWetick} alt="" />
          </div>
          <h2 className="font-semibold text-2xl">Sign In</h2>
          <p className="text-[#373A42]">Hi, Welcome back to Urticket!</p>
          <div className="flex h-[55px] rounded-2xl border-neutral-500">
            <input
              className="w-full h-full px-6 text-sm bg-[white] box-border border rounded-2xl overflow-hidden"
              type="text"
              placeholder="Username"
              name="username"
            />
          </div>
          <div className="flex h-[55px] rounded-2xl border-neutral-500">
            <input
              className="w-full h-full px-6 text-sm bg-[white] box-border border rounded-2xl overflow-hidden"
              type="email"
              placeholder="Email"
              name="email"
            />
          </div>
          <div className="flex h-[55px] rounded-2xl border-neutral-500">
            <input
              className="w-full h-full px-6 text-sm bg-[white] box-border border rounded-2xl overflow-hidden"
              type={pass}
              placeholder="Password"
              name="password"
            />
            <button type="button" onClick={revealPassword}>
              <img src={Eye} alt="" />
            </button>
          </div>
          <div>
            <div className="text-right ">
              <a href="user-authentication.html" className="text-blue-500">
                Forgot Password?
              </a>
            </div>
          </div>
          <div>
            <button className="text-blue-500 border-none rounded rounded-lg w-full h-[55px] text-white bg-[#3366ff]">
              Sign In
            </button>
          </div>
          <div className="mt-5 text-center text-[#373A42] ">
            Or sign in with.
          </div>
          <div className="flex justify-center gap-5 mt-5 text-center">
            <button type="button">
              <img src={goggle} alt="Logo-google" />
            </button>
            <button type="button">
              <img src={facebook} alt="Logo-fb" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
