import React from "react";
import './Header.css'

export const Header = () => { 
  return (
<nav>
<div className="nav-wrapper header">
  <a href="#" className="brand-logo center">TRAVEL THE WORLD</a>
  <ul id="nav-mobile" className="left hide-on-med-and-down">
  <li><a href="badges.html">Home Page</a></li>
    <li><a href="badges.html">List of Countries</a></li>
    <li><a href="collapsible.html">About Us</a></li>
  </ul>
</div>
</nav>
);
}