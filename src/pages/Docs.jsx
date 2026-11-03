import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LilLogo from '../components/LilLogo.jsx';

function Docs() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/', { replace: true });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0516] flex items-center justify-center relative overflow-hidden transition-colors duration-300">

      {/* Background decorations matching Hero */}
      <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-50 pointer-events-none"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center">
        <div className="mb-8 p-4 bg-primary/5 rounded-full border border-primary/20 shadow-lg shadow-primary/10">
          <LilLogo className="w-16 h-16 sm:w-20 sm:h-20" />
        </div>

        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight leading-tight text-slate-900 dark:text-white">
          {t('docs.title1')} <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent-cyan text-glow">{t('docs.title2')}</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-xl mx-auto">
          {t('docs.description')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            onClick={handleBack}
            className="w-full sm:w-auto bg-slate-100 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 px-8 py-3.5 rounded-xl font-bold transition-all hover:bg-slate-200 dark:hover:bg-slate-800/50 text-sm sm:text-base flex items-center justify-center gap-2 active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('docs.backToHome')}</span>
          </a>
          <a
            href="https://app.lilswap.xyz"
            className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 text-sm sm:text-base flex items-center justify-center gap-2 active:scale-95"
          >
            <span>{t('docs.accessApp')}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Docs;
