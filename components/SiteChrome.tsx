import Image from 'next/image';
import Link from 'next/link';
import {MobileNav} from './MobileNav';

export function Header(){
  return <header className="site-header">
    <div className="container nav">
      <Link className="brand" href="/" aria-label="Second Pair Editorial home">
        <Image priority width={820} height={420} className="brand-logo" src="/brand/second-pair-dark-wide.png" alt="Second Pair Editorial" />
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/how-we-read">How We Read</Link>
        <Link href="/problems">Problems</Link>
        <Link href="/services">Services</Link>
        <Link href="/proof">Proof</Link>
        <Link href="/team">Our Team</Link>
        <Link href="/about">About</Link>
      </nav>
      <Link className="button button-small desktop-cta" href="/request-sample">Start With Your Manuscript Question</Link>
      <MobileNav/>
    </div>
  </header>
}

export function Footer(){
  return <footer>
    <div className="container footer-grid">
      <div>
        <Image width={435} height={280} className="footer-logo" src="/brand/second-pair-dark.png" alt="Second Pair Editorial" />
        <p>Close reading and editorial help for authors.</p>
        <p>Find what is not working. Decide what to do about it.</p>
      </div>
      <div><b>Explore</b><Link href="/how-we-read">How We Read</Link><Link href="/problems">Problems</Link><Link href="/services">Services</Link><Link href="/proof">Proof</Link><Link href="/team">Our Team</Link><Link href="/about">About</Link><Link href="/resources">Resources</Link></div>
      <div><b>Start here</b><Link href="/request-sample">Start With Your Manuscript Question</Link><Link href="/start/feedback-to-final-manuscript">Feedback to Final Manuscript</Link><Link href="/pricing">Pricing</Link><Link href="/faq">FAQ</Link></div>
      <div><b>Legal</b><Link href="/privacy">Privacy &amp; Manuscript Security</Link><Link href="/terms">Service Terms</Link></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Second Pair Editorial</span><span>Manuscript reading, feedback and editing for authors.</span><a className="footer-cookie-settings" href="#cookie-settings" data-open-cookie-settings>Cookie settings</a></div>
  </footer>
}
