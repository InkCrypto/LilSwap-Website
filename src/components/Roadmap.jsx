import React from 'react';
import { useTranslation } from 'react-i18next';

const Roadmap = () => {
    const { t } = useTranslation();
    return (
        <section className="py-24 bg-slate-50 dark:bg-[#0f1623]" id="roadmap">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 dark:text-white">{t('roadmap.title')}</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{t('roadmap.subtitle')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 -translate-y-1/2 z-0 rounded-full"></div>

                    <div className="relative z-10 bg-white dark:bg-card-dark rounded-2xl p-8 border border-border-light dark:border-border-dark shadow-lg flex flex-col h-full opacity-100 hover:ring-2 hover:ring-primary/20 hover:shadow-xl transition-opacity duration-300">
                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-primary/40 mx-auto md:mx-0">1</div>
                        <h3 className="text-xl font-bold mb-2 dark:text-white">{t('roadmap.phase1.title')}</h3>
                        <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">{t('roadmap.phase1.subtitle')}</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                            {t('roadmap.phase1.desc')}
                        </p>
                    </div>

                    <div className="relative z-10 bg-white dark:bg-card-dark rounded-2xl p-8 border border-border-light dark:border-border-dark shadow-lg flex flex-col h-full ring-2 ring-primary/30 animate-[breathe_3s_ease-in-out_infinite]" style={{ animation: 'breathe 3s ease-in-out infinite' }}>
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0">
                            <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-primary/30 uppercase tracking-wide">{t('roadmap.liveNow')}</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-primary/40 mx-auto md:mx-0">2</div>
                        <h3 className="text-xl font-bold mb-2 dark:text-white">{t('roadmap.phase2.title')}</h3>
                        <h4 className="text-sm font-semibold text-accent-cyan uppercase tracking-wider mb-4">{t('roadmap.phase2.subtitle')}</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                            {t('roadmap.phase2.desc')}
                        </p>
                    </div>

                    <div className="relative z-10 bg-white dark:bg-card-dark rounded-2xl p-8 border border-border-light dark:border-border-dark shadow-lg flex flex-col h-full opacity-100 hover:ring-2 hover:ring-primary/20 hover:shadow-xl transition-opacity duration-300">
                        <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-300 flex items-center justify-center font-bold text-lg mb-6 mx-auto md:mx-0">3</div>
                        <h3 className="text-xl font-bold mb-2 dark:text-white">{t('roadmap.phase3.title')}</h3>
                        <h4 className="text-sm font-semibold text-accent-orange uppercase tracking-wider mb-4">{t('roadmap.phase3.subtitle')}</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                            {t('roadmap.phase3.desc')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
