import './App.css';
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import Table from './Components/Table';
import Shop from './Components/Shop';
import Cart from './Components/Cart';
import Loginpage from './Components/Loginpage';
import { useState, useEffect } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem('isAuthenticated') === 'true');
  }, []);

  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.setItem('isAuthenticated', 'false');
    setIsAuthenticated(false);
  };

  return (
    <div className="App xl:bg-alive-green md:bg-yellow-300 lg:bg-gray-300 sm:bg-blue-300  bg-yellow-700">
      <h3 className='italic md:font-serif text-3xl p-4'>Shop</h3>

      <BrowserRouter>
        <nav>
          <Link to='/table' className='hover:font-bold italic text-2xl bg-lime-500 p-3 m-3 rounded-full'>Product Details</Link>
          <Link to='/shop' className='hover:font-bold italic text-2xl bg-lime-500 p-3 m-3 rounded-full'>Shop Details</Link>
          <Link to='/cart' className='hover:font-bold italic text-2xl bg-lime-500 p-3 m-3 rounded-full'>Your Cart</Link>
          {isAuthenticated ? (
            <button className='hover:font-bold italic text-2xl bg-red-300 p-3 m-3 rounded-full' onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to='/login' className='hover:font-bold italic text-2xl bg-lime-500 p-3 m-3 rounded-full'>Login</Link>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to={isAuthenticated ? "/shop" : "/login"} />} />
          <Route path="/table" element={<Table />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={isAuthenticated ? <Cart /> : <Navigate to="/login" />} />
          <Route
            path="/login"
            element={isAuthenticated ? (
              <h2 className='text-center m-10 italic font-bold'>Already Logged In!</h2>
            ) : (
              <Loginpage onLogin={handleLogin} />
            )}
          />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
