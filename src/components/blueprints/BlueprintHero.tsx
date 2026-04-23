import Link from 'next/link';
import type { Blueprint } from '@/lib/types';
import { CATEGORY_META } from '@/lib/blueprints-data';

interface BlueprintHeroProps {
  blueprint: Blueprint;
}

function formatDate(iso: string): string {
  const d = new Date(iso + 'T00:00:00Z');
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export default function BlueprintHero({ blueprint }: BlueprintHeroProps) {
  const meta = CATEGORY_META[blueprint.category];

  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: '140px 0 64px',
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

      <div className="page-container relative" style={{ maxWidth: 960 }}>
        <div
          className="font-mono"
          style={{
            fontSize: 11,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--fg-50)',
            marginBottom: 24,
          }}
        >
          <Link href="/blueprints" style={{ color: 'var(--fg-70)' }}>
            ← Blueprints
          </Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <span>{meta.label}</span>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="tag tag-muted">{meta.label}</span>
          <span className="tag tag-muted">{blueprint.type}</span>
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            fontSize: 'clamp(32px, 5vw, 56px)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'var(--fg)',
            margin: '0 0 20px',
          }}
        >
          {blueprint.title}
        </h1>

        {blueprint.subtitle && (
          <p
            style={{
              maxWidth: 640,
              fontSize: 18,
              lineHeight: 1.5,
              color: 'var(--fg-70)',
              margin: 0,
            }}
          >
            {blueprint.subtitle}
          </p>
        )}

        <div
          className="font-mono"
          style={{
            fontSize: 11,
            color: 'var(--fg-50)',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            marginTop: 32,
          }}
        >
          Published {formatDate(blueprint.date)}
        </div>
      </div>
    </section>
  );
}
