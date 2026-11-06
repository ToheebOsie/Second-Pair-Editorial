import type { Metadata, Viewport } from 'next';
import './globals.css';
import {Header, Footer} from '../components/SiteChrome';
import {OrganizationSchema} from '../components/StructuredData';
import {VisitContext} from '../components/VisitContext';
import {ConsentManager} from '../components/ConsentManager';
import {site} from '../config/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.website),
  title: {default: 'Second Pair Editorial | Manuscript Intelligence & Editorial Development', template: '%s | Second Pair Editorial'},
  description: site.description,
  applicationName: site.name,
  authors: [{name: site.founder}], creator: site.name, publisher: site.name,
  robots: {index: true, follow: true},
  verification: {google: 'nun-pnakn1zyF9GGXGoOjthk6_iS072abJ1KYvTVOIg'},
  openGraph: {type: 'website', siteName: site.name, title: 'Second Pair Editorial | Manuscript Intelligence & Editorial Development', description: site.description, url: site.website, images: [{url: '/og-image.png', width: 1200, height: 630, alt: 'Second Pair Editorial — Find out what your manuscript is actually doing to a reader.'}]},
  twitter: {card: 'summary_large_image', title: 'Second Pair Editorial | Manuscript Intelligence & Editorial Development', description: site.description, images: ['/og-image.png']},
};
export const viewport: Viewport = {width: 'device-width', initialScale: 1};
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <VisitContext/>
        <OrganizationSchema/>
        <Header/>
        {children}
        <Footer/>
        <ConsentManager/>
      </body>
    </html>
  );
}
