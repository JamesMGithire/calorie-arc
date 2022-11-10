import React, { useState }from 'react'

function UserDetails() {

  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("");
  const [height, setHeight] = useState("");
  const [allergy, setAllergy] = useState("");


  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch ("/users/:id", {
        method: "POST",
        body: JSON.stringify({
          gender: gender,
          age: age,
          weight: weight,
          activity: activity,
          height: height,
          allergy: allergy,
        }),
      });

      let resJson = await res.json();
      if(resJson.status === 200) {
        setWeight("");
        setAge("");
        setGender("");
        setActivity("");
        setHeight("");
        setAllergy("");
      } else {
        console.log("some error occured")
      }
    } catch (err) {
      console.log(err)
    }
  };


  return (
    <div className="background">
      <div className="main-form">
        <h1>Enter your info to find diet</h1>

        <form onSubmit={handleSubmit}>
            <div class="text-field">
                <input 
                type="text"
                required="required"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                />
                <span></span>
                <label>Gender</label>
            </div>

            <div class="text-field">
                <input
                type="number"
                required="required"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                />
                <span></span>
                <label>Age</label>
            </div>

            <div class="text-field">
                <input
                type="number"
                required="required"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                />
                <span></span>
                <label>Weight</label>
            </div>

            <div class="text-field">
                <input
                type="text"
                required="required"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                />
                <span></span>
                <label>Activity</label>
            </div>

            <div class="text-field">
                <input
                type="number"
                required="required"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                />
                <span></span>
                <label>Height</label>
            </div>

            <div class="text-field">
                <input
                type="text"
                required="required"
                value={allergy}
                onChange={(e) => setAllergy(e.target.value)}
                />
                <span></span>
                <label>Allergy</label>
            </div>

            <input type="Submit" value="Submit"/>
          
        </form>
    </div>
    </div>
  )
}

export default UserDetails