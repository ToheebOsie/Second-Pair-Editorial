const isProdBuild = process.env.NODE_ENV === 'production' && process.env.NEXT_PHASE !== 'phase-development-server';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

// A production build without these would publish localhost canonicals, sitemap URLs and a placeholder email.
if (isProdBuild && (!siteUrl || !contactEmail)) {
  throw new Error('Set NEXT_PUBLIC_SITE_URL and NEXT_PUBLIC_CONTACT_EMAIL before building for production (see .env.example).');
}

export const site = {
  name: 'Second Pair Editorial',
  shortName: 'SPE',
  founder: 'Harry Stones',
  founderTitle: 'Founder / Editorial Director',
  tagline: 'Find out what your manuscript is actually doing to a reader.',
  description: 'Close manuscript reading, beta feedback, developmental guidance and editing for authors who want to know where readers get lost, lose interest or connect with the story.',
  email: contactEmail || 'REPLACE-BEFORE-LAUNCH@example.com',
  website: (siteUrl || 'http://localhost:3000').replace(/\/+$/, ''),
} as const;
