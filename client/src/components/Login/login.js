import React from "react";
import { useState } from "react";
import { useFinanceContext } from "../../utils/stateManagment/GlobalState";

export default function Login(){
  const [inputEmail, setEmail] = useState();
  const [inputPassword, setPassword] = useState();
  const [state, dispatch] = useFinanceContext();

  function handleInputChange(e){
    setEmail(e.target.value);
    setPassword(e.target.value);
  }
  function handleFormSubmit(e){
    e.preventDefault();
    dispatch({

    })
  }
  return(
    <form onSubmit={handleFormSubmit}>
      <h2>Login</h2>
      <input value={inputEmail} onChange={handleInputChange} placeholder='Email'></input>
      <input value={inputPassword} onChange={handleInputChange} placeholder='Password'></input>
      <button type="submit">Login</button>
    </form>
  )

}
