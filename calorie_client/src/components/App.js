import { Route, Routes } from "react-router-dom";
import React,{useEffect, useState} from "react";
import "../CSS/SignUp.css";
import HomePage from "./HomePage";
import Login from "./Login";
import NavBar from "./NavBar";
import SignUp from "./SignUp"
import MealPlan from './MealPlan'
import ContactUs from "./ContactUs";
import Footer from "./Footer"
import UserDetails from "./UserDetails";

function App() {
  const[data,setData]=useState([])
  const[newUser, setNewUser]=useState(false)

  useEffect(()=>{
    fetch('http://localhost:3000/users')
    .then(res=>res.json())
    .then((data)=>{
      console.log(data)
      setData(data)
    })
  },[])

  function handleNewUser(){
    setNewUser(newUser=>!newUser)
  }

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route  path="/login" element={<Login data={data} />}/>
        <Route path="/signup" element={<SignUp handleNewUser={handleNewUser}/>}/>
        <Route path="/meal_plan" element={<MealPlan/>}/>
        <Route path="/contact_us" element={<ContactUs/>}/>
        <Route path="/user_details" element={<UserDetails/>}/>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
        <Footer />
    </div>
  );
}

export default App;