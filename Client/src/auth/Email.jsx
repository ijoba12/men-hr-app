import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Logo from "../assets/Hr logo.svg";
import { Link } from "react-router-dom";
import { EmailShema } from "../lib/Validation";

const Email = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EmailShema),
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
              <h2>Check your Email</h2>
              <div>
                <label htmlFor="">Password</label>
                <br />
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder=""
                  className="inputt border-none w-100"
                  {...register("Password")}
                />
                <p>{errors.Password?.message}</p>
                <br />
                <label htmlFor="">Confirm Password</label>
                <br />
                <input
                  type="password"
                  name=""
                  id=""
                  className="inputt border-none w-100"
                  {...register("Password")}
                />
                <p>{errors.confirmPwd?.message}</p>
              </div>
              <button className="btn w-100 mt-2 text-white">
                <Link to="/auth/Email">Reset Password</Link>
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Email;
