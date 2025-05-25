import React, { useState, useEffect } from 'react';
import api from '../../api';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    bio: '',
  });
  const [profilePic, setProfilePic] = useState(null);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Fetch current user data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await api.get('/users/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setForm({
          username: res.data.username,
          email: res.data.email,
          bio: res.data.bio || '',
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetchProfile();
  }, []);

  // Handle input changes
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFileChange = (e) => setProfilePic(e.target.files[0]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('username', form.username);
      formData.append('email', form.email);
      formData.append('bio', form.bio);
      if (profilePic) formData.append('profilePic', profilePic);
      if (password) formData.append('password', password);

      await api.put('/users/me', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert('✅ Profile updated successfully!');
      navigate('/profile');
    } catch (err) {
      console.error(err);
      alert('❌ Failed to update profile.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 to-teal-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Edit Profile</h1>

        <input
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
          className="border p-2 mb-2 w-full"
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2 mb-2 w-full"
        />
        <textarea
          name="bio"
          value={form.bio}
          onChange={handleChange}
          placeholder="Bio"
          className="border p-2 mb-2 w-full"
        ></textarea>
        <input
          type="file"
          onChange={handleFileChange}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="New Password (optional)"
          className="border p-2 mb-2 w-full"
        />

        <button
          type="submit"
          className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded w-full"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;

