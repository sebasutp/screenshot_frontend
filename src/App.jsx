//import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import './App.css'
import Header from './components/Header.jsx';
import Login from './components/Login.jsx'
import Item from './components/Item.jsx';
import Screenshots from './components/Screenshots.jsx';
import NewScreenshot from './components/NewScreenshot.jsx';
import NewScreenshotPlugin from './components/PluginScreenshot.jsx';
import NavMenu from './components/NavMenu.jsx';

function App() {
  //const [token, setToken] = useState(localStorage.getItem('token'))
  const token = localStorage.getItem('token')
<<<<<<< Updated upstream
  const navigate = useNavigate()

  const handleLogout = () => {
    //setToken(null)
    localStorage.removeItem('token');
    navigate('/login');
    // Optionally redirect to login page or handle other logout logic
  };

  return (
    <div>
      {token ? (
        <div name="logged_in_header">
          <button onClick={handleLogout}>Logout</button>
        </div>
        ) : (
          <div name = "unknown_user_header"></div>
        )
      }
      {/* <Header /> */}
=======
  
  return (
    <div>
>>>>>>> Stashed changes
      <Routes>
        {/* Public Route (accessible without login) */}
        <Route path="/login" element={<Login />} />

        {/* Protected Route (requires login) */}
<<<<<<< Updated upstream
        <Route path="/" element={token ? <Screenshots /> : <Navigate replace to="/login" />} />
=======
        <Route path="/" element={token ? <NavMenu /> && <Screenshots /> : <Navigate replace to="/login" />} />
        {/* <Route path="/screenshots/" element={<Screenshots />} />  */}
>>>>>>> Stashed changes
        <Route path="/item/:id" element={<Item />} />
        <Route path="/screenshot/new" element={<NewScreenshot />} />
        <Route path="/screenshot/plugin" element={<NewScreenshotPlugin />} />
      </Routes>
    </div>
   )
}
export default App
