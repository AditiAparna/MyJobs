import React,{useState} from "react";
import "./Style.css";
import StdInput from "../Components/StdInput";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

export default function SignUp() {

  const [name, setName]=useState('')
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [confirmPassword, setConfirmPassword]=useState('')
  const [skills, setSkills]=useState([])
  const [error,setError]=useState(0)

  function setNameFunction(value){
    setError(0)
    setName(value)
  }
  function setEmailFunction(value){
    setError(0)
    setEmail(value)
  }
  function setPasswordFunction(value){
    setError(0)
    setPassword(value)
  }
  function setConfirmPasswordFunction(value){
    setError(0)
    setConfirmPassword(value)
  }
  function setSkillsFunction(value){
    setError(0)
    setSkills(value)
  }

  function fieldValidations (){
    setError(1)
  }

  return (
    <div className="container">
      <div className="row loginContainer justify-content-center align-items-center">
        <div className="signUp p-4 ">
          <h3 className="mb-2">SignUp</h3>
          <div className="pb-3 mt-4">
            <h7 className="">
              I am a*
            </h7>
            <div className="d-flex justify-content p-2 ml-1s">
              <Button name="Recrutier" />
              <Button name="candidate" left="40px" />
            </div>
          </div>{console.log(error,name,email)}
          <StdInput 
            title={"Full Name*"} 
            placeholder={"Enter you full name"}
            onChange={setNameFunction}
            error={error===1&&name===''?1:0}
          />
          <StdInput
            title={"Email Address*"}
            placeholder={"Enter your email address"}
            onChange={setEmailFunction}
            error={error===1&&email===''?1:0}
          />
          <div className="d-flex justify-content-between">
            <StdInput
              title={"Create Password*"}
              placeholder={"Enter your password"}
              onChange={setPasswordFunction}
              type={"password"}
            />
            <StdInput
              title={"Confirm Password*"}
              placeholder={"Enter your password"}
              onChange={setConfirmPasswordFunction}
              type={"password"}
              error={error===1&&password!==confirmPassword?1:0}
            />
          </div>
          <StdInput
            title={"Skills"}
            placeholder={"Enter comma seperated skills"}
            onChange={setSkillsFunction}
          />
          <Button name="SignUp" action={fieldValidations} />
          <div className="row justify-content-center mt-5">
            <h7 for="basic-url" className="">
              Have an account?
              <span style={{ color: "#43afff" }}>
                <Link to="/login">
                  <a href="/login">Login</a>
                </Link>
              </span>
            </h7>
          </div>
        </div>
      </div>
    </div>
  );
}
