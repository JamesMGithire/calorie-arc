import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

function Signup({handleNewUser}) {
  let confirms_password = useRef();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });
  const [confirmer, setConfirmer] = useState();

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setUser(()=>({
      ...user,
      [name]: value
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch(err=>console.log(err));
    handleNewUser()
  }
  return (
    <div className="sign_up">
      <form onSubmit={handleSubmit} className="sign_up_form">
        <div className="user_names">
          <label>First Name</label>
          <input
            onChange={handleChange}
            type="text"
            placeholder="enter first name"
            name="first_name"
            required
          />
          <label>Last Name</label>
          <input
            onChange={handleChange}
            type="text"
            placeholder="enter last name"
            name="last_name"
            required
          />
        </div>
        <div className="user_info">
          <label>User Name</label>
          <input
            onChange={handleChange}
            type="text"
            placeholder="username"
            name="username"
            required
          />
          <label>Email</label>
          <input
            onChange={handleChange}
            type="email"
            placeholder="enter your email"
            name="email"
            required
          />
          <br />
          <label>Password</label>
          <input
            onChange={(e)=>{
              handleChange(e);  
              setConfirmer(()=>e.target.value==confirms_password.current.value);
            }}
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <label>Confirm Password</label>
          <input
            onChange={(e)=>{setConfirmer(()=>e.target.value==user.password)}}
            type="password"
            ref={confirms_password}
            placeholder="Password"
            required
          />
           <button>Sign up</button>
           <p>Already Have An Account?</p>
      <NavLink to="/login">Login</NavLink>
        </div>
        <button>Sign up</button>
      </form>
    </div>
  );
}

export default Signup;
