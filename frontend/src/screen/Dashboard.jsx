import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [user, setUser] = useState([])


    useEffect(() => {

        const fetchUser = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_REACT_KEY_URL}/user/users`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                const result = await response.json();
                setUser(result.users);
            } catch (error) {
                console.log(error)
            }
        }

        if (token) {
            fetchUser();
        } else {
            navigate('/login')
        }

    }, [token, navigate])


    console.log('Hey Users', user)

    return (
        <div className='flex justify-center w-full'>
            <div className='w-4xl'>
                <h1 className='font-bold text-2xl'>Dashboard</h1>
                <table className='w-full border border-collapse text-left'>
                    <thead>
                        <tr className='border'>
                            <th className='px-2 py-1 border-l-2'>Name</th>
                            <th className='px-2 py-1 border-l-2'>Email</th>
                            <th className='px-2 py-1 border-l-2'>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(user) && user.map((val, index) => (
                            <tr key={index} className='border'>
                                <td className='px-2 py-1 border-l-2'>{val.name}</td>
                                <td className='px-2 py-1 border-l-2'>{val.email}</td>
                                <td className='px-2 py-1 border-l-2'>{val.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
