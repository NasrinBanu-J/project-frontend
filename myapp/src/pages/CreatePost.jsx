import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';

const CreatePost = () => {
  const [form, setForm] = useState({ title: '', content: '' });
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFileChange = (e) => setImage(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');

      const formData = new FormData();
      formData.append('title', form.title);
      formData.append('content', form.content);
      if (image) formData.append('image', image);

      await api.post('/posts', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Post created successfully!');
      navigate('/home');
    } catch (err) {
      console.error(err);
      alert('Failed to create post.');
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
    "url('https://images.unsplash.com/photo-1505954137021-b6bf5a131a7b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-teal-800 mb-6">Create Post</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            className="border border-gray-400 rounded p-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
          <textarea
            name="content"
            placeholder="Content"
            onChange={handleChange}
            className="border border-gray-400 rounded p-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
            rows="5"
            required
          ></textarea>
          <input
            type="file"
            onChange={handleFileChange}
            className="border border-gray-400 rounded p-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;




