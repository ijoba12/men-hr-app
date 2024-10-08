import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Logo from "../assets/Hr logo.svg";
import { Link } from "react-router-dom";
import { forgetPassShema } from "../lib/Validation";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgetPassShema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <main className="sign-in d-flex row align-items-center justify-content-center">
        <div className="patt container align-items-center justify-content-center">
          <div className="justify-content-center text-center d-flex gap-2">
            <img src={Logo} alt="" />
            <h2 className="HR pt-1">HR Manager</h2>
          </div>
          <form action="" className=" mb-2 " onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h2>Forgot Password</h2>
              <div>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter your Email to Reset your Password"
                  className="inputt border-none w-100"
                  {...register("Email")}
                />
                <p>{errors.Email?.message}</p>
              </div>
              <button className="btn bg-primary text-white w-100 mt-2">
                <Link to="/auth/email">Reset Password</Link>
              </button>
              <br />
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default ForgotPassword;
