'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { POSTS } from '@/lib/posts-data';
import styles from './page.module.css';

const FILTERS = ['All essays', 'AI Leadership', 'Claude Code', 'Case studies'] as const;
type Filter = (typeof FILTERS)[number];

export default function BlogIndex() {
  const [filter, setFilter] = useState<Filter>('All essays');

  // Hide the 14 Infinite Leverage day posts from this listing - they live at /infinite-leverage
  const standalonePosts = useMemo(
    () => POSTS.filter((p) => p.category !== 'Infinite Leverage'),
    []
  );

  const counts = useMemo(() => {
    const c: Record<string, number> = { 'All essays': standalonePosts.length };
    for (const p of standalonePosts) {
      c[p.category] = (c[p.category] || 0) + 1;
    }
    return c;
  }, [standalonePosts]);

  const visible = useMemo(() => {
    if (filter === 'All essays') return standalonePosts;
    return standalonePosts.filter((p) => p.category === filter);
  }, [filter, standalonePosts]);

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={`page-container ${styles.heroInner}`}>
          <div className={styles.tagRow}>
            <span className="tag">
              <span className="dot" />
              {standalonePosts.length} essays published
            </span>
            <span className="tag tag-muted">Monthly</span>
          </div>
          <h1 className={styles.display}>
            Field
            <br />
            notes.
          </h1>
          <p className={styles.lede}>
            Frameworks, case studies, and hard-earned insights for leaders navigating the
            50/50 era of human + AI work.
          </p>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className={styles.filterBar}>
        <div className={`page-container ${styles.filterInner}`}>
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`${styles.fchip} ${filter === f ? styles.fchipActive : ''}`.trim()}
            >
              {f} <span className="count">{counts[f] || 0}</span>
            </button>
          ))}
        </div>
      </div>

      {/* FEATURED: Infinite Leverage promo */}
      <section className={styles.featured}>
        <div className="page-container">
          <Link href="/infinite-leverage" className={styles.featuredCard}>
            <div className={styles.featuredBody}>
              <div>
                <div className={styles.eyebrowRow}>
                  <span>The Blueprint</span>
                  <span className={styles.sep}>/</span>
                  <span>14-day series · complete</span>
                  <span className={styles.sep}>/</span>
                  <span>Apr 05 → Apr 18 · 2026</span>
                </div>
                <h2 className={styles.featuredTitle} style={{ marginTop: 24 }}>
                  Looking for Infinite Leverage?
                </h2>
                <p style={{ marginTop: 20 }}>
                  The 14-day serialized build of a one-person agentic company lives on its
                  own page now. Start from Day 01 or jump to the day that matches your
                  situation.
                </p>
              </div>
              <div className={styles.featuredFoot}>
                <span className="read">Open the Blueprint →</span>
                <span>14 days · 22k words</span>
              </div>
            </div>
            <div className={styles.featuredVisual}>
              <div className={styles.glyph}>14</div>
            </div>
          </Link>
        </div>
      </section>

      {/* LIST */}
      <section className={styles.listSection}>
        <div className="page-container">
          <div className={styles.listHead}>
            <h3>
              {filter === 'All essays' ? 'All essays' : filter}
            </h3>
            <span className="count">Newest first</span>
          </div>

          <div className={styles.postList}>
            {visible.map((p, i) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className={styles.post}
              >
                <span className="num">
                  {String(visible.length - i).padStart(3, '0')}
                </span>
                <span className="date">{p.date}</span>
                <div className="main">
                  <h3>{p.title}</h3>
                  <p className="excerpt">{p.excerpt}</p>
                </div>
                <div className="meta">
                  <span className="cat">{p.category}</span>
                  <span className="time">{p.readTime}</span>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
            <Link href="/infinite-leverage" className="btn btn-ghost">
              Or read the 14-day Blueprint →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className={styles.ctaBand}>
        <div className="page-container">
          <div className={styles.ctaBox}>
            <div>
              <div className="t-eyebrow">Get new posts</div>
              <h2 className="t-h1" style={{ marginTop: 12 }}>
                The 50/50 memo.
              </h2>
              <p>
                One essay a week. Field notes from coaching executives through the AI
                transition. No sign-up funnel. No upsell. Unsubscribe with one click.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <input
                type="email"
                placeholder="you@company.com"
                className={styles.emailInput}
              />
              <button type="button" className="btn btn-primary">
                Subscribe →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
