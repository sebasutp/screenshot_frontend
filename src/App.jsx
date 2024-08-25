import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css'
import Login from './Login.jsx'
import Item from './Item.jsx';
import Screenshots from './Screenshots.jsx';
import NewScreenshot from './NewScreenshot.jsx';
import NewScreenshotPlugin from './PluginScreenshot.jsx';

function App() {
  //const [token, setToken] = useState(localStorage.getItem('token'))
  const token = localStorage.getItem('token')
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
        <Routes>
          {/* Public Route (accessible without login) */}
          <Route path="/login" element={<Login />} />

          {/* Protected Route (requires login) */}
          <Route path="/" element={token ? <Screenshots /> : <Navigate replace to="/login" />} />

          <Route path="/item/:id" element={<Item />} />
          <Route path="/screenshot/new" element={<NewScreenshot />} />
          <Route path="/screenshot/plugin" element={<NewScreenshotPlugin />} />
        </Routes>
    </div>
  );

  if (token) {
    return (
      <>
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </>
    )
  } else {
    return (<Login />)
  }
}

export default App
