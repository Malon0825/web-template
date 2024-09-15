import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from './login_component/LoginForm'
const Login = () => {
    return (
        <div className="z-10 w-[420px] flex flex-col gap-5 relative sm:top-0 top-20">
            <h1 className=" text-3xl font-semibold">Welcome Back  👋</h1>
            <p>Today is a new day. It's your day. You shape it. 
            Sign in to start managing your projects.</p>

        <LoginForm/>

        </div>
    )
}

export default Login

// <div>
// <h1>Login</h1>
// {/* Login form */}
// <Link to="/signup">Sign Up</Link>
// <Link to="/forgot-password">Forgot Password?</Link>
// </div>