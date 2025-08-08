import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between bg-gray-200 h-10 px-2'>
      <h1>Logo</h1>
      {/* <div className='flex items-center'>
          <li className='px-6 py-1 list-none cursor-pointer'>Home</li>
          <li className='px-6 py-1 list-none cursor-pointer'>About</li>
          <li className='px-6 py-1 list-none cursor-pointer'>Contect</li>
        </div> */}
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
    </div>
  )
}
