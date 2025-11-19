import './App.css';
import Home from './pages/home.jsx';
import Resume from './pages/resume.jsx';
import Hobbies from './pages/hobbies.jsx';
import Projects from './pages/projects.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;