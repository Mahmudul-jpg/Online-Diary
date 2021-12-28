import React from 'react'
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import Login from './pages/Login'
import { useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from './firebase/firebaseConfig'
function App() {
  const [isAuth, setIsAuth] = useState(false)
  const logOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = '/login'
    })
  }
  return (
    <div>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/createpost'>Create-Post</NavLink>
        {!isAuth ? <NavLink to='/login'>Login</NavLink> : <button onClick={logOut}>Log Out</button>}
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
