import React, { useState, useEffect } from "react";
import Button from "../Components/Button";
import Header from "../Components/header";
import JobDetails from "../Components/jobDetail";

function Profile(props) {
  const [jobs, setJobs] = useState([]);
  const [userData,setUserData] = useState(props.mydata);
  useEffect(() => {
    getJobs();
  }, []);
  function getJobs() {
    (async () => {
      const rawResponse = await fetch(
        `https://jobs-api.squareboat.info/api/v1/recruiters/jobs`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYXJhZFJAZ21haWwuY29tIiwibmFtZSI6InNoYXJhZFIiLCJza2lsbHMiOiJIVE1MLCBDU1MsIEpTIiwidXNlclJvbGUiOjAsImNyZWF0ZWRBdCI6IjIwMjAtMDYtMDlUMTc6Mjg6MjkuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMDFUMTY6NTU6NTEuMDAwWiIsImlkIjoiZjQ5MmJkMjMtMmFkNS00YmY4LWFkZjYtMzg4OTkwOTNhYTA1IiwiaWF0IjoxNjMxNDMyNjYxfQ.G9pOVD5eNDC3U0afbDuwG7FjXm5fFpBPbU3mqPkH1PE"
          }
        }
      );
      const content = await rawResponse.json();

      if (content.success === true) {
        setJobs(content.data.data);
      } else {
        console.log("Error");
      }
    })();
  }
  {console.log("props", props, userData)}
  return (
    <div>
      
      <Header loggedIn={1} />
      <div className="container home" style={{ position: "relative" }}>
        <div>
          <div className="d-flex flex-row align-items-center">
            <img
              src={require("../Assets/home.png").default}
              alt="home"
              style={{ height: 10, width: 10, marginRight: 2 }}
            />
            <div style={{ color: "white" }}>Home</div>
          </div>
          <div style={{ color: "white", marginTop: 20, fontWeight: "bold" }}>
            Jobs posted by you
          </div>
        </div>
        {jobs.length !== 0 ? (
          <div className="row">
            {jobs.map((value) => (
              <div className="hell">
                <JobDetails
                  name={value.title}
                  details={value.description}
                  location={value.location}
                />
              </div>
            ))}
          </div>
        ) : (
          <div
            className="d-flex flex-column justify-content-center align-items-center mt-3"
            style={{ padding: 100 }}
          >
            <img
              src={require("../Assets/writing.png").default}
              alt=""
              style={{ height: 100, width: 100 }}
            />
            <div
              style={{ color: "slategray", marginTop: 20, marginBottom: 30 }}
            >
              Your posted jobs will show here!
            </div>
            <Button name={"Post a Job"} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
