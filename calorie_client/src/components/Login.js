import React, {useState }from "react";
import { NavLink } from "react-router-dom";

function Login() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch ("/users/:id",  {
        method: "POST",
        body: JSON.stringify({
          name: name,
          password: password,
      }),
    });

    let resJson  = await res.json();
    if(resJson.status === "success") {
      setName("");
      setPassword("");
    } else {
      console.log("Some error occured")
    }
  } catch (err) {
    console.log(err)
  }
};


  return (
    <div className="background">
      <div class="main-form">
        <h1>Calorie-arc login</h1>
        <form onSubmit={handleSubmit} >
            <div class="text-field">
                <input 
                type="text"
                required="required"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <span></span>
                <label>Name</label>
            </div>

            <div class="text-field">
                <input
                type="password"
                required="required"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <span></span>
                <label>Password</label>
            </div>

            <div class="pass">
                Forgot Password?
            </div>
            <input
            type="Submit"
            value="Login"
            />
            <div class="signup_link">
                Not a member?
                <NavLink to='/signup'>
                Signup</NavLink>
            </div>
        </form>
    </div>
    </div>
  );
}

export default Login;
