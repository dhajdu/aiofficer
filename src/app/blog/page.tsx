import type { Metadata } from 'next';
import { POSTS } from '@/lib/posts-data';
import BlogGrid from '@/components/BlogGrid';

export const metadata: Metadata = {
  title: 'AI Leadership Blog - CAIO Coach',
  description: 'Practical AI leadership insights for executives and HR leaders. How to lead AI, build AI-ready teams, and stay ahead in the age of generative and agentic AI.',
};

export default function BlogIndex() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy h-[380px] md:h-[420px] pt-[120px]">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 50% at 10% 90%, rgba(40,123,232,0.14) 0%, transparent 60%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 40% 50% at 50% 0%, rgba(111,242,193,0.06) 0%, transparent 50%)' }} />
        <div className="relative z-10 w-full max-w-[920px] mx-auto px-6 md:px-10">
          <p className="text-white/70 text-[11px] font-bold tracking-[0.15em] uppercase mb-3 font-mono">-- Blog &middot; CAIO Coach</p>
          <h1 className="text-white font-extrabold leading-[1.08] tracking-tight mb-3" style={{ fontSize: 'clamp(28px, 4.5vw, 42px)' }}>AI Leadership <span className="text-mint">Insights</span></h1>
          <p className="text-white/55 text-[15px] max-w-[480px] leading-relaxed mb-5">Practical frameworks, real-world case studies, and actionable insights for leaders navigating the 50/50 era of human + AI work.</p>
        </div>
      </section>

      <BlogGrid posts={POSTS} />
    </>
  );
}
