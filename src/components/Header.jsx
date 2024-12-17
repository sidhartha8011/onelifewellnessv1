import React from 'react'
import { FiMenu } from "react-icons/fi";
import logo from '../assets/images/One-life-wellness-logo.svg'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='header-menu-container'>
        <div className='header-logo-container'>
            <img src={logo} alt='One Life Wellness' className='header-logo' />

            <ul className='header-menu-items-container inter-font'>
                <li>
                    <Link to='/home' className='header-menu-link '>
                    Home
                    </Link>
                    
                </li>
                <li>
                <Link to='/home' className='header-menu-link'>
                    
                Know your  bodyx
                    </Link>
                </li>
                <li>
                <Link to='/home' className='header-menu-link'>
                    About us
                    </Link>
                    
                </li>
                <li>
                <Link to='/home' className='header-menu-link'>
                Contact
                    </Link>
                    
                </li>
            </ul>
        </div>
        <div className='header-hamburger-container'>
            <span className='header-hamburger-menu'>
            <FiMenu />
            </span>
        </div>
    </div>
  )
}

export default Header