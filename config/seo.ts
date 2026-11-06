import type {Metadata} from 'next';
import {site} from './site';

const ogImage = {url: '/og-image.png', width: 1200, height: 630, alt: `${site.name} — ${site.tagline}`};

/**
 * Adds a canonical, Open Graph and Twitter block to a page's metadata.
 * Next.js replaces (not merges) a parent's openGraph/twitter when a page sets its own,
 * so the image and site name are repeated here to keep share previews complete.
 */
/** Search results cut descriptions at roughly 155–160 characters; trim at a word boundary so they end cleanly. */
export function tidyDescription(text: string, max = 158): string {
  const t = text.replace(/\s+/g, ' ').trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:\-–—\s]+$/, '') + '…';
}

export function withSeo(meta: Metadata, path: string): Metadata {
  const url = `${site.website}${path}`;
  const title = typeof meta.title === 'string' ? meta.title : undefined;
  const ogTitle = title ? `${title} | ${site.name}` : undefined;
  const description = tidyDescription(meta.description ?? site.description);
  return {
    ...meta,
    description,
    alternates: {canonical: url, ...meta.alternates},
    openGraph: {type: 'website', siteName: site.name, title: ogTitle, description, url, images: [ogImage]},
    twitter: {card: 'summary_large_image', title: ogTitle, description, images: [ogImage.url]},
  };
}
