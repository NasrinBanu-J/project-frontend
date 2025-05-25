import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => (
  <div className="border p-4 rounded shadow hover:shadow-lg transition">
    <Link to={`/posts/${post._id}`}>
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      {post.image && (
        <img
          src={`http://localhost:8050/uploads/${post.image}`}
          alt={post.title}
          className="w-full h-48 object-cover rounded mb-2"
        />
      )}
    </Link>
    <p className="text-gray-600 mb-2">
      {post.content.length > 100 ? `${post.content.substring(0, 100)}...` : post.content}
    </p>
    <p className="text-sm text-gray-400">
      By {post.author.username} on {new Date(post.createdAt).toLocaleString()}
    </p>
  </div>
);

export default PostCard;



