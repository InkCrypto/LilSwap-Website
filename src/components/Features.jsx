import React from 'react';
import { useTranslation } from 'react-i18next';

const Features = () => {
    const { t } = useTranslation();
    return (
        <section className="py-24 relative overflow-hidden" id="features">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 dark:text-white">{t('features.title')}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">
                    <div className="md:col-span-2 row-span-2 bg-white dark:bg-card-dark rounded-3xl p-8 border border-border-light dark:border-border-dark relative overflow-hidden group hover:border-primary/50 transition-colors duration-300 shadow-lg">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all duration-500"></div>
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                    <span className="material-symbols-outlined text-primary text-2xl">bolt</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 dark:text-white">{t('features.items.efficiency.title')}</h3>
                                <p className="text-slate-600 dark:text-slate-400 max-w-md mb-4">
                                    {t('features.items.efficiency.desc1')}
                                </p>
                                <p className="text-slate-600 dark:text-slate-400 max-w-md">
                                    {t('features.items.efficiency.desc2')}
                                </p>
                            </div>

                            <div className="mt-8 border-t border-slate-100 dark:border-slate-800 pt-6">
                                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">{t('logosSection.title')}</h4>
                                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                                    <div className="flex gap-2 sm:gap-3">
                                        <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center p-1.5 shadow-sm border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-colors">
                                            <img src="/icons/networks/ethereum.svg" alt="Ethereum" className="w-full h-full object-contain" />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center p-1.5 shadow-sm border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-colors">
                                            <img src="/icons/networks/base.svg" alt="Base" className="w-full h-full object-contain" />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center p-1.5 shadow-sm border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-colors">
                                            <img src="/icons/networks/polygon.svg" alt="Polygon" className="w-full h-full object-contain" />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center p-1.5 shadow-sm border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-colors">
                                            <img src="/icons/networks/binance.svg" alt="BNB Chain" className="w-full h-full object-contain" />
                                        </div>
                                    </div>
                                    <div className="hidden sm:flex items-center gap-3">
                                        <div className="flex -space-x-4">
                                            <div className="w-8 h-8 rounded-full border-2 border-white dark:border-card-dark bg-white dark:bg-slate-800 p-1.5 z-10 shadow-sm relative"><img src="/icons/networks/gnosis.svg" alt="Gnosis" className="w-full h-full object-contain" /></div>
                                            <div className="w-8 h-8 rounded-full border-2 border-white dark:border-card-dark bg-white dark:bg-slate-800 p-1.5 z-20 shadow-sm relative"><img src="/icons/networks/avalanche.svg" alt="Avalanche" className="w-full h-full object-contain" /></div>
                                            <div className="w-8 h-8 rounded-full border-2 border-white dark:border-card-dark bg-white dark:bg-slate-800 p-1.5 z-30 shadow-sm relative"><img src="/icons/networks/arbitrum.svg" alt="Arbitrum" className="w-full h-full object-contain" /></div>
                                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white border-2 border-white dark:border-card-dark shadow-md z-40 transform translate-x-1 relative">
                                                <span className="material-symbols-outlined text-[14px] font-bold">add</span>
                                            </div>
                                        </div>
                                        <span className="text-[10px] font-bold text-slate-400 tracking-wide uppercase ml-2">{t('logosSection.moreComing')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-card-dark rounded-3xl p-8 border border-border-light dark:border-border-dark group hover:border-accent-orange/50 transition-colors duration-300 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-orange/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent-orange/20 transition-all duration-500"></div>
                        <div className="w-12 h-12 bg-accent-orange/10 rounded-xl flex items-center justify-center mb-4">
                            <span className="material-symbols-outlined text-accent-orange text-2xl">dns</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 dark:text-white">{t('features.items.directAccess.title')}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            {t('features.items.directAccess.desc')}
                        </p>
                    </div>

                    <div className="bg-white dark:bg-card-dark rounded-3xl p-8 border border-border-light dark:border-border-dark group hover:border-accent-cyan/50 transition-colors duration-300 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent-cyan/20 transition-all duration-500"></div>
                        <div className="w-12 h-12 bg-accent-cyan/10 rounded-xl flex items-center justify-center mb-4">
                            <span className="material-symbols-outlined text-accent-cyan text-2xl">percent</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 dark:text-white">
                            {t('features.items.lowCost.title')}
                            <span className="ml-2 inline-block whitespace-nowrap text-[10px] uppercase bg-accent-cyan/20 text-accent-cyan px-1.5 py-0.5 rounded font-bold align-middle">{t('hero.soon')}</span>
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            {t('features.items.lowCost.desc')}
                        </p>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Features;
