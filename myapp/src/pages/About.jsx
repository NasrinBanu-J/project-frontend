import React from 'react';

const About = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 font-sans bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1500&q=80')",
      }}
    >
      <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-lg p-8 shadow-md w-full max-w-xl text-center text-black">
        <h1 className="text-3xl font-bold mb-4">About This Blog</h1>
        <p className="text-lg mb-2">
          Welcome to the Code Crafter's Mini Blog! This is a simple and powerful platform where you
          can share your thoughts, write about your experiences, and connect with other developers.
        </p>
        <p className="text-lg">
          Made with ❤️ by a passionate team. We hope you enjoy your stay!
        </p>
      </div>
    </div>
  );
};

export default About;




