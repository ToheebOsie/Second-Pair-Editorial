import type {Metadata} from 'next';
import {FeedbackToFinalOnboardingForm} from '../../../components/FeedbackToFinalOnboardingForm';
import {onboardingConfig} from '../../../config/onboarding';
import {site} from '../../../config/site';
import {withSeo} from '../../../config/seo';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = withSeo({
  title: 'Private Calibration Intake',
  description: 'Private onboarding for an accepted Feedback-to-Final Manuscript project.',
  robots: {index: false, follow: false, nocache: true},
  alternates: {canonical: `${site.website}${onboardingConfig.route}`},
}, onboardingConfig.route);

function tokenIsValid(token: string | undefined) {
  const configured = (process.env.ONBOARDING_ACCESS_TOKEN || '').trim();
  return Boolean(configured && token && token === configured);
}

export default async function FeedbackToFinalOnboarding({searchParams}: {searchParams: Promise<{token?: string}>}) {
  const params = await searchParams;
  const token = params.token || '';
  if (!tokenIsValid(token)) return <main><section className="page-hero"><div className="container narrow"><span className="eyebrow">PRIVATE ONBOARDING</span><h1>This onboarding link is not available.</h1><p>This form is issued after the Feedback-to-Final Manuscript deposit has been confirmed. Please use the link from your project email or contact Second Pair Editorial if you believe you received this message in error.</p></div></section></main>;
  return <main><section className="page-hero onboarding-hero"><div className="container narrow"><span className="eyebrow">PRIVATE CALIBRATION INTAKE</span><h1>Let’s prepare the right questions for your beta readers.</h1><p>This onboarding form is for an accepted Feedback-to-Final Manuscript project after the 20% deposit has been confirmed. Your answers help us design questions around your manuscript’s actual uncertainty—not a generic checklist.</p><p>You do not need to diagnose the manuscript. Specific, honest answers are useful; “I’m not sure” is a valid answer.</p></div></section><section className="section"><div className="container form-shell"><FeedbackToFinalOnboardingForm token={token}/></div></section></main>;
}
