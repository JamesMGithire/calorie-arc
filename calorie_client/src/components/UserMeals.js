import React from "react"
function UserMeals({meals}){
    return(
        <div>
            <h1>
            Selected Meals
            </h1>
            {meals.map(meal=><div key={meal.id}>{`${meal}`}</div>)}
        </div>
    )
}
export default UserMeals;