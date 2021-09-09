import React from 'react';
import './Style.css';
import '../App.css';
import Header from '../Components/header';

function Homepage(){
    return(
        <div>
            <Header loggedIn={0} />
        </div>
    )
}

export default Homepage;