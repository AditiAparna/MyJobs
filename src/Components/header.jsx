import React from 'react';
import { Link } from "react-router-dom";

function Header(props){
    return(
        <div className="d-flex justify-content-between pt-3 pb-3 mr-5 ml-5" style={{borderBottomWidth: 0.5, borderBottom:'solid', borderBottomColor: '#4D618E' }}>
            <div className="d-flex">
                <div style={{color:'white', fontWeight: 'bold', fontSize: 20}}>My</div>
                <div style={{color:'#43AFFF', fontWeight: 'bold', fontSize: 20}}>Jobs</div>
            </div>
            {props.onlyLogo?null:
            props.loggedIn?
            <div className="d-flex justify-content-around" style={{width:150}}>
                <div style={{color:'white'}}>Post a Job</div>
                <div className="d-flex justify-content-center align-items-center" style={{borderRadius:100, backgroundColor:'#D9EFFF', height:30, width:30}}>A</div>
            </div>:
            <Link to="/login">
                <div className="d-flex justify-content-center align-items-center" style={{height: 35, width: 145, backgroundColor: '#43AFFF33', border: 'solid',borderRadius: 5, borderWidth: 0.5, borderColor: '#43AFFF',color: 'white', fontSize: 14}}> 
                    Login/SignUp
                </div>
            </Link>
            }
        </div>
    )
}

export default Header;