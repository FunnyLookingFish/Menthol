import { Link } from 'react-router-dom';

export default function Footer(){

    return (
        <footer className=' bg-purple-600 flex h-38 w-full justify-center flex-center align-center absolute inset-x-0 bottom-0'>
            <div className="text-white border-2 max-h-fit max-w-fit bg-teal-500 p-8">
            <Link to='/aboutUs'>About Us</Link>
            </div>
        </footer>
    )
};