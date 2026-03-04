import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Efficiency = () => {
    const { t } = useTranslation();
    const amounts = [
        100, 200, 300, 400, 500, 600, 700, 800, 900,
        1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000,
        10000, 25000, 50000, 100000
    ];

    const [amountIndex, setAmountIndex] = useState(18); // Default to $10,000
    const [isDebtSwap, setIsDebtSwap] = useState(false); // Toggle between Collateral and Debt swap

    const tradeSize = amounts[amountIndex];

    // Fees calculation
    // Collateral Swap: Official = 25 BPS Protocol + 5 BPS Execution (0.30%) | LilSwap = 10 BPS (0.10%)
    // Debt Swap: Official = 0 BPS Protocol + ~5 BPS Execution (0.05%) | LilSwap = 0 BPS (0.00%)
    const officialFee = isDebtSwap ? (tradeSize * 0.0005) : (tradeSize * 0.0030);
    const lilSwapFee = isDebtSwap ? 0 : (tradeSize * 0.0010);

    const savings = officialFee - lilSwapFee;
    const savingsPercentage = officialFee > 0 ? Math.round((savings / officialFee) * 100) : 0;

    return (
        <section className="py-24 bg-white dark:bg-background-dark border-t border-border-light dark:border-border-dark relative overflow-hidden" id="savings">
            <div className="absolute inset-0 bg-primary/5 dark:bg-primary/5 pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="order-1 lg:order-1">
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 dark:text-white">{t('efficiency.title')}</h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                            {t('efficiency.subtitle')}
                        </p>

                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-cyan/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-accent-cyan">savings</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg dark:text-white">{t('efficiency.benefits.collat.title')}</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{t('efficiency.benefits.collat.desc')}</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary">price_check</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg dark:text-white">{t('efficiency.benefits.debt.title')}</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{t('efficiency.benefits.debt.desc')}</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="order-2 lg:order-2 bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                                <div>
                                    <h3 className="text-white font-bold text-xl flex items-center gap-2 mb-1">
                                        <span className="material-symbols-outlined text-accent-cyan">calculate</span>
                                        {t('efficiency.calculator.title')}
                                    </h3>
                                    <p className="text-sm text-slate-400">
                                        {t('efficiency.calculator.example')} <span className="text-white font-semibold">USDC &rarr; ETH</span>
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 bg-slate-800 p-1 rounded-xl border border-slate-700 w-full md:w-auto shrink-0">
                                    <button
                                        onClick={() => setIsDebtSwap(false)}
                                        className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${!isDebtSwap ? 'bg-primary text-white shadow-md' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                                    >
                                        {t('efficiency.calculator.collateralTab')}
                                    </button>
                                    <button
                                        onClick={() => setIsDebtSwap(true)}
                                        className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${isDebtSwap ? 'bg-primary text-white shadow-md' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                                    >
                                        {t('efficiency.calculator.debtTab')}
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-primary/20 border border-primary/30 rounded-xl p-4 flex flex-col items-center justify-center relative overflow-hidden text-center shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none"></div>
                                    <div className="text-xs text-white mb-2 font-bold flex items-center justify-center gap-1 relative z-10">
                                        {t('comparison.table.lilswap')} <span className="bg-primary/30 text-primary-200 px-1.5 py-0.5 rounded text-[10px] uppercase">{isDebtSwap ? "0.00%" : "0.10%"}</span>
                                    </div>
                                    <div className="text-2xl font-display font-bold text-white relative z-10">
                                        ${lilSwapFee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </div>
                                    <div className="text-[10px] text-primary/80 mt-1 uppercase tracking-wider relative z-10 font-semibold">{t('efficiency.calculator.estimatedFee')}</div>
                                </div>

                                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                                    <div className="text-xs text-slate-400 mb-2 font-medium">{t('efficiency.calculator.officialUI')} {isDebtSwap ? "(~0.05%)" : "(~0.30%)"}</div>
                                    <div className="text-2xl font-display font-medium text-slate-300">
                                        ${officialFee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </div>
                                    <div className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider">{t('efficiency.calculator.estimatedFee')}</div>
                                </div>
                            </div>

                            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 mt-auto">
                                <div className="flex justify-between items-end mb-4">
                                    <div>
                                        <div className="text-sm text-slate-400 font-medium mb-1">{t('efficiency.calculator.tradeSize')}</div>
                                        <div className="text-3xl font-display font-bold text-white">${tradeSize.toLocaleString()}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm text-accent-cyan font-bold mb-1">{t('efficiency.calculator.youSave')}</div>
                                        <div className="flex items-baseline justify-end gap-2">
                                            <div className="text-2xl font-display font-bold text-accent-cyan">${savings.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                                            <div className="text-xs font-bold text-accent-cyan/80 bg-accent-cyan/10 px-1.5 py-0.5 rounded">
                                                {savingsPercentage}%
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative pt-4 pb-2">
                                    <input
                                        type="range"
                                        min="0"
                                        max={amounts.length - 1}
                                        value={amountIndex}
                                        onChange={(e) => setAmountIndex(Number(e.target.value))}
                                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary relative z-10"
                                    />
                                </div>
                            </div>

                            <div className="text-center mt-6">
                                <p className="text-[11px] text-slate-500">{t('efficiency.calculator.disclaimer')}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Efficiency;
