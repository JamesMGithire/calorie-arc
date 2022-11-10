 import React from "react";
function Login({data}) {

  function handleChange(e){
    console.log(e.target.value)
  }
  function handleClick(){
  
  }
  return (
    <div className="login">
      <form className="form">
        <input onChange={handleChange} type="text" placeholder="enter username/email"/>
        <input onChange={handleChange} type="password" placeholder="password" /><br/>
        <button onClick={handleClick}>Login</button>
      </form>
      
    </div>
  );
}

export default Login;
