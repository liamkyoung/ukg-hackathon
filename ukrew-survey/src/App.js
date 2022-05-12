import './styles/App.css';
import Login from './pages/Login.js'
import Home from './pages/Home.js'
import Madlib from './pages/Madlib';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Add routes here. 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/madlib' element={<Madlib />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
