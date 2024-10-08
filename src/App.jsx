import { Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx'
import Item from './components/Item.jsx';
import Screenshots from './components/Screenshots.jsx';
import NewScreenshot from './components/NewScreenshot.jsx';
import NewScreenshotPlugin from './components/PluginScreenshot.jsx';
import NavMenu from './components/NavMenu.jsx';

function App() {
     
  return (
    <div>
      <Routes>
        {/* Public Route (accessible without login) */}
        <Route path="/login" element={<Login /> } />

        {/* Protected Route (requires login) */}
        <Route path="/" element={<NavMenu /> && <Screenshots /> } />
        {/* <Route path="/screenshots/" element={<Screenshots />} />  */}
        <Route path="/item/:id" element={<Item />} />
        <Route path="/screenshot/new" element={<NewScreenshot />} />
        <Route path="/screenshot/plugin" element={<NewScreenshotPlugin />} />
      </Routes>
    </div>
   )
}
export default App
