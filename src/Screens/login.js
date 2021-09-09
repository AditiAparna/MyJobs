import React from 'react';
import './Style.css';
import '../App.css';

function Login(){
    return(
        <div className="LoginContainer">
            <div>Login</div>
            <div>
                <div>Email address</div>
                <input placeholder="Enter your Email" className="InputBox"/>
            </div>
            <div>
                <div className="rowDirection" style={{justifyContent:'space-between'}}>
                    <div>Password</div>
                    <div style={{color:'#43AFFF'}}>Forgot your Password?</div>
                </div>
                <input placeholder="Enter Password" className="InputBox"/>
            </div>
            <div>
                <button>Login</button>
            </div>
            <div className="rowDirection">
                New to MyJobs?
                <div style={{color:'#43AFFF'}}>
                    Create An Account
                </div>
            </div>
        </div>
    )
}

export default Login;