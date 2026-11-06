import type {MetadataRoute} from 'next';
import {site} from '../config/site';
import {services} from '../config/services';
import {entryPoints} from '../config/entry-points';
import {data as problems} from '../config/problems';

// Pages are listed without lastModified on purpose: a build-time "now" on every URL is
// noise that crawlers learn to ignore. Add real per-page dates here when you track them.
const staticRoutes = [
  '', '/services', '/pricing', '/resources',
  '/resources/where-to-find-beta-readers', '/resources/how-to-get-useful-beta-reader-feedback',
  '/resources/free-vs-paid-beta-readers', '/resources/beta-reader-critique-partner-editor',
  '/resources/how-to-ask-someone-to-beta-read-your-novel', '/resources/manuscript-readiness-checklist',
    '/team', '/about', '/faq', '/request-sample', '/how-we-read', '/proof',
    '/start/feedback-to-final-manuscript',
  '/problems', '/tools', '/tools/reader-friction', '/tools/feedback-conflict', '/start',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticRoutes,
    ...services.map((s) => `/services/${s.slug}`),
    ...Object.keys(problems).map((slug) => `/problems/${slug}`),
    ...entryPoints.map((e) => `/start/${e.slug}`),
  ];
  return [...new Set(paths)].map((path) => ({url: `${site.website}${path}`}));
}
