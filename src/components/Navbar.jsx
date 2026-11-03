import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Languages, ChevronDown } from 'lucide-react';
import LilLogo from './LilLogo.jsx';
import Wordmark from './Wordmark.jsx';

const FlagUS = () => (
    <svg className="w-4 h-3 rounded-sm shadow-sm shrink-0" viewBox="0 0 741 390">
        <path fill="#bd3d44" d="M0 0h741v390H0z" />
        <path d="M0 30h741v30H0m0 60h741v30H0m0 60h741v30H0m0 60h741v30H0m0 60h741v30H0m0 60h741v30H0" fill="#fff" />
        <path fill="#192f5d" d="M0 0h296.4v210H0z" />
        <path fill="#fff" d="M25 42l5-15 5 15-13-9h16zM50 72l5-15 5 15-13-9h16zM25 102l5-15 5 15-13-9h16zM50 132l5-15 5 15-13-9h16zM25 162l5-15 5 15-13-9h16zM99 42l5-15 5 15-13-9h16zM124 72l5-15 5 15-13-9h16zM99 102l5-15 5 15-13-9h16zM124 132l5-15 5 15-13-9h16zM99 162l5-15 5 15-13-9h16zM173 42l5-15 5 15-13-9h16zM198 72l5-15 5 15-13-9h16zM173 102l5-15 5 15-13-9h16zM198 132l5-15 5 15-13-9h16zM173 162l5-15 5 15-13-9h16zM247 42l5-15 5 15-13-9h16zM271 72l5-15 5 15-13-9h16zM247 102l5-15 5 15-13-9h16zM271 132l5-15 5 15-13-9h16zM247 162l5-15 5 15-13-9h16zM62 42l5-15 5 15-13-9h16zM87 72l5-15 5 15-13-9h16zM62 102l5-15 5 15-13-9h16zM87 132l5-15 5 15-13-9h16zM62 162l5-15 5 15-13-9h16z" />
    </svg>
);

const FlagBR = () => (
    <svg className="w-4 h-3 rounded-sm shadow-sm shrink-0" viewBox="0 0 720 504">
        <path fill="#009c3b" d="M0 0h720v504H0z" />
        <path fill="#ffdf00" d="M360 41l319 211-319 211L41 252z" />
        <circle fill="#002776" cx="360" cy="252" r="122" />
        <path fill="#fff" d="M242 268c34 23 83 37 129 37 42 0 77-11 106-27-2-41-41-100-112-100-47 0-96 38-123 90z" />
        <path fill="#002776" d="M248 266c30 18 73 29 111 29 40 0 74-10 102-26-2-26-25-62-67-62-38 0-82 28-146 59z" />
    </svg>
);

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
    const { t, i18n } = useTranslation();
    const [isLangOpen, setIsLangOpen] = useState(false);
    const langRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (langRef.current && !langRef.current.contains(event.target)) {
                setIsLangOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsLangOpen(false);
    };

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed w-full z-50 top-0 border-b border-border-light dark:border-border-dark bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo Section */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-2 min-w-0 cursor-pointer group"
                    >
                        <div className="shrink-0 flex items-center justify-center">
                            <LilLogo className="w-10 h-10 sm:w-12 sm:h-12 transition-transform group-hover:scale-105" />
                        </div>
                        <div className="min-w-0 flex items-center">
                            <Wordmark className="h-6 sm:h-7 lg:h-9" />
                        </div>
                    </button>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <button onClick={() => scrollTo('features')} className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer">{t('navbar.features')}</button>
                        <button onClick={() => scrollTo('comparison')} className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer">{t('navbar.advantages')}</button>
                        <button onClick={() => scrollTo('savings')} className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer">{t('navbar.savings')}</button>
                        <button onClick={() => scrollTo('roadmap')} className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer">{t('navbar.roadmap')}</button>
                        <button onClick={() => scrollTo('faq')} className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer">{t('navbar.faq')}</button>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        {/* Language Dropdown */}
                        <div className="relative" ref={langRef}>
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="flex items-center gap-2 text-[10px] sm:text-xs font-bold px-2 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm"
                            >
                                <Languages className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline-flex items-center justify-center">
                                    {i18n.resolvedLanguage === 'pt-BR' ? <FlagBR /> : <FlagUS />}
                                </span>
                                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isLangOpen && (
                                <div className="absolute top-full mt-2 right-0 w-32 bg-white dark:bg-card-dark rounded-xl shadow-xl border border-border-light dark:border-border-dark py-1 z-50 overflow-hidden origin-top-right animate-in fade-in zoom-in-95 duration-200">
                                    <button
                                        onClick={() => changeLanguage('en')}
                                        className={`w-full text-left px-4 py-2 text-xs font-bold transition-colors flex items-center gap-2.5 ${i18n.resolvedLanguage === 'en' ? 'bg-primary/5 text-primary' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}
                                    >
                                        <FlagUS />
                                        English
                                    </button>
                                    <button
                                        onClick={() => changeLanguage('pt-BR')}
                                        className={`w-full text-left px-4 py-2 text-xs font-bold transition-colors flex items-center gap-2.5 ${i18n.resolvedLanguage === 'pt-BR' ? 'bg-primary/5 text-primary' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}
                                    >
                                        <FlagBR />
                                        Português
                                    </button>
                                </div>
                            )}
                        </div>
                        <button
                            onClick={toggleDarkMode}
                            className="flex shrink-0 items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-pointer group"
                            aria-label={isDarkMode ? t('footer.lightOff') : t('footer.lightOn')}
                            title={isDarkMode ? t('footer.lightOff') : t('footer.lightOn')}
                        >
                            <span
                                className={`material-symbols-outlined text-[18px] leading-none transition-all duration-300 ${isDarkMode
                                    ? 'text-slate-500 dark:text-slate-600 group-hover:text-slate-400'
                                    : 'text-yellow-400 group-hover:text-yellow-500 drop-shadow-[0_0_6px_rgba(250,204,21,0.7)]'
                                    }`}
                                style={{ fontVariationSettings: isDarkMode ? "'FILL' 0, 'GRAD' 0" : "'FILL' 1, 'GRAD' 200" }}
                            >
                                lightbulb
                            </span>
                        </button>
                        <a href="https://app.lilswap.xyz" className="bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-bold px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl transition-all shadow-lg shadow-primary/20 active:scale-95 whitespace-nowrap">
                            {t('navbar.swapNow')}
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
