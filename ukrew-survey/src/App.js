import './styles/App.css';
import Login from './pages/Login.js'
import Home from './pages/Home.js'
import Madlib from './pages/Madlib';
import Interests from './pages/Interests';
import RefinedInterests from './pages/RefinedInterests.js'
import Pets from './pages/Pets';
import Icons from './pages/Icons';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Add routes here. 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/madlib' element={<Madlib />} />
        <Route path='/pets' element={<Pets />} />
        <Route path='/interests' element={<Interests />} />
        <Route path='/refInterests' element={<RefinedInterests />} />
        <Route path='/icons' element={<Icons />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
