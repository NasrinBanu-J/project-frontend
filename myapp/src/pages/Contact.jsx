import React from 'react';

const Contact = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 font-sans bg-cover bg-center"
      style={{
        backgroundImage: "url('https://img.freepik.com/free-photo/view-breathtaking-beach-nature-landscape_23-2151682910.jpg?semt=ais_hybrid&w=740')",
      }}
    >
      <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-lg p-8 shadow-md w-full max-w-xl text-center text-black">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg mb-2">
          Have any questions, feedback, or collaboration ideas? We'd love to hear from you!
        </p>
        <p className="text-lg">
          Email us at: <a href="mailto:support@miniblog.com" className="underline text-blue-600 hover:text-blue-800">support@miniblog.com</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;


