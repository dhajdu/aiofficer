import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import BlockRenderer from '@/components/BlockRenderer';
import SeriesNav from '@/components/SeriesNav';
import { POSTS, BLOCKS_BY_SLUG } from '@/lib/posts-data';
import styles from './page.module.css';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} - CAIO Coach`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `https://www.caiocoach.com/blog/${post.slug}`,
      images: post.image ? [{ url: `https://www.caiocoach.com${post.image}` }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.image ? [`https://www.caiocoach.com${post.image}`] : [],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const blocks = BLOCKS_BY_SLUG[slug] || [];
  const postIndex = POSTS.indexOf(post);
  const prevPost = postIndex < POSTS.length - 1 ? POSTS[postIndex + 1] : null;
  const nextPost = postIndex > 0 ? POSTS[postIndex - 1] : null;
  const relatedPosts = POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  const faqBlocks = blocks.filter(
    (b): b is { tag: 'faq'; question: string; answer: string } => b.tag === 'faq'
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            image: post.image ? `https://www.caiocoach.com${post.image}` : undefined,
            author: {
              '@type': 'Person',
              name: post.author || 'Dave Hajdu',
              jobTitle: 'Founder & Chief AI Officer',
              worksFor: { '@type': 'Organization', name: 'AI Officer Institute' },
            },
            publisher: {
              '@type': 'Organization',
              name: 'AI Officer Institute',
              url: 'https://www.caiocoach.com',
            },
            articleSection: post.category,
            keywords: post.tags,
          }),
        }}
      />

      {faqBlocks.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqBlocks.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: { '@type': 'Answer', text: faq.answer },
              })),
            }),
          }}
        />
      )}

      {/* HERO */}
      <section className={styles.hero}>
        <div className={`page-container ${styles.heroInner}`}>
          <div className={styles.crumb}>
            <Link href="/blog">Blog</Link>
            <span> / </span>
            <span>{post.category}</span>
          </div>
          <span className="tag tag-muted">{post.category}</span>
          <h1 className={styles.title}>{post.title}</h1>
          {post.subtitle && <p className={styles.subtitle}>{post.subtitle}</p>}
        </div>
      </section>

      {/* META BAR */}
      <div className={styles.metaBar}>
        <div className={styles.metaBarInner}>
          <div>
            Published<strong>{post.date}</strong>
          </div>
          <div>
            Read time<strong>{post.readTime}</strong>
          </div>
        </div>
      </div>

      {/* ARTICLE */}
      <article className={styles.article}>
        {post.series && post.dayNumber && post.seriesTotal && (
          <SeriesNav
            series={post.series}
            currentDay={post.dayNumber}
            totalDays={post.seriesTotal}
          />
        )}

        {post.image && (
          <div className={styles.heroImage}>
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        )}

        <BlockRenderer blocks={blocks} />

        <div className={styles.authorNote}>
          <div className={styles.authorInitials}>DH</div>
          <p>
            <strong>Dave Hajdu</strong> is the founder of the AI Officer Institute and
            Edge8 AI. He works with founders and executives across more than 20 countries
            to build the leadership capabilities the AI era demands. Learn how to build
            your own AI team at <a href="https://www.caiocoach.com">caiocoach.com</a>.
          </p>
        </div>

        <Link href="/certification" className={styles.ctaBox}>
          <div className={styles.ctaEyebrow}>CAIO Coach · Certification</div>
          <div className={styles.ctaTitle}>Ready to lead AI, not just use it?</div>
          <div className={styles.ctaDesc}>
            Explore the Certified AI Officer program and start building the skills the
            AI era demands.
          </div>
          <span className="btn btn-primary">View the program →</span>
        </Link>

        <div className={styles.navCards}>
          {prevPost && (
            <Link href={`/blog/${prevPost.slug}`} className={styles.navCard}>
              <div className={styles.navCardLabel}>← Previous</div>
              <div className={styles.navCardTitle}>{prevPost.title}</div>
            </Link>
          )}
          {nextPost && (
            <Link href={`/blog/${nextPost.slug}`} className={styles.navCard}>
              <div className={styles.navCardLabel}>Next →</div>
              <div className={styles.navCardTitle}>{nextPost.title}</div>
            </Link>
          )}
        </div>

        {relatedPosts.length > 0 && (
          <div className={styles.related}>
            <h2 className={styles.relatedHead}>Related reading</h2>
            <div className={styles.navCards} style={{ marginTop: 0, paddingTop: 0, borderTop: 0 }}>
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className={styles.navCard}>
                  <div className={styles.navCardLabel}>{rp.date}</div>
                  <div className={styles.navCardTitle}>{rp.title}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
