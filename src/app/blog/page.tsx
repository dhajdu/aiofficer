import type { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: 'Field notes',
  description:
    'Frameworks, case studies, and hard-earned insights for leaders navigating the 50/50 era of human + AI work.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Field notes - CAIO Coach',
    description:
      'Frameworks, case studies, and hard-earned insights for leaders navigating the 50/50 era of human + AI work.',
    url: '/blog',
    type: 'website',
  },
};

export default function BlogIndex() {
  return <BlogClient />;
}
