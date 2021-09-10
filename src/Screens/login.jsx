import React,{useState} from "react";
import "./Style.css";
import StdInput from "../Components/StdInput";
// import Button from "../Components/Button";
import { Link } from "react-router-dom";
import data from "../api.json";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error,seterror]=useState(0);
  const [msg,setMsg]=useState("");

  let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  function setEmailFunction(value){
    setEmail(value)
    seterror(0)
  }
  
  // ------checking credentials--------------------
    const auth = () => {
        if(!regEmail.test(email)){
          seterror(1);
          setMsg("Invalid email format :/");
        }
        else{
          seterror(0);
          var rawCredentials = data.item[0].item[0].request.body.raw;
          var credentials = JSON.parse(rawCredentials);
          console.log(credentials)
          if (email === credentials.email && password === credentials.password) {
              alert("Succefully loged in");
          }
          else {
              alert("User not registered or incorrect Password :/");
          }
        }
    }
    //-------------------------------------------

  return (
    <div className="container">
      <div className="row loginContainer justify-content-center align-items-center">
        <div className="login p-4 ">
          <StdInput
            title={"Email Address*"}
            placeholder={"Enter your email address"}
            onChange={setEmailFunction}
          />
          {error ? <div style={{ color: "#ff0000" }}>{msg}</div> :null }
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
          <div>
            <div className="row justify-content-center">
              <button type="button" className="btn button" onClick={auth}>
                {"Login"}
              </button>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <h7 for="basic-url" className="">
              New to My job?
              <span style={{ color: "#43afff" }}>
                <Link to="/signup">
                  <a href="/signup">Create an account</a>
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
