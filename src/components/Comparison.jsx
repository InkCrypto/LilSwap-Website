import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, AlertTriangle, Banknote, Landmark, Network, Zap, Coins } from 'lucide-react';

const Comparison = () => {
    const { t } = useTranslation();

    const features = [
        {
            title: t('comparison.features.speed.title'),
            lilswap: {
                text: t('comparison.features.speed.lilswap'),
                icon: <Zap className="w-5 h-5 text-emerald-500" />,
                isPositive: true
            },
            official: {
                text: t('comparison.features.speed.official'),
                icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
                isPositive: false
            }
        },
        {
            title: t('comparison.features.collatFees.title'),
            lilswap: {
                text: t('comparison.features.collatFees.lilswap'),
                icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
                isPositive: true
            },
            official: {
                text: t('comparison.features.collatFees.official'),
                icon: <Banknote className="w-5 h-5 text-rose-500" />,
                isPositive: false
            }
        },
        {
            title: t('comparison.features.debtFees.title'),
            lilswap: {
                text: t('comparison.features.debtFees.lilswap'),
                icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
                isPositive: true
            },
            official: {
                text: t('comparison.features.debtFees.official'),
                icon: <Banknote className="w-5 h-5 text-rose-500" />,
                isPositive: false
            }
        },
        {
            title: t('comparison.features.execType.title'),
            lilswap: {
                text: t('comparison.features.execType.lilswap'),
                icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
                isPositive: true
            },
            official: {
                text: t('comparison.features.execType.official'),
                icon: <Network className="w-5 h-5 text-slate-400" />,
                isPositive: false
            }
        }
    ];

    return (
        <section className="py-20 bg-slate-50 dark:bg-[#0f1623]" id="comparison">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 dark:text-white">{t('comparison.title')}</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{t('comparison.subtitle')}</p>
                </div>

                {/* Mobile View: Cards */}
                <div className="grid grid-cols-1 gap-4 md:hidden">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-white dark:bg-card-dark rounded-2xl p-5 border border-border-light dark:border-border-dark shadow-sm">
                            <div className="flex items-center gap-2 mb-4">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base">{feature.title}</h3>
                                {feature.soon && (
                                    <span className="text-[10px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded uppercase">soon</span>
                                )}
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                {/* LilSwap Card */}
                                <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-3 border border-primary/20 flex flex-col items-center text-center">
                                    <span className="text-[10px] font-bold text-primary uppercase mb-2 tracking-wider">LilSwap</span>
                                    <div className="mb-2">{feature.lilswap.icon}</div>
                                    <span className="text-[11px] leading-tight font-bold text-slate-900 dark:text-white">
                                        {feature.lilswap.text}
                                    </span>
                                </div>

                                {/* Official Card */}
                                <div className="bg-slate-50 dark:bg-slate-800/30 rounded-xl p-3 border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
                                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase mb-2 tracking-wider">Interface Oficial</span>
                                    <div className="mb-2">{feature.official.icon}</div>
                                    <span className="text-[11px] leading-tight font-medium text-slate-500 dark:text-slate-400">
                                        {feature.official.text}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop View: Table */}
                <div className="hidden md:block overflow-hidden rounded-3xl border border-border-light dark:border-border-dark shadow-2xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
                            <thead className="bg-white dark:bg-card-dark text-slate-900 dark:text-white border-b border-border-light dark:border-border-dark">
                                <tr>
                                    <th className="px-6 py-6 font-display font-bold text-lg w-1/3">{t('comparison.table.feature')}</th>
                                    <th className="px-6 py-6 font-display font-bold text-lg w-1/3 text-center text-primary bg-primary/5">{t('comparison.table.lilswap')}</th>
                                    <th className="px-6 py-6 font-display font-bold text-lg w-1/3 text-center text-slate-400 dark:text-slate-500">{t('comparison.table.official')}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border-light dark:border-border-dark bg-white dark:bg-card-dark">
                                {features.map((feature, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-5 font-semibold text-slate-900 dark:text-white">
                                            {feature.title}
                                            {feature.soon && (
                                                <span className="ml-2 text-[10px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded align-middle">soon</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-5 text-center bg-primary/5">
                                            <div className="flex flex-col items-center gap-1.5">
                                                {feature.lilswap.icon}
                                                <span className="text-xs font-bold text-slate-900 dark:text-white">{feature.lilswap.text}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-center">
                                            <div className="flex flex-col items-center gap-1.5 text-slate-500 dark:text-slate-400">
                                                {feature.official.icon}
                                                <span className="text-xs font-medium">{feature.official.text}</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-12 flex justify-center">
                    <a
                        href="https://app.lilswap.xyz"
                        className="bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 flex items-center gap-3 active:scale-95 group"
                    >
                        <span>{t('navbar.swapNow')}</span>
                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
