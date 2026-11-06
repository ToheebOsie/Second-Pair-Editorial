import type {Metadata} from 'next';
import {withSeo} from '../../../config/seo';

export const metadata: Metadata = withSeo({
  title: 'Reader Friction Diagnostic',
  description: 'A short self-check that helps authors work out where a reader may be losing orientation, curiosity, investment or momentum in a manuscript.',
}, '/tools/reader-friction');

export default function Layout({children}: {children: React.ReactNode}) {
  return children;
}
