"use client";

import {useEffect, useState} from "react";

const CONSENT_KEY = "spe_cookie_consent_v1";
const GA_ID = "G-RB9DS44MBZ";

type ConsentChoice = {
  analytics: boolean;
  savedAt: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
    __speGoogleAnalyticsLoaded?: boolean;
  }
}

function enableGoogleAnalytics() {
  if (typeof window === "undefined") return;

  // Re-acceptance after a withdrawal must restore consent even when the script
  // was already loaded earlier in this browser session.
  if (window.__speGoogleAnalyticsLoaded) {
    window.gtag?.("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied"
    });
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };
  // Explicitly deny consent by default before any Google tag configuration.
  // The tag is only loaded after the visitor has opted in; this default also
  // protects against future changes that might load the tag earlier.
  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    functionality_storage: "denied",
    personalization_storage: "denied",
    security_storage: "granted"
  });
  window.gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied"
  });
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);

  const existingScript = document.querySelector<HTMLScriptElement>(
    `script[src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"]`
  );
  if (!existingScript) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.onload = () => {
      window.__speGoogleAnalyticsLoaded = true;
    };
    document.head.appendChild(script);
  } else {
    window.__speGoogleAnalyticsLoaded = true;
  }
}

function readChoice(): ConsentChoice | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentChoice;
    if (typeof parsed.analytics !== "boolean") return null;
    return parsed;
  } catch {
    return null;
  }
}

export function ConsentManager() {
  const [ready, setReady] = useState(false);
  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    const saved = readChoice();
    setChoice(saved);
    setAnalyticsAllowed(saved?.analytics ?? false);
    setReady(true);
    if (saved?.analytics) enableGoogleAnalytics();
  }, []);

  useEffect(() => {
    const openSettings = () => {
      const saved = readChoice();
      setAnalyticsAllowed(saved?.analytics ?? false);
      setSettingsOpen(true);
    };
    window.addEventListener("spe:open-cookie-settings", openSettings);
    const handleFooterClick = (event: MouseEvent) => {
      const target = event.target;
      if (target instanceof Element && target.closest("[data-open-cookie-settings]")) {
        event.preventDefault();
        openSettings();
      }
    };
    document.addEventListener("click", handleFooterClick);
    return () => {
      window.removeEventListener("spe:open-cookie-settings", openSettings);
      document.removeEventListener("click", handleFooterClick);
    };
  }, []);

  useEffect(() => {
    if (!settingsOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSettingsOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [settingsOpen]);

  function saveConsent(analytics: boolean) {
    const saved: ConsentChoice = {analytics, savedAt: new Date().toISOString()};
    try {
      window.localStorage.setItem(CONSENT_KEY, JSON.stringify(saved));
    } catch {
      // If storage is unavailable, honour the current page choice without blocking use.
    }
    setChoice(saved);
    setAnalyticsAllowed(analytics);
    setSettingsOpen(false);
    window.dispatchEvent(new CustomEvent("spe:consent-updated", {detail: {analytics}}));
    if (analytics) enableGoogleAnalytics();
    // A declined choice never loads Google Analytics. If a visitor withdraws consent
    // after the script has loaded, stop future page views by removing the config cookie
    // and issuing a denied consent update where the gtag API is available.
    if (!analytics && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied"
      });
      document.cookie.split(";").forEach((part) => {
        const name = part.split("=")[0].trim();
        if (name.startsWith("_ga")) {
          document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
        }
      });
    }
  }

  if (!ready) return null;

  return (
    <>
      {!choice && !settingsOpen && (
        <section className="cookie-banner" role="dialog" aria-label="Cookie consent" aria-describedby="cookie-banner-description">
          <div className="cookie-banner-copy">
            <span className="eyebrow">YOUR PRIVACY CHOICES</span>
            <h2>Help us improve the site.</h2>
            <p id="cookie-banner-description">
              We use optional Google Analytics to understand how visitors use Second Pair Editorial.
              You can accept or reject analytics, or choose your preferences. Your choice will not
              affect your ability to use the site.
            </p>
            <p className="cookie-banner-policy"><a href="/privacy">Read our privacy information</a></p>
          </div>
          <div className="cookie-banner-actions">
            <button className="button" type="button" onClick={() => saveConsent(true)}>Accept all</button>
            <button className="button cookie-button-secondary" type="button" onClick={() => saveConsent(false)}>Reject optional</button>
            <button className="cookie-settings-link" type="button" onClick={() => setSettingsOpen(true)}>Cookie settings</button>
          </div>
        </section>
      )}

      {settingsOpen && (
        <div className="cookie-backdrop" role="presentation">
          <section className="cookie-preferences" role="dialog" aria-modal="true" aria-labelledby="cookie-preferences-title">
            <span className="eyebrow">PRIVACY PREFERENCES</span>
            <h2 id="cookie-preferences-title">Choose what you allow.</h2>
            <p>Essential storage remembers your privacy choice. Optional analytics also enables limited first-party enquiry attribution and Google Analytics, so these features stay off unless you allow them.</p>
            <div className="cookie-preference-row">
              <div>
                <strong>Essential storage</strong>
                <p>Stores your privacy choice so we do not ask you on every page visit.</p>
              </div>
              <span className="cookie-always-on">Always on</span>
            </div>
            <label className="cookie-preference-row cookie-toggle-row">
              <span>
                <strong>Google Analytics</strong>
                <span className="cookie-preference-description">Measures website visits and usage after you allow it.</span>
              </span>
              <input
                type="checkbox"
                checked={analyticsAllowed}
                onChange={(event) => setAnalyticsAllowed(event.target.checked)}
              />
            </label>
            <div className="cookie-preference-actions">
              <button className="button" type="button" onClick={() => saveConsent(analyticsAllowed)}>Save preferences</button>
              <button className="button cookie-button-secondary" type="button" onClick={() => saveConsent(false)}>Reject optional</button>
              <button className="cookie-settings-link" type="button" onClick={() => setSettingsOpen(false)}>Cancel</button>
            </div>
          </section>
        </div>
      )}

      {choice && !settingsOpen && (
        <button
          className="cookie-reopen"
          type="button"
          onClick={() => {
            setAnalyticsAllowed(choice.analytics);
            setSettingsOpen(true);
          }}
        >
          Cookie settings
        </button>
      )}
    </>
  );
}
