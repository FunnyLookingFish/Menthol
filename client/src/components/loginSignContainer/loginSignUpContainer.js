import Login from "../Login/login";
import Signup from "../Signup/signup";
import { useState } from 'react'

export default function LoginSignUpContainer(state) {
    const [isSigningUp, setIsSigningUp] = useState(false);
    const toggleIsSigningUp = () => {
        setIsSigningUp(current => !current)
    }
    return (
        <div className="block border border-black-500 bg-teal-500 max-w-sm p-6 text-white">
            {isSigningUp
                ? <Signup />
                : <Login />}
            {isSigningUp
                ? <button className="bg-teal-400" onClick={toggleIsSigningUp}>Login</button>
                : <button className='bg-teal-400' onClick={toggleIsSigningUp}>Sign Up</button>}
        </div>
    )
}
