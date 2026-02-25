import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogosSection from './components/LogosSection';
import DashboardPreview from './components/DashboardPreview';
import Features from './components/Features';
import Comparison from './components/Comparison';
import Efficiency from './components/Efficiency';
import Roadmap from './components/Roadmap';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

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
    <>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <LogosSection />
      <DashboardPreview />
      <Features />
      <Comparison />
      <Efficiency />
      <Roadmap />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
