import React from "react";
import { Link } from "react-router-dom";

import './Header.css'

export const Header = () => { 
  return (
<nav>
<div className="nav-wrapper header">
  <a href="#" className="brand-logo center">TRAVEL THE WORLD</a>
  <ul id="nav-mobile" className="left hide-on-med-and-down">
  <li><a href="badges.html">  <Link to='/'>Home Page</Link> </a></li>
    <li><a href="badges.html"> <Link to='/countries'>List of Countries</Link> </a></li>
    <li><a href="collapsible.html"> <Link to='/about'>About Us</Link> </a></li>
  </ul>
</div>
</nav>
);
}