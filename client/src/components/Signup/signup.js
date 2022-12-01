import {useState} from 'react';
import { useFinanceContext } from '../../utils/stateManagment/GlobalState';
import Auth from '../../utils/Auth/auth';
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";


export default function Signup(){
  const [inputUserName, setUserName] = useState('');
  const [inputEmail, setEmail] = useState('');
  const [inputPassword, setPassword] = useState('');
  const [inputBudget, setBudget] = useState('');
  const [state, dispatch] = useFinanceContext();
  const [addUser, {error}] = useMutation(ADD_USER);
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
  function handleBudgetChange(e){
    setBudget(e.target.value);
  }
  function handleUsernameChange(e){
    setUserName(e.target.value);
  }
  const handleFormSubmit= async(e)=>{
    e.preventDefault();
    try {
      const mutationResponse = await addUser({
        variables: { username: state.username, email: state.email, password: state.password, budget: state.budget },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  }
  return(
    <form onSubmit={handleFormSubmit}>
      <h2>Sign Up</h2>
      <input value={inputUserName} onChange={handleUsernameChange} placeholder='Username'></input>
      <input value={inputEmail} onChange={handleEmailChange} placeholder='Email'></input>
      <input value={inputPassword} onChange={handlePasswordChange} placeholder='Password'></input>
      <input value={inputBudget} onChange={handleBudgetChange} placeholder='Enter your budget'></input>
      <button onClick={changeAuthMode}type="submit">Login</button>
      <p>Already have an account?</p>
    </form>
  )
}