import React, { useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Signup({setUser }) {
  let confirms_password = useRef()
  const nav = useNavigate()
  const [confirmer, setConfirmer] = useState();
  const [newUserInfo, setNewUserInfo] = useState({});
  function handleChange(e) {
    let name = e.target.name
    let value = e.target.value
    setNewUserInfo(() => ({
      ...newUserInfo,
      [name]: value,
    }))
  }
  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:9292/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUserInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.message == 'created') {
          setUser(() => data.user)
          nav('/userprofile')
        }
      })
      .catch((err) => console.log(err))
    console.log(newUserInfo)
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
            onChange={(e) => {
              handleChange(e);
              setConfirmer(
                () => e.target.value === confirms_password.current.value && e.target.value !== ""
              );
            }}
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <label>Confirm Password</label>
          <input
            onChange={(e) => {
              setConfirmer(() => e.target.value !== "");
            }}
            type="password"
            ref={confirms_password}
            placeholder="Password"
            required
          />
          {confirmer ? <button>Sign up</button> : <p>Password not the same</p>}
          <p>Already Have An Account?</p>
          <NavLink to="/login" style={{ color: 'red' }}>
            Login Here!
          </NavLink>
        </div>
      </form>
    </div>
  )
}

export default Signup
