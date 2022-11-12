import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Login({ data }) {
  const nav = useNavigate();
  const [info, setInfo] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInfo({
      ...info,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    data.map((data) => {
      if (data.username === info.username && data.password === info.password) {
        return nav("/userprofile");
      }
    });
  };
  return (
    <div className="background">
      <div class="main-form">
        <h1>Calorie-arc login</h1>
        <form onSubmit={handleSubmit}>
          <div class="text-field">
            <input
              type="text"
              required="required"
              name="username"
              onChange={handleChange}
            />
            <span></span>
            <label>Username</label>
          </div>

          <div class="text-field">
            <input
              type="password"
              required="required"
              name="password"
              onChange={handleChange}
            />
            <span></span>
            <label>Password</label>
          </div>

          <div class="pass">Forgot Password?</div>
          <input type="Submit" value="Login" />
          <div class="signup_link">
            Not a member?
            <NavLink to="/signup">Signup</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
