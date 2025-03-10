import React from 'react'
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <NavLink to='/' className={({isActive})=>isActive?"active-link":""}>Home</NavLink>
            </li>
            <li>
            <NavLink to='/about' className={({isActive})=>isActive?"active-link":""}>about</NavLink>
            </li>
            <li>
            <NavLink to='/Dashboard' className={({isActive})=>isActive?"active-link":""}>Dashboard</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar