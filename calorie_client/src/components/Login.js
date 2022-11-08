import React,{useEffect, useState} from "react";

function Login() {
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

  function handleNewUse(){
    setNewUser(newUser=>!newUser)
  }

  return (
    <div>
      <form>
        <input type="text" placeholder="enter username/email"/>
        <input type="password" placeholder="password"/><br/>
        <button>Login</button>
      </form>
      
    </div>
  );
}

export default Login;
