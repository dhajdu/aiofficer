'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ScrollReveal from '@/components/ScrollReveal';
import type { Post } from '@/lib/types';

const CATEGORIES = ['All Posts', 'Claude Code', 'Infinite Leverage', 'AI Leadership'] as const;

type Props = { posts: Post[] };

function matchesCategory(post: Post, cat: string): boolean {
  if (cat === 'All Posts') return true;
  if (post.category === cat) return true;
  if (post.categories?.includes(cat)) return true;
  return false;
}

export default function BlogGrid({ posts }: Props) {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>('All Posts');

  const filtered = posts.filter((p) => matchesCategory(p, active));

  return (
    <>
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-[920px] mx-auto px-6 md:px-10 py-3 overflow-x-auto no-scrollbar">
          <div className="flex gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  aria-pressed={isActive}
                  className={`text-[12px] font-semibold px-4 py-1.5 rounded-full border whitespace-nowrap transition-colors ${
                    isActive
                      ? 'border-blue text-blue bg-blue/5'
                      : 'border-border text-muted-foreground hover:border-blue hover:text-blue'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-[920px] mx-auto px-6 md:px-10 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-[16px]">No posts in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((post) => (
              <ScrollReveal key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <Card className="h-full hover:border-blue/30 hover:shadow-lg hover:-translate-y-px transition-all cursor-pointer">
                    {post.image && (
                      <div className="relative h-[180px] overflow-hidden rounded-t-xl">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <CardContent className="p-5 flex flex-col gap-2.5">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-[10px] px-2 py-0.5">
                          {post.category}
                        </Badge>
                        {post.dayNumber && (
                          <span className="text-[10px] font-bold text-blue font-mono">
                            Day {post.dayNumber}
                          </span>
                        )}
                      </div>
                      <h3 className="text-[15px] font-bold text-foreground leading-tight tracking-tight">
                        {post.title}
                      </h3>
                      <p className="text-[13px] text-muted-foreground leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="font-mono text-[11px] text-muted-foreground">{post.date}</span>
                        <span className="text-[13px] text-muted-foreground">Read &rarr;</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
