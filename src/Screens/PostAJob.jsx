import React ,{useState}from "react";
import "../App.css";
import StdInput from "../Components/StdInput";
import Header from "../Components/header";
import { Link, Redirect } from "react-router-dom";

export default function PostAJob() {
  const [title,setTitle]=useState('')
  const [description,setDescription]=useState('')
  const [location,setLocation]=useState('')
  const [error,setError]=useState(1)
  const [redirect, setRedirect] = useState(0);

  function setTitleFunction(value) {
    setError(1);
    setTitle(value);
  }
  function setDescriptionFunction(value) {
    setError(1);
    setDescription(value);
  }
  function setLocationFunction(value) {
    setError(1);
    setLocation(value);
  }
  function postJob() {
    if(title!==''&&location!==''&&description!==''){
    (async () => {
      const rawResponse = await fetch('https://jobs-api.squareboat.info/api/v1/jobs', {
        method: 'POST',
        headers: {
          Accept: "application/json",
            "Content-Type": "application/json",
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYXJhZFJAZ21haWwuY29tIiwibmFtZSI6InNoYXJhZFIiLCJza2lsbHMiOiJIVE1MLCBDU1MsIEpTIiwidXNlclJvbGUiOjAsImNyZWF0ZWRBdCI6IjIwMjAtMDYtMDlUMTc6Mjg6MjkuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMDFUMTY6NTU6NTEuMDAwWiIsImlkIjoiZjQ5MmJkMjMtMmFkNS00YmY4LWFkZjYtMzg4OTkwOTNhYTA1IiwiaWF0IjoxNjMxNDMyNjYxfQ.G9pOVD5eNDC3U0afbDuwG7FjXm5fFpBPbU3mqPkH1PE"
        },
        body: JSON.stringify({
          "title": title,
          "description": description,
          "location": location
        })
      });
      const content = await rawResponse.json();
    
      console.log(content);
    
    if (content.success===true) {
      console.log('posted')
      setRedirect(1)
    } else {
      console.log('oops')
    }})();
  }else{
    setError(0)
  }
  }
  return (
    <div>
      {console.log(title!==''&&location!==''&&description!=='')}
      <Header loggedIn={1} postJob={1} />
      <div className="container postedBy ">
        <div className="d-flex flex-row align-items-center">
            <img src={require('../Assets/home.png').default} alt='home' style={{height:10, width:10, marginRight: 2}}/>
            <div style={{color:'white'}}> {' Home > Post a job'}</div>
        </div>
        <div className="row forgotPassword justify-content-center ">
          <div className="loginCard p-4 ">
            <h3 className="mb-3">Post a job</h3>
            <div className="div">
              <StdInput
                title="Job title*"
                placeholder={"Enter Job Title"}
                onChange={setTitleFunction}
              />
              <StdInput
                title="Description*"
                placeholder={"Enter Job Description"}
                onChange={setDescriptionFunction}
                height={110}
                type={'textarea'}
              />
              <StdInput
                title="Location*"
                placeholder={"Enter Job Location"}
                onChange={setLocationFunction}
              />
            </div>
            <div>
              {error?null:<div style={{color:'#FF0000',display:'flex', alignItems:'flex-end',justifyContent:'flex-end'}}>All fields are mandatory</div>}
              <div className="row justify-content-center">
                  <button type="button" className="btn button" onClick={postJob}>
                    {"Submit"}
                  </button>
              </div>
              {redirect ?
                <Redirect to={{
                              pathname:'/profile',
                              state: {}
                }} />: null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
