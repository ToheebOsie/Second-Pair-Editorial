'use client';
import Link from 'next/link';
import {useEffect} from 'react';

export default function ErrorPage({error, reset}: {error: Error & {digest?: string}; reset: () => void}) {
  useEffect(() => {
    // Surfaces in the hosting logs / browser console so the failure can be traced by its digest.
    console.error('Page error', error.digest ?? '', error);
  }, [error]);
  return <main>
    <section className="page-hero"><div className="container narrow">
      <span className="eyebrow">SOMETHING WENT WRONG</span>
      <h1>This page didn’t load properly.</h1>
      <p>It’s on our side, not yours. Try again, and if it keeps happening, go back to the homepage or send us a note and we’ll sort it out.</p>
      <div className="actions">
        <button className="button" type="button" onClick={() => reset()}>Try again</button>
        <Link className="text-link" href="/">Go to the homepage →</Link>
        <Link className="text-link" href="/request-sample">Contact us →</Link>
      </div>
    </div></section>
  </main>;
}
