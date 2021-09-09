import React from "react";
import "./Style.css";
import StdInput from "../Components/StdInput";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="container">
      <div className="row loginContainer justify-content-center align-items-center">
        <div className="signUp p-4 ">
          <h3 className="mb-2">SignUp</h3>
          <div className="pb-3 mt-4">
            <h7 for="basic-url" className="">
              I am a*
            </h7>
            <div className="d-flex justify-content p-2 ml-1s">
              <Button name="Recrutier" />

              <Button name="candidate" left="40px" />
            </div>
          </div>
          <StdInput title={"Full Name*"} placeholder={"Enter you full name"} />
          <StdInput
            title={"Email Address*"}
            placeholder={"Enter your email address"}
          />
          <div className="d-flex justify-content-between">
            <StdInput
              title={"Create Password*"}
              placeholder={"Enter your password"}
            />
            <StdInput
              title={"Confirm Password*"}
              placeholder={"Enter your password"}
            />
          </div>
          <StdInput
            title={"Skills"}
            placeholder={"Enter comma seperated skills"}
          />
          <Button name="SignUp" />
          <div className="row justify-content-center mt-5">
            <h7 for="basic-url" className="">
              Have an account?
              <span style={{ color: "#43afff" }}>
                <Link to="/login">
                  <a>Login</a>
                </Link>
              </span>
            </h7>
          </div>
        </div>
      </div>
    </div>
  );
}
