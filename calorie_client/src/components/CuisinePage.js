import React from "react";
import Search from "./Search";
function CuisinePage({cuisine, search,setSearch}) {

console.log(search)
const filteredCusinie=cuisine.filter((everyCus)=>everyCus.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="cuisine_page">
      <h1 id="h1">Available Meals</h1>
      <br></br>
      <Search setSearch={setSearch}/>
      <br></br>
      <div className="cuisine_header">
        <div>
          <h3>Images</h3>
        </div>
        <div>
          <h3> Name</h3>
        </div>
        <div>
          <h3> Category</h3>
        </div>
        <div>
          <h3>Calories</h3>
        </div>
        <div>
          <h3>Choose Meal</h3>
        </div>
      </div>
      <hr></hr>
      {filteredCusinie.map((cus) => (
        <div className="cuisine_card">
          <div className="tr">
            <img src={cus.img_url} alt="Oops" />
          </div>
          <div className="tr">
            <h4>{cus.name}</h4>
          </div>
          <div className="tr">
            <h4>{cus.category}</h4>
          </div>
          <div className="tr">
            <h4>{cus.calories}</h4>
          </div>
          <div className="tr">
            <button
              style={{
                backgroundColor: "red",
                color: "white",
                width: "50px",
                height: "40px",
                borderRadius: "8px",
                fontSize: "24px",
                cursor:"pointer"
              }}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CuisinePage;
