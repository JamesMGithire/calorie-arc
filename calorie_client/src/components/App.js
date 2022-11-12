import { Route, Routes } from "react-router-dom";
import React,{useEffect, useState} from "react";
import "../CSS/SignUp.css";
import '../CSS/UserProfile/Index.css';
import HomePage from "./HomePage";
import Login from "./Login";
import NavBar from "./NavBar";
import SignUp from "./SignUp"
import MealPlan from './MealPlan'
import ContactUs from "./ContactUs";
import UserProfile from "./UserProfile/Index";
import CuisinePage from "./CuisinePage";
import Footer from "./Footer"
import UserDetails from "./UserDetails";
import LandingPage from "./LandingPage/LandingPage";

function App() {
  const[data,setData]=useState([])
  const[newUser, setNewUser]=useState(false)
  const[user, setUser]=useState()
  const[loggedIn,setLoggedIn] = useState(false)
  useEffect(()=>{
    fetch('http://localhost:9292/users')
    .then(res=>res.json())
    .then((data)=>{
      console.log(data)
      setData(data)
      setUser(data[0])
    })
  },[newUser])

  function handleNewUser(){
    setNewUser(newUser=>!newUser)
  }

  return (
    <div className="App">
      <NavBar loggedIn={loggedIn}/>
      <Routes>
        <Route  path="/login" element={<Login data={data} info={user} />}/>
        <Route path="/signup" element={<SignUp handleNewUser={handleNewUser} setUser={setUser}/>}/>
        <Route path="/userprofile" element={<UserProfile user={user} setUser={setUser}/>}/>
        {/* <Route path="/userprofile/cuisines" element={<CuisinePage/>}/> */}
        <Route path="/meals" element={<CuisinePage user={user}/>}/>
        <Route path="/contact_us" element={<ContactUs/>}/>
        <Route path="/user_details" element={<UserDetails user={user}/>}/>
        <Route path="/my_meals" element={<LandingPage/>}/>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;