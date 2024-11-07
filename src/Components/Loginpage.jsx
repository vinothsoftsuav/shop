import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
const Loginpage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [eye, setEye] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('isAuthenticated') === 'true') {
      navigate('/cart');
    }
  }, [navigate]);
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('isAuthenticated', 'true');
    onLogin();
    navigate('/cart');
  };
  const togglePasswordVisibility = () => {
    setEye(!eye);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              value={email}
                       onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none"
              placeholder="you@example.com"
            />
                 </div>
                           <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type={eye ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none"
              placeholder="********"
            />
            {eye ? (
              <FaEye
                onClick={togglePasswordVisibility}
                className="absolute top-11 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
              />
            ) : (
              <FaEyeSlash
                onClick={togglePasswordVisibility}
                className="absolute top-11 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
              />
            )}
          </div>
          <div className='m-3 p-3'>
          <label htmlFor="" className='m-2 z-40'>Select the Languages</label>
            <input type="checkbox"  className='m-2 accent-red-200  '/><label>Tamil</label>
            <input type="checkbox"  className='m-2'/><label>English</label>
          </div>
          <button
            type="submit"
            className="w-full p-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};



export default Loginpage;
