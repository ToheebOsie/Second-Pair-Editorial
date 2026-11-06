import type {Metadata} from 'next';
import {withSeo} from '../../../config/seo';

export const metadata: Metadata = withSeo({
  title: 'Feedback Conflict Analyzer',
  description: 'Paste beta reader or editor comments and separate preference, reaction, diagnosis and suggested fixes before you decide what to change.',
}, '/tools/feedback-conflict');

export default function Layout({children}: {children: React.ReactNode}) {
  return children;
}
