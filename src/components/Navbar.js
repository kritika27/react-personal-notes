import React from 'react'
import "../App.css";
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
        <NavLink to="/"><h1>Amazon</h1></NavLink>
        <ul>
            <NavLink to="/">
                <li>Home</li>
            </NavLink>
            <NavLink to="/shoes">
            <li>Shoes</li>
            </NavLink>
            <NavLink to="/cart">
            <li>Cart</li>
            </NavLink>
            
        </ul>
    </nav>
  )
}
