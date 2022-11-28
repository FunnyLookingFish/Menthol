import { Link } from 'react-router-dom';

export default function Footer(){

    return (
        <footer className='flex h-24 w-full justify-center'>
            <Link to='/aboutUs'>About Us</Link>
        </footer>
    )
};