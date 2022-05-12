import './styles/App.css';
import Login from './pages/Login.js'
import Home from './pages/Home.js'
import Madlib from './pages/Madlib';
import SchoolBool from './pages/SchoolBool';
import University from './pages/University';
import PetBool from './pages/PetBool';
import Text from './pages/Text';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Add routes here. 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/madlib' element={<Madlib />} />
        <Route path='/schoolbool' element={<SchoolBool />} />
        <Route path='/school' element={<University />} />
        <Route path='/petbool' element={<PetBool />} />
        <Route path='/text' element={<Text />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
