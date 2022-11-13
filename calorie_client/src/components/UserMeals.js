import React, { useEffect, useState } from "react";
function UserMeals({user, loggedIn}) {
  const [userMeals, setUserMeals] = useState([]);
  useEffect(()=>{
      if(loggedIn){
        fetch(`http://localhost:9292/choices/${user.id}`)
        .then(r=>r.json())
        .then(result=>{
          setUserMeals(()=>result.map(meal=>meal.meal));
        })
    }
    },[])
  
  const selectedMeals = userMeals.map((meal) => (
    <div className="selected_meal">
      <img src={meal.img_url} alt="Oops!" />
      <h3 style={{fontStyle:"italic"}}><span style={{color:"red"}}>Name:</span>{meal.name}</h3>
      <h3><span style={{color:"red"}}>Category:</span>{meal.category}</h3>
    </div>
  ));
  console.log(userMeals);
  return (
    <div className="selection_container">
      <h1 style={{color:"red"}}>Selected Meals</h1>
      <div className="selection_div">{selectedMeals}</div>
    </div>
  );
}
export default UserMeals;
