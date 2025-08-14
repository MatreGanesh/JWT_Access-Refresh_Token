import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {

  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null); // updates instantly
    navigate('/login');
  };

  return (
    <div className={`${token ? 'bg-gray-200 text-black' : 'bg-black text-white'} flex items-center justify-between h-10 px-2`}>
      <h1 className='text-xl font-semibold uppercase italic first-letter:text-red-500'>Logo</h1>
      {
        token ? (
          <div className='flex items-center'>
            <li className='px-6 py-1 list-none cursor-pointer'>Home</li>
            <li className='px-6 py-1 list-none cursor-pointer'>About</li>
            <li className='px-6 py-1 list-none cursor-pointer'>Contect</li>
            <li onClick={handleLogout}>
              <button className='px-5 py-0.5 font-semibold border rounded-sm cursor-pointer'>
                Logout
              </button>
            </li>
          </div>
        ) : (
          <div className='space-x-2'>
            <Link to={'/login'}>
              <button className='px-5 py-0.5 font-semibold border rounded-sm cursor-pointer'>
                Login
              </button>
            </Link>
            <Link to={'/register'}>
              <button className='px-5 py-0.5 font-semibold border rounded-sm cursor-pointer'>
                Signup
              </button>
            </Link>
          </div>
        )}
    </div>
  )
}
