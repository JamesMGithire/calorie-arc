import { Route, Routes } from "react-router-dom";
import React,{ useState, useEffect} from "react";
import "../CSS/SignUp.css";
import "../CSS/selectedMeal.css"
import '../CSS/UserProfile/Index.css';
import Login from "./Login";
import NavBar from "./NavBar";
import SignUp from "./SignUp"
import UserMeals from './UserMeals'
import ContactUs from "./ContactUs";
import UserProfile from "./UserProfile/Index";
import CuisinePage from "./CuisinePage";
import Footer from "./Footer"
import UserDetails from "./UserDetails";
import LandingPage from "./LandingPage/LandingPage";

function App() {
  const[newUser, setNewUser]=useState(false)
  const[user, setUser]=useState()
  const[loggedIn,setLoggedIn] = useState(false)
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/meals")
    .then(res=>res.json())
    .then((data)=>{
      setMeals(data)
    })
  },[]);
  const breakfasts= meals.filter(meal=>meal.category==="Breakfast");
  const lunches = meals.filter(meal=>meal.category==="Lunch");
  const dinners= meals.filter(meal=>meal.category==="Dinner");
  const dayMeals = {
    breakfast : (breakfasts[Math.floor((Math.random()*breakfasts.length))]),
    lunch : (lunches[Math.floor((Math.random()*lunches.length))]),
    dinner : (dinners[Math.floor((Math.random()*dinners.length))])
  }
  return (
    <div className="App">
      <NavBar loggedIn={loggedIn}/>
      <Routes>
        <Route path="/meals" element={<CuisinePage meals={meals} user={user} loggedIn={loggedIn}/>}/>
        { loggedIn ?
          <>
          <Route path="/userprofile" element={<UserProfile dayMeals={dayMeals} user={user} setUser={setUser} setLoggedIn={setLoggedIn}/>}/>
          <Route path="/user_details" element={<UserDetails user={user} setUser={setUser}/>}/>
          <Route path="/meal_plan" element={<UserMeals loggedIn={loggedIn} user={user}/>}/>
        </>:
        <>
        <Route  path="/login" element={<Login setLoggedIn={setLoggedIn} setUser={setUser}/>}/>
        <Route path="/signup" element={<SignUp setUser={setUser} setLoggedIn={setLoggedIn}/>}/>
        </>
        }
        <Route path="/contact_us" element={<ContactUs/>}/>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;