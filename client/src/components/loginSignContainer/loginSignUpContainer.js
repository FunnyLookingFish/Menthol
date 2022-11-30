import Login from "../Login/login";
import Signup from "../Signup/signup";
import {useState} from 'react'
export default function LoginSignUpContainer(state){
    const [isSigningUp, setIsSigningUp] = useState(false);
    const toggleIsSigningUp = () => {
        setIsSigningUp(current => !current)
    }
    return (
    <div className="">
    {isSigningUp
    ? <Signup/> 
    : <Login/>}
    {isSigningUp
    ? <button className="bg-blue-500" onClick={toggleIsSigningUp}>Login</button>
    : <button className='bg-blue' onClick={toggleIsSigningUp}>Sign Up</button>}
    </div>
    )
}
