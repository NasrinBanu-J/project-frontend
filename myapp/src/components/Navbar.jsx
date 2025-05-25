import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-teal-600 text-white">
      <Link to="/" className="font-bold text-lg hover:text-amber-300 transition-colors duration-300">
        Code Crafter's Mini Blog
      </Link>
      <div className="flex space-x-4">
        <Link to="/about" className="hover:text-amber-300 transition-colors duration-300">
          About
        </Link>
        <Link to="/contact" className="hover:text-amber-300 transition-colors duration-300">
          Contact
        </Link>
        {token && (
          <Link to="/profile" className="hover:text-amber-300 transition-colors duration-300">
            Profile
          </Link>
        )}
        {token ? (
          <>
            <Link to="/create" className="hover:text-amber-300 transition-colors duration-300">
              Create
            </Link>
            <button
              onClick={handleLogout}
              className="hover:text-amber-300 transition-colors duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-amber-300 transition-colors duration-300">
              Login
            </Link>
            <Link to="/register" className="hover:text-amber-300 transition-colors duration-300">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;



