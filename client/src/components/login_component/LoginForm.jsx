import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <form className="space-y-6 relative w-[320px] ss:w-full">
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Username
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Write your username"
                    className="relative w-full px-3 py-2 border border-transparent focus:border-transparent rounded-xl text-sm h-12 bg-input_field drop-shadow-md"
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
                    placeholder="At least 8 characters"
                    className="w-full px-3 py-2 border border-transparent focus:border-transparent rounded-xl text-sm h-12 bg-input_field drop-shadow-md"
                />
            </div>
            <div className="text-right">
                <Link className="text-sm text-blue-600 hover:underline" to="/forgot-password">Forgot Password?</Link>
            </div>
            <button
                type="submit"
                className="w-full py-2 h-12 px-4 border border-transparent rounded-xl drop-shadow-md text-sm font-medium text-white bg-button hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
                Sign in
            </button>
        </form>

    );
};

export default LoginForm;