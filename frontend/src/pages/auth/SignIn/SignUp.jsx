import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
    return (
        <div class="flex items-center justify-center min-h-screen bg-gray-100">
            <div class="w-full max-w-md p-8 text-gray-700 bg-white rounded-lg shadow-gray-300 shadow-md">
                <h2 class="text-2xl font-bold text-center mb-6">Register</h2>
                <form action="#" method="POST">
                    <div class="mb-4">
                        <input
                            type="email"
                            name="email"
                            placeholder='Enter Email'
                            class="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-800"
                            required
                        />
                    </div>

                    <div class="mb-4">
                        <input
                            type="text"
                            name="name"
                            placeholder='Enter Name'
                            class="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-800"
                            required
                        />
                    </div>

                    <div class="mb-4">
                        <input
                            type="password"
                            name="password"
                            placeholder='Enter Password'
                            class="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-800"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        class="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-200"
                    >
                        Login
                    </button>

                   <div className="text-center pt-3">
                        <p>
                            Have already an account?{' '}
                            <Link to="/login" className="font-bold underline">
                                Login here
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
