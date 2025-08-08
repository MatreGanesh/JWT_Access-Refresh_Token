import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/auth/Login/Login';
import SignUp from './pages/auth/SignIn/SignUp';
import Navbar from './pages/header/Navbar';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes >
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<SignUp/>}/>
      </Routes>
    </Router>
  )
}
