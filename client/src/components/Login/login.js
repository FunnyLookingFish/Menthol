import React from "react";
import { useState } from "react";
import { useFinanceContext } from "../../utils/stateManagment/GlobalState";
import Auth from '../../utils/Auth/auth';
// import { ADD_USER } from '../../utils/stateManagment/reducer'
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutations";

export default function Login() {
  const [inputUserName, setUserName] = useState('');
  const [inputEmail, setEmail] = useState('');
  const [inputPassword, setPassword] = useState('');
  const [state, dispatch] = useFinanceContext();
  const [login, { error }] = useMutation(LOGIN)

  function handleUsernameChange(e) {
    setUserName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: state.email, password: state.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="bg-teal-500" >
      <form onSubmit={handleFormSubmit}>
        <h2>Login</h2>
        <input className="border" value={inputUserName} onChange={handleUsernameChange} placeholder='Username'></input>
        <input className="border" value={inputEmail} onChange={handleEmailChange} placeholder='Email'></input>
        <input className="border" value={inputPassword} onChange={handlePasswordChange} placeholder='Password'></input>
        <button className="border" onClick={handleFormSubmit} type="submit">Login</button>
        <p>Don't have an account?</p>
      </form>
    </div>
  )
}
