import type {Metadata} from 'next';
import Link from 'next/link';
import {site} from '../../../config/site';
import {withSeo} from '../../../config/seo';

export const metadata: Metadata = withSeo({
  title: 'Where to Find Beta Readers for Your Novel',
  description: 'Explore free beta-reader communities, Goodreads groups and Discord writing communities, learn how to ask for useful feedback, and decide when professional manuscript feedback may help.',
  alternates: {canonical: `${site.website}/resources/where-to-find-beta-readers`},
  openGraph: {
    title: 'Where to Find Beta Readers for Your Novel',
    description: 'A practical guide to free communities, reader exchanges and professional feedback for authors.',
    url: `${site.website}/resources/where-to-find-beta-readers`,
    type: 'article',
  },
}, '/resources/where-to-find-beta-readers');

const discordCommunities = [
  {label: 'The Writing Hub', url: 'https://discord.com/channels/764663217624055818/1419115911436173453'},
  {label: "Writer's Retreat", url: 'https://discord.com/channels/1481323868865171528/1492339256306434199'},
  {label: 'Writer Roundtable', url: 'https://discord.com/channels/1311383674088067163/1351524018842370090'},
  {label: 'Words Alike', url: 'https://discord.com/channels/569145294676164608'},
] as const;

const goodreadsGroups = [
  {
    name: 'FREE BOOKS for Book lovers: ARC & Polished Manuscript Readers for Authors',
    url: 'https://www.goodreads.com/group/show/205386-free-books-for-book-lovers-arc-polished-manuscript-readers-for-author',
    fit: 'A starting point for authors looking for readers for polished manuscripts and advance reader copies.',
    note: 'Read the group rules and post in the appropriate request area. The group has rules about where service offers may be posted.',
  },
  {
    name: 'Get Honest Book Reviews without Review Swaps',
    url: 'https://www.goodreads.com/group/show/3669208-get-honest-book-reviews-without-review-swaps',
    fit: 'More relevant to book reviews and reader discovery than to a structured manuscript report.',
    note: 'A public review is not the same thing as private beta-reading feedback. Check the current rules before posting.',
  },
  {
    name: 'Advance & Beta Readers',
    url: 'https://www.goodreads.com/group/show/416370-advance-beta-readers',
    fit: 'A place to explore advance-reader and beta-reader connections.',
    note: 'The group has content restrictions. Check whether your manuscript fits its current rules before sharing details.',
  },
  {
    name: 'Alpha Betas',
    url: 'https://www.goodreads.com/group/show/110285-alpha-betas',
    fit: 'A community focused on alpha and beta reading, including feedback on works in progress.',
    note: 'Volunteer availability and turnaround are not guaranteed. Agree on scope and timing before exchanging files.',
  },
  {
    name: 'Beta readers and author',
    url: 'https://www.goodreads.com/group/show/1155263-beta-readers-and-author',
    fit: 'A group whose stated purpose includes helping authors find free or paid beta-reading options.',
    note: 'State your genre, word count, manuscript stage, feedback goals and expected timeline clearly.',
  },
] as const;

const questions = [
  {q: 'How many beta readers should I find?', a: 'There is no universal number. A few readers who fit your genre and can explain their reactions may be more useful than a large group whose expectations do not match the book. Start with the question you need answered and look for recurring patterns rather than counting votes.'},
  {q: 'Should I use free and paid beta readers?', a: 'You can. Free readers can provide valuable reactions, and a paid reader may be useful when you need a defined scope, a committed timeline or a more structured report. You do not automatically need both; choose based on what you still need to learn.'},
  {q: 'Is a beta reader the same as a book reviewer?', a: 'No. A beta reader usually responds to a manuscript before publication and may discuss characters, pacing, clarity and the reading experience. A book reviewer generally responds to a published or review-ready book for a public audience. Some people do both, but the tasks and expected deliverables differ.'},
  {q: 'Should I send an unfinished draft to beta readers?', a: 'It depends on what you want feedback on. Alpha readers or critique partners may be suitable for a developing draft. Many beta readers expect a complete or nearly complete manuscript. State the draft stage clearly before asking someone to read.'},
  {q: 'When should I consider a professional beta reader or editor?', a: 'Consider paid help when you need a clearly agreed scope, a dependable deadline, focused feedback or a more structured account of recurring issues. If you are unsure what kind of help you need, compare the services first rather than assuming that a full edit is necessary.'},
];

export default function WhereToFindBetaReaders(){
  return <main>
    <section className="page-hero"><div className="container narrow">
      <span className="eyebrow">AUTHOR RESOURCE · READER DISCOVERY</span>
      <h1>Where to Find Beta Readers for Your Novel</h1>
      <p>Free communities, reader exchanges and professional options—plus practical advice for choosing the kind of feedback your manuscript needs.</p>
      <p className="muted">You do not have to hire an editor to get started. The aim is to find readers who fit your book and understand what you want them to help you learn.</p>
    </div></section>

    <section className="section"><div className="container narrow">
      <h2>Start by deciding what kind of feedback you need</h2>
      <p>“I need someone to read my book” can mean several different things. The right place to look depends on the stage of the manuscript and the question you want answered.</p>
      <div className="detail-box">
        <p><strong>Alpha reader:</strong> feedback while the story is still taking shape.</p>
        <p><strong>Beta reader:</strong> a response to a complete or nearly complete draft, often covering the overall reading experience, characters, pacing and clarity.</p>
        <p><strong>Critique partner:</strong> a fellow writer who gives and receives feedback, often through an agreed exchange.</p>
        <p><strong>Advance reader or reviewer:</strong> someone who reads a polished or publication-ready book, often with the possibility of a public review. That is not automatically the same as detailed manuscript feedback.</p>
        <p><strong>Professional editor:</strong> someone engaged for a defined editorial task, which might be a reader report, manuscript diagnosis, developmental editing or sentence-level work.</p>
      </div>
      <p>If you are not sure which role fits, our <Link href="/services">editorial services overview</Link> explains what each type of work is intended to do.</p>
    </div></section>

    <section className="section alt"><div className="container narrow">
      <span className="eyebrow">FREE COMMUNITIES</span>
      <h2>Goodreads groups for finding readers</h2>
      <p>These groups are possible starting points, not endorsements or guarantees that someone will take on your manuscript. Membership, activity and rules can change, so check the group page before posting or sharing a file.</p>
      <div className="routing-list">{goodreadsGroups.map((group)=> <article className="routing-row" key={group.url}>
        <div><h3>{group.name}</h3><p>{group.fit}</p><p><strong>Before posting:</strong> {group.note}</p><a className="text-link" href={group.url} target="_blank" rel="noopener noreferrer">Visit Goodreads group ↗</a></div>
      </article>)}</div>
    </div></section>

    <section className="section"><div className="container narrow">
      <span className="eyebrow">DISCORD COMMUNITIES</span>
      <h2>Writing communities on Discord</h2>
      <p>The following Discord communities have been checked by Second Pair Editorial for relevance to this guide. A channel link may require you to join its server first, and community rules still apply.</p>
      <div className="detail-box">{discordCommunities.map((community, i)=><p key={community.url}><strong>{i+1}. {community.label}</strong><br/><a className="text-link" href={community.url} target="_blank" rel="noopener noreferrer">Open Discord community ↗</a></p>)}</div>
      <p>Before sharing your manuscript, check the server’s rules, use its designated request channel and ask about expectations. Avoid posting a full manuscript publicly unless you understand who can access it and have decided that is appropriate.</p>
    </div></section>

    <section className="section alt"><div className="container narrow">
      <h2>How to improve your chances of finding a useful reader</h2>
      <p>A good request helps potential readers decide whether they can take on the project. Include enough information to establish fit without giving away more personal or manuscript information than necessary.</p>
      <ol>
        <li><strong>Identify the genre and audience.</strong> Mention the category, intended readership and any genre conventions that matter.</li>
        <li><strong>State the manuscript stage and length.</strong> Include an approximate word count and whether the draft is complete.</li>
        <li><strong>Explain what kind of feedback you want.</strong> For example, character motivation, pacing, clarity, emotional impact or overall reader response.</li>
        <li><strong>Set a realistic timeline.</strong> Ask whether the reader is available instead of assuming a volunteer can meet a particular deadline.</li>
        <li><strong>Agree on expectations.</strong> Clarify whether this is a reciprocal exchange, what format feedback will take, and whether the reader is expected to comment on the whole manuscript.</li>
        <li><strong>Protect your work.</strong> Check privacy and sharing rules before uploading a manuscript. Share only what is necessary to establish interest until you trust the arrangement.</li>
      </ol>
      <p>Do not ask every reader to answer every possible question. A short set of focused questions can make feedback more useful without dictating the reader’s reaction.</p>
      <h3>A request template you can adapt</h3>
      <div className="detail-box"><p><strong>Genre and audience:</strong> [genre, subgenre and intended readers]</p><p><strong>Draft stage and length:</strong> [complete or in progress; approximate word count]</p><p><strong>What I am looking for:</strong> [the feedback you most want, such as pacing, character motivation or general reader response]</p><p><strong>What I can share:</strong> [a short excerpt, first chapters or the full manuscript, depending on the agreement]</p><p><strong>Timing:</strong> [a realistic window, with room for the reader to decline]</p><p><strong>Exchange or compensation:</strong> [whether you are offering a reciprocal read, asking for a volunteer, or seeking a paid service]</p></div>
      <p>If nobody responds, do not assume the manuscript is the problem. The request may be in the wrong channel, the scope may be too large for the community, or readers may simply be busy. Check the rules, make the ask more specific, consider starting with a short excerpt if that fits your goal, and offer a realistic exchange only if you can genuinely commit to reading someone else’s work.</p>
    </div></section>

    <section className="section"><div className="container narrow">
      <h2>Are free beta readers enough, or should you pay?</h2>
      <p>Free readers can be insightful, generous and highly attentive. Paid readers are not automatically more perceptive, and payment does not guarantee that a reader is a good fit. The meaningful differences are usually about the agreement, scope, availability, experience and form of feedback.</p>
      <div className="detail-grid">
        <div className="detail-box"><h3>Free or volunteer feedback may fit when…</h3><ul><li>You want early reactions from likely readers.</li><li>You can wait for volunteers to become available.</li><li>You are comfortable organising several perspectives yourself.</li><li>You have clear questions and can evaluate the comments independently.</li></ul></div>
        <div className="detail-box"><h3>Paid feedback may fit when…</h3><ul><li>You need a defined scope and agreed deadline.</li><li>You want a structured report as well as in-text reactions.</li><li>You need help identifying patterns across the manuscript.</li><li>You have feedback already but cannot tell what problem it points to.</li></ul></div>
      </div>
      <p>You can use both. Free readers may help you understand how different people respond, while a professional read may help you investigate recurring patterns or decide what deserves attention first. But if free feedback answers your current question, there is no reason to pay for the same task again.</p>
      <div className="detail-box"><h3>Useful next steps</h3><ul className="feature-list"><li><Link href="/resources/how-to-get-useful-beta-reader-feedback">How to get useful feedback from beta readers</Link> — prepare focused questions and interpret the answers.</li><li><Link href="/resources/free-vs-paid-beta-readers">Free vs. paid beta readers</Link> — compare the actual trade-offs without assuming that paid is always better.</li><li><Link href="/resources/beta-reader-critique-partner-editor">Beta reader, critique partner, alpha reader or editor?</Link> — choose the right kind of help for your draft.</li><li><Link href="/resources/how-to-ask-someone-to-beta-read-your-novel">How to ask someone to beta read your novel</Link> — use a clear request and realistic scope.</li></ul></div>
      <div className="detail-box"><h3>Already have feedback, but you are not sure what to do with it?</h3><p>If readers disagree, compare the evidence behind their reactions instead of counting votes. Our guide to <Link href="/problems/beta-readers-disagree">why beta readers disagree</Link> can help you separate reader experience from proposed fixes. If an editor and your readers seem to contradict each other, start with <Link href="/problems/editor-and-beta-disagree">how to interpret conflicting editorial and reader feedback</Link>.</p><p>If you want to test the question before deciding on a service, try the <Link href="/tools/feedback-conflict">Feedback Conflict Analyzer</Link>.</p></div>
      <p>When you do want a professional read, see <Link href="/services/beta-reading">Second Pair’s beta-reading service</Link>. If you can feel that something is wrong but cannot identify the cause, a <Link href="/services/manuscript-diagnostic">manuscript diagnostic</Link> may be a better fit. If the story needs deeper structural work, compare that with <Link href="/services/developmental-editing">developmental editing</Link>.</p>
    </div></section>

    <section className="section alt"><div className="container narrow">
      <h2>Frequently asked questions</h2>
      <div className="faq-list">{questions.map((item)=><details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div>
    </div></section>

    <section className="section final-cta"><div className="container narrow">
      <span className="eyebrow">WHEN YOU WANT A PROFESSIONAL SECOND PAIR</span>
      <h2>Choose the help that matches the question</h2>
      <p>If you decide professional feedback would be useful, you can review the options or request a bounded sample read before committing to a larger project. You do not need to know the service name in advance.</p>
      <div className="actions"><Link className="button" href="/request-sample">Request a Sample Read</Link><Link className="text-link" href="/services">Compare Editorial Services →</Link></div>
    </div></section>
    <section className="section"><div className="container narrow"><p className="muted">Community links are provided as a starting point, not as an endorsement or guarantee of safety, quality or availability. Rules and access may change; review them before participating. Last reviewed: October 2026.</p></div></section>
  </main>;
}
