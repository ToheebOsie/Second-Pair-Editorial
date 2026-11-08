import type {Metadata} from 'next';
import {FeedbackToFinalOnboardingForm} from '../../../components/FeedbackToFinalOnboardingForm';
import {onboardingConfig} from '../../../config/onboarding';
import {site} from '../../../config/site';
import {withSeo} from '../../../config/seo';
import {tokensMatch} from '../../../config/token';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = withSeo({
  title: 'Feedback to Final Manuscript — Project Questions',
  description: 'Private project form for authors using Feedback to Final Manuscript.',
  robots: {index: false, follow: false, nocache: true},
  referrer: 'no-referrer', // the access token travels in the URL; never pass it on as a Referer
  alternates: {canonical: `${site.website}${onboardingConfig.route}`},
}, onboardingConfig.route);

function tokenIsValid(token: string | undefined) {
  const configured = (process.env.ONBOARDING_ACCESS_TOKEN || '').trim();
  return tokensMatch(token, configured);
}

export default async function FeedbackToFinalOnboarding({searchParams}: {searchParams: Promise<{token?: string}>}) {
  const params = await searchParams;
  const token = params.token || '';
  if (!tokenIsValid(token)) return <main><section className="page-hero"><div className="container narrow"><span className="eyebrow">PRIVATE ONBOARDING</span><h1>This onboarding link is not available.</h1><p>This form is issued after the Feedback-to-Final Manuscript starting payment has been confirmed. Please use the link from your project email or contact Second Pair Editorial if you believe you received this message in error.</p></div></section></main>;
  return <main><section className="page-hero onboarding-hero"><div className="container narrow"><span className="eyebrow">YOUR MANUSCRIPT AND YOUR QUESTIONS</span><h1>Tell us what you are trying to work out.</h1><p>This form helps us understand your book, what you want readers to experience and what is worrying you. We will use your answers and the manuscript to prepare three separate guides: questions for beta readers, questions for critique partners and questions to help you edit your own work.</p><p>You do not have to arrive with the problem figured out. Tell us what you have noticed, what people have said and where you are unsure. “I don’t know yet” is a perfectly useful answer.</p></div></section><section className="section"><div className="container form-shell"><FeedbackToFinalOnboardingForm token={token}/></div></section></main>;
}
