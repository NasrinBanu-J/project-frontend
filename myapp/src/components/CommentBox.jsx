import React from 'react';

const CommentList = ({ comments }) => (
  <div>
    {comments.length === 0 ? (
      <p>No comments yet.</p>
    ) : (
      comments.map((c) => (
        <div key={c._id} className="border-t p-2">
          <p>{c.text}</p>
          <p className="text-xs text-gray-400">By {c.author.username} on {new Date(c.createdAt).toLocaleString()}</p>
        </div>
      ))
    )}
  </div>
);

export default CommentList;
