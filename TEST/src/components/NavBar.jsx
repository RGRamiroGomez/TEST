import React from 'react'
import Buttons from './Buttons'
import './NavBar.css'

const NavBar = () => {
    const redir=()=>{

    }
    return (
        <div className='NavBar'>
            <img src="" alt="" />
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Contact Us</a></li>
            </ul>
            <Buttons className="login" text="Log In" color="red" funcion={redir}/>
        </div>
    )
}

export default NavBar