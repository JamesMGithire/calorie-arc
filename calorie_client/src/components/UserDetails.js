import React from 'react'
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
        <h1>Enter your information</h1>

        <form onSubmit={handleSubmit}>
            <div className="text-field">
                <input
                type="number" min="12"
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
                type="number" min="66"
                defaultValue=""
                required="required"
                name="weight"
                onChange={handleChange}
                />
                <span></span>
                <label>Weight (lbs)</label>
            </div>

            <div className="text-field">
                <input
                type="number" min="60"
                defaultValue=""
                required="required"
                name="height"
                onChange={handleChange}
                />
                <span></span>
                <label>Height (cm)</label>
            </div>

            <div class="select-field">
                <label>Gender:</label>
              <select onChange={handleChange}>
                <option  name ="male" value ="male"> Male</option>
                <option  name ="female" value ="female">Female </option>
                <option  name="other" value ="others"> Others</option>               
              </select>
            </div>

            <div class="select-field">
              <label>Activity:</label>
              <select  onChange={handleChange}>
                <option name="moderate" value ="moderate"> Moderate: exercise 4-5 times/week</option>
                <option name="bmr" value ="bmr">Basal Metabolic Rate </option>
                <option name="light" value ="light"> Light: exercise 1-3 times /week</option>
                <option name="sedentary" value ="sedentary">Sedentary: little or no exercise </option>
                <option name ="very" value ="active"> Very Active: exercise 6-7 times /week</option>                
              </select>
            </div>

            <div class="select-field">
              <label>Allergy:</label>
              <select onChange={handleChange}>
                <option name="anaphylaxis" value ="anaphylaxis"> Anaphylaxis</option>
                <option name="milk" value ="milk-products">milk product allergy</option>
                <option name="eggs" value ="eggs"> Egg allergy</option>
                <option name="peanuts" value ="peanut">Peanut allergy </option>
                <option name="wheat" value ="wheat"> wheat allergies</option>                
              </select>
            </div>

            <input type="Submit" defaultValue="Submit"/>
          
        </form>
    </div>
    </div>
  )
}

export default UserDetails