import React, { useState } from "react";
import StdInput from "../Components/StdInput";
import { Redirect } from "react-router-dom";
import Header from "../Components/header";

export default function ForgotPassword() {
  const [email, setEmail] = useState();
  const [reset, setReset] = useState(0);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetToken, setResetToken]= useState();
  const [error, setError]=useState(0);
  const [errorMessage, setErrorMessage]= useState();
  const [redirect, setRedirect]=useState(0);
  function setEmailFunction(value) {
    setEmail(value);
  }
  function setPasswordFunction(value) {
    setPassword(value);
  }
  function setConfirmPasswordFunction(value) {
    setConfirmPassword(value);
  }
  function sendResetCode (){
    (async () => {
      const rawResponse = await fetch(`https://jobs-api.squareboat.info/api/v1/auth/resetpassword?email=${email}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });
      const content = await rawResponse.json();
    
      console.log(content);
    
    if (content.success===true) {
      setResetToken(content.data.token)
      verifyToken(content.data.token)
    } else {
      console.log('Error')
      setReset(0)
    }})();
  }
  function verifyToken(token) {
    (async () => {
      const rawResponse = await fetch(`https://jobs-api.squareboat.info/api/v1/auth/resetpassword/${token}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });
      const content = await rawResponse.json();
    
      console.log(content)
      if (content.success===true) {
        setReset(1)
      } else {
        console.log('Error')
        setReset(0)
      }
    })();
  }
  function resetPassword() {
    (async () => {
      const rawResponse = await fetch(`https://jobs-api.squareboat.info/api/v1/auth/resetpassword`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "password": password,
          "confirmPassword": confirmPassword,
          "token": resetToken
        })
      });
      const content = await rawResponse.json();
      console.log(content)
      if (content.success===true) {
        setRedirect(1)
      } else {
        console.log('Error')
        setError(1)
        setErrorMessage(content.message)
      }
    })();
  }
  return (
    <div className="div">
      <Header onlyLogo={0} />
      <div className="container login">
        <div className="row forgotPassword justify-content-center ">
          <div className="loginCard p-4 ">
            <h3 className="mb-3">
              {reset ? "Reset your password" : "Forget your password?"}
            </h3>
            <h6 className="mb-3" style={{ fontWeight: "400" }}>
              {reset
                ? "Enter Your New Password"
                : " Enter the email associated with your account and we’ll send you instructions to reset your password."}
            </h6>
            {reset ? (
              <div className="div">
                <StdInput
                  title={"New password"}
                  placeholder={"Enter new password"}
                  onChange={setPasswordFunction}
                />
                <StdInput
                  title={"Confirm new password"}
                  placeholder={"Confirm new password"}
                  type="password"
                  onChange={setConfirmPasswordFunction}
                />
              </div>
            ) : (
              <StdInput
                title={"Email Address"}
                placeholder={"Enter your email address"}
                onChange={setEmailFunction}
              />
            )}
            <div>
              <div className="row justify-content-center">
                {error?<div style={{color:'tomato'}}>{errorMessage}</div>:null}
                {reset ? (
                    <button 
                      type="button" 
                      className="btn button" 
                      onClick={resetPassword}
                    >
                      {"Submit"}
                    </button>
                ) : (
                  <button
                    type="button"
                    className="btn button"
                    onClick={sendResetCode}
                  >
                    {"Submit"}
                  </button>
                )}
              </div>
              {redirect ?
                <Redirect to={{
                              pathname:'/login'
                }} />: null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
