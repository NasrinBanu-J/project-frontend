import React, { useEffect, useState } from 'react';
import api from '../../api';
import PostCard from '../components/PostCard';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await api.get('/posts');
        setPosts(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div
      className="min-h-screen flex"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1950&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Sidebar */}
      <aside className="bg-white/90 w-64 p-4 shadow-md">
        <h2 className="text-xl font-bold mb-4">Profile</h2>
        <ul className="space-y-2">
          <li>
            <Link
              to="/profile"
              className="block px-3 py-2 rounded hover:bg-gray-200 transition"
            >
              My Profile
            </Link>
          </li>
          <li>
            <Link
              to="/create"
              className="block px-3 py-2 rounded hover:bg-gray-200 transition"
            >
              Add Post
            </Link>
          </li>
          <li>
            <Link
              to="/my-blogs"
              className="block px-3 py-2 rounded hover:bg-gray-200 transition"
            >
              My Blogs
            </Link>
          </li>

        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-white/80 backdrop-blur-md">
        <h1 className="text-3xl font-bold mb-6 text-teal-800">Recent Posts</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;

