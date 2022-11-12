import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({loggedIn}) {
  return (
    <div className="navbar">
      <NavLink to="/">
        <h2 style={{fontSize:"32px"}}>
          <span style={{color:"red"}}>Cal</span><span style={{color:"white"}}>orie Arc</span>
        </h2>
      </NavLink>
      <NavLink to="/meals">Meals</NavLink>
      <NavLink to="/contact_us">Contact Us</NavLink>
      {loggedIn ?
        <>
          <NavLink to="/userprofile">User Profile</NavLink>
          <NavLink to="/meal_plan">My Meals</NavLink>
        </>
        :<>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup"><button className="button">Sign Up</button></NavLink>  
        </>
      }
    </div>
  );
}

export default NavBar;
