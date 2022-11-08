import React,{useState} from "react"
import { json, NavLink} from "react-router-dom"

function Signup() {
    const[user, setUser]=useState({
        first_name: "",
        last_name: "",
        user_name: "",
        email:"",
        password:""
    })
    function handleChange(e){
        let name=e.target.name
        let value=e.target.value
        setUser({
            ...user, [name]:value
        })    
    }


    function handleSubmit(e){
        e.preventDefault()
        fetch("http://localhost:3000/users",{
            method: 'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
        <div className="sign_up">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label><input onChange={handleChange} type="text" placeholder="enter first name" name="first_name" required />
                    <label>Last Name</label><input onChange={handleChange} type="text" placeholder="enter last name"  name="last_name" required />
                </div>
                <div>
                    <label>User Name</label><input onChange={handleChange} type="text" placeholder="username" name="user_name" required />
                    <label>Email</label><input onChange={handleChange} type="email" placeholder="enter your email" name="email" required /><br />
                    <label>Password</label>
                    <label><small>8 Or More Characters</small></label>
                    <input onChange={handleChange} type="password" placeholder="Password" name="password" required />
                    <label>Confirm Password</label><input onChange={handleChange} type="Confirm password" name="confirm_password" placeholder="Password"  required />
                </div>
                <button
            
                >Sign up</button>
            </form>
            <p>Already Have An Account?</p><NavLink to='/login'>
                Login</NavLink>
        </div >
    )
}

export default Signup;