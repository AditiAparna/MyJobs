import React, { useState, useEffect } from "react";
import Button from "../Components/Button";
import Header from "../Components/header";
import JobDetails from "../Components/jobDetail";
import ModalCard from "../Components/ModalCard";

function Profile(props) {
  useEffect(() => {
    getJobs();
  }, []);
  const [modal, setModal] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [app, setApp] = useState([]);
  const [applicants, setApplicants]= useState(0);
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
      console.log("1");
      if (content.success === true) {
        setJobs(content.data.data);
      } else {
        console.log("Error");
        //   setReset(0)
      }
    })();
  }
  function getApplications(jobId) {
    (async () => {
      const rawResponse = await fetch(
        `https://jobs-api.squareboat.info/api/v1//recruiters/jobs/${jobId}/candidates`,
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
      console.log("applications", content);

      if (content.success === true) {
        
        if(content.message){
            setApplicants(0)
        } else{
            setApp(content.data);
            setApplicants(1)
        }
        console.log(app);
      } else {
        console.log("Error");
      }
    })();
  }
  return (
    <div>
      {console.log("props", props.location)}
      <Header loggedIn={1} />
      <div
        className={modal ? "container home blur " : "container home "}
        style={{ position: "relative" }}
      >
        <div>
          <div className="d-flex flex-row align-items-center">
            <img
              src={require("../Assets/home.png").default}
              alt="home"
              style={{ height: 10, width: 10, marginRight: 2 }}
            />
            <div style={{ color: "white" }}>Home</div>
          </div>
          <div
            style={{ color: "white", marginTop: 20, fontWeight: "bold" }}
            onClick={() => {
              setModal(true);
            }}
          >
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
                  id={value.id}
                  action={getApplications}
                  onClick={() => {
                    console.log(setModal(true));
                  }}
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
      <div className={modal ? "modalContainer p-3" : "modalContainer p-3 hide"}>
        <div className="modalTop d-flex justify-content-between">
          <h6>Applicants for this job</h6>

          <h5
            style={{ fontWeight: "bold" }}
            onClick={() => {
              setModal(false);
            }}
          >
            X
          </h5>
        </div>
        <div className="total">
          <h7 style={{ color: "#303f60", fontSize: "12px", fontWeight: "600" }}>
            Total applicantions{" "}
          </h7>
          <div className="contentContainer">
            <div className="row content mr-1">
              <div className="col-6 ">
                  {applicants?
                    <div>
                    {app.map((item) => {
                        return(
                      <ModalCard data={item} />)
                    })}
                  </div>
                :<div>
                    No applications for this job
                </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
