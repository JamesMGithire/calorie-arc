import React from "react";

function UserProfile() {
  return (
    <div className="user-profile">
      <div className="profile-picture">
        <img
          src="https://images.unsplash.com/photo-1550807014-1236e91b92d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGZvb2QlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
        />
        <div className="name-dates">
          <button className="name">Profile</button>
          {/* <button className="dates">dd/mm/yyyy</button> */}
        </div>
      </div>
      <div className="choices">
        <div className="meal">
          <div className="card">
            <h5>Breakfast</h5>
            <div className="pra">
              <p>Calories.int</p>
            </div>
          </div>
        </div>
        <div className="meal">
          <div className="card">
            <h5>Lunch</h5>
            <div className="pra">
              <p>Calories.int</p>
            </div>
          </div>
        </div>
        <div className="meal">
          <div className="card">
            <h5>Dinner</h5>
            <div className="pra">
              <p>Calories.int</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
