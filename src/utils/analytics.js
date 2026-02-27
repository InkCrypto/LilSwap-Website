import { onLCP, onCLS, onINP, onFCP, onTTFB } from 'web-vitals';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

/**
 * Ensures the Google Analytics `gtag` function is available in the global scope.
 */
function getGtag() {
    window.dataLayer = window.dataLayer || [];
    if (!window.gtag) {
        window.gtag = function () {
            window.dataLayer.push(arguments);
        };
    }
    return window.gtag;
}

/**
 * Initializes Google Analytics with the Measurement ID.
 */
export function initAnalytics() {
    if (!GA_MEASUREMENT_ID) {
        console.warn('Google Analytics Measurement ID is not set. Analytics will not be initialized.');
        return;
    }

    // Prevent polluting production data during local testing
    if (import.meta.env.DEV) {
        console.log('[Analytics - DEV MODE] Initialization skipped. Data will not be sent to GA4.');
        return;
    }

    // Load the GA script dynamically
    const scriptId = 'google-analytics';
    if (document.getElementById(scriptId)) return;

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    const gtag = getGtag();
    gtag('js', new Date());

    // Configure the tag, sending page_view by default
    gtag('config', GA_MEASUREMENT_ID, {
        send_page_view: true,
    });

    console.log('Google Analytics initialized.');
}

/**
 * Tracks a custom event in Google Analytics.
 * @param {string} eventName - The name of the event (e.g., 'button_click').
 * @param {object} eventParams - Additional parameters for the event.
 */
export function trackEvent(eventName, eventParams = {}) {
    if (!GA_MEASUREMENT_ID) return;
    if (import.meta.env.DEV) {
        console.log(`[Analytics - DEV MODE] Event tracked: ${eventName}`, eventParams);
        return;
    }

    const gtag = getGtag();
    gtag('event', eventName, eventParams);
}

/**
 * Sends a Web Vital metric to Google Analytics.
 * @param {object} metric - The metric object from web-vitals.
 */
function sendToAnalytics(metric) {
    if (!GA_MEASUREMENT_ID) return;

    if (import.meta.env.DEV) {
        console.log(`[Analytics - DEV MODE] Web Vital measured: ${metric.name}`, metric);
        return;
    }

    const gtag = getGtag();

    // As per Google recommendations, non-interaction events like web vitals
    // can be tracked with `event_category` = 'Web Vitals'
    gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value), // values must be integers
        event_label: metric.id, // id unique to current page load
        non_interaction: true,
    });
}

/**
 * Starts measuring and reporting all Web Vitals.
 */
export function reportWebVitals() {
    onCLS(sendToAnalytics);
    onLCP(sendToAnalytics);
    onINP(sendToAnalytics);
    onFCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
}
