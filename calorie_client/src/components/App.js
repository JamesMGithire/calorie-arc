import { Route, Routes } from "react-router-dom";
import React,{ useState} from "react";
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
  let meals = [];
  if(loggedIn){
    fetch(`http://localhost:9292/choices/${user.id}`)
    .then(r=>r.json())
    .then(result=>{
      console.log(result);
      result.map(meal=>meals.push(meal.meal));
    })
  }
  return (
    <div className="App">
      <NavBar loggedIn={loggedIn}/>
      <Routes>
        <Route  path="/login" element={<Login setLoggedIn={setLoggedIn} setUser={setUser}/>}/>
        <Route path="/signup" element={<SignUp setUser={setUser} setLoggedIn={setLoggedIn}/>}/>
        <Route path="/userprofile" element={<UserProfile user={user} setUser={setUser} setLoggedIn={setLoggedIn}/>}/>
        <Route path="/meals" element={<CuisinePage user={user} loggedIn={loggedIn}/>}/>
        <Route path="/contact_us" element={<ContactUs/>}/>
        <Route path="/user_details" element={<UserDetails user={user} setUser={setUser}/>}/>
        <Route path="/meal_plan" element={<UserMeals meals={meals}/>}/>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;