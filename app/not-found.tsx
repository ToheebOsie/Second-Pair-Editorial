import type {Metadata} from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'The page you were looking for could not be found.',
  robots: {index: false, follow: true},
};

export default function NotFound() {
  return <main>
    <section className="page-hero"><div className="container narrow">
      <span className="eyebrow">404 · PAGE NOT FOUND</span>
      <h1>We couldn’t find that page.</h1>
      <p>The link may be out of date, or the address may have a typo. These are good places to pick up the thread.</p>
      <div className="actions">
        <Link className="button" href="/">Go to the homepage</Link>
        <Link className="text-link" href="/problems">Browse manuscript problems →</Link>
        <Link className="text-link" href="/services">See our services →</Link>
        <Link className="text-link" href="/request-sample">Start With Your Manuscript Question →</Link>
      </div>
    </div></section>
  </main>;
}
