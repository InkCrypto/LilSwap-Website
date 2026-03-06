import React from 'react';
import { useTranslation } from 'react-i18next';

const HowItWorks = () => {
    const { t } = useTranslation();

    const steps = [
        {
            icon: 'account_balance_wallet',
            title: t('howItWorks.steps.connect.title'),
            desc: t('howItWorks.steps.connect.desc'),
            color: 'text-primary'
        },
        {
            icon: 'monitoring',
            title: t('howItWorks.steps.review.title'),
            desc: t('howItWorks.steps.review.desc'),
            color: 'text-blue-500'
        },
        {
            icon: 'bolt',
            title: t('howItWorks.steps.execute.title'),
            desc: t('howItWorks.steps.execute.desc'),
            color: 'text-accent-cyan'
        }
    ];

    return (
        <section className="py-20 relative overflow-hidden" id="how-it-works">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 dark:text-white">{t('howItWorks.title')}</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg pt-2">
                        {t('howItWorks.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line for Desktop */}
                    <div className="hidden md:block absolute top-11 left-[15%] right-[15%] h-0.5 bg-linear-to-r from-primary/20 via-blue-500/20 to-accent-cyan/20 z-0"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 group flex flex-col items-center text-center">
                            {/* Step Number Badge */}
                            <div className="absolute top-0 right-1/2 translate-x-12 -translate-y-4 w-6 h-6 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform z-20">
                                {index + 1}
                            </div>

                            {/* Icon Container */}
                            <div className="w-24 h-24 rounded-2xl bg-white dark:bg-card-dark border border-border-light dark:border-border-dark flex items-center justify-center mb-6 shadow-xl group-hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                                <div className={`absolute inset-0 bg-current opacity-5 group-hover:opacity-10 transition-opacity ${step.color}`}></div>
                                <span className={`material-symbols-outlined text-[40px] ${step.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                                    {step.icon}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold mb-3 dark:text-white">{step.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-70">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
