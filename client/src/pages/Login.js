import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer'
import Login from '../components/Login/login';
import LoginSignUpContainer from '../components/loginSignContainer/loginSignUpContainer';
import Signup from '../components/Signup/signup';
import auth from '../utils/Auth/auth';

export default function loginPage() {
    return (<div>
        <Header />
        <div className='bg-indigo-300'>
            <div className='flex flex-center justify-center align-center bg-indigo-300 w-full max-h-screen p-60 '>
                <LoginSignUpContainer />
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
    )
}