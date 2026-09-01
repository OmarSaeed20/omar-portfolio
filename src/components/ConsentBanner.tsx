import { useState, useEffect } from "react";

const CONSENT_KEY = "cookie-consent";

const ConsentBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === "granted") {
      updateConsent(true);
    } else if (stored === "denied") {
      updateConsent(false);
    } else {
      // No prior choice — show banner after a brief delay so it doesn't
      // flash before the page paints.
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChoice = (granted: boolean) => {
    localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
    updateConsent(granted);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 z-[100] mx-auto max-w-md rounded-2xl border border-[var(--glass-border)] bg-[var(--card)] p-5 shadow-lg"
      style={{ boxShadow: "var(--card-shadow)" }}
    >
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
        I use Google Analytics to understand which content is useful to visitors.
        No tracking cookies are set until you accept.{" "}
        <a
          href="https://policies.google.com/technologies/cookies"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent-foreground)] underline hover:opacity-80"
        >
          Learn more
        </a>
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => handleChoice(true)}
          className="flex-1 px-4 py-2.5 rounded-lg bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-text)] text-sm font-semibold hover:bg-[var(--btn-secondary-hover)] transition-colors"
        >
          Accept
        </button>
        <button
          onClick={() => handleChoice(false)}
          className="flex-1 px-4 py-2.5 rounded-lg border border-[var(--glass-border)] text-[var(--text-muted)] text-sm font-semibold hover:bg-[var(--glass-bg-hover)] transition-colors"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

function updateConsent(granted: boolean) {
  if (typeof window !== "undefined" && typeof gtag === "function") {
    gtag("consent", "update", {
      analytics_storage: granted ? "granted" : "denied",
    });
  }
}

export default ConsentBanner;