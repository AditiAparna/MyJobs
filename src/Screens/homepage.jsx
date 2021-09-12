import React from 'react';
import '../App.css';
import Header from '../Components/header';
import Button from '../Components/Button';
import { Link } from "react-router-dom";

function Homepage(){
    return(
        <div>
            <Header loggedIn={0} />
            <div className='container home'>
                <div className='row ml-5 mr-5 d-flex'>
                    <div className='col'>
                        <div classname='d-flex' style={{ height:100, width:300}}>
                            <div className='mt-3' style={{color:'white', fontSize:35}}>
                                Welcome to
                            </div>
                            <div className="d-flex mt-n1" >
                                <div style={{color:'white', fontWeight: 'bold', fontSize: 35}}>My</div>
                                <div style={{color:'#43AFFF', fontWeight: 'bold', fontSize: 35}}>Jobs</div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-start mt-1' style={{marginLeft: 12}}>
                            <Link to='/login'>
                                <Button name="Get Started" />
                            </Link>
                        </div>
                    </div>
                    <div className='col'>
                        <img src={require('../Assets/download.jpg').default} alt="" style={{height:300,width:450,marginTop:40,borderRadius:20 }}/>
                    </div>
                </div>
                <div style={{position:'absolute'}}>
                    <img src={require('../Assets/bottom.png').default} />
                </div>
            </div>
        </div>
    )
}

export default Homepage;