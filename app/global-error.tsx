'use client';

export default function GlobalError({reset}: {error: Error & {digest?: string}; reset: () => void}) {
  return <html lang="en"><body style={{margin: 0, fontFamily: 'Helvetica, Arial, sans-serif', background: '#faf9f6', color: '#1e2a33'}}>
    <main style={{maxWidth: 640, margin: '0 auto', padding: '96px 24px'}}>
      <h1 style={{fontFamily: 'Georgia, serif', fontWeight: 500}}>Something went wrong.</h1>
      <p>The site hit an unexpected problem. Please try again in a moment.</p>
      <button type="button" onClick={() => reset()} style={{padding: '12px 20px', background: '#1e2a33', color: '#faf9f6', border: 0, cursor: 'pointer'}}>Try again</button>
    </main>
  </body></html>;
}
