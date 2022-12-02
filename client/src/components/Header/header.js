import React from 'react';
import { Link } from 'react-router-dom';
import "../Dropdown/HeaderDropdown.css";

export default function Header() {
  return (
    <header>
      <section className='w-screen bg-purple-600 flex flex-row h-33 justify-between content-center'>
        <h1 className="text-white text-6xl p-6">
          MENTHOL
        </h1>

        <div className="dropdown relative inline-block all-btns m-4">
          <button className="dropbtn"><svg className="text-white h-20 w-20 flex flex-row justify-between content-center"
            xmlns=" http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg></button>
          <div className="dropdown-content hidden absolute z-1 hover:block border-3 border-black bg-purple-600 mr-8 h-fit">

            <Link className="all-btns" to="login">Login</Link>
            <Link className="all-btns" to="/add-items">Add Items</Link>
            <Link className="all-btns" to="/visualize">Visualize</Link>
            <Link className="all-btns" to="/budget">Budget</Link>
            <Link className="all-btns" to="/">Home</Link>

          </div>
        </div>
      </section>
    </header>
  )
}