import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const { t } = useTranslation();
    return (
        <header className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-20 dark:opacity-[0.07] pointer-events-none"></div>
            <div className="absolute top-20 right-0 w-80 h-80 bg-accent-cyan/5 dark:bg-accent-cyan/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-20 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    {t('hero.tagline')}
                </div>

                <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight leading-tight">
                    {t('hero.title1')} <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent-cyan text-glow">{t('hero.title2')}</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    {t('hero.description')}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="https://app.lilswap.xyz"
                        className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 text-sm sm:text-base flex items-center justify-center gap-2 active:scale-95"
                    >
                        <span className="inline">{t('hero.accessApp')}</span>
                        <ExternalLink className="w-4 h-4" />
                    </a>
                    <Link to="/docs" className="w-full sm:w-auto bg-slate-100 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 hover:text-primary dark:hover:text-primary px-8 py-3.5 rounded-xl font-bold transition-all text-sm sm:text-base flex items-center justify-center gap-2 group">
                        <FileText className="w-4 h-4 text-slate-400 dark:text-slate-500 transition-colors group-hover:text-primary" />
                        <span className="flex items-center gap-2">{t('hero.docs')} <span className="text-[10px] uppercase bg-slate-200 dark:bg-slate-700/50 text-slate-500 dark:text-slate-400 px-1.5 py-0.5 rounded font-bold transition-colors group-hover:text-primary group-hover:bg-primary/10">{t('hero.soon')}</span></span>
                    </Link>
                </div>

                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto border-t border-border-light dark:border-border-dark pt-8">
                    <div>
                        <div className="text-2xl sm:text-3xl font-display font-bold text-accent-cyan whitespace-nowrap">67%</div>
                        <div className="text-[10px] sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">{t('hero.stats.maxSavings')}</div>
                    </div>
                    <div>
                        <div className="text-2xl sm:text-3xl font-display font-bold text-primary whitespace-nowrap">0%</div>
                        <div className="text-[10px] sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">{t('hero.stats.executionFee')}</div>
                    </div>
                    <div>
                        <div className="text-2xl sm:text-3xl font-display font-bold text-blue-500 whitespace-nowrap">{t('hero.stats.direct')}</div>
                        <div className="text-[10px] sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">{t('hero.stats.smartContractCall')}</div>
                    </div>
                    <div>
                        <div className="text-2xl sm:text-3xl font-display font-bold text-emerald-400 whitespace-nowrap">{t('hero.stats.instant')}</div>
                        <div className="text-[10px] sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">{t('hero.stats.settlement')}</div>
                    </div>
                </div>

                <p className="mt-8 text-xs sm:text-sm text-slate-500 dark:text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed opacity-80">
                    {t('hero.trustMessage')}
                </p>


            </div>
        </header>
    );
};

export default Hero;
