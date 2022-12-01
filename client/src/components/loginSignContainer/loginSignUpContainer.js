import Login from "../Login/login";
import Signup from "../Signup/signup";
import {useState} from 'react'

export default function LoginSignUpContainer(state){
    const [isSigningUp, setIsSigningUp] = useState(false);
    const toggleIsSigningUp = () => {
        setIsSigningUp(current => !current)
    }
    return (
    <div className="my-auto flex flex-col h-screen border border-black-500 max-w-sm p-20">
    {isSigningUp
    ? <Signup/> 
    : <Login/>}
    {isSigningUp
    ? <button className=" underline hover:text-purple-400" onClick={toggleIsSigningUp}>Login</button>
    : <button className="underline hover:text-purple-400" onClick={toggleIsSigningUp}>Sign Up</button>}
    </div>
    )
}
