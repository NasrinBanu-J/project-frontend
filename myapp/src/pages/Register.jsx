import React, { useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import api from '../../api';

const Register = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (form.password !== form.confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  try {
    const res = await api.post('/api/Auth/register', form); 

    if (res.data?.token) { 
      localStorage.setItem('token', res.data.token);
      navigate('/home'); 
    } else {
      throw new Error('Unexpected response from server.');
    }
  } catch (err) {
    console.error('Registration Error:', err.response?.data || err.message);
    alert(err.response?.data?.message || 'Registration failed. Please try again.');
  }
};

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1350&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 p-8 rounded shadow-lg w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-teal-700">
          Register
        </h1>

        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-1">
            Username:
          </label>
          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-1">Email:</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
        </div>

        <div className="mb-4 relative">
          <label className="block font-medium text-gray-700 mb-1">
            Password:
          </label>
          <input
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-9 cursor-pointer text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </div>
        </div>

        <div className="mb-4 relative">
          <label className="block font-medium text-gray-700 mb-1">
            Confirm Password:
          </label>
          <input
            name="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
          <div
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-9 cursor-pointer text-gray-500 hover:text-gray-700"
          >
            {showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </div>
        </div>

        <button
          type="submit"
          className="bg-teal-600 text-white px-4 py-2 rounded w-full hover:bg-teal-700 transition"
        ><Link to="/home">
            Register
            </Link>
        </button>
        <p className="text-center mt-4 text-sm">
        Already have an account?{' '}
        <Link to="/login" className="text-teal-600 hover:underline font-medium">
        Login
        </Link>
      </p>
      </form>
    </div>
  );
};

export default Register;




