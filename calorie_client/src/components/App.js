import { Route, Routes } from "react-router-dom";
import "../CSS/SignUp.css";
import HomePage from "./HomePage";
import Login from "./Login";
import NavBar from "./NavBar";
import SignUp from "./SignUp"
import MealPlan from './MealPlan'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route  path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/meal_plan" element={<MealPlan/>}/>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
