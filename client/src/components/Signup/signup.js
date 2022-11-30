import {useState} from 'react';
import { useFinanceContext } from '../../utils/stateManagment/GlobalState';

export default function Signup(){
    const [inputEmail, setEmail] = useState('');
  const [inputPassword, setPassword] = useState('');
  const [state, dispatch] = useFinanceContext();

  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }


  function handlePasswordChange(e){
    setPassword(e.target.value);
  }
  function handleEmailChange(e){
    setEmail(e.target.value);

  }
  function handleFormSubmit(e){
    e.preventDefault();
    dispatch({

    })
  }
  return(
    <form onSubmit={handleFormSubmit}>
      <h2>Sign Up</h2>
      <input value={inputEmail} onChange={handleEmailChange} placeholder='Email'></input>
      <input value={inputPassword} onChange={handlePasswordChange} placeholder='Password'></input>
      <button onClick={changeAuthMode}type="submit">Login</button>
      <p>Already have an account?</p>
    </form>
  )
}