import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signinShema } from "../lib/Validation";
import Pic from "../assets/formImg.svg";
import Logo from "../assets/Hr logo.svg";
import OrImg from "../assets/Frame 113.png";
import "../Styles/SignIn.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signinShema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <>
    
      <main className="sign-in d-flex row align-items-center justify-content-center">
        <div className="patt container align-items-center justify-content-center">
          <div className="justify-content-center text-center d-flex">
            <img src={Logo} alt="" />
            <h2 className="HR">HR Manager</h2>
          </div>
          <h2 className="welcome text-center">
            Welcome to HR Manager - where creativity meets Oppurtunity
          </h2>
          <form action="" className=" mb-2 " onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div>
                <label htmlFor="">Email</label> <br />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="sandrawilliams@gmail.com"
                  className="inputt w-100"
                  {...register("Email")}
                />
                <p>{errors.Email?.message}</p>
              </div>
              <div>
                <label
                  htmlFor=""
                  className=" d-flex justify-content-between pt-5"
                >
                  Password{" "}
                  <Link to="/auth/forgotpassword">Forgot Password?</Link>
                </label>

                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Password"
                  className="inputt w-100"
                  {...register("Password")}
                />
                <p>{errors.Password?.message}</p>
              </div>
              <button className="btn bg-primary text-white w-100 mt-2">
                Sign In
              </button>
              <br />
              <img src={OrImg} alt="" className="text-center" />
              <br />
              <button className="btn text-white border bd-3 w-100 text-primary">
                Continue with Google
              </button>
              <h6 className="text-center">
                Dont have an account? <b>create account </b>
              </h6>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default SignIn;
