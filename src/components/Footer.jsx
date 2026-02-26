import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

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

const SystemStatus = () => {
    const { t } = useTranslation();
    const [status, setStatus] = useState('checking');
    const [apiVersion, setApiVersion] = useState(null);

    useEffect(() => {
        const checkHealth = async () => {
            try {
                const response = await fetch('https://api.lilswap.xyz/v1/health');
                if (response.ok) {
                    const data = await response.json();
                    setStatus('operational');
                    if (data.version) setApiVersion(data.version);
                } else {
                    setStatus('offline');
                }
            } catch (error) {
                setStatus('offline');
            }
        };

        checkHealth(); // Check immediately
        const interval = setInterval(checkHealth, 30000); // And every 30s
        return () => clearInterval(interval);
    }, []);

    const versionLabel = apiVersion ? (
        <span className="text-slate-400 dark:text-slate-500 font-mono">API v{apiVersion}</span>
    ) : null;

    if (status === 'checking') {
        return (
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-400 animate-pulse"></span>
                <span>{t('footer.system.checking')}</span>
            </div>
        );
    }

    if (status === 'offline') {
        return (
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-red-500 font-medium">{t('footer.system.offline')}</span>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-3">
            {versionLabel}
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-green-500 font-medium">{t('footer.system.operational')}</span>
            </div>
        </div>
    );
};

const Footer = ({ isDarkMode, toggleDarkMode }) => {
    const { t } = useTranslation();
    return (
        <footer className="bg-white dark:bg-background-dark border-t border-border-light dark:border-border-dark pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">

                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <LilLogo className="w-8 h-8" />
                            <span className="font-display font-bold text-lg dark:text-white">LilSwap</span>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                            {t('footer.tagline')}
                        </p>
                        <div className="flex items-center gap-6">
                            <div className="flex gap-4">
                                <a className="text-slate-400 hover:text-primary transition" href="https://x.com/0xInkCrypto" target="_blank" rel="noopener noreferrer">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                    </svg>
                                </a>
                                <a className="text-slate-400 hover:text-primary transition" href="https://github.com/InkCrypto" target="_blank" rel="noopener noreferrer">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"></path>
                                    </svg>
                                </a>
                            </div>

                            {/* Theme Toggle - Lightbulb */}
                            <button
                                onClick={toggleDarkMode}
                                className="flex items-center gap-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-pointer group"
                                aria-label="Toggle dark mode"
                            >
                                <span className="text-xs font-medium">{isDarkMode ? t('footer.lightOff') : t('footer.lightOn')}</span>
                                <span
                                    className={`material-symbols-outlined text-[20px] leading-none transition-all duration-300 ${isDarkMode
                                        ? 'text-slate-500 dark:text-slate-600 group-hover:text-slate-400'
                                        : 'text-yellow-400 group-hover:text-yellow-500 drop-shadow-[0_0_6px_rgba(250,204,21,0.7)]'
                                        }`}
                                    style={{ fontVariationSettings: isDarkMode ? "'FILL' 0, 'GRAD' 0" : "'FILL' 1, 'GRAD' 200" }}
                                >
                                    lightbulb
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* <div className="hidden">
                        <h4 className="font-bold mb-4 dark:text-white">Product</h4>
                        <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                            <li><a className="hover:text-primary transition" href="#dashboard">Dashboard</a></li>
                            <li><a className="hover:text-primary transition" href="#">Swap</a></li>
                            <li><a className="hover:text-primary transition" href="#">Earn</a></li>
                            <li><a className="hover:text-primary transition" href="#">Bridge</a></li>
                        </ul>
                    </div> */}

                    <div>
                        <h4 className="font-bold mb-4 dark:text-white">{t('footer.resources.title')}</h4>
                        <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                            <li>
                                <Link to="/docs" className="text-slate-400 dark:text-slate-500 flex items-center gap-2 hover:text-primary transition group select-none">
                                    {t('footer.resources.docs')}
                                    <span className="text-[10px] uppercase bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-1.5 py-0.5 rounded font-bold group-hover:text-primary group-hover:bg-primary/10 transition">{t('footer.resources.soon')}</span>
                                </Link>
                            </li>

                            {/* <li><a className="hover:text-primary transition" href="#">Audits</a></li> */}
                            {/* <li><a className="hover:text-primary transition" href="#">Brand Kit</a></li> */}
                        </ul>
                    </div>

                    {/* <div className="hidden">
                        <h4 className="font-bold mb-4 dark:text-white">Legal</h4>
                        <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                            <li><a className="hover:text-primary transition" href="#">Terms of Service</a></li>
                            <li><a className="hover:text-primary transition" href="#">Privacy Policy</a></li>
                        </ul>
                    </div> */}

                </div>

                <div className="border-t border-border-light dark:border-border-dark pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-500">
                    <p>&copy; {new Date().getFullYear()} InkCrypto Finance. {t('footer.rights')}</p>
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                        <SystemStatus />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
