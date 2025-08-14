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
                setUser(result);
                if (token) {
                    fetchUser();
                } else {
                    navigate('/login')
                }
            } catch (error) {
                console.log(error)
            }
        }
    }, [token, navigate])

    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}
