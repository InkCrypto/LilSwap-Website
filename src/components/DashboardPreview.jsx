import React from 'react';
import { useTranslation } from 'react-i18next';

const DashboardPreview = () => {
    const { t } = useTranslation();
    return (
        <section className="py-20 bg-slate-50 dark:bg-[#0f1623]" id="dashboard">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{t('dashboard.title')}</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        {t('dashboard.description')}
                    </p>
                </div>

                <div className="relative rounded-2xl bg-white dark:bg-card-dark border border-border-light dark:border-border-dark shadow-2xl overflow-hidden mx-auto max-w-5xl group transform hover:scale-[1.01] transition-transform duration-500">


                    <div className="bg-slate-100 dark:bg-[#1e293b] px-4 py-3 border-b border-border-light dark:border-border-dark flex items-center gap-4">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                        </div>
                        <div className="flex-1 bg-white dark:bg-[#0b1221] rounded-md py-1.5 px-3 h-7"></div>
                    </div>

                    <div className="p-6 bg-background-light dark:bg-background-dark min-h-[500px]">
                        <div className="flex justify-between items-center mb-8">
                            <div className="text-xl font-bold flex items-center gap-2 dark:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                    <rect x="16" y="16" width="6" height="6" rx="1" />
                                    <rect x="2" y="16" width="6" height="6" rx="1" />
                                    <rect x="9" y="2" width="6" height="6" rx="1" />
                                    <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
                                    <path d="M12 12V8" />
                                </svg>
                                {t('dashboard.positions')}
                            </div>
                            <div className="text-xs text-slate-400 flex items-center gap-2">
                                {t('dashboard.updatedNow')} <span className="material-symbols-outlined text-sm cursor-pointer hover:rotate-180 transition-transform">refresh</span>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6 mb-4 shadow-sm">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 pb-6 border-b border-border-light dark:border-border-dark gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center p-0.5 shadow-sm border border-slate-100 dark:border-slate-700">
                                        <img src="/icons/networks/ethereum.svg" alt="Ethereum" className="w-full h-full object-contain" />
                                    </div>
                                    <span className="font-bold text-lg dark:text-white">Ethereum</span>
                                    <span className="material-symbols-outlined text-slate-500 text-sm">open_in_new</span>
                                </div>

                                <div className="flex gap-8">
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">{t('dashboard.netWorth')}</div>
                                        <div className="font-mono text-xl font-bold dark:text-white">$50.402,34</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">{t('dashboard.netApy')}</div>
                                        <div className="font-mono text-xl font-bold text-green-500">2.06%</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">{t('dashboard.healthFactor')}</div>
                                        <div className="font-mono text-xl font-bold text-green-500">4.84</div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-xs text-slate-500 uppercase font-bold mb-4">{t('dashboard.supplies')}</h4>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-[#0b1221] border border-border-light dark:border-border-dark hover:border-primary/30 transition-colors">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center p-1 border border-slate-100 dark:border-slate-700">
                                                    <img src="/icons/tokens/usdc.svg" alt="USDC" className="w-full h-full object-contain" />
                                                </div>
                                                <div>
                                                    <div className="font-mono font-bold text-slate-900 dark:text-white">$60.096,04</div>
                                                    <div className="text-xs text-slate-500 font-mono">60103.257 USDC</div>
                                                </div>
                                            </div>
                                            <button className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-1 shadow-lg shadow-primary/20 transition-all active:scale-95">
                                                <span className="material-symbols-outlined text-sm font-bold">swap_horiz</span>
                                                {t('dashboard.swap')}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xs text-slate-500 uppercase font-bold mb-4">{t('dashboard.borrows')}</h4>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-[#0b1221] border border-border-light dark:border-border-dark">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center p-1 border border-slate-100 dark:border-slate-700">
                                                    <img src="/icons/tokens/weth.svg" alt="WETH" className="w-full h-full object-contain" />
                                                </div>
                                                <div>
                                                    <div className="font-mono font-bold text-slate-900 dark:text-white">$8.406,86</div>
                                                    <div className="text-xs text-slate-500 font-mono">4.5088 WETH</div>
                                                </div>
                                            </div>
                                            <button className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-1 shadow-lg shadow-primary/20 transition-all active:scale-95">
                                                <span className="material-symbols-outlined text-sm font-bold">swap_horiz</span>
                                                {t('dashboard.swap')}
                                            </button>
                                        </div>

                                        <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-[#0b1221] border border-border-light dark:border-border-dark">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center p-1 border border-slate-100 dark:border-slate-700">
                                                    <img src="/icons/tokens/wbtc.svg" alt="WBTC" className="w-full h-full object-contain" />
                                                </div>
                                                <div>
                                                    <div className="font-mono font-bold text-slate-900 dark:text-white">$1.286,85</div>
                                                    <div className="text-xs text-slate-500 font-mono">0.0200045 WBTC</div>
                                                </div>
                                            </div>
                                            <button className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-1 shadow-lg shadow-primary/20 transition-all active:scale-95">
                                                <span className="material-symbols-outlined text-sm font-bold">swap_horiz</span>
                                                {t('dashboard.swap')}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2 opacity-60">
                            {[
                                { name: 'BNB Chain', icon: '/icons/networks/binance.svg' },
                                { name: 'Polygon', icon: '/icons/networks/polygon.svg' },
                                { name: 'Base Network', icon: '/icons/networks/base.svg' },
                            ].map((network) => (
                                <div key={network.name} className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-4 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full flex items-center justify-center p-0.5 border border-slate-100 dark:border-slate-700">
                                            <img src={network.icon} alt={network.name} className="w-full h-full object-contain" />
                                        </div>
                                        <span className="font-bold dark:text-slate-300 text-sm">{network.name}</span>
                                    </div>
                                    <span className="text-xs text-slate-500 italic">{t('dashboard.noPositions')}</span>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardPreview;
