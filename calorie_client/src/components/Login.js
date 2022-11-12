import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
  function Login() {
  const nav = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // let handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     let res = await fetch ("http://localhost:9292/validate",  {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({
  //         username: name,
  //         password: password
  //     })
  //   });
  // };
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
        <form onSubmit={handleSubmit} >
            <div class="text-field">
                <input 
                type="text"
                required="required"
                onChange={(e) => {setName(()=>e.target.value)}}
                />
                <span></span>
                <label>Username</label>
            </div>

            <div class="text-field">
                <input
                type="password"
                required="required"
                onChange={(e) => {setPassword(()=>e.target.value)}}
                />
                <span></span>
                <label>Password</label>
            </div>

            <div class="pass">
                Forgot Password?
            </div>
            {/* <input
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
            Not a member? */}
            <NavLink to="/signup">Signup</NavLink>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
}

export default Login;
