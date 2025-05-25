import React from 'react';
// import PostsProvider from "./context/PostsContext";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CreatePost from './pages/CreatePost';
import PostDetails from './pages/PostDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Welcome from './pages/Welcome';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import MyBlogs from './pages/MyBlogs';

const App = () => (
  
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<Welcome />} /> 
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/posts/:id" element={<PostDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/edit" element={<EditProfile />} />
      <Route path="/my-blogs" element={<MyBlogs />} />
      <Route path="/post/:id" element={<PostDetails />} />
    </Routes>
  </BrowserRouter>
);

export default App;

