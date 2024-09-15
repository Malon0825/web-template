import { Routes, Route, Navigate } from 'react-router-dom'
import { Login, Signup, ForgotPassword } from './components'
import { login_bg } from './assets';

function App() {
  return (
    <div className="w-screen h-screen flex flex-col sm:flex-row gap-10 items-center justify-center relative overflow-hidden font-poppins">
      <div className="absolute top-0 flex sm:hidden w-full h-[400px] overflow-hidden z-0">
        <img
          className="object-cover w-full h-full scale-110 hover:scale-125 transition-all duration-500 ease-in-out"
          src={login_bg}
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/0 to-white/100"></div>
      </div>


      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>

      <div className="sm:flex hidden w-[420px] h-[620px] overflow-hidden rounded-xl">

        <img className="object-cover w-full h-full scale-110 hover:scale-125 transition-all duration-500 ease-in-out"
          src={login_bg} alt="" />
      </div>
    </div>
  )
}

export default App