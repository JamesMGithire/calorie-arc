import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
  function Login({info}) {
  const nav = useNavigate();
  let userInfo={}
  function handleChange(e){
    userInfo={
      ...userInfo,
      [e.target.name]: e.target.value
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch ("http://localhost:9292/validate",  {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(userInfo)
      }).then(r=>r.json())
      .then(result=>{
        console.log(result)
      });
  };
  return (
    <div className="background">
      <div className="main-form">
        <h1>Calorie-arc login</h1>
        <form onSubmit={handleSubmit} >
          <div className="text-field">
              <input 
              type="text"
              required="required"
              name="username"
              onChange={(e) => {
                handleChange(e)
                console.log(userInfo);
              }}
              />
              <span></span>
              <label>Username</label>
          </div>

          <div className="text-field">
              <input
              type="password"
              required="required"
              name="password"
              onChange={(e) => {
                handleChange(e)
                console.log(userInfo)}}
              />
              <span></span>
              <label>Password</label>
          </div>
          <div className="signup_link">

            <div className="pass">Forgot Password?</div>
            <input type="Submit" defaultValue="Login" />
              Not a member? 
              <NavLink to="/signup">Signup</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
