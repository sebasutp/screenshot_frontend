//import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import './App.css'
import Login from './components/Login.jsx'
import Item from './components/Item.jsx';
import Screenshots from './components/Screenshots.jsx';
import NewScreenshot from './components/NewScreenshot.jsx';
import NewScreenshotPlugin from './components/PluginScreenshot.jsx';
import NavMenu from './components/NavMenu.jsx';

function App() {
  //const [token, setToken] = useState(localStorage.getItem('token'))
  const token = localStorage.getItem('token')
 
  return (
    <div>
      <Routes>
        {/* Public Route (accessible without login) */}
        <Route path="/login" element={<Login />} />

        {/* Protected Route (requires login) */}
        <Route path="/" element={token ? <NavMenu /> && <Screenshots /> : <Navigate replace to="/login" />} />
        {/* <Route path="/screenshots/" element={<Screenshots />} />  */}
        <Route path="/item/:id" element={<Item />} />
        <Route path="/screenshot/new" element={<NewScreenshot />} />
        <Route path="/screenshot/plugin" element={<NewScreenshotPlugin />} />
      </Routes>
    </div>
   )
}
export default App
