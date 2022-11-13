import React from "react"
function UserMeals({userMeals}){
    return(
        <div>
            <h1>
            Selected Meals
            </h1>
            {userMeals.map(meal=><div key={meal.id}>{`${meal}`}</div>)}
        </div>
    )
}
export default UserMeals;