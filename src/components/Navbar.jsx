import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Languages, ChevronDown } from 'lucide-react';

const LilLogo = ({ className = "w-6 h-6" }) => (
    <svg
        viewBox="0 0 1536 1536"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
    >
        <rect x="0" y="0" width="1536" height="1536" rx="350" ry="350" fill="#643ab6" />
        <g transform="translate(768 768) scale(1.45) translate(-768 -768)">
            <g transform="translate(0,1536) scale(0.1,-0.1)" fill="#FFFFFF" stroke="none">
                <path d="M8348 10928 l-3 -412 -128 -22 c-593 -105 -1070 -425 -1300 -872 -116 -226 -157 -400 -157 -670 0 -375 94 -643 315 -902 106 -124 324 -288 504 -380 177 -90 463 -174 861 -254 306 -61 697 -150 800 -182 116 -35 243 -90 317 -136 177 -111 271 -303 252 -513 -18 -202 -137 -363 -349 -470 -164 -82 -335 -117 -585 -117 -291 -1 -463 37 -690 150 -100 49 -180 109 -258 192 -73 77 -98 117 -80 128 84 55 340 249 335 253 -12 11 -138 54 -387 134 -245 78 -861 278 -1129 366 -82 27 -152 47 -154 44 -4 -4 9 -428 23 -725 3 -58 9 -249 15 -425 6 -176 13 -375 16 -442 l6 -121 56 42 c32 23 112 83 180 134 67 51 124 92 127 92 3 0 48 -45 101 -100 97 -100 232 -210 359 -292 197 -127 526 -244 858 -305 l97 -17 0 -413 0 -413 500 0 500 0 0 415 c0 228 3 415 8 415 21 0 200 32 283 50 252 57 521 173 713 309 184 129 353 317 454 501 133 246 186 461 186 760 0 315 -64 549 -216 782 -218 335 -659 588 -1248 717 -52 12 -176 39 -275 61 -550 121 -682 154 -850 215 -265 96 -396 211 -447 394 -50 180 3 363 147 506 87 87 165 133 303 178 371 122 832 75 1115 -114 69 -46 157 -127 157 -144 0 -11 -11 -22 -205 -185 -60 -51 -111 -96 -113 -99 -1 -4 30 -15 70 -24 77 -18 323 -85 718 -194 360 -99 428 -118 670 -187 124 -35 227 -62 229 -60 2 2 -1 50 -7 106 -41 364 -147 1398 -159 1546 -3 39 -10 72 -14 72 -4 0 -34 -22 -66 -48 -32 -26 -115 -94 -185 -150 l-127 -103 -98 81 c-240 199 -550 344 -873 409 -52 10 -112 22 -132 25 l-38 7 0 409 0 410 -500 0 -500 0 -2 -412z" />
                <path d="M4380 7390 l0 -3110 1805 0 1805 0 -2 262 -3 262 -65 18 c-191 55 -311 93 -379 123 -170 73 -313 148 -436 229 l-130 86 -702 0 -703 0 0 2620 0 2620 -595 0 -595 0 0 -3110z" />
            </g>
        </g>
    </svg>
);

const FlagUS = () => (
    <svg className="w-4 h-3 rounded-sm shadow-sm flex-shrink-0" viewBox="0 0 741 390">
        <path fill="#bd3d44" d="M0 0h741v390H0z" />
        <path d="M0 30h741v30H0m0 60h741v30H0m0 60h741v30H0m0 60h741v30H0m0 60h741v30H0m0 60h741v30H0" fill="#fff" />
        <path fill="#192f5d" d="M0 0h296.4v210H0z" />
        <path fill="#fff" d="M25 42l5-15 5 15-13-9h16zM50 72l5-15 5 15-13-9h16zM25 102l5-15 5 15-13-9h16zM50 132l5-15 5 15-13-9h16zM25 162l5-15 5 15-13-9h16zM99 42l5-15 5 15-13-9h16zM124 72l5-15 5 15-13-9h16zM99 102l5-15 5 15-13-9h16zM124 132l5-15 5 15-13-9h16zM99 162l5-15 5 15-13-9h16zM173 42l5-15 5 15-13-9h16zM198 72l5-15 5 15-13-9h16zM173 102l5-15 5 15-13-9h16zM198 132l5-15 5 15-13-9h16zM173 162l5-15 5 15-13-9h16zM247 42l5-15 5 15-13-9h16zM271 72l5-15 5 15-13-9h16zM247 102l5-15 5 15-13-9h16zM271 132l5-15 5 15-13-9h16zM247 162l5-15 5 15-13-9h16zM62 42l5-15 5 15-13-9h16zM87 72l5-15 5 15-13-9h16zM62 102l5-15 5 15-13-9h16zM87 132l5-15 5 15-13-9h16zM62 162l5-15 5 15-13-9h16z" />
    </svg>
);

const FlagBR = () => (
    <svg className="w-4 h-3 rounded-sm shadow-sm flex-shrink-0" viewBox="0 0 720 504">
        <path fill="#009c3b" d="M0 0h720v504H0z" />
        <path fill="#ffdf00" d="M360 41l319 211-319 211L41 252z" />
        <circle fill="#002776" cx="360" cy="252" r="122" />
        <path fill="#fff" d="M242 268c34 23 83 37 129 37 42 0 77-11 106-27-2-41-41-100-112-100-47 0-96 38-123 90z" />
        <path fill="#002776" d="M248 266c30 18 73 29 111 29 40 0 74-10 102-26-2-26-25-62-67-62-38 0-82 28-146 59z" />
    </svg>
);

const Navbar = () => {
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
                        <div className="min-w-0 flex flex-col justify-start text-left">
                            <div className="flex items-center gap-2 leading-none">
                                <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                                    LilSwap
                                </h1>
                                <span className="hidden sm:inline px-1 py-0 rounded text-primary text-[8px] font-bold border-2 border-primary/30 mt-0.5">BETA</span>
                            </div>
                            <div className="hidden sm:flex items-center gap-2 mt-1 leading-none">
                                <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em] sm:tracking-[0.2em]">{t('navbar.subtitle')}</span>
                            </div>
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
                    <div className="flex items-center gap-2 sm:gap-4">
                        {/* Language Dropdown */}
                        <div className="relative mr-1 sm:mr-2" ref={langRef}>
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
