import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <h2 style={{fontSize:"32px"}}>
        <span style={{color:"red"}}>Cal</span><span style={{color:"white"}}>orie Arc</span>
      </h2>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/userprofile">User Profile</NavLink>
      <NavLink to="/meal_plan">Meal Plan</NavLink>
      <NavLink to="contact_us">Contact Us</NavLink>
      <NavLink to="/signup"><button className="button">Sign Up</button></NavLink>  
    </div>
  );
}

export default NavBar;
