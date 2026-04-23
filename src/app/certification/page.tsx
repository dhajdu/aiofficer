import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'AI Officer Certification',
  description:
    'Earn your AI Officer certification across three tracks: Generative AI, Agentic AI, and AI Leadership (CAIO). $99/month. Live coaching included.',
  alternates: { canonical: '/certification' },
  openGraph: {
    title: 'Become a Certified CAIO - CAIO Coach',
    description:
      'Earn the credential that proves you can lead AI strategy at the executive level. Three certification tracks, live coaching included. $99/month.',
    type: 'website',
    url: '/certification',
  },
};

const CERTIFICATION_SERVICE_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Officer Certification Program',
  serviceType: 'Professional certification',
  provider: { '@id': 'https://www.caiocoach.com#organization' },
  description:
    'Three-track AI Officer certification program: Generative AI Specialist, Agentic AI Specialist, and CAIO Certified. Includes weekly live coaching.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Officer tracks',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Generative AI Specialist',
      },
      {
        '@type': 'OfferCatalog',
        name: 'Agentic AI Specialist',
      },
      {
        '@type': 'OfferCatalog',
        name: 'CAIO Certified (AI Leadership)',
      },
    ],
  },
  offers: {
    '@type': 'Offer',
    price: '99',
    priceCurrency: 'USD',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '99',
      priceCurrency: 'USD',
      unitText: 'MONTH',
    },
    url: 'https://community.ai-officer.com/checkout/ai-officer-certification-program?affiliate_code=ab0cd6',
  },
};

const ENROLL_URL =
  'https://community.ai-officer.com/checkout/ai-officer-certification-program?affiliate_code=ab0cd6';

const TRACKS = [
  {
    num: '01',
    name: 'Generative AI',
    desc: 'Master prompt engineering, AI workflows, and the tools reshaping how work gets done. Build fluency with the systems your team is already using.',
    pill: 'Generative AI Specialist',
  },
  {
    num: '02',
    name: 'Agentic AI',
    desc: 'Move beyond prompting into building and deploying AI agents. Learn to design multi-step workflows that operate autonomously on your behalf.',
    pill: 'Agentic AI Specialist',
  },
  {
    num: '03',
    name: 'AI Leadership',
    desc: 'The CAIO track. Org design, change management, AI strategy, and board-level communication. For executives leading the AI transformation.',
    pill: 'CAIO Certified',
  },
];

const EARN = [
  {
    title: 'Recognised credentials',
    desc: 'Earn your AI Officer certification on completion of each track - Generative AI Specialist, Agentic AI Specialist, and CAIO Certified. Shareable on LinkedIn and verifiable.',
  },
  {
    title: 'Global cohort',
    desc: 'Learn alongside professionals from across Asia, Southeast Asia, North America, and beyond. The AI Officer Institute community spans 30+ countries.',
  },
  {
    title: 'Live coaching included',
    desc: 'Your $99/month subscription includes weekly live coaching sessions with Dave Hajdu. Submit your real AI challenges and get coached in real time.',
  },
  {
    title: 'Practical, not theoretical',
    desc: "Every mission ends with a real-world challenge. You don't earn your certification by reading - you earn it by doing. The work is the learning.",
  },
];

export default function CertificationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CERTIFICATION_SERVICE_JSONLD) }}
      />

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
              <span className="dot" />3 certification tracks
            </span>
            <span className="tag tag-muted">$99 / month</span>
          </div>
          <h1 className="t-display" style={{ fontSize: 'clamp(48px, 10vw, 120px)', margin: 0 }}>
            Be a certified
            <br />
            AI officer.
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
            Move from AI awareness to AI authority. Three tracks, real-world challenges, and a
            recognised credential that proves you can lead AI.
          </p>
          <div className="mt-10 flex gap-3 flex-wrap">
            <a
              className="btn btn-primary"
              href={ENROLL_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Enroll now →
            </a>
            <Link className="btn btn-ghost" href="/coaching">
              See the coaching
            </Link>
          </div>
        </div>
      </section>

      {/* TRACKS */}
      <section className="sec">
        <div className="page-container">
          <div className="sec-head">
            <div className="idx">01 / Tracks</div>
            <div>
              <h2 className="t-h1">Three tracks. One credential each.</h2>
              <p className="sub">
                Stack them in order or jump straight to the track that matches your role.
              </p>
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ border: '1px solid var(--fg-border)' }}
          >
            {TRACKS.map((t, i) => (
              <div
                key={t.num}
                style={{
                  padding: 40,
                  borderRight:
                    i < TRACKS.length - 1 ? '1px solid var(--fg-border)' : 'none',
                }}
                className={
                  i < TRACKS.length - 1
                    ? 'border-b md:border-b-0 border-[var(--fg-border)]'
                    : ''
                }
              >
                <div
                  className="font-mono"
                  style={{
                    fontSize: 11,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--fg-50)',
                    marginBottom: 24,
                  }}
                >
                  Track {t.num}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 400,
                    fontSize: 28,
                    letterSpacing: '-0.01em',
                    color: 'var(--fg)',
                    margin: '0 0 16px',
                    lineHeight: 1.15,
                  }}
                >
                  {t.name}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: 'var(--fg-70)',
                    margin: '0 0 20px',
                  }}
                >
                  {t.desc}
                </p>
                <span className="tag tag-muted">{t.pill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COHORT PHOTO */}
      <section className="sec">
        <div className="page-container">
          <div className="sec-head">
            <div className="idx">02 / Community</div>
            <div>
              <h2 className="t-h1">Executives and operators, 30+ countries.</h2>
              <p className="sub">Earning their certification together.</p>
            </div>
          </div>
          <div
            className="relative w-full"
            style={{
              height: 380,
              border: '1px solid var(--fg-border)',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/images/cert-cohort.webp"
              alt="AI Officer certification cohort group photo"
              fill
              style={{ objectFit: 'cover', filter: 'grayscale(40%) contrast(1.05)' }}
            />
          </div>
        </div>
      </section>

      {/* WHAT YOU EARN */}
      <section className="sec">
        <div className="page-container">
          <div className="sec-head">
            <div className="idx">03 / What you earn</div>
            <div>
              <h2 className="t-h1">A credential that actually means something.</h2>
              <p className="sub">
                Practical, verifiable, and backed by a global community of working executives.
              </p>
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ border: '1px solid var(--fg-border)' }}
          >
            {EARN.map((card, i) => (
              <div
                key={card.title}
                style={{
                  padding: 40,
                  borderRight: i % 2 === 0 ? '1px solid var(--fg-border)' : 'none',
                  borderBottom:
                    i < EARN.length - 2 ? '1px solid var(--fg-border)' : 'none',
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
                  {String(i + 1).padStart(2, '0')} / {String(EARN.length).padStart(2, '0')}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 500,
                    fontSize: 20,
                    color: 'var(--fg)',
                    margin: '0 0 12px',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.65,
                    color: 'var(--fg-70)',
                    margin: 0,
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec">
        <div className="page-container">
          <div
            className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center"
            style={{
              border: '1px solid var(--fg-border)',
              background: 'var(--elev-1)',
              padding: 48,
            }}
          >
            <div>
              <div className="t-eyebrow">Enroll now</div>
              <h2 className="t-h1" style={{ marginTop: 12 }}>
                AI Officer Certification Program.
              </h2>
              <p
                style={{
                  maxWidth: 560,
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: 'var(--fg-70)',
                  margin: '16px 0 0',
                }}
              >
                Join the AI Officer Institute community. Access all three certification
                tracks, weekly live coaching sessions, and a global network of AI leaders.
                The{' '}
                <Link
                  href="/blog/four-offices-of-the-future"
                  style={{ color: 'var(--fg)', borderBottom: '1px solid var(--fg-30)' }}
                >
                  Four Offices of the Future
                </Link>{' '}
                framework is the foundation of the AI Leadership track.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div
                className="font-mono"
                style={{
                  fontSize: 56,
                  fontWeight: 300,
                  color: 'var(--fg)',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                $99
              </div>
              <div
                className="font-mono"
                style={{
                  fontSize: 11,
                  color: 'var(--fg-50)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  margin: '8px 0 20px',
                }}
              >
                / month
              </div>
              <a
                href={ENROLL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Enroll →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
