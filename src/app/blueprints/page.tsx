import type { Metadata } from 'next';
import { BLUEPRINTS } from '@/lib/blueprints-data';
import BlueprintGrid from '@/components/blueprints/BlueprintGrid';

export const metadata: Metadata = {
  title: 'Blueprints',
  description:
    'Agent development plans, production workflows, and system architecture for building AI-powered one-person companies.',
  alternates: { canonical: '/blueprints' },
  openGraph: {
    title: 'Blueprints - CAIO Coach',
    description:
      'Agent development plans, production workflows, and system architecture for building AI-powered one-person companies.',
    url: '/blueprints',
    type: 'website',
  },
};

export default function BlueprintsIndex() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          padding: '140px 0 72px',
          borderBottom: '1px solid var(--fg-border)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            maskImage:
              'radial-gradient(ellipse at 70% 30%, black 0%, transparent 70%)',
            WebkitMaskImage:
              'radial-gradient(ellipse at 70% 30%, black 0%, transparent 70%)',
            opacity: 0.4,
          }}
        />
        <div className="page-container relative">
          <div className="flex gap-2 flex-wrap mb-8">
            <span className="tag">
              <span className="dot" />
              {BLUEPRINTS.length} blueprints
            </span>
            <span className="tag tag-muted">Agent systems · Workflows · Plans</span>
          </div>
          <h1
            className="t-display"
            style={{ fontSize: 'clamp(48px, 10vw, 120px)', margin: 0 }}
          >
            Blueprints.
          </h1>
          <p
            style={{
              maxWidth: 640,
              fontSize: 20,
              lineHeight: 1.5,
              color: 'var(--fg-70)',
              margin: '24px 0 0',
            }}
          >
            Agent development plans, production workflows, and system architecture for
            building AI-powered one-person companies.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="sec" style={{ borderBottom: 0 }}>
        <div className="page-container">
          <BlueprintGrid blueprints={BLUEPRINTS} />
        </div>
      </section>
    </>
  );
}
