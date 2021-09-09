import React,{useState} from "react";
import "./Style.css";
import StdInput from "../Components/StdInput";
import Button from "../Components/Button";
import { Link } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  function setEmailFunction(value){
    setEmail(value)
  }
  return (
    <div className="container">
      <div className="row loginContainer justify-content-center align-items-center">
        <div className="login p-4 ">
          <StdInput
            title={"Email Address*"}
            placeholder={"Enter your email address"}
            onChange={setEmailFunction}
          />
          {console.log(email,password)}
          <h6 for="basic-url" className="">
            Password
            <span className="forgotpwd"> Forgot your password?</span>
          </h6>
          <div className="input-group mb-4" id="show_hide_password">
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              onChange={(value)=>{setPassword(value.target.value)}}
            />
          </div>
          <Button name="Login" />
          <div className="row justify-content-center mt-5">
            <h7 for="basic-url" className="">
              New to My job?
              <span style={{ color: "#43afff" }}>
                <Link to="/signup">
                  <a>Create an account</a>
                </Link>
              </span>
            </h7>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
