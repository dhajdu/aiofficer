import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BlueprintHero from '@/components/blueprints/BlueprintHero';
import BlueprintRenderer from '@/components/blueprints/BlueprintRenderer';
import {
  BLOCKS_BY_SLUG,
  BLUEPRINTS,
  getAllSlugs,
  getBlueprintBySlug,
} from '@/lib/blueprints-data';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blueprint = getBlueprintBySlug(slug);
  if (!blueprint) return { title: 'Blueprint Not Found' };

  return {
    title: `${blueprint.title} - CAIO Coach`,
    description: blueprint.excerpt,
    openGraph: {
      title: blueprint.title,
      description: blueprint.excerpt,
      type: 'article',
      url: `https://www.caiocoach.com/blueprints/${blueprint.slug}`,
      images: blueprint.image
        ? [{ url: `https://www.caiocoach.com${blueprint.image}` }]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: blueprint.title,
      description: blueprint.excerpt,
      images: blueprint.image ? [`https://www.caiocoach.com${blueprint.image}`] : [],
    },
  };
}

export default async function BlueprintPage({ params }: Props) {
  const { slug } = await params;
  const blueprint = getBlueprintBySlug(slug);
  if (!blueprint) notFound();

  const blocks = BLOCKS_BY_SLUG[slug] || [];

  const index = BLUEPRINTS.findIndex((b) => b.slug === slug);
  const prev = index > 0 ? BLUEPRINTS[index - 1] : null;
  const next =
    index >= 0 && index < BLUEPRINTS.length - 1 ? BLUEPRINTS[index + 1] : null;

  return (
    <>
      <BlueprintHero blueprint={blueprint} />

      <article
        style={{
          maxWidth: 760,
          margin: '0 auto',
          padding: '64px 24px 96px',
        }}
      >
        {blocks.length === 0 ? (
          <div
            style={{
              border: '1px dashed var(--fg-border)',
              background: 'var(--elev-1)',
              padding: 40,
              textAlign: 'center',
            }}
          >
            <p
              className="font-mono"
              style={{
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--fg-50)',
                margin: 0,
              }}
            >
              Content coming soon
            </p>
            <p
              style={{
                fontSize: 13,
                color: 'var(--fg-70)',
                margin: '8px 0 0',
              }}
            >
              This blueprint is being migrated. Check back shortly.
            </p>
          </div>
        ) : (
          <BlueprintRenderer blocks={blocks} />
        )}

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          style={{
            borderTop: '1px solid var(--fg-border)',
            paddingTop: 48,
            marginTop: 64,
          }}
        >
          {prev && (
            <Link
              href={`/blueprints/${prev.slug}`}
              style={{
                border: '1px solid var(--fg-border)',
                padding: 24,
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <div
                className="font-mono"
                style={{
                  fontSize: 10,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--fg-50)',
                  marginBottom: 10,
                }}
              >
                ← Previous
              </div>
              <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--fg)' }}>
                {prev.title}
              </div>
            </Link>
          )}
          {next && (
            <Link
              href={`/blueprints/${next.slug}`}
              style={{
                border: '1px solid var(--fg-border)',
                padding: 24,
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <div
                className="font-mono"
                style={{
                  fontSize: 10,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--fg-50)',
                  marginBottom: 10,
                }}
              >
                Next →
              </div>
              <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--fg)' }}>
                {next.title}
              </div>
            </Link>
          )}
        </div>
      </article>
    </>
  );
}
