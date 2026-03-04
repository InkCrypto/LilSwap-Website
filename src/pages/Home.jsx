import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import DashboardPreview from '../components/DashboardPreview';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Comparison from '../components/Comparison';
import Efficiency from '../components/Efficiency';
import Roadmap from '../components/Roadmap';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

function Home({ isDarkMode, toggleDarkMode }) {
    return (
        <>
            <Navbar />
            <main className="grow">
                    <Hero />
                <div className="bg-slate-50/80 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800/50">
                    <Features />
                </div>
                <DashboardPreview />
                <div className="bg-slate-50/80 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800/50">
                    <HowItWorks />
                </div>
                <Comparison />
                <div className="bg-slate-50/80 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800/50">
                    <Efficiency />
                </div>
                <Roadmap />
                <div className="bg-slate-100/50 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800">
                    <FAQ />
                </div>
                <CTA />
            </main>
            <Footer isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </>
    );
}

export default Home;
