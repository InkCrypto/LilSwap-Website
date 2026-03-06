import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import App from './App.jsx'

const rootEl = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Use hydrateRoot when the server/build has pre-populated the root div
// (the data-prerendered attribute is set by prerender.js at build time).
// Fall back to createRoot in dev mode where no static HTML exists.
if (rootEl.firstElementChild?.dataset.prerendered) {
  hydrateRoot(rootEl, app)
} else {
  createRoot(rootEl).render(app)
}
