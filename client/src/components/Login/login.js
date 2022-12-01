import React from "react";
import { useState } from "react";
import { useFinanceContext } from "../../utils/stateManagment/GlobalState";
// import { ADD_USER } from '../../utils/stateManagment/reducer'

export default function Login(){
  const [inputUserName, setUserName] = useState('');
  const [inputEmail, setEmail] = useState('');
  const [inputPassword, setPassword] = useState('');
  const [state, dispatch] = useFinanceContext();

  function handleUsernameChange(e){
    setUserName(e.target.value);
  }
  function handleEmailChange(e){   
    setEmail(e.target.value);
  }
  function handlePasswordChange(e){
    setPassword(e.target.value);   
  }
  function handleFormSubmit(e){
    e.preventDefault();
    dispatch({
      // type: ADD_USER,
      // payload: 
      // {
      //   inputUserName: state.inputUserName,
      //   inputEmail: state.inputEmail,
      //   inputPassword: state.inputPassword
      // }
    })
  }
  return(
    <form onSubmit={handleFormSubmit}>
      <h2>Login</h2>
      <input className="border" value={inputUserName} onChange={handleUsernameChange} placeholder='Username'></input>
      <input className="border" value={inputEmail} onChange={handleEmailChange} placeholder='Email'></input>
      <input className="border" value={inputPassword} onChange={handlePasswordChange} placeholder='Password'></input>
      <button className="border" onClick={handleFormSubmit} type="submit">Login</button>
      <p>Don't have an account?</p>
    </form>
  )
}
