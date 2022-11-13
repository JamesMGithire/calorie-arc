import React from "react";
import { useNavigate } from "react-router-dom";

function UserProfile({user,setUser, setLoggedIn, dayMeals}) {
  const nav = useNavigate();
  const {breakfast, lunch, dinner} = dayMeals;
  function handleDelete(){
    fetch(`http://localhost:9292/users/${user.id}`,{
      method: "DELETE"
    }).then(r=>r.json())
    .then(()=>{
      setUser(()=>({}));
      setLoggedIn(()=>false);
      nav("/signup");
    })
  }
  // console.log(user.username)
  return (
    <div className="user-profile">
      <div className="profile-picture">
        <img
          src="https://images.unsplash.com/photo-1550807014-1236e91b92d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGZvb2QlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
        />
        <div className="name-dates">
          <button className="name" onClick={()=>nav("/user_details")}>{user.username !=="" ? user.username : "Profile"} info...</button>
        </div>
      </div>
      <button className="delete-account" onClick={handleDelete}>DELETE PROFILE</button>
      <div className="choices">
        <div className="meal-card">
        <button>Breakfast</button>
        <div className="pra">
              <p>{breakfast.name}</p>
              <p>{breakfast.calories}</p>
            </div>
          <img src={breakfast.img_url} alt=""/>
        </div>
        <div className="meal-card">
        <button>Lunch</button>
        <div className="pra">
              <p>{lunch.name}</p>
              <p>{lunch.calories}</p>
            </div>
        <img src={lunch.img_url} alt=""/>
        </div>
        <div className="meal-card">
        <button>Dinner</button>
        <div className="pra">
              <p>{dinner.name}</p>
              <p>{dinner.calories}</p>
            </div>
        <img src={dinner.img_url} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
