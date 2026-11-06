'use client';

import {useEffect} from 'react';
import {usePathname} from 'next/navigation';

/**
 * Keeps minimal, session-only attribution context so an enquiry can be tied
 * to the page that first brought the visitor in and the page they acted from.
 * No pageview stream or personal identifiers are sent anywhere.
 */
export function VisitContext() {
  const pathname = usePathname();

  useEffect(() => {
    const captureAttribution = () => {
      try {
        const consent = window.localStorage.getItem('spe_cookie_consent_v1');
        const allowed = consent ? (JSON.parse(consent) as {analytics?: boolean}).analytics === true : false;
        if (!allowed) {
          // Withdrawal also removes attribution collected during an earlier opt-in.
          for (const key of ['first_landing', 'referrer', 'last_page', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']) {
            window.sessionStorage.removeItem(`spe_${key}`);
          }
          return;
        }
      } catch {
        return;
      }
      try {
      const store = (key: string, value: string) => {
        if (value) window.sessionStorage.setItem(`spe_${key}`, value.slice(0, 500));
      };
      const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
      const params = new URLSearchParams(window.location.search);
      const attribution = new URLSearchParams();
      for (const key of utmKeys) {
        const value = params.get(key);
        if (value) attribution.set(key, value);
      }
      const attributionQuery = attribution.toString();
      const landingUrl = `${window.location.pathname}${attributionQuery ? `?${attributionQuery}` : ''}`;
      let safeReferrer = '';
      try {
        if (document.referrer) {
          const parsed = new URL(document.referrer);
          safeReferrer = `${parsed.origin}${parsed.pathname}`;
        }
      } catch {
        safeReferrer = '';
      }
      if (!window.sessionStorage.getItem('spe_first_landing')) {
        store('first_landing', landingUrl);
        store('referrer', safeReferrer);
        for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']) {
          store(key, new URLSearchParams(window.location.search).get(key) || '');
        }
      }
      if (window.location.pathname !== '/request-sample') {
        store('last_page', window.location.pathname);
      }
      } catch {
        // Attribution is optional and must never block navigation or enquiry submission.
      }
    };
    captureAttribution();
    window.addEventListener('spe:consent-updated', captureAttribution);
    return () => window.removeEventListener('spe:consent-updated', captureAttribution);
  }, [pathname]);

  return null;
}
