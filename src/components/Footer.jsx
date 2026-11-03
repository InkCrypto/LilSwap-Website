import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Coffee, Github } from 'lucide-react';
import { DonateModal } from './DonateModal.jsx';
import LilLogo from './LilLogo.jsx';
import Wordmark from './Wordmark.jsx';

const Footer = () => {
    const { t } = useTranslation();
    const [isDonateOpen, setIsDonateOpen] = useState(false);

    return (
        <footer className="bg-white dark:bg-background-dark border-t border-border-light dark:border-border-dark pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-6">
                    <div className="max-w-md">
                        <div className="flex items-center gap-2 mb-4">
                            <LilLogo className="w-8 h-8" />
                            <Wordmark className="h-7" />
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                            {t('footer.tagline')}
                        </p>
                        <div className="flex items-center gap-5">
                            <a className="text-slate-400 hover:text-primary transition" href="https://x.com/LilSwap_" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                </svg>
                            </a>
                            <a className="text-slate-400 hover:text-primary transition" href="https://github.com/InkCrypto" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                                </svg>
                            </a>
                            <a className="hover:scale-110 transition-transform flex items-center" href="https://defillama.com/protocol/lilswap" target="_blank" rel="noopener noreferrer" aria-label="DeFiLlama">
                                <img src="/icons/defillama.svg" alt="DeFiLlama" className="w-5 h-5" />
                            </a>
                            <button
                                onClick={() => setIsDonateOpen(true)}
                                className="flex items-center gap-1.5 text-slate-400 hover:text-primary transition-colors text-sm font-medium group shrink-0 cursor-pointer"
                            >
                                <Coffee className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                                {t('footer.donate')}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border-light dark:border-border-dark pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-500">
                    <p>&copy; {new Date().getFullYear()} InkCrypto Finance. {t('footer.rights')}</p>
                </div>
                <DonateModal isOpen={isDonateOpen} onClose={() => setIsDonateOpen(false)} />
            </div>
        </footer>
    );
};

export default Footer;
