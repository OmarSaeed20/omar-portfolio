// Global declarations for Google Consent Mode v2 / gtag.js
// gtag is loaded inline in index.html

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }

  // eslint-disable-next-line no-var
  var gtag: (...args: unknown[]) => void;
}

export {};