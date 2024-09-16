import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      const response = await axios.post('http://your-api-url/update-password', {
        username: formData.username,
        password: formData.password,
        // Note: We're not sending an id here. The server should handle finding the user by username.
      });

      if (response.status === 200) {
        setSuccess('Password updated successfully');
        setTimeout(() => navigate('/login'), 3000); // Redirect to login page after 3 seconds
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred while updating the password');
    }
  };

  return (
    <div className="z-10 w-[420px] flex flex-col gap-5 relative sm:top-0 top-20 items-center">
      <div className="w-[320px] ss:w-full flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Lost Your Way? 🔑</h1>
        <p className="">A friendly and helpful tagline that guides users toward the password reset process.</p>
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
            New Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="At least 8 characters"
            className="w-full px-3 py-2 border border-transparent focus:border-transparent rounded-xl text-sm h-12 bg-input_field drop-shadow-md"
            required
          />
        </div>
        <div>
          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Please enter your password again"
            className="w-full px-3 py-2 border border-transparent focus:border-transparent rounded-xl text-sm h-12 bg-input_field drop-shadow-md"
            required
          />
          <div className="text-right">
            <Link className="text-sm text-blue-600 hover:underline" to="/login">Remember your account?</Link>
          </div>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-500 text-sm">{success}</p>}

        <div className="flex flex-col">
          <button
            type="submit"
            className="w-full py-2 h-12 px-4 border border-transparent rounded-xl drop-shadow-md text-sm font-medium text-white bg-button hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Update Password
          </button>
          <div className="text-right mt-2">
            <Link className="text-sm text-blue-600 hover:underline" to="/signup">Don't have an account?</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;