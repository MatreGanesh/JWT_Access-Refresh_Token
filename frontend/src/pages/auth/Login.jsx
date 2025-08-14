import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${import.meta.env.VITE_API_REACT_KEY_URL}/auth/login`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            } else {
                navigate('/dashboard')
            }

            const data = await response.json();
            console.log(data.token);

            //Save the token to localstorage
            const token = data.token;
            localStorage.setItem('token', token)
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setFormData({
                email: '', password: ''
            })
        }

        console.log('email :', formData.email)
        console.log('password :', formData.password)
    }



    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 text-gray-700 bg-white rounded-lg shadow-gray-300 shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInput}
                            placeholder='Enter Email'
                            className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-800"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInput}
                            placeholder='Enter Password'
                            className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-800"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-200"
                    >
                        Login
                    </button>

                    <div className="text-center pt-3">
                        <p>
                            Don't have an account ?
                            <Link to={"/register"} className="font-bold underline">Register here</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>

    )
}
