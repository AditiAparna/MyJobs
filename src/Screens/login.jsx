import React, { useState } from "react";
import StdInput from "../Components/StdInput";
import { Link, Redirect } from "react-router-dom";
import data from "../api.json";
import Header from "../Components/header";

function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, seterror] = useState(0);
  const [msg, setMsg] = useState("");

  let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  function setEmailFunction(value) {
    setEmail(value);
    seterror(0);
  }

  // ------checking credentials--------------------
  function auth() {
    if (!regEmail.test(email)) {
      seterror(1);
      setMsg("Invalid email format :/");
    } else {
      seterror(0);
      var rawCredentials = data.item[0].item[0].request.body.raw;
      var credentials = JSON.parse(rawCredentials);
      console.log(credentials);
      if (email === credentials.email && password === credentials.password) {
        console.log('hello')
        // props.setLogin();
        return <Redirect to="/profile" />;
      } else {
        seterror(1);
        setMsg("User not registered or incorrect Password :/");
      }
    }
  }
  //-------------------------------------------

  return (
    <div>
      <Header onlyLogo={1} />
      <div className="container login">
        <div className="row loginContainer justify-content-center ">
          <div className="loginCard p-4 ">
            <h3 className="mb-5">Login</h3>
            <StdInput
              title={"Email Address"}
              placeholder={"Enter your email address"}
              onChange={setEmailFunction}
            />

            <h6 for="basic-url" className="">
              Password
              <Link to="/forgotpassword">
                <span className="forgotpwd"> Forgot your password?</span>
              </Link>
            </h6>
            <div className="input-group mb-4" id="show_hide_password">
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                onChange={(value) => {
                  setPassword(value.target.value);
                }}
              />
            </div>
            {error ? (
              <div
                className="d-flex justify-content-end mb-2"
                style={{ color: "#ff0000" }}
              >
                {msg}
              </div>
            ) : null}
            <div>
              <div className="row justify-content-center">
                  <button type="button" className="btn button" onClick={auth}>
                    {"Login"}
                  </button>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              <h7 for="basic-url" className="">
                New to My jobs?
                <span style={{ color: "#43afff" }}>
                  <Link to="/signup">
                    <a href="/signup"> Create an account</a>
                  </Link>
                </span>
              </h7>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
