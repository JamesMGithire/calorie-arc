import { Route, Routes } from "react-router-dom";
import React,{ useState, useEffect} from "react";
import "../CSS/SignUp.css";
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
  let userMeals = [];
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/meals")
    .then(res=>res.json())
    .then((data)=>{
        setMeals(data)
    })
  },[]);
  if(loggedIn){
    fetch(`http://localhost:9292/choices/${user.id}`)
    .then(r=>r.json())
    .then(result=>{
      result.map(meal=>userMeals.push(meal.meal));
    })
  }
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
        <Route  path="/login" element={<Login setLoggedIn={setLoggedIn} setUser={setUser}/>}/>
        <Route path="/signup" element={<SignUp setUser={setUser} setLoggedIn={setLoggedIn}/>}/>
        <Route path="/meals" element={<CuisinePage meals={meals} user={user} loggedIn={loggedIn}/>}/>
        { loggedIn &&
          <>
          <Route path="/userprofile" element={<UserProfile dayMeals={dayMeals} user={user} setUser={setUser} setLoggedIn={setLoggedIn}/>}/>
          <Route path="/user_details" element={<UserDetails user={user} setUser={setUser}/>}/>
        </>
        }
        <Route path="/contact_us" element={<ContactUs/>}/>
        <Route path="/meal_plan" element={<UserMeals userMeals={userMeals}/>}/>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;