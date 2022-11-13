import React, { useEffect, useState } from "react";

function CuisinePage({user, loggedIn, meals}) {
  
  function addChoices(cuisineId){
    fetch("http://localhost:9292/choices",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({meal_id: cuisineId, user_id: user.id})
    })
    .then(r=>r.json())
    .then(re=>console.log(re))
  }
  return (
    <div className="cuisine_page">
        <h1>AVAILABLE MEALS</h1>
        <div className="cuisine_header">
            <div><h3>Images</h3></div>
            <div><h3> Name</h3></div>
            <div><h3> Category</h3></div>
            <div><h3>Calories</h3></div>
            <div><h3>Choose Meal</h3></div>
        </div>
           {meals.map((cus)=>(
            <div key={cus.id} className="cuisine_card">
                <div className="tr"><img src={cus.img_url}/></div>
                <div className="tr"><h4>{cus.name}</h4></div>
                <div className="tr"><h4>{cus.category}</h4></div>
                <div className="tr"><h4>{cus.calories}</h4></div>
              {loggedIn && <div className="tr"><button onClick={()=>addChoices(cus.id)} style={{backgroundColor:"red", color:"white", width:"50px", height:"40px",borderRadius:"8px", fontSize:"24px"}}>+</button></div>}  
            </div>
           ))
           }

    </div>
  );
}

export default CuisinePage;
