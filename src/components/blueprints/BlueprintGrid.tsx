'use client';

import { useMemo, useState } from 'react';
import type { Blueprint, BlueprintCategory } from '@/lib/types';
import { CATEGORY_META } from '@/lib/blueprints-data';
import BlueprintCard from './BlueprintCard';

type CategoryFilter = 'all' | BlueprintCategory;
type SortMode = 'date' | 'name';

interface BlueprintGridProps {
  blueprints: Blueprint[];
}

const CATEGORY_ORDER: BlueprintCategory[] = [
  'leverage',
  'talent',
  'operations',
  'innovation',
  'revenue',
];

export default function BlueprintGrid({ blueprints }: BlueprintGridProps) {
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [sort, setSort] = useState<SortMode>('date');

  const visible = useMemo(() => {
    const filtered =
      filter === 'all' ? blueprints : blueprints.filter((b) => b.category === filter);
    const sorted = [...filtered].sort((a, b) => {
      if (sort === 'date') return b.date.localeCompare(a.date);
      return a.title.localeCompare(b.title);
    });
    return sorted;
  }, [blueprints, filter, sort]);

  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
        <div className="flex gap-2 flex-wrap">
          <Chip active={filter === 'all'} onClick={() => setFilter('all')}>
            All
          </Chip>
          {CATEGORY_ORDER.map((cat) => {
            const meta = CATEGORY_META[cat];
            return (
              <Chip
                key={cat}
                active={filter === cat}
                onClick={() => setFilter(cat)}
              >
                {meta.label}
              </Chip>
            );
          })}
        </div>

        <div className="flex gap-2">
          <Chip active={sort === 'date'} onClick={() => setSort('date')}>
            Newest
          </Chip>
          <Chip active={sort === 'name'} onClick={() => setSort('name')}>
            A to Z
          </Chip>
        </div>
      </div>

      {visible.length === 0 ? (
        <div
          style={{
            padding: '64px 0',
            textAlign: 'center',
            color: 'var(--fg-50)',
            fontSize: 14,
          }}
        >
          No blueprints in this category yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-[var(--fg-border)]">
          {visible.map((bp, i) => {
            // Create a grid with 1px seams via negative offsets isn't worth it here;
            // use gap instead.
            return <BlueprintCard key={bp.slug} blueprint={bp} />;
          })}
        </div>
      )}
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="font-mono"
      style={{
        fontSize: 11,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        padding: '8px 14px',
        border: active
          ? '1px solid var(--fg)'
          : '1px solid var(--border-strong)',
        color: active ? 'var(--navy)' : 'var(--fg-70)',
        background: active ? 'var(--fg)' : 'transparent',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: 'color .15s, border-color .15s, background .15s',
      }}
    >
      {children}
    </button>
  );
}
