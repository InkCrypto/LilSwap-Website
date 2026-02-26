import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Docs from './pages/Docs';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Default to false (light), or use saved preference
    const saved = localStorage.getItem('lilswap_theme');
    return saved !== null ? saved === 'dark' : false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('lilswap_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('lilswap_theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-[#0A0516] transition-colors duration-300 flex flex-col">
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="*" element={<Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
