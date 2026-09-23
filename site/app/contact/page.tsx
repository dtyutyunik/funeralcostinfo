import type { Metadata } from 'next';
import { SITE_URL } from '../../lib/data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact FuneralCostInfo: corrections, source updates, and methodology questions welcome.',
  alternates: { canonical: SITE_URL + '/contact/' },
};

export default function ContactPage() {
  return (
    <div className="wrap prose">
      <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Contact</nav>
      <h1>Contact</h1>
      <p className="answer-first">
        <strong>Quick answer:</strong> corrections, source updates, and methodology questions are
        welcome at <a href="mailto:hello@funeralcostinfo.com">hello@funeralcostinfo.com</a>. We read
        every message. Please don&apos;t send sensitive personal information.
      </p>
      <h2>What to write about</h2>
      <ul>
        <li><strong>Corrections</strong> — a number, link, or fact you believe is wrong.</li>
        <li><strong>New sources</strong> — an official dataset we should incorporate in the next refresh.</li>
        <li><strong>Methodology questions</strong> — how the model works and what it can&apos;t do.</li>
      </ul>
      <h2>What we can&apos;t do</h2>
      <ul>
        <li>We cannot give personalized funeral-planning, financial, or legal advice.</li>
        <li>We cannot provide price quotes — only funeral homes can, via their General Price Lists.</li>
        <li>We do not accept paid placements from funeral homes or vendors.</li>
      </ul>
    </div>
  );
}
