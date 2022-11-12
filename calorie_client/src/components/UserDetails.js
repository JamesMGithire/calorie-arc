import React, { useState }from 'react'
import { useNavigate } from 'react-router-dom';

function UserDetails({user, setUser}) {
  const nav = useNavigate();
  let userInfo={}
  function handleChange(e){
    userInfo={
      ...userInfo,
      [e.target.name]: e.target.value
    }
  }


  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      fetch (`http://localhost:9292/users/${user.id}`, {
        method: "PATCH",
        body: JSON.stringify(userInfo),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(r=>r.json())
      .then(result=>{
        if(result.message === "updated"){
          setUser(()=>result.user)
          nav("/userprofile")
          
        }
      })
    } catch (err) {
      console.log(err)
    }
  };


  return (
    <div className="background">
      <div className="main-form">
        <h1>Enter your info to find diet</h1>

        <form onSubmit={handleSubmit}>
            <div className="text-field">
                <input 
                type="text"
                required="required"
                defaultValue=""
                name="gender"
                onChange={handleChange}
                />
                <span></span>
                <label>Gender</label>
            </div>

            <div className="text-field">
                <input
                type="number"
                required="required"
                defaultValue=""
                name="age"
                onChange={handleChange}
                />
                <span></span>
                <label>Age</label>
            </div>

            <div className="text-field">
                <input
                type="number"
                defaultValue=""
                required="required"
                name="weight"
                onChange={handleChange}
                />
                <span></span>
                <label>Weight</label>
            </div>

            <div className="text-field">
                <input
                type="text"
                defaultValue=""
                name="activity"
                required="required"
                onChange={handleChange}
                />
                <span></span>
                <label>Activity</label>
            </div>

            <div className="text-field">
                <input
                type="number"
                defaultValue=""
                required="required"
                name="height"
                onChange={handleChange}
                />
                <span></span>
                <label>Height</label>
            </div>

            <div className="text-field">
                <input
                type="text"
                defaultValue=""
                required="required"
                name="allergies"
                onChange={handleChange}
                />
                <span></span>
                <label>Allergy</label>
            </div>

            <input type="Submit" defaultValue="Submit"/>
          
        </form>
    </div>
    </div>
  )
}

export default UserDetails