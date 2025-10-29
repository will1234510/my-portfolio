import './App.css';
import Home from './pages/home.jsx';
import Resume from './pages/resume.jsx';
import Hobbies from './pages/hobbies.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;