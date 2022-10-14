import React from 'react';
import Logo from '../views/HC.png';

function Nav()
{
    return <div className="navb" >
        <img className="logo" src={Logo}></img>
             <a href="#">Home</a> 
             <a href="#"> About</a> 
             <a href="#">Contact Us</a>  
    </div>
}

export default Nav;