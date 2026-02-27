import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Docs from './pages/Docs';
import { initAnalytics, reportWebVitals } from './utils/analytics';

// Component to handle route changes for analytics
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    // Analytics is initialized with 'send_page_view: true' by default.
    // However, on a single page application (SPA), we need to manually
    // trigger a page view whenever the route changes.
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}

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

  // Initialize analytics once when the app mounts
  useEffect(() => {
    initAnalytics();
    reportWebVitals();
  }, []);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-[#0A0516] transition-colors duration-300 flex flex-col">
        <AnalyticsTracker />
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
