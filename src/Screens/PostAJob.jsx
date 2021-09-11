import React, { useState } from "react";
import "../App.css";
import StdInput from "../Components/StdInput";
import Header from "../Components/header";
import Button from "../Components/Button";
import { Link, Redirect } from "react-router-dom";

export default function PostAJob() {
  return (
    <div>
      <Header loggedIn={1} postJob={1} />
      <div className="container postedBy ">
        <div className="d-flex flex-row align-items-center">
            <img src={require('../Assets/home.png').default} style={{height:10, width:10, marginRight: 2}}/>
            <div style={{color:'white'}}> {' Home > Post a job'}</div>
        </div>
        <div className="row forgotPassword justify-content-center ">
          <div className="loginCard p-4 ">
            <h3 className="mb-3">Post a job</h3>
            <h6 className="mb-3" style={{ fontWeight: "400" }}>
              " Enter the email associated with your account and we’ll send you
              instructions to reset your password.
            </h6>
            <div className="div">
              <StdInput
                title="Job title"
                placeholder={"Enter new password"}
                onChange={() => {}}
              />
            </div>
            <div>
              <div className="row justify-content-center">
                <Link to="/">
                  <button type="button" className="btn button">
                    {"Submit"}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
