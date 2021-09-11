import React, { useState } from "react";
import StdInput from "../Components/StdInput";
import { Link } from "react-router-dom";
import Header from "../Components/header";

export default function ForgotPassword() {
  const [isemail, setemail] = useState(false);
  return (
    <div className="div">
      <Header onlyLogo={0} />
      <div className="container login">
        <div className="row forgotPassword justify-content-center ">
          <div className="loginCard p-4 ">
            <h3 className="mb-3">
              {isemail ? "Reset your password" : "Forget your password?"}
            </h3>
            <h6 className="mb-3" style={{ fontWeight: "400" }}>
              {isemail
                ? "Enter Your New Password"
                : " Enter the email associated with your account and we’ll send you instructions to reset your password."}
            </h6>
            {isemail ? (
              <div className="div">
                <StdInput
                  title={"New password"}
                  placeholder={"Enter new password"}
                  onChange={() => {}}
                />
                <StdInput
                  title={"Confirm new password"}
                  placeholder={"Enter confirm new password"}
                  type="password"
                  onChange={() => {}}
                />
              </div>
            ) : (
              <StdInput
                title={"Email Address"}
                placeholder={"Enter your email address"}
                onChange={() => {}}
              />
            )}
            <div>
              <div className="row justify-content-center">
                {isemail ? (
                  <Link to="/">
                    <button type="button" className="btn button">
                      {"Submit"}
                    </button>
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="btn button"
                    onClick={() => {
                      setemail(true);
                    }}
                  >
                    {"Submit"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
