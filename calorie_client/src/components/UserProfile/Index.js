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
        <div className="meal-card">
        <button>Breakfast</button>
        <div className="pra">
              <p>Calories.int</p>
            </div>
          <img src="https://w0.peakpx.com/wallpaper/6/891/HD-wallpaper-food-black-background-background-black-close-up-food-high-definition-ultra.jpg" alt=""/>
        </div>
        <div className="meal-card">
        <button>Lunch</button>
        <div className="pra">
              <p>Calories.int</p>
            </div>
        <img src="https://images.unsplash.com/photo-1655350210459-7f102cb1b22e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NDI3MzYxN3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=420&q=60" alt=""/>
        </div>
        <div className="meal-card">
        <button>Dinner</button>
        <div className="pra">
              <p>Calories.int</p>
            </div>
        <img src="https://images.unsplash.com/photo-1508338712271-40539c947a8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2QlMjBibGFja3xlbnwwfHwwfHw%3D&w=1000&q=80" alt=""/>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
