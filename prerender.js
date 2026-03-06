/**
 * prerender.js — Build-time static HTML injection for SEO
 *
 * Runs after `vite build`. Reads the English translations and injects a
 * static HTML skeleton into dist/index.html so crawlers can see the page
 * structure without executing JavaScript.
 *
 * No external dependencies — only Node.js built-ins.
 * No Node.js runtime required in production (Hostinger compatible).
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load the English translations (source of truth for SEO content)
const en = JSON.parse(
    readFileSync(join(__dirname, 'src/locales/en.json'), 'utf-8')
);

// ---------------------------------------------------------------------------
// Build the static HTML skeleton
// Only crawl-relevant elements are included here — the full UI is rendered
// by React on hydration.
// ---------------------------------------------------------------------------
const staticHTML = `
<div data-prerendered="true" aria-hidden="false">
  <!-- Hero -->
  <section>
    <h1>${en.hero.title1} ${en.hero.title2}</h1>
    <p>${en.hero.description}</p>
    <p>${en.hero.trustMessage}</p>
  </section>

  <!-- Features -->
  <section>
    <h2>${en.features.title}</h2>
    <h3>${en.features.items.efficiency.title}</h3>
    <h3>${en.features.items.directAccess.title}</h3>
    <h3>${en.features.items.lowCost.title}</h3>
  </section>

  <!-- Dashboard / Swap-Focused Management -->
  <section>
    <h2>${en.dashboard.title}</h2>
    <p>${en.dashboard.description}</p>
  </section>

  <!-- How It Works -->
  <section>
    <h2>${en.howItWorks.title}</h2>
    <p>${en.howItWorks.subtitle}</p>
    <h3>${en.howItWorks.steps.connect.title}</h3>
    <h3>${en.howItWorks.steps.review.title}</h3>
    <h3>${en.howItWorks.steps.execute.title}</h3>
  </section>

  <!-- Comparison -->
  <section>
    <h2>${en.comparison.title}</h2>
    <p>${en.comparison.subtitle}</p>
  </section>

  <!-- Efficiency / Savings -->
  <section>
    <h2>${en.efficiency.title}</h2>
    <p>${en.efficiency.subtitle}</p>
    <h3>${en.efficiency.benefits.collat.title}</h3>
    <h3>${en.efficiency.benefits.debt.title}</h3>
  </section>

  <!-- Roadmap -->
  <section>
    <h2>${en.roadmap.title}</h2>
    <p>${en.roadmap.subtitle}</p>
    <h3>${en.roadmap.phase1.title}: ${en.roadmap.phase1.subtitle}</h3>
    <h3>${en.roadmap.phase2.title}: ${en.roadmap.phase2.subtitle}</h3>
    <h3>${en.roadmap.phase3.title}: ${en.roadmap.phase3.subtitle}</h3>
  </section>

  <!-- FAQ -->
  <section>
    <h2>${en.faq.title}</h2>
    <h3>${en.faq.q1.title}</h3>
    <p>${en.faq.q1.desc}</p>
    <h3>${en.faq.q2.title}</h3>
    <p>${en.faq.q2.desc}</p>
    <h3>${en.faq.q3.title}</h3>
    <p>${en.faq.q3.desc}</p>
    <h3>${en.faq.q4.title}</h3>
    <p>${en.faq.q4.desc}</p>
  </section>

  <!-- CTA -->
  <section>
    <h2>${en.cta.title}</h2>
    <p>${en.cta.subtitle}</p>
  </section>
</div>
`.trim();

// ---------------------------------------------------------------------------
// Inject into the built index.html
// ---------------------------------------------------------------------------
const distIndexPath = join(__dirname, 'dist/index.html');
const html = readFileSync(distIndexPath, 'utf-8');

const EMPTY_ROOT = '<div id="root"></div>';
const FILLED_ROOT = `<div id="root">${staticHTML}</div>`;

if (!html.includes(EMPTY_ROOT)) {
    console.warn(
        '[prerender] Warning: Could not find empty root div in dist/index.html. ' +
        'Skipping injection (root may already have content).'
    );
    process.exit(0);
}

const result = html.replace(EMPTY_ROOT, FILLED_ROOT);
writeFileSync(distIndexPath, result, 'utf-8');

console.log('[prerender] ✓ Static HTML injected into dist/index.html');
