import type { Metadata } from 'next';
import PricingCalculator from './PricingCalculator';

export const metadata: Metadata = {
  title: 'Retreat Price Model - CAIO Coach',
  description:
    'Infinite Leverage Retreat cost comparison and P&L calculator. Saigon vs. Nha Trang. All fields are editable.',
};

export default function RetreatPricingPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          padding: '140px 0 56px',
          borderBottom: '1px solid var(--fg-border)',
        }}
      >
        <div className="page-container">
          <div className="t-eyebrow" style={{ marginBottom: 16 }}>
            Internal · Price model
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              fontSize: 'clamp(32px, 5vw, 48px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--fg)',
              margin: 0,
            }}
          >
            Retreat price model.
          </h1>
          <p
            style={{
              fontSize: 16,
              color: 'var(--fg-70)',
              margin: '16px 0 0',
              maxWidth: 640,
              lineHeight: 1.55,
            }}
          >
            Infinite Leverage Retreat - Saigon vs. Nha Trang cost comparison. All fields
            are editable.
          </p>
        </div>
      </section>

      <div className="page-container" style={{ padding: '48px 24px 96px' }}>
        <PricingCalculator />
      </div>
    </>
  );
}
