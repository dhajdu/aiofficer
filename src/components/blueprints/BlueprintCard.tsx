import Link from 'next/link';
import type { Blueprint } from '@/lib/types';
import { CATEGORY_META } from '@/lib/blueprints-data';

interface BlueprintCardProps {
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

export default function BlueprintCard({ blueprint }: BlueprintCardProps) {
  const meta = CATEGORY_META[blueprint.category];

  return (
    <Link
      href={`/blueprints/${blueprint.slug}`}
      className="group flex flex-col gap-3 p-7 no-underline transition-colors"
      style={{
        border: '1px solid var(--fg-border)',
        color: 'inherit',
      }}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="tag tag-muted">{meta.label}</span>
        <span
          className="font-mono"
          style={{
            fontSize: 10,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--fg-50)',
          }}
        >
          {blueprint.type}
        </span>
      </div>

      <h3
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 400,
          fontSize: 18,
          lineHeight: 1.25,
          letterSpacing: '-0.01em',
          color: 'var(--fg)',
          margin: '8px 0 0',
        }}
      >
        {blueprint.title}
      </h3>

      <p
        style={{
          fontSize: 13,
          color: 'var(--fg-70)',
          lineHeight: 1.55,
          margin: 0,
          flex: 1,
        }}
      >
        {blueprint.excerpt}
      </p>

      <div
        className="flex items-center justify-between"
        style={{
          paddingTop: 14,
          marginTop: 4,
          borderTop: '1px solid var(--fg-border)',
        }}
      >
        <span
          className="font-mono"
          style={{
            fontSize: 11,
            letterSpacing: '0.1em',
            color: 'var(--fg-50)',
            textTransform: 'uppercase',
          }}
        >
          {formatDate(blueprint.date)}
        </span>
        <span
          className="font-mono"
          style={{
            fontSize: 10,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--fg)',
          }}
        >
          Read →
        </span>
      </div>
    </Link>
  );
}
