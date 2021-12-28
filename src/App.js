import React from 'react'
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import Login from './pages/Login'
import { useState } from 'react'
function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <div>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/createpost'>Create-Post</NavLink>
        <NavLink to='/login'>Login</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/createpost' element={<CreatePost />} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
      </Routes>

    </div>
  );
}

export default App;
