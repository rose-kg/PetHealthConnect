import React from 'react'
import './Navbar/Navbar.css'
import logo from '../assets/logo.png'


const Navbar = () => {
  return (
    
    <nav className='container'>
        <ul>
            <img src={logo} alt="" className='logo'/>
            {/* <div className='list'> */}
            <li>Home</li>
            <li>About us</li>
            <li>FAQ</li>
            <li>Contact us</li>
            {/* </div> */}
            <div className='nav-btns'>
            <li><button className='account-btn'>Create Account</button></li>
            <li><button className='log-in-btn'>Log in</button></li>
            </div>
        </ul>
    </nav>

    
  )
}

export default Navbar
