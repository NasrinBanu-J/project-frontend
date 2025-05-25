import React, { useEffect, useState } from 'react';
import api from '../../api';
import PostCard from '../components/PostCard';

const MyBlogs = () => {
  const [myPosts, setMyPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMyPosts = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await api.get('/api/posts/my-posts', { headers: { Authorization: `Bearer ${token}` } });
        setMyPosts(res.data);
      } catch (err) {
        console.error('Error fetching my blogs:', err);
        // setError('Failed to load your blogs.');
      }
    };
    fetchMyPosts();
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center p-8"
      style={{
        backgroundImage: 'url(https://t4.ftcdn.net/jpg/07/21/10/99/240_F_721109994_sYDvLydoKbOI2E2dn6XKw6k6jDygMckD.jpg)',
      }}
    >
      <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-lg p-6 max-w-3xl mx-auto shadow-lg">
        <h1 className="text-2xl font-bold text-teal-700 mb-4">My Blogs</h1>

        {error && <div className="text-red-600 mb-2">{error}</div>}

        {myPosts.length === 0 ? (
          <p>You haven’t created any blogs yet.</p>
        ) : (
          <div className="grid gap-4">
            {myPosts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBlogs;
