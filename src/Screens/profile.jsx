import React, { useState } from "react";
import Button from "../Components/Button";
import Header from "../Components/header";
import JobDetails from "../Components/jobDetail";
// import { Link, Redirect } from "react-router-dom";

function Profile() {
    const [toggle, setToggle]=useState(1)
    const jobs=[
        {
            name:'UI/UX designer',
            details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…',
            location:'Bengaluru',
        },
        {
            name:'Frontend designer',
            details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…',
            location:'Gurgaon',
        }
    ]
    return(
        <div>
            <Header loggedIn={1}/>
            <div className='container home' style={{position:'relative'}}>
                <div>
                    <div className="d-flex flex-row align-items-center">
                        <img src={require('../Assets/home.png').default} style={{height:10, width:10, marginRight:2}}/>
                        <div style={{color:'white'}}>Home</div>
                    </div>
                    <div style={{color:'white',marginTop:20, fontWeight:'bold'}}>Jobs posted by you</div>
                </div>
                {toggle?
                    <div className="row">
                        {jobs.map((value)=>
                        <JobDetails 
                        name={value.name} 
                        details={value.details} 
                        location={value.location} 
                        />
                        )}
                    </div>
                :<div className='d-flex flex-column justify-content-center align-items-center mt-3' style={{padding: 100}}>
                    <img src={require('../Assets/writing.png').default} style={{height:100, width:100}}/>
                    <div style={{color:'slategray', marginTop:20, marginBottom: 30}}>Your posted jobs will show here!</div>
                    <Button name={"Post a Job"}/>
                </div>}
            </div>
        </div>
    )    
}

export default Profile;