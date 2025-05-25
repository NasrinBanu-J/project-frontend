import React, { useEffect, useState } from 'react';
import api from '../../api';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await api.get('/api/Auth/profile', { headers: { Authorization: `Bearer ${token}` } });
        setProfile(res.data);
      } catch (err) {
        console.error(err);
        // Redirect to login if token is invalid or missing
        navigate('/login');
      }
    };

    fetchProfile();
  }, [navigate]);

  if (!profile) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-teal-700 font-semibold">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-100 to-green-100 p-8">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-teal-800 mb-4">My Profile</h1>
        <img
          src={
            profile.avatar ||
            'https://cdn-icons-png.flaticon.com/512/149/149071.png'
          }
          alt="Avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-teal-500"
        />
        <p className="text-lg font-semibold">{profile.username}</p>
        <p className="text-gray-600">{profile.email}</p>

        {/* More fields if available */}
        {profile.bio && (
          <p className="mt-4 text-sm text-gray-500 italic">"{profile.bio}"</p>
        )}

        {/* Edit Profile Button */}
        <button
          onClick={() => navigate('/profile/edit')}
          className="mt-6 bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded transition duration-300"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;

