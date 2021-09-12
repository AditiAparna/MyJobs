import React from "react";

function JobDetails(props) {
    return(
        <div className="jobDetailContainer col-3">
            <div style={{fontSize: 17, color: '#303f60'}}>{props.name}</div>
            <div style={{fontSize: 14, color: '#303f60', marginTop:10}}>{props.details}</div>
            <div className="d-flex flex-row justify-content-between" style={{marginTop:15}}>
                <div className="d-flex flex-row align-items-center" >
                    <img src={require('../Assets/location.png').default} alt="location" style={{height:15,width:15,margin: 5}}/>
                    <div style={{fontSize: 14, color: '#303f60'}}>{props.location}</div>
                </div>
                <div className="d-flex align-items-center justify-content-center applicationsButton" >
                View Applications
                </div>
            </div>
        </div>
    )
}

export default JobDetails;