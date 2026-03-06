import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LilLogo = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 1536 1536"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <rect x="0" y="0" width="1536" height="1536" rx="350" ry="350" fill="#643ab6" />
    <g transform="translate(768 768) scale(1.45) translate(-768 -768)">
      <g transform="translate(0,1536) scale(0.1,-0.1)" fill="#FFFFFF" stroke="none">
        <path d="M8348 10928 l-3 -412 -128 -22 c-593 -105 -1070 -425 -1300 -872 -116 -226 -157 -400 -157 -670 0 -375 94 -643 315 -902 106 -124 324 -288 504 -380 177 -90 463 -174 861 -254 306 -61 697 -150 800 -182 116 -35 243 -90 317 -136 177 -111 271 -303 252 -513 -18 -202 -137 -363 -349 -470 -164 -82 -335 -117 -585 -117 -291 -1 -463 37 -690 150 -100 49 -180 109 -258 192 -73 77 -98 117 -80 128 84 55 340 249 335 253 -12 11 -138 54 -387 134 -245 78 -861 278 -1129 366 -82 27 -152 47 -154 44 -4 -4 9 -428 23 -725 3 -58 9 -249 15 -425 6 -176 13 -375 16 -442 l6 -121 56 42 c32 23 112 83 180 134 67 51 124 92 127 92 3 0 48 -45 101 -100 97 -100 232 -210 359 -292 197 -127 526 -244 858 -305 l97 -17 0 -413 0 -413 500 0 500 0 0 415 c0 228 3 415 8 415 21 0 200 32 283 50 252 57 521 173 713 309 184 129 353 317 454 501 133 246 186 461 186 760 0 315 -64 549 -216 782 -218 335 -659 588 -1248 717 -52 12 -176 39 -275 61 -550 121 -682 154 -850 215 -265 96 -396 211 -447 394 -50 180 3 363 147 506 87 87 165 133 303 178 371 122 832 75 1115 -114 69 -46 157 -127 157 -144 0 -11 -11 -22 -205 -185 -60 -51 -111 -96 -113 -99 -1 -4 30 -15 70 -24 77 -18 323 -85 718 -194 360 -99 428 -118 670 -187 124 -35 227 -62 229 -60 2 2 -1 50 -7 106 -41 364 -147 1398 -159 1546 -3 39 -10 72 -14 72 -4 0 -34 -22 -66 -48 -32 -26 -115 -94 -185 -150 l-127 -103 -98 81 c-240 199 -550 344 -873 409 -52 10 -112 22 -132 25 l-38 7 0 409 0 410 -500 0 -500 0 -2 -412z" />
        <path d="M4380 7390 l0 -3110 1805 0 1805 0 -2 262 -3 262 -65 18 c-191 55 -311 93 -379 123 -170 73 -313 148 -436 229 l-130 86 -702 0 -703 0 0 2620 0 2620 -595 0 -595 0 0 -3110z" />
      </g>
    </g>
  </svg>
);

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
