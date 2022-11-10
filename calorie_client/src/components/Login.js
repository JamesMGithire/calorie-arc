import React from "react";
import { NavLink } from "react-router-dom";

function Login({data}) {
  function handleChange(e){
    console.log(data)
    console.log(e.target.value)
  }
  return (
    <div className="background">
      <div class="main-form">
        <h1>Calorie-arc login</h1>
        <form action="#" method="POST">
            <div class="text-field">
                <input 
                type="text"
                required="required"
                onChange={handleChange}
                />
                <span></span>
                <label>Name</label>
            </div>

            <div class="text-field">
                <input
                type="password"
                required="required"
                onChange={handleChange}
                />
                <span></span>
                <label>Password</label>
            </div>

            <div class="pass">
                Forgot Password?
            </div>
            <input
            type="Submit"
            value="Login"
            />
            <div class="signup_link">
                Not a member?
                <NavLink to='/signup'>
                Signup</NavLink>
            </div>
        </form>
    </div>
    </div>
  );
}

export default Login;
