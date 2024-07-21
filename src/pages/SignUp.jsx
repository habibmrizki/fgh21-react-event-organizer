import React from "react";
import logoLeftLogin from "../assets/img/logo-user-authentication.png";
import logoWetick from "../assets/img/logo-wetick.png";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import Login from "./Login";

import { Link } from "react-router-dom";

function SignUp() {
  //   const navigation = useNavigate();

  //   function register(e) {
  //     e.preventDefault();
  //     const fullname = e.target.fullname.value;
  //     const email = e.target.email.value;
  //     const password = e.target.password.value;
  //     const cPassword = e.target.cPassword.value;

  //     if (fullname === "" || email === "" || password === "") {
  //       alert("data tidak boleh kosong!!!");
  //     } else {
  //       if (fullname.length < 4) {
  //         alert("Fullname tidak boleh kurang dari 8 karakter!!!");
  //       } else if (password.length < 8) {
  //         alert("Password harus lebih dari 8 karakter!!!");
  //       } else if (password !== cPassword) {
  //         alert("Confirm password tidak sama dengan password!!!");
  //       } else {
  //         navigation("/login");
  //       }
  //     }
  //   }

  //   const [pass, setPass] = useState("password");
  //   const [icon, setIcon] = useState(<FaEyeSlash />);
  //   function showPassword() {
  //     if (pass === "password") {
  //       setPass("text");
  //       setIcon(<FaEye />);
  //     }
  //   }
  //   function hiddenPassword() {
  //     if (pass === "text") {
  //       setPass("password");
  //       setIcon(<FaEyeSlash />);
  //     }
  //   }

  return (
    <div className="flex h-[100vh] ">
      <div className="md:flex w-7/12 bg-[#3366ff] hidden justify-center items-center">
        <img src={logoLeftLogin} alt="" />
      </div>
      <div className="flex w-full md:w-5/12 justify-center items-center ">
        <form
          //   onSubmit={processSignUp}
          className="flex max-w-xs w-full flex-col gap-[20px] "
        >
          <div>
            <img src={logoWetick} alt="" />
          </div>
          <h2 className="font-semibold text-2xl">Sign Up</h2>
          <p className="text-[#373A42]">
            Already have an account?{" "}
            <Link to="/Login" className="text-[#3366ff] font-bold">
              Log in
            </Link>
          </p>
          <div className="flex h-[55px] rounded-2xl border-neutral-500">
            <input
              className="w-full h-full px-6 text-sm bg-[white] box-border border rounded-2xl overflow-hidden outline-none "
              type="text"
              placeholder="Full Name"
              name="Full Name"
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
              type="password"
              placeholder="Password"
              name="password"
            />
            <button
              type="button"
              //   onClick={revealPasswordSignUp}
              className="bg-[transparent] pr-[15px]"
            >
              <FaEye />
            </button>
          </div>
          <div className="flex h-[55px] w-full bg-[white] rounded-2xl border justify-between bg-[transparent]">
            <input
              className="w-full  px-6 text-sm  box-border rounded-2xl overflow-hidden outline-none ::-ms-reveal-none"
              type="password"
              placeholder="Confirm Password"
              name="Confirm Password"
            />
            <button
              type="button"
              //   onClick={revealPasswordSignUp}
              className="bg-[transparent] pr-[15px]"
            >
              <FaEye />
            </button>
          </div>
          <div className=" flex gap-[10px] ">
            <input type="checkbox" name="terms" id="check" />
            <label htmlFor="check">Accept terms and condition</label>
          </div>
          <div>
            <button
              //   onSubmit={processSignUp}
              className=" border-none rounded-lg w-full h-[55px] text-white bg-[#3366ff]"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
