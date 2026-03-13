import React from 'react';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
    const { t } = useTranslation();
    return (
        <section className="py-24 bg-slate-50 dark:bg-[#0f1623]" id="faq">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-display font-bold mb-12 text-center dark:text-white">{t('faq.title')}</h2>
                <div className="space-y-4">

                    <details className="group bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden">
                        <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                            <span className="font-medium text-lg dark:text-slate-200">{t('faq.q1.title')}</span>
                            <span className="transition group-open:rotate-180">
                                <span className="material-symbols-outlined text-slate-400">expand_more</span>
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 border-t border-border-light dark:border-border-dark pt-4">
                            {t('faq.q1.desc')}
                        </div>
                    </details>

                    <details className="group bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden">
                        <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                            <span className="font-medium text-lg dark:text-slate-200">{t('faq.q2.title')}</span>
                            <span className="transition group-open:rotate-180">
                                <span className="material-symbols-outlined text-slate-400">expand_more</span>
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 border-t border-border-light dark:border-border-dark pt-4">
                            {t('faq.q2.desc')}
                        </div>
                    </details>

                    <details className="group bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden">
                        <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                            <span className="font-medium text-lg dark:text-slate-200">{t('faq.q3.title')}</span>
                            <span className="transition group-open:rotate-180">
                                <span className="material-symbols-outlined text-slate-400">expand_more</span>
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 border-t border-border-light dark:border-border-dark pt-4">
                            {t('faq.q3.desc')}
                        </div>
                    </details>

                    <details className="group bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden">
                        <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                            <span className="font-medium text-lg dark:text-slate-200">{t('faq.q4.title')}</span>
                            <span className="transition group-open:rotate-180">
                                <span className="material-symbols-outlined text-slate-400">expand_more</span>
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 border-t border-border-light dark:border-border-dark pt-4">
                            {t('faq.q4.desc')}
                        </div>
                    </details>

                    <details className="group bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden">
                        <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                            <span className="font-medium text-lg dark:text-slate-200">{t('faq.q5.title')}</span>
                            <span className="transition group-open:rotate-180">
                                <span className="material-symbols-outlined text-slate-400">expand_more</span>
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 border-t border-border-light dark:border-border-dark pt-4">
                            {t('faq.q5.desc')}
                        </div>
                    </details>

                </div>
            </div>
        </section>
    );
};

export default FAQ;
