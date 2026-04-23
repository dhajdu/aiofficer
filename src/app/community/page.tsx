import type { Metadata } from 'next';
import Image from 'next/image';
import CommunityCarousel from './CommunityCarousel';

export const metadata: Metadata = {
  title: 'AI Leadership Community',
  description:
    'Join a global community of AI leaders from 30+ countries. Weekly coaching sessions, certification tracks, peer accountability, and AI leadership resources.',
  alternates: { canonical: '/community' },
  openGraph: {
    title: 'Join the CAIO Coach Community',
    description:
      'A global community of executives navigating AI strategy together. Weekly live sessions, peer accountability, and certification - all for $99/month.',
    type: 'website',
    url: '/community',
  },
};

const JOIN_URL =
  'https://community.ai-officer.com/checkout/ai-officer-certification-program?affiliate_code=ab0cd6';

const advisors = [
  {
    name: 'Dr. Brooks Holtom',
    image: '/images/advisor-brooks.webp',
    role: 'Professor of Management, Georgetown',
    bio: 'Brooks is a leading researcher in organisational behaviour and human capital development. His consulting work spans Microsoft, Capital One, and the U.S. Air Force.',
    tag: 'Leadership & Talent',
  },
  {
    name: 'David Nilssen',
    image: '/images/advisor-david.webp',
    role: 'CEO, DOXA Talent',
    bio: 'David co-founded Guidant Financial, which helped 30,000 entrepreneurs secure $7B in funding. Now leads DOXA Talent, a global HR platform.',
    tag: 'Entrepreneurship & Talent',
  },
  {
    name: "Dato' George Lim",
    image: '/images/advisor-george.webp',
    role: 'Chair, Vistage Malaysia',
    bio: 'George leads Vistage Malaysia and has spent 28+ years in business advisory, building G&A Group to 100+ team members. Founded GA Space to mentor 200,000+ entrepreneurs.',
    tag: 'Executive Coaching',
  },
  {
    name: 'TK Nguyen',
    image: '/images/advisor-tk.webp',
    role: 'CEO, GAM Esports Vietnam',
    bio: "TK leads one of Vietnam's top competitive gaming organisations and has been instrumental in building the country's esports ecosystem.",
    tag: 'Entrepreneurship · Vietnam',
  },
  {
    name: 'Dru Nguyen',
    image: '/images/advisor-dru.webp',
    role: 'Co-Founder, Skylight',
    bio: 'A decade of operational leadership across hospitality, entertainment, and technology - scaling businesses across Southeast Asia.',
    tag: 'AI & Operations · SEA',
  },
  {
    name: 'Tommy Dan',
    image: '/images/advisor-tommy.webp',
    role: 'Entrepreneur & Community Leader',
    bio: 'Tommy is an entrepreneur and active member of the CAIO Coach community, bringing real-world practitioner context to the conversations.',
    tag: 'Entrepreneurship',
  },
];

const expectItems = [
  {
    heading: 'Weekly live coaching',
    desc: "Every week, Dave coaches the topics members are actually wrestling with. Submit your challenge, join live, get real answers.",
  },
  {
    heading: 'Micro-sessions library',
    desc: 'Short, practical sessions on the AI tools and strategies making a difference right now. New sessions released regularly.',
  },
  {
    heading: 'AI leadership blog',
    desc: "Dave's writing on AI leadership, strategy, and the real-world implications of the 50/50 era.",
  },
  {
    heading: 'Global peers',
    desc: 'Connect with executives and operators from 30+ countries navigating the same transition.',
  },
  {
    heading: 'Certification path',
    desc: 'Premium members get full access to the AI Officer Certification program - three tracks.',
  },
  {
    heading: 'Advisor access',
    desc: 'Guest sessions with community advisors - practitioners, investors, and domain experts.',
  },
];

export default function CommunityPage() {
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
            maskImage: 'radial-gradient(ellipse at 70% 30%, black 0%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 70% 30%, black 0%, transparent 70%)',
            opacity: 0.4,
          }}
        />
        <div className="page-container relative">
          <div className="flex gap-2 flex-wrap mb-8">
            <span className="tag">
              <span className="dot" />
              Leadership in the AI era
            </span>
            <span className="tag tag-muted">30+ countries</span>
            <span className="tag tag-muted">Free tier available</span>
          </div>
          <h1 className="t-display" style={{ fontSize: 'clamp(48px, 10vw, 120px)', margin: 0 }}>
            AI is better
            <br />
            with people.
          </h1>
          <p
            style={{
              maxWidth: 640,
              fontSize: 20,
              lineHeight: 1.5,
              color: 'var(--fg-70)',
              margin: '32px 0 0',
            }}
          >
            A global community of founders, executives, and advisors navigating the
            ever-changing world of AI together.
          </p>
          <div className="mt-10 flex gap-3 flex-wrap">
            <a
              className="btn btn-primary"
              href={JOIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the community →
            </a>
            <a
              className="btn btn-ghost"
              href="https://community.ai-officer.com/feed"
              target="_blank"
              rel="noopener noreferrer"
            >
              Browse free tier
            </a>
          </div>
        </div>
      </section>

      {/* ADVISORS */}
      <section className="sec">
        <div className="page-container">
          <div className="sec-head">
            <div className="idx">01 / The network</div>
            <div>
              <h2 className="t-h1">Advisors &amp; community leaders.</h2>
              <p className="sub">
                The practitioners, investors, and domain experts who show up alongside the
                coaching.
              </p>
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            style={{ border: '1px solid var(--fg-border)' }}
          >
            {advisors.map((a, i) => {
              const col = i % 3;
              const row = Math.floor(i / 3);
              const lastRow = row === Math.ceil(advisors.length / 3) - 1;
              return (
                <div
                  key={a.name}
                  style={{
                    padding: 32,
                    borderRight: col < 2 ? '1px solid var(--fg-border)' : 'none',
                    borderBottom: !lastRow ? '1px solid var(--fg-border)' : 'none',
                  }}
                  className="flex flex-col gap-3"
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      overflow: 'hidden',
                      border: '1px solid var(--fg-border)',
                      marginBottom: 8,
                    }}
                  >
                    <Image
                      src={a.image}
                      alt={a.name}
                      width={56}
                      height={56}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'grayscale(100%) contrast(1.05)',
                      }}
                    />
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 500,
                      fontSize: 16,
                      color: 'var(--fg)',
                      margin: 0,
                    }}
                  >
                    {a.name}
                  </h3>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: 11,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--fg-50)',
                    }}
                  >
                    {a.role}
                  </div>
                  <p
                    style={{
                      fontSize: 13,
                      lineHeight: 1.6,
                      color: 'var(--fg-70)',
                      margin: '4px 0 0',
                      flex: 1,
                    }}
                  >
                    {a.bio}
                  </p>
                  <span className="tag tag-muted" style={{ marginTop: 8, alignSelf: 'flex-start' }}>
                    {a.tag}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="sec">
        <div className="page-container">
          <div className="sec-head">
            <div className="idx">02 / Inside</div>
            <div>
              <h2 className="t-h1">What you get.</h2>
              <p className="sub">
                Everything in one place - coaching, curriculum, community, and a path to
                certification.
              </p>
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            style={{ border: '1px solid var(--fg-border)' }}
          >
            {expectItems.map((item, i) => {
              const col = i % 3;
              const row = Math.floor(i / 3);
              const lastRow = row === Math.ceil(expectItems.length / 3) - 1;
              return (
                <div
                  key={item.heading}
                  style={{
                    padding: 32,
                    borderRight: col < 2 ? '1px solid var(--fg-border)' : 'none',
                    borderBottom: !lastRow ? '1px solid var(--fg-border)' : 'none',
                  }}
                >
                  <div
                    className="font-mono"
                    style={{
                      fontSize: 10,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--fg-50)',
                      marginBottom: 16,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 500,
                      fontSize: 18,
                      color: 'var(--fg)',
                      margin: '0 0 10px',
                    }}
                  >
                    {item.heading}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: 'var(--fg-70)',
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAROUSEL */}
      <section className="sec">
        <div className="page-container">
          <CommunityCarousel />
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="sec">
        <div className="page-container">
          <div className="sec-head">
            <div className="idx">03 / Membership</div>
            <div>
              <h2 className="t-h1">Free and premium access.</h2>
              <p className="sub">Start free. Upgrade when the live coaching matters.</p>
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ border: '1px solid var(--fg-border)' }}
          >
            <div
              style={{
                padding: 48,
                borderRight: '1px solid var(--fg-border)',
              }}
            >
              <div className="t-eyebrow">Free</div>
              <h3
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 400,
                  fontSize: 28,
                  color: 'var(--fg)',
                  margin: '16px 0 20px',
                  lineHeight: 1.2,
                  letterSpacing: '-0.01em',
                }}
              >
                Community member
              </h3>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 10,
                  paddingTop: 12,
                  borderTop: '1px solid var(--fg-border)',
                }}
              >
                <span
                  className="font-mono"
                  style={{ fontSize: 56, fontWeight: 300, color: 'var(--fg)', lineHeight: 1 }}
                >
                  $0
                </span>
                <span
                  className="font-mono"
                  style={{
                    fontSize: 13,
                    color: 'var(--fg-50)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  Forever
                </span>
              </div>
              <p
                style={{
                  fontSize: 15,
                  color: 'var(--fg-70)',
                  lineHeight: 1.6,
                  margin: '20px 0 20px',
                }}
              >
                Everything you need to follow along, learn at your own pace, and engage with
                the community. No credit card required.
              </p>
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5 mb-8">
                {[
                  'All thought leadership articles',
                  'Full micro-session library',
                  'Community forum access',
                  'Weekly newsletter',
                ].map((t) => (
                  <li
                    key={t}
                    className="flex gap-3"
                    style={{ fontSize: 14, color: 'var(--fg-70)', lineHeight: 1.55 }}
                  >
                    <span
                      style={{
                        width: 10,
                        height: 1,
                        background: 'var(--fg-30)',
                        flexShrink: 0,
                        marginTop: 10,
                      }}
                    />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <a
                className="btn btn-ghost"
                href="https://community.ai-officer.com/feed"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join free →
              </a>
            </div>

            <div style={{ padding: 48 }}>
              <div className="t-eyebrow">Premium</div>
              <h3
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 400,
                  fontSize: 28,
                  color: 'var(--fg)',
                  margin: '16px 0 20px',
                  lineHeight: 1.2,
                  letterSpacing: '-0.01em',
                }}
              >
                Coached member
              </h3>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 10,
                  paddingTop: 12,
                  borderTop: '1px solid var(--fg-border)',
                }}
              >
                <span
                  className="font-mono"
                  style={{ fontSize: 56, fontWeight: 300, color: 'var(--fg)', lineHeight: 1 }}
                >
                  $99
                </span>
                <span
                  className="font-mono"
                  style={{
                    fontSize: 13,
                    color: 'var(--fg-50)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  / month
                </span>
              </div>
              <p
                style={{
                  fontSize: 15,
                  color: 'var(--fg-70)',
                  lineHeight: 1.6,
                  margin: '20px 0 20px',
                }}
              >
                Live weekly coaching, certification access, and direct connection to Dave and
                the advisor network.
              </p>
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5 mb-8">
                {[
                  'Everything in Free',
                  'Weekly live group coaching',
                  'Submit topics live',
                  'AI Officer Certification program',
                  'Advisor guest sessions',
                  'Private coaching available separately',
                ].map((t) => (
                  <li
                    key={t}
                    className="flex gap-3"
                    style={{ fontSize: 14, color: 'var(--fg-70)', lineHeight: 1.55 }}
                  >
                    <span
                      style={{
                        width: 10,
                        height: 1,
                        background: 'var(--fg-30)',
                        flexShrink: 0,
                        marginTop: 10,
                      }}
                    />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <a
                className="btn btn-primary"
                href={JOIN_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join for $99 / month →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
