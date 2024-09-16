import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.get('http://your-api-url/login', {
                params: {
                    username: formData.username,
                    password: formData.password
                }
            });

            if (response.status === 200) {
                // Handle successful login
                // You might want to store the user data or token in localStorage or context
                navigate('/dashboard'); // Navigate to dashboard or home page
            }
        } catch (error) {
            setError(error.response?.data?.message || 'An error occurred during login');
        }
    };

    return (
        <div className="z-10 w-[420px] flex flex-col gap-5 relative sm:top-0 top-20 items-center">
            <div className="w-[320px] ss:w-full flex flex-col gap-2">
                <h1 className="text-3xl font-semibold">Welcome Back 👋</h1>
                <p className="">Today is a new day. It's your day. You shape it.
                    Sign in to start managing your projects.</p>
            </div>

            <form className="space-y-6 relative w-[320px] ss:w-full" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Write your username"
                        className="relative w-full px-3 py-2 border border-transparent focus:border-transparent rounded-xl text-sm h-12 bg-input_field drop-shadow-md"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        className="w-full px-3 py-2 border border-transparent focus:border-transparent rounded-xl text-sm h-12 bg-input_field drop-shadow-md"
                        required
                    />
                </div>
                <div className="text-right">
                    <Link className="text-sm text-blue-600 hover:underline" to="/forgot-password">Forgot Password?</Link>
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <div className="flex flex-col">
                    <button
                        type="submit"
                        className="w-full py-2 h-12 px-4 border border-transparent rounded-xl drop-shadow-md text-sm font-medium text-white bg-button hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                        Sign in
                    </button>
                    <div className="text-right mt-2">
                        <Link className="text-sm text-blue-600 hover:underline" to="/signup">Don't have an account?</Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;