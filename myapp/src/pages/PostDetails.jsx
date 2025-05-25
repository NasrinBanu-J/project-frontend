import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api';
import CommentList from '../components/CommentBox';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await api.get(`/posts/${id}`);
        setPost(res.data);
      } catch (err) {
        console.error('Error fetching post:', err);
      }
    };

    const fetchComments = async () => {
      try {
        const res = await api.get(`/comments?postId=${id}`);
        setComments(res.data);
      } catch (err) {
        console.error('Error fetching comments:', err);
      }
    };

    fetchPost();
    fetchComments();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentText) return;

    try {
      const token = localStorage.getItem('token');
      const res = await api.post(
        '/comments',
        { postId: id, text: commentText },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setComments([...comments, res.data]);
      setCommentText('');
    } catch (err) {
      console.error('Error posting comment:', err);
    }
  };

  if (!post) return <div className="p-4">Loading...</div>;

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1950&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#333',
      }}
    >
      <div className="bg-white/80 p-6 rounded shadow-md max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-700 mb-4">{post.content}</p>
        <p className="text-sm text-gray-600 mb-4">
          By {post.author.username} on {new Date(post.createdAt).toLocaleString()}
        </p>

        <hr className="my-4" />

        <h2 className="text-xl font-semibold mb-2">Comments</h2>
        <CommentList comments={comments} />

        <form onSubmit={handleCommentSubmit} className="mt-8">
          <textarea
            className="w-full p-3 border rounded mb-3 bg-white/90"
            placeholder="Add a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button
            type="submit"
            className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostDetails;




