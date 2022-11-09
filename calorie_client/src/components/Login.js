import React from "react";
function Login({data}) {
  function handleChange(e){
    console.log(data)
    console.log(e.target.value)
  }
  return (
    <div>
      <form>
        <input onChange={handleChange} type="text" placeholder="enter username/email"/>
        <input onChange={handleChange} type="password" placeholder="password"/><br/>
        <button>Login</button>
      </form>
      
    </div>
  );
}

export default Login;
